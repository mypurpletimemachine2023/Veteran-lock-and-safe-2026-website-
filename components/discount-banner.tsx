"use client"

import { Star, Shield, GraduationCap, Users } from "lucide-react"

export function DiscountBanner() {
  return (
    <section className="bg-white py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-600" />
          <span className="font-[var(--font-bebas)] text-lg md:text-xl tracking-wide text-gray-900">
            VETERAN DISCOUNTS
          </span>
        </div>
        
        <div className="hidden sm:block w-px h-6 bg-gray-300" />
        
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-red-600" />
          <span className="font-[var(--font-bebas)] text-lg md:text-xl tracking-wide text-gray-900">
            SENIOR CITIZEN DISCOUNTS
          </span>
        </div>
        
        <div className="hidden sm:block w-px h-6 bg-gray-300" />
        
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-red-600" />
          <span className="font-[var(--font-bebas)] text-lg md:text-xl tracking-wide text-gray-900">
            COLLEGE STUDENT DISCOUNTS
          </span>
        </div>
      </div>
    </section>
  )
}
