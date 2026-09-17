"use client"

import { useState } from "react"
import { Wrench, Zap, AlertCircle } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  expertise: string
  icon: React.ReactNode
  description: string
  availability: string
}

const teamMembers: TeamMember[] = [
  {
    id: "alejandro",
    name: "Alejandro",
    role: "Founder / Lead Tech",
    expertise: "Master Locksmith",
    icon: <Wrench className="w-8 h-8" />,
    description:
      "Alejandro is the founder with 10 years of locksmith experience. Beyond his mastery of locks and safes, he has extensive coding experience and is developing innovative apps and technology to advance the locksmith industry. His vision transforms traditional security services into modern solutions.",
    availability: "Available most days",
  },
  {
    id: "nathan",
    name: "Nathan",
    role: "VP of Automotive Ops",
    expertise: "Car Lock Specialist",
    icon: <Zap className="w-8 h-8" />,
    description:
      "Nathan is a Retired Army Veteran with extensive experience driving and transporting in Iraq. He is the brain behind our automotive operations and day-to-day locksmith business operations, leveraging his prestigious military background with multiple awards and recognition. His discipline and leadership drive our operational excellence.",
    availability: "Dedicated to automotive emergencies",
  },
  {
    id: "chavez",
    name: "Chavez",
    role: "Emergency On Call",
    expertise: "24/7 Emergency Response",
    icon: <AlertCircle className="w-8 h-8" />,
    description:
      "Chavez brings 5 years of locksmith experience and specializes in rapid response for car and house lockouts throughout Orlando. His quick action and reliable service have earned him a reputation as the go-to technician for urgent situations when you need help fast.",
    availability: "24/7 emergency coverage",
  },
]

export function TeamSelection() {
  const [selectedMember, setSelectedMember] = useState<string>("alejandro")

  const selected = teamMembers.find((member) => member.id === selectedMember)

  return (
    <section className="relative py-24 px-6 md:px-28 border-t border-border/20">
      {/* Section Header */}
      <div className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Meet the Team</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">CHOOSE YOUR LOCKSMITH</h2>
        <p className="mt-6 max-w-xl font-mono text-sm text-muted-foreground leading-relaxed">
          Behind every successful unlock is a skilled professional. Meet the Veteran Lock & Safe team ready to serve your security needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Team Member Cards */}
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedMember(member.id)}
              className={`w-full text-left p-6 border transition-all duration-300 group ${
                selectedMember === member.id
                  ? "border-accent bg-accent/5"
                  : "border-border/40 hover:border-accent/40"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center transition-colors duration-300 ${
                    selectedMember === member.id ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                  }`}
                >
                  {member.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight">{member.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {member.role}
                  </p>
                  <p className="font-mono text-xs text-accent/60 mt-2">{member.expertise}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Member Details */}
        {selected && (
          <div className="flex flex-col justify-start">
            <div className="sticky top-24 space-y-6 p-6 border border-border/40 bg-background/50 backdrop-blur-sm">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center border border-accent bg-accent/10">
                {selected.icon}
              </div>

              {/* Name and Role */}
              <div>
                <h3 className="font-[var(--font-bebas)] text-4xl tracking-tight">{selected.name}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mt-3">{selected.role}</p>
              </div>

              {/* Description */}
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">{selected.description}</p>

              {/* Expertise Badge */}
              <div className="inline-block">
                <div className="border border-accent px-4 py-2">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent">{selected.expertise}</p>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-4 border-t border-border/40">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Availability
                </p>
                <p className="font-mono text-sm text-foreground">{selected.availability}</p>
              </div>

              {/* CTA Button */}
              <a
                href="tel:4078609524"
                className="w-full bg-accent text-accent-foreground py-3 font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors duration-200"
              >
                Request {selected.name}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
