'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="tel:4078609524"
      className="fixed bottom-8 right-8 z-40 flex items-center gap-2 px-4 py-2 bg-accent text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded animate-pulse hover:animate-none"
      aria-label="Call now"
    >
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="hidden sm:inline">Call Now</span>
    </a>
  )
}
