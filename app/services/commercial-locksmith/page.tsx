import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, Shield, CheckCircle, Building2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Locksmith Orlando | Business Security Solutions | Veteran Lock & Safe",
  description: "Commercial locksmith services in Orlando. Access control, master key systems, high-security locks, panic bars, and business lockouts. Licensed and insured. Call 407-860-9524.",
  keywords: "commercial locksmith Orlando, business locksmith, access control Orlando, master key system, high security locks, panic bar installation",
}

export default function CommercialLocksmithPage() {
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
            <li className="text-foreground">Commercial Locksmith</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Commercial Service</span>
          </div>
          <h1 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight mb-6">
            COMMERCIAL LOCKSMITH
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Protect your business with professional commercial locksmith services. From access control systems to master key solutions, we secure Orlando businesses of all sizes.
          </p>
        </div>

        {/* CTA Box */}
        <div className="bg-accent/10 border border-accent/30 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-[var(--font-bebas)] text-2xl tracking-wide mb-1">SECURE YOUR BUSINESS</p>
              <p className="font-mono text-sm text-muted-foreground">Free security consultations available</p>
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
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">MINIMAL DOWNTIME</h3>
              <p className="text-sm text-muted-foreground">We work around your schedule to minimize business disruption.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-border/30">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-[var(--font-bebas)] text-xl mb-2">COMPREHENSIVE SOLUTIONS</h3>
              <p className="text-sm text-muted-foreground">From single office to multi-location security systems.</p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-tight mb-6">COMMERCIAL SERVICES</h2>
          <ul className="space-y-3">
            {[
              "Master key system design and implementation",
              "Access control system installation",
              "High-security lock installation",
              "Panic bar and exit device service",
              "Commercial door hardware",
              "Business lockout service",
              "Lock rekeying for employee turnover",
              "Security audits and consultations",
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
