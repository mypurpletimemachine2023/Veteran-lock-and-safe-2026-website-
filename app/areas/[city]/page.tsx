import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

const cityData: Record<string, { name: string; zip: string; county: string; nearby: string[] }> = {
  orlando: { name: "Orlando", zip: "32801", county: "Orange County", nearby: ["Winter Park", "Kissimmee", "Oviedo"] },
  "winter-park": { name: "Winter Park", zip: "32789", county: "Orange County", nearby: ["Orlando", "Maitland", "Casselberry"] },
  kissimmee: { name: "Kissimmee", zip: "34741", county: "Osceola County", nearby: ["Orlando", "St. Cloud", "Celebration"] },
  "lake-mary": { name: "Lake Mary", zip: "32746", county: "Seminole County", nearby: ["Sanford", "Longwood", "Heathrow"] },
  sanford: { name: "Sanford", zip: "32771", county: "Seminole County", nearby: ["Lake Mary", "Deltona", "DeBary"] },
  oviedo: { name: "Oviedo", zip: "32765", county: "Seminole County", nearby: ["Winter Springs", "Orlando", "Chuluota"] },
  "altamonte-springs": { name: "Altamonte Springs", zip: "32701", county: "Seminole County", nearby: ["Longwood", "Maitland", "Casselberry"] },
  casselberry: { name: "Casselberry", zip: "32707", county: "Seminole County", nearby: ["Fern Park", "Winter Park", "Altamonte Springs"] },
  tampa: { name: "Tampa", zip: "33602", county: "Hillsborough County", nearby: ["St. Petersburg", "Brandon", "Clearwater"] },
  daytona: { name: "Daytona Beach", zip: "32114", county: "Volusia County", nearby: ["Port Orange", "Ormond Beach", "DeLand"] },
}

type Props = {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const data = cityData[city]
  if (!data) return { title: "Service Area Not Found" }

  return {
    title: `Locksmith ${data.name} FL | 24/7 Emergency Locksmith | Veteran Lock & Safe`,
    description: `Professional locksmith services in ${data.name}, Florida. House lockouts, car lockouts, commercial locks, and safe services. Licensed, insured, 24/7 emergency service. Call 407-860-9524.`,
    keywords: `locksmith ${data.name}, ${data.name} locksmith, emergency locksmith ${data.name}, car lockout ${data.name}, house lockout ${data.name}, 24 hour locksmith ${data.name} FL`,
  }
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }))
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const data = cityData[city]

  if (!data) {
    notFound()
  }

  return (
    <main className="relative min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li><Link href="/#areas" className="hover:text-accent">Service Areas</Link></li>
            <li>/</li>
            <li className="text-foreground">{data.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">{data.county}</span>
          </div>
          <h1 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight mb-6">
            LOCKSMITH {data.name.toUpperCase()} FL
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Veteran Lock & Safe provides professional locksmith services throughout {data.name} and {data.county}. 
            From emergency lockouts to security upgrades, we are your trusted local locksmith.
          </p>
        </div>

        {/* CTA Box */}
        <div className="bg-accent/10 border border-accent/30 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-[var(--font-bebas)] text-2xl tracking-wide mb-1">NEED A LOCKSMITH IN {data.name.toUpperCase()}?</p>
              <p className="font-mono text-sm text-muted-foreground">Fast response throughout {data.county}</p>
            </div>
            <a
              href="tel:407-860-9524"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-[var(--font-bebas)] text-xl tracking-wide hover:bg-accent/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              CALL 407-860-9524
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-4 p-4 border border-border/30">
            <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">24/7 SERVICE</h3>
              <p className="text-sm text-muted-foreground">Emergency locksmith available around the clock.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-border/30">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">LICENSED</h3>
              <p className="text-sm text-muted-foreground">Fully licensed Florida locksmith.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-border/30">
            <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">LOCAL</h3>
              <p className="text-sm text-muted-foreground">Fast response times in {data.name}.</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-6">SERVICES IN {data.name.toUpperCase()}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "House Lockout", href: "/services/house-lockout" },
              { name: "Car Lockout", href: "/services/car-lockout" },
              { name: "Commercial Locksmith", href: "/services/commercial-locksmith" },
              { name: "Safe & Vault Services", href: "/services/safe-locksmith" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex items-center gap-3 p-4 border border-border/30 hover:border-accent/50 hover:bg-accent/5 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{service.name}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </Link>
            ))}
          </div>
        </div>

        {/* Nearby Areas */}
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-6">NEARBY SERVICE AREAS</h2>
          <div className="flex flex-wrap gap-2">
            {data.nearby.map((nearby) => (
              <Link
                key={nearby}
                href={`/areas/${nearby.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-secondary text-secondary-foreground font-mono text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {nearby}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
