'use client'

import { useRef, useEffect } from 'react'
import { SplitFlapText, SplitFlapAudioProvider } from '@/components/split-flap-text'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ServiceArea() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !mapRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(mapRef.current, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="service-area" className="relative min-h-screen flex items-center justify-center px-6 md:px-28 py-24">
      <div className="w-full max-w-6xl">
        {/* Section Title with Split Flap */}
        <div className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">05 / Coverage</span>
          <SplitFlapAudioProvider>
            <SplitFlapText 
              text="SERVICE AREA" 
              speed={40}
              sequenceWords={["ORLANDO", "TAMPA", "DAYTONA", "CENTRAL FLORIDA", "SERVICE AREA"]}
            />
          </SplitFlapAudioProvider>
        </div>

        {/* Central Florida Map */}
        <div ref={mapRef} className="w-full opacity-0 scale-95">
          <svg
            viewBox="0 0 400 500"
            className="w-full h-auto max-h-96"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Florida outline */}
            <path
              d="M 200 50 Q 220 80 230 120 L 235 200 Q 240 280 220 380 Q 200 420 180 450 Q 160 420 140 380 Q 120 280 125 200 L 130 120 Q 140 80 160 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted-foreground/30"
            />

            {/* Central Florida region highlight */}
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent opacity-30" strokeDasharray="5,5" />

            {/* Key cities */}
            {/* Orlando */}
            <circle cx="200" cy="180" r="6" fill="currentColor" className="text-accent" />
            <text x="200" y="165" textAnchor="middle" className="font-mono text-xs fill-foreground" fontSize="12">
              ORLANDO
            </text>

            {/* Tampa */}
            <circle cx="160" cy="220" r="5" fill="currentColor" className="text-accent/60" />
            <text x="160" y="245" textAnchor="middle" className="font-mono text-xs fill-muted-foreground" fontSize="11">
              Tampa
            </text>

            {/* Daytona */}
            <circle cx="240" cy="150" r="5" fill="currentColor" className="text-accent/60" />
            <text x="240" y="130" textAnchor="middle" className="font-mono text-xs fill-muted-foreground" fontSize="11">
              Daytona
            </text>

            {/* Service radius lines */}
            <line x1="200" y1="180" x2="160" y2="220" stroke="currentColor" strokeWidth="1" className="text-accent/20" strokeDasharray="3,3" />
            <line x1="200" y1="180" x2="240" y2="150" stroke="currentColor" strokeWidth="1" className="text-accent/20" strokeDasharray="3,3" />
          </svg>
        </div>

        {/* Service Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20">
          <div className="border border-border/20 p-6 hover:border-accent/40 transition-colors duration-300">
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Primary Coverage</h4>
            <p className="font-mono text-sm text-foreground/80">Orlando Metro Area</p>
            <p className="font-mono text-xs text-muted-foreground mt-2">30 min response time</p>
          </div>

          <div className="border border-border/20 p-6 hover:border-accent/40 transition-colors duration-300">
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Extended Service</h4>
            <p className="font-mono text-sm text-foreground/80">Tampa & Daytona</p>
            <p className="font-mono text-xs text-muted-foreground mt-2">60 min response time</p>
          </div>

          <div className="border border-border/20 p-6 hover:border-accent/40 transition-colors duration-300">
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">24/7 Emergency</h4>
            <p className="font-mono text-sm text-foreground/80">All Service Areas</p>
            <p className="font-mono text-xs text-muted-foreground mt-2">Call 407-860-9524</p>
          </div>
        </div>
      </div>
    </section>
  )
}
