import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, Shield, CheckCircle, Home, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "House Lockout Service Orlando | 24/7 Emergency Home Locksmith | Veteran Lock & Safe",
  description: "Locked out of your house in Orlando? Veteran Lock & Safe provides fast 24/7 house lockout services. Licensed, insured, flat-fee pricing. We pick locks first - no damage. Call 407-860-9524.",
  keywords: "house lockout Orlando, home lockout service, residential locksmith Orlando, locked out of house, emergency home locksmith, 24/7 house lockout",
}

export default function HouseLockoutPage() {
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
            <li className="text-foreground">House Lockout</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-8 h-8 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Residential Service</span>
          </div>
          <h1 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight mb-6">
            HOUSE LOCKOUT SERVICE
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Locked out of your home in Orlando? Our licensed technicians arrive fast with the tools to get you back inside safely. We always attempt to pick the lock first - protecting your door and your wallet.
          </p>
        </div>

        {/* CTA Box */}
        <div className="bg-accent/10 border border-accent/30 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-[var(--font-bebas)] text-2xl tracking-wide mb-1">NEED HELP NOW?</p>
              <p className="font-mono text-sm text-muted-foreground">24/7 Emergency Response Available</p>
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
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">FAST RESPONSE TIME</h3>
              <p className="text-sm text-muted-foreground">Average arrival time of 20-30 minutes throughout Orlando and surrounding areas.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-border/30">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">LICENSED & INSURED</h3>
              <p className="text-sm text-muted-foreground">Fully licensed Florida locksmith with comprehensive insurance coverage.</p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-6">WHAT WE DO</h2>
          <ul className="space-y-3">
            {[
              "Non-destructive lock picking (we try this first!)",
              "Emergency home entry for all lock types",
              "Deadbolt and knob lock bypass",
              "Lock repair after entry if needed",
              "New lock installation available",
              "Rekey services to enhance security",
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
          <p className="text-muted-foreground mb-4">We provide house lockout services throughout Central Florida including:</p>
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

        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
