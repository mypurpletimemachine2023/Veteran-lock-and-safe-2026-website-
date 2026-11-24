import { z } from 'zod'

export const services = ['house-lockout', 'car-lockout', 'commercial', 'residential', 'safe-install', 'key-duplication', 'access-control', 'other'] as const
export const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(30).refine(v => /^\+?[\d\s().-]+$/.test(v) && v.replace(/\D/g, '').length >= 10 && v.replace(/\D/g, '').length <= 15),
  service: z.enum(services),
  description: z.string().trim().max(2000).default(''),
  location: z.string().trim().min(2).max(150),
  website: z.string().max(200).default(''),
  token: z.string().max(2048).default(''),
})

export async function handleQuote(request: Request, env: Record<string, string | undefined>, fetcher: typeof fetch = fetch) {
  const reply = (status: number, message: string, extra = {}) => Response.json({ message, ...extra }, { status, headers: { 'Cache-Control': 'no-store' } })
  try {
    const origin = request.headers.get('origin')
    const allowed = env.QUOTE_ORIGIN
    if (!allowed || origin !== new URL(allowed).origin) return reply(403, 'Please submit using our website.')
    if (!request.headers.get('content-type')?.includes('application/json')) return reply(415, 'Unsupported request.')
    // Bound the actual body even when content-length is absent or incorrect.
    const reader = request.body?.getReader()
    if (!reader) return reply(400, 'Please complete the required fields.')
    const chunks: Uint8Array[] = []; let size = 0
    while (true) {
      const { value, done } = await reader.read(); if (done) break
      size += value.byteLength
      if (size > 16384) { await reader.cancel(); return reply(413, 'Please shorten your request.') }
      chunks.push(value)
    }
    const bytes = new Uint8Array(size); let offset = 0
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length }
    let input: unknown
    try { input = JSON.parse(new TextDecoder().decode(bytes)) } catch { return reply(400, 'Invalid request.') }
    const result = quoteSchema.safeParse(input)
    if (!result.success) return reply(400, 'Please check your name, phone, location and service. Keep details under 2,000 characters.')
    const lead = result.data
    if (lead.website) return reply(400, 'Unable to accept this request.')
    if (!env.TURNSTILE_SECRET_KEY || !env.RESEND_API_KEY || !env.QUOTE_FROM || !env.QUOTE_TO || !env.TURNSTILE_HOSTNAME) return reply(503, 'Online requests are temporarily unavailable. Please call 407-860-9524.')
    const verification = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: lead.token }), signal: AbortSignal.timeout(10000),
    })
    if (!verification.ok) return reply(503, 'Security check unavailable. Please try again or call.')
    const challenge = await verification.json()
    if (!challenge.success || challenge.hostname !== env.TURNSTILE_HOSTNAME || challenge.action !== 'quote') return reply(400, 'Please complete a fresh security check and try again.')
    const delivery = await fetcher('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: env.QUOTE_FROM, to: [env.QUOTE_TO], subject: `Website quote: ${lead.service}`,
        text: `Name: ${lead.name}\nPhone: ${lead.phone}\nLocation: ${lead.location}\nService: ${lead.service}\n\n${lead.description}\n\nWebsite inquiry only; no booking or price confirmed.` }), signal: AbortSignal.timeout(10000),
    })
    if (!delivery.ok) return reply(502, 'We could not confirm submission. Please call 407-860-9524 before retrying.')
    const receipt = await delivery.json()
    if (!receipt.id) return reply(502, 'We could not confirm submission. Please call 407-860-9524.')
    return reply(200, 'Request submitted. We will contact you to discuss availability and pricing. This is not a confirmed appointment.')
  } catch {
    // Never log customer data, provider responses, or credentials.
    return reply(503, 'We could not confirm submission. Please call 407-860-9524 before retrying.')
  }
}
