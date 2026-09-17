const partners = [
  { label: "Buy Locks and Keys at", domain: "veteranlocksmithsupply.com" },
  { label: "", domain: "Alexthelocksmith.com" },
  { label: "Brought to you by", domain: "Orlandosecurity101.com" },
]

export function PartnerBanners() {
  return (
    <aside aria-label="Partner websites" className="flex flex-col gap-1 bg-background md:flex-row">
      {partners.map(({ label, domain }) => (
        <a
          key={domain}
          href={`https://${domain.toLowerCase()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 bg-banner px-4 py-5 text-center font-sans text-banner-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-banner-foreground"
        >
          {label && <span className="text-sm leading-relaxed">{label}</span>}
          <span className="break-all text-lg font-bold leading-snug underline decoration-banner-foreground/40 underline-offset-4 lg:text-xl">{domain}</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </aside>
  )
}
