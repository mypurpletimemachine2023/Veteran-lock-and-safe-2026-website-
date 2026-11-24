"use client"

import { QuoteForm } from "@/components/quote-form"
import Image from "next/image"
import { Phone } from "lucide-react"

export function FooterContact() {
  const seoKeywords = [
    "Locksmith near me",
    "24/7 Emergency locksmith Orlando",
    "House lockout service",
    "Car lockout service",
    "Residential locksmith",
    "Commercial locksmith",
    "Key duplication Orlando",
    "Lock rekeying",
    "Gun safe installation",
    "Safe moving service",
    "Smart lock installation",
    "Door lock repair",
  ]

  return (
    <footer className="relative py-20 px-6 md:px-28 border-t border-border/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left: Contact Info */}
        <div>
          <div className="mb-8">
            <h3 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight mb-4">
              VETERAN LOCK & SAFE INC.
            </h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
              Family-owned locksmith service serving Orlando, Tampa, and Daytona with 10+ years of expertise in residential, commercial, and emergency locksmith services.
            </p>
          </div>

          {/* Phone CTA */}
          <a
            href="tel:4078609524"
            className="inline-flex items-center gap-3 mb-8 group"
          >
            <div className="w-12 h-12 border border-accent flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-200">
              <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Call 24/7</p>
              <p className="font-mono text-lg text-accent">407-860-9524</p>
            </div>
          </a>

          {/* Email */}
          <div className="group cursor-pointer relative">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Email
            </p>
            <div className="inline-block relative">
              <p className="font-mono text-sm text-foreground group-hover:text-accent transition-colors duration-200">
                Admin@veteranlockandsafe.com
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <QuoteForm id="footer-quote" />
        </div>
      </div>

      {/* SEO Keywords Section */}
      <div className="mb-16 py-12 border-t border-border/20">
        <h4 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-6">LOCKSMITH SERVICES</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {seoKeywords.map((keyword, index) => (
            <div
              key={index}
              className="border border-border/20 px-3 py-2 font-mono text-xs text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200"
            >
              {keyword}
            </div>
          ))}
        </div>
      </div>

      {/* Veteran Lock Logo Section */}
      <div className="py-12 border-t border-border/20 flex items-center justify-center mb-12">
        <Image
          src="/images/veteran-lock-logo.png"
          alt="Veteran Lock & Safe"
          width={300}
          height={120}
          className="h-24 w-auto object-contain"
        />
      </div>

      {/* Bottom footer with flags */}
      <div className="pt-8 border-t border-border/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
          <div>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              © {new Date().getFullYear()} Veteran Lock & Safe Inc. All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-muted-foreground mt-2">
              Licensed • Insured • Family Owned • 24/7 Available
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* American Flag */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 7410 3900" className="w-16 h-auto" xmlns="http://www.w3.org/2000/svg">
                <rect width="7410" height="3900" fill="#B22234"/>
                <path d="M0,296 H7410 M0,592 H7410 M0,888 H7410 M0,1184 H7410 M0,1480 H7410 M0,1776 H7410 M0,2072 H7410 M0,2368 H7410 M0,2664 H7410 M0,2960 H7410 M0,3256 H7410 M0,3552 H7410 M0,3748 H7410" stroke="white" strokeWidth="296"/>
                <rect width="2964" height="2128" fill="#3C3B6B"/>
              </svg>
              <p className="font-mono text-[9px] text-muted-foreground mt-2 uppercase tracking-widest">USA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
