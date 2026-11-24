const partners = [
  { label: 'Locksmith stories and education', name: 'Alex the Locksmith', url: process.env.ALEX_BOOK_URL },
  { label: 'Explore the locksmith game', name: 'Locksmith Survival', url: process.env.LOCKSMITH_SURVIVAL_URL },
]
export function PartnerBanners() {
  const enabled = partners.filter(partner => {
    try { return partner.url && new URL(partner.url).protocol === 'https:' } catch { return false }
  })
  if (!enabled.length) return null
  return <aside aria-label="More from Alex" className="border-t border-border px-6 py-12 pb-28 md:pb-12">
    <h2 className="text-xl mb-5">More from Alex</h2>
    <div className="grid md:grid-cols-2 gap-4">{enabled.map(partner => <a key={partner.name} href={partner.url} className="block border border-border p-5 hover:border-accent"><span className="block text-sm text-muted-foreground">{partner.label}</span><span className="text-lg underline">{partner.name}</span></a>)}</div>
  </aside>
}
