const { test } = require('node:test')
const assert = require('node:assert/strict')
const { handleQuote } = require('../.test-output/quote.js')
const env = { QUOTE_ORIGIN: 'https://example.com', QUOTE_FROM: 'quotes@example.com', QUOTE_TO: 'inbox@example.com', RESEND_API_KEY: 'mock', TURNSTILE_SECRET_KEY: 'mock', TURNSTILE_HOSTNAME: 'example.com' }
const data = { name: 'Test Person', phone: '202-555-0100', service: 'commercial', location: 'Test City', description: 'Synthetic inquiry', token: 'mock-token' }
const request = (body = data, origin = env.QUOTE_ORIGIN) => new Request('https://example.com/api/quote', { method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
const challenge = { success: true, hostname: 'example.com', action: 'quote' }
test('valid request checks challenge then sends plain text and confirms', async () => {
 const calls = []
 const response = await handleQuote(request(), env, async (url, options) => { calls.push([url, JSON.parse(options.body)]); return Response.json(calls.length === 1 ? challenge : { id: 'mock-receipt' }) })
 assert.equal(response.status, 200); assert.equal(calls.length, 2)
 assert.equal(calls[1][1].to[0], 'inbox@example.com'); assert.match(calls[1][1].text, /Synthetic inquiry/)
})
test('invalid and oversized input never contacts providers', async () => {
 const noFetch = () => { throw Error('unexpected network') }
 for (const body of [{ ...data, phone: 'bad' }, { ...data, service: 'unknown' }, { ...data, website: 'spam' }]) assert.equal((await handleQuote(request(body), env, noFetch)).status, 400)
 assert.equal((await handleQuote(request({ ...data, description: 'x'.repeat(17000) }), env, noFetch)).status, 413)
})
test('cross origin and missing configuration fail closed', async () => {
 assert.equal((await handleQuote(request(data, 'https://attacker.example'), env)).status, 403)
 assert.equal((await handleQuote(request(), { QUOTE_ORIGIN: env.QUOTE_ORIGIN })).status, 503)
})
test('forged challenge, wrong hostname and wrong action cannot send email', async () => {
 for (const result of [{ success: false }, { ...challenge, hostname: 'attacker.example' }, { ...challenge, action: 'other' }]) {
 let count = 0
 const response = await handleQuote(request(), env, async () => { count++; return Response.json(result) })
 assert.equal(response.status, 400); assert.equal(count, 1)
 }
})
test('email failure and timeout never show success', async () => {
 let count = 0
 assert.equal((await handleQuote(request(), env, async () => { count++; return count === 1 ? Response.json(challenge) : Response.json({}, { status: 500 }) })).status, 502)
 assert.equal((await handleQuote(request(), env, async () => { throw Error('timeout') })).status, 503)
})
test('malformed JSON is rejected', async () => {
 const req = new Request('https://example.com/api/quote', { method: 'POST', headers: { origin: env.QUOTE_ORIGIN, 'Content-Type': 'application/json' }, body: '{' })
 assert.equal((await handleQuote(req, env)).status, 400)
})
