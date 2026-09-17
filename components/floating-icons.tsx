'use client'

import { LockIcon, KeyIcon, BuildingIcon, HomeIcon } from './security-icons'

const icons = [
  { Component: LockIcon, top: '10%', left: '5%', delay: 0 },
  { Component: KeyIcon, top: '25%', right: '8%', delay: 0.5 },
  { Component: BuildingIcon, top: '35%', left: '10%', delay: 1 },
  { Component: HomeIcon, top: '50%', right: '6%', delay: 1.5 },
  { Component: LockIcon, top: '65%', left: '8%', delay: 2 },
  { Component: KeyIcon, top: '75%', right: '10%', delay: 2.5 },
  { Component: BuildingIcon, top: '85%', left: '6%', delay: 3 },
  { Component: HomeIcon, top: '92%', right: '8%', delay: 3.5 },
  { Component: LockIcon, top: '15%', right: '15%', delay: 1.2 },
  { Component: KeyIcon, top: '40%', left: '12%', delay: 2.2 },
]

export function FloatingIcons() {
  return (
    <>
      {icons.map((icon, i) => {
        const { Component, delay, ...position } = icon
        return (
          <div
            key={i}
            className="fixed w-8 h-8 text-accent/30 pointer-events-none animate-float"
            style={{
              ...(position as any),
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              zIndex: 5,
            }}
          >
            <Component className="w-full h-full" />
          </div>
        )
      })}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  )
}
