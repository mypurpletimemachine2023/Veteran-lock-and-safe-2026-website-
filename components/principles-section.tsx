"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import { SplitFlapText } from "@/components/split-flap-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const principles = [
    {
      number: "01",
      titleParts: [
        { text: "FAMILY", highlight: true },
        { text: " OWNED", highlight: false },
      ],
      description: "Proudly family-owned and operated. We bring dedication and integrity to every job we do in the Orlando area, treating every customer like family.",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "HONEST", highlight: true },
        { text: " PRICING", highlight: false },
      ],
      description: "100% transparent flat-fee pricing with no hidden charges. We fight the nationwide locksmith scam so you never overpay.",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "LICENSED ", highlight: false },
        { text: "& INSURED", highlight: true },
      ],
      description: "Fully licensed and insured professionals. Every technician is background-checked, trained, and certified for your peace of mind.",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "24/7 ", highlight: false },
        { text: "EMERGENCY", highlight: true },
      ],
      description: "Day or night, weekends or holidays. Our rapid response team is always ready to get you back inside safely.",
      align: "right",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Each principle slides in from its aligned side
      const articles = principlesRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = principles[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Why Us</span>
        <div className="mt-4">
          <SplitFlapText text="WHY CHOOSE US" speed={40} />
        </div>
      </div>

      {/* Staggered principles */}
      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {principles.map((principle, index) => (
          <article
            key={index}
            className={`flex flex-col ${
              principle.align === "right" ? "items-end text-right" : "items-start text-left"
            }`}
          >
            {/* Annotation label */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {principle.number} / {principle.titleParts[0].text.split(" ")[0]}
            </span>

            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none">
              {principle.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>

            {/* Decorative line */}
            <div className={`mt-8 h-[1px] bg-border w-24 md:w-48 ${principle.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
