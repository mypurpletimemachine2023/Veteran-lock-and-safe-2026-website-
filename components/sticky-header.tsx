'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="#"
          className="font-[var(--font-bebas)] text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider md:tracking-widest text-foreground hover:text-accent transition-colors font-black leading-none flex-shrink-0"
          style={{ textShadow: '0 0 1px currentColor' }}
        >
          VETERAN LOCK & SAFE INC.
        </Link>

        {/* Mobile 24/7 - Red */}
        <div className="md:hidden">
          <p className="font-mono text-xs text-accent font-semibold">24/7</p>
        </div>

        {/* Center Info */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-center">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              24/7 Emergency
            </p>
            <p className="font-mono text-xs text-foreground font-semibold">407-860-9524</p>
          </div>
          <div className="w-px h-8 bg-border/30" />
          <div className="text-center">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              Mon-Sun
            </p>
            <p className="font-mono text-xs text-foreground">24/7</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="tel:4078609524"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-accent text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <a
            href="#quote"
            className="px-4 py-2 border border-accent text-accent font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent hover:text-background transition-colors"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  )
}
