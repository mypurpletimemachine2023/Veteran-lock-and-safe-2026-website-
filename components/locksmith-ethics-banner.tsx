'use client'

import Image from 'next/image'

export function LocksmithEthicsBanner() {
  return (
    <section className="relative py-8 px-6 md:px-12 bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Locksmith Ethics Section */}
        <div className="text-center">
          <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight text-accent mb-3">
            LOCKSMITH ETHICS
          </h3>
          <p className="font-mono text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer <span className="font-semibold text-foreground">flat-fee pricing</span> and will always attempt to <span className="font-semibold text-foreground">PICK the locks first</span> before considering destructive methods. Your security and your property integrity are our priorities.
          </p>
        </div>
      </div>
    </section>
  )
}
