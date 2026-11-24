# Lead funnel implementation and integration handoff

## Source and preservation
Inspected November 24, 2026. Live www.veteranlockandsafe.com returns Next.js and Vercel headers. Its visible copy and quote form match this repository's main branch. The live page does not include the supply banner from PR #1. This is strong circumstantial evidence, not verified deployment provenance: no hosting account or deployment-to-commit mapping was available. Verify the Vercel project's repository, production branch, current deployment commit, and custom domains before integration.

This branch starts at PR #1 head cbd81222c54c568aecc172147b0d9cdc4881f072, preserving mobile, scrolling, image and rendering changes. Do not merge either PR automatically. Review this branch against main to include those improvements together.

## What works
Both homepage forms POST to /api/quote. Server bounds body bytes, validates fields, checks the exact configured origin, rejects honeypots, and verifies Turnstile success, action and hostname before requesting an email. A single-use Turnstile token is required for every attempt. Email is plain text with a fixed subject category and server-configured recipient. No customer information enters console output or analytics. Only provider acceptance shows confirmation; inbox delivery and booking are not promised. Failed submissions retain input and provide the existing business phone fallback.

The endpoint is not a CRM or durable lead queue. A provider timeout can leave delivery uncertain; the UI asks the visitor to call before retrying. Do not automatically retry sends. Add signed delivery/bounce webhooks and an owner workflow if durable delivery reporting is needed. Add host-level request rate limits before launch; Turnstile plus a honeypot is the implemented bot protection, not distributed rate limiting.

## Required activation
Copy .env.example to the host secret settings. Confirm the destination inbox; Admin@veteranlockandsafe.com appears in existing source but has not been confirmed by the owner. Choose and verify a sender domain in Resend, configure its SPF/DKIM records, and set a restricted sending API key. Set QUOTE_FROM and QUOTE_TO; neither is taken from a visitor. QUOTE_ORIGIN must be the exact browser-facing canonical origin. Redirect alternate domains to it. Set Turnstile hostname to that origin's hostname; configure a matching widget and public site key. NEXT_PUBLIC settings require a rebuild.

Do not enable live sending for automated QA. Unit tests inject a mocked fetch and use synthetic data; they never contact providers. For browser staging use Cloudflare's documented test keys and a mocked email adapter, with separate staging configuration. Never enable a general public mock-success switch in production.

Review the site's privacy notice for actual provider processing and retention before collecting leads. Add host-side request rate limits and monitor email provider bounces. Owner must review business hours, response expectations, credentials, service area, testimonials, team roster and claims before release. Existing homepage copy still contains unverified 24/7, 15–30 minute response, licensed/insured, thousands served and Hayman authorization claims. No new pages repeat those claims; this patch does not certify existing content.

## Service and ecosystem pages
/services/commercial-locksmith, /services/safe-locksmith and /services/access-control use shared content records and quote form, with self canonicals and related links. Service scope and availability remain subject to confirmation. Access control copy does not assign AIS responsibilities until confirmed. Keep any added town pages substantive; do not mass-produce doorway pages.

ALEX_BOOK_URL and LOCKSMITH_SURVIVAL_URL are optional server settings. Both domains were inaccessible to the research fetcher; confirm their live destinations and book availability before setting them. Banners stay hidden when unset, appear after service contact content, and do not replace booking CTAs. Existing supply banner component is reused with the two requested ecosystem entries.

## Conversion tracking
Vercel Analytics receives quote_submitted only after successful provider acceptance and phone_click for phone links in the quote forms. Properties include service category or placement only. These are inquiries/clicks, not confirmed revenue or completed calls. Existing other phone links remain unchanged. Validate events in staging without real customer data and connect them to actual booked/paid jobs operationally.

## Checks
Run:
```
node_modules/.bin/tsc --noEmit
node_modules/.bin/tsc lib/quote.ts --outDir .test-output --module commonjs --target es2022 --esModuleInterop --skipLibCheck
node --test tests/quote.cjs
node_modules/.bin/next build
```
The dependency installer initially reported an ignored sharp lifecycle script. Dependencies were installed; direct Next build avoids the environment's pnpm wrapper reinstall. Do not treat the existing ignoreBuildErrors setting as validation: run TypeScript independently.

## Focused Codex integration prompt
Verify the production Vercel project maps to this repository and inspect its exact deployed commit. Review codex/lead-funnel with PR #1 changes preserved; do not merge or deploy without authorization. Confirm inbox, canonical origin, sender-domain DNS verification, Turnstile hostname and keys through host secret settings (never commit secrets). Verify operating hours, location coverage, credentials, testimonials, staff, Hayman claims, and AIS scope with Alex; correct unverified homepage claims. Confirm the book and game URLs before enabling banners. Add edge request rate limits, privacy notice, and bounce monitoring. Run mock-only server tests, TypeScript and a production build; exercise both forms on mobile and desktop including expired challenge, provider failure and confirmation. Use no real customer details or live email sends during QA. Report remaining configuration, exact production mapping, test evidence and a reviewable diff; do not merge, publish or send live messages.

Validation result: six mocked server tests passed; standalone TypeScript passed; Next production build passed with NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 to use this environment’s system CA certificates for existing Google font downloads. Browser QA and live email delivery were not run. Existing commercial-locksmith and safe-locksmith URLs are reused by the shared template; access-control is added to the sitemap. No production deployment was performed.
