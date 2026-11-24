'use client'
import { useId, useRef, useState } from 'react'
import Script from 'next/script'
import { track } from '@vercel/analytics'
import { services } from '@/lib/quote'

type Turnstile = { render: (element: HTMLElement, options: Record<string, unknown>) => string; reset: (id: string) => void; remove: (id: string) => void }
declare global { interface Window { turnstile?: Turnstile } }
export function QuoteForm({ id = 'quote', initialService = '' }: { id?: string; initialService?: string }) {
  const prefix = useId()
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState('')
  const token = useRef('')
  const container = useRef<HTMLDivElement>(null)
  const widget = useRef<string | undefined>(undefined)
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
  function mount() {
    if (container.current && window.turnstile && widget.current === undefined && sitekey) {
      widget.current = window.turnstile.render(container.current, { sitekey, action: 'quote', callback: (v: string) => { token.current = v }, 'expired-callback': () => { token.current = '' }, 'error-callback': () => { token.current = ''; setMessage('Security check failed. Please reload or call.') } })
    }
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy || sent) return
    if (!token.current) { setMessage('Please complete the security check. If it does not load, call 407-860-9524.'); return }
    const form = e.currentTarget
    setBusy(true); setMessage('')
    const data = Object.fromEntries(new FormData(form))
    try {
      const response = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, token: token.current }), signal: AbortSignal.timeout(25000) })
      const result = await response.json()
      setMessage(result.message || 'Please call 407-860-9524 for help.')
      if (response.ok) { setSent(true); form.reset(); try { track('quote_submitted', { service: String(data.service) }) } catch {} }
    } catch { setMessage('We could not confirm submission. Please call 407-860-9524 before retrying.') }
    finally { setBusy(false); token.current = ''; if (widget.current !== undefined) window.turnstile?.reset(widget.current) }
  }
  const field = 'w-full bg-background border border-border px-4 py-3 text-base focus:outline-2 focus:outline-accent'
  return <section id={id} className="py-16 px-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Request a locksmith estimate</h2>
    <p className="mb-6 text-muted-foreground">Tell us what you need. We’ll confirm availability and pricing with you. For urgent help, <a className="underline" href="tel:4078609524" onClick={() => { try { track('phone_click', { placement: id }) } catch {} }}>call 407-860-9524</a>.</p>
    <form onSubmit={submit} aria-busy={busy} className="grid md:grid-cols-2 gap-5">
      <fieldset disabled={busy || sent} className="contents">
        {([{ name: 'name', label: 'Your name', autoComplete: 'name', maxLength: 100 }, { name: 'phone', label: 'Phone number', autoComplete: 'tel', maxLength: 30 }, { name: 'location', label: 'Service city or ZIP code', autoComplete: 'address-level2', maxLength: 150 }] as const).map(f => <div key={f.name}><label htmlFor={`${prefix}-${f.name}`} className="block mb-2">{f.label} *</label><input {...f} id={`${prefix}-${f.name}`} type={f.name === 'phone' ? 'tel' : 'text'} required className={field} /></div>)}
        <div><label htmlFor={`${prefix}-service`} className="block mb-2">Service *</label><select id={`${prefix}-service`} name="service" required defaultValue={initialService} className={field}><option value="">Choose a service</option>{services.map(s => <option key={s} value={s}>{s.replaceAll('-', ' ')}</option>)}</select></div>
        <div className="md:col-span-2"><label htmlFor={`${prefix}-description`} className="block mb-2">What do you need help with?</label><textarea id={`${prefix}-description`} name="description" maxLength={2000} rows={4} className={field} /><p className="text-sm mt-2">Please leave out lock combinations, access codes and payment details.</p></div>
        <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <div className="md:col-span-2"><div ref={container} />{!sitekey && <p>Online requests are unavailable until security setup is complete. Please call.</p>}</div>
        <p className="md:col-span-2 text-sm">By submitting, you ask Veteran Lock &amp; Safe to contact you about this request. Your details are processed by our security and email providers. No marketing signup.</p>
        <button disabled={!sitekey} className="md:col-span-2 bg-accent text-background font-bold p-4 disabled:opacity-50">{busy ? 'Submitting…' : sent ? 'Request submitted' : 'Request estimate'}</button>
      </fieldset>
      <p role={sent ? 'status' : 'alert'} aria-live="polite" className="md:col-span-2">{message}</p>
    </form>
    {sitekey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={mount} />}
  </section>
}
