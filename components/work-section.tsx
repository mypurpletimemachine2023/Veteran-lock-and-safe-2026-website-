"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { SplitFlapText } from "@/components/split-flap-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiments = [
  {
    title: "Safe Moving & Install",
    medium: "Safe Services",
    description: "Gun safe delivery, new digital keypad lock upgrades, and professional bolt-down installation for homes and businesses across Orlando, Tampa, and Daytona.",
    span: "col-span-2 row-span-2",
    keywords: ["Gun safe installation", "Safe delivery Orlando", "Safe moving service", "Digital safe keypad", "Hayman safes"],
  },
  {
    title: "Emergency Lockout",
    medium: "24/7 Response",
    description: "Fast, reliable lockout service for homes, vehicles, and commercial properties any time of day or night.",
    span: "col-span-1 row-span-1",
    keywords: ["House lockout service", "Car lockout Orlando", "Emergency locksmith 24/7", "Lockout service near me"],
  },
  {
    title: "Commercial Locksmith",
    medium: "Business Security",
    description: "Door closers, lever handles, access control systems, master key systems, and complete commercial security solutions.",
    span: "col-span-1 row-span-2",
    keywords: ["Commercial locksmith Orlando", "Master key system", "Access control system", "Business security locks"],
  },
  {
    title: "Residential Locksmith",
    medium: "Home Security",
    description: "Deadbolts, smart lock upgrades, rekeying, and full home security installations.",
    span: "col-span-1 row-span-1",
    keywords: ["Residential locksmith Orlando", "House locksmith", "Smart lock installation", "Lock rekeying service"],
  },
  {
    title: "Hayman Safes",
    medium: "Authorized Provider",
    description: "Authorized Hayman Safes provider specializing in high-end gun safes and commercial security containers with direct delivery.",
    span: "col-span-2 row-span-1",
    keywords: ["Hayman safes Orlando", "High-security gun safe", "Safe sales and installation", "Commercial safes"],
  },
  {
    title: "Key Duplication",
    medium: "Quick Service",
    description: "Precision key cutting and duplication for residential, commercial, and high-security locks.",
    span: "col-span-1 row-span-1",
    keywords: ["Key duplication Orlando", "Key cutting service", "High-security key copy", "Precision key making"],
  },
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Projects</span>
          <div className="mt-4">
            <SplitFlapText text="OUR SERVICES" speed={40} />
          </div>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Professional locksmith services built to last. Designed to protect what matters most.
        </p>
      </div>

      {/* Asymmetric grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {experiments.map((experiment, index) => (
          <WorkCard key={index} experiment={experiment} index={index} persistHover={index === 0} />
        ))}
      </div>
    </section>
  )
}

function WorkCard({
  experiment,
  index,
  persistHover = false,
}: {
  experiment: {
    title: string
    medium: string
    description: string
    span: string
    keywords?: string[]
  }
  index: number
  persistHover?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)

  useEffect(() => {
    if (!persistHover || !cardRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)

    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
        experiment.span,
        isActive && "border-accent/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {experiment.medium}
        </span>
        <h3
          className={cn(
            "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300",
            isActive ? "text-accent" : "text-foreground",
          )}
        >
          {experiment.title}
        </h3>
      </div>

      {/* Description/Keywords - reveals on hover */}
      <div className="relative z-10">
        {isActive && experiment.keywords && experiment.keywords.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {experiment.keywords.map((keyword, i) => (
              <span
                key={i}
                className="inline-block border border-accent/40 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-accent/80"
              >
                {keyword}
              </span>
            ))}
          </div>
        ) : (
          <p
            className={cn(
              "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
            )}
          >
            {experiment.description}
          </p>
        )}
      </div>

      {/* Index marker */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
          isActive ? "text-accent" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}
