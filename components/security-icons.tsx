export function LockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="11" width="18" height="10" rx="1" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function KeyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="6" cy="12" r="4" />
      <path d="M10 12h10v2h-2v2h-4v-2h-4v-2z" />
      <path d="M7.5 9l4-4" />
    </svg>
  )
}

export function BuildingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="2" width="8" height="20" />
      <rect x="13" y="5" width="8" height="17" />
      <line x1="3" y1="7" x2="11" y2="7" />
      <line x1="3" y1="11" x2="11" y2="11" />
      <line x1="3" y1="15" x2="11" y2="15" />
      <line x1="3" y1="19" x2="11" y2="19" />
      <line x1="13" y1="9" x2="21" y2="9" />
      <line x1="13" y1="13" x2="21" y2="13" />
      <line x1="13" y1="17" x2="21" y2="17" />
    </svg>
  )
}

export function HomeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <line x1="9" y1="22" x2="9" y2="12" />
      <line x1="15" y1="22" x2="15" y2="12" />
    </svg>
  )
}
