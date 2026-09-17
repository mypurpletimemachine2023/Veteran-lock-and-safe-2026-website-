import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, Shield, CheckCircle, Lock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Safe Locksmith Orlando | Gun Safe & Vault Services | Veteran Lock & Safe",
  description: "Safe locksmith services in Orlando. Gun safe installation, safe opening, vault repair, and combination changes. Protect your valuables. Call 407-860-9524.",
  keywords: "safe locksmith Orlando, gun safe installation, safe opening service, vault locksmith, combination change, safe repair Orlando",
}

export default function SafeLocksmithPage() {
  return (
    <main className="relative min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li><Link href="/#services" className="hover:text-accent">Services</Link></li>
            <li>/</li>
            <li className="text-foreground">Safe Locksmith</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-8 h-8 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Safe & Vault Service</span>
          </div>
          <h1 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight mb-6">
            SAFE & VAULT SERVICES
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            From gun safes to commercial vaults, we provide expert safe services. Installation, opening, repair, and combination changes - protecting what matters most to you.
          </p>
        </div>

        {/* CTA Box */}
        <div className="bg-accent/10 border border-accent/30 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-[var(--font-bebas)] text-2xl tracking-wide mb-1">PROTECT YOUR VALUABLES</p>
              <p className="font-mono text-sm text-muted-foreground">Expert safe services you can trust</p>
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
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="flex items-start gap-4 p-4 border border-border/30">
            <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">EXPERT TECHNICIANS</h3>
              <p className="text-sm text-muted-foreground">Specialized training in safe mechanisms and vault systems.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-border/30">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">ALL SAFE TYPES</h3>
              <p className="text-sm text-muted-foreground">Gun safes, floor safes, wall safes, and commercial vaults.</p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-6">SAFE SERVICES</h2>
          <ul className="space-y-3">
            {[
              "Gun safe installation and anchoring",
              "Safe opening (forgotten combinations)",
              "Combination changes and resets",
              "Electronic lock upgrades",
              "Safe repair and maintenance",
              "Vault door service",
              "Fire safe installation",
              "Deposit box services",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-6">SERVICE AREAS</h2>
          <div className="flex flex-wrap gap-2">
            {["Orlando", "Winter Park", "Kissimmee", "Lake Mary", "Sanford", "Oviedo", "Altamonte Springs", "Casselberry"].map((city) => (
              <Link
                key={city}
                href={`/areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-secondary text-secondary-foreground font-mono text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {city}
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
