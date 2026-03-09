'use client'

import { Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export default function FloatingCTA() {
  return (
    <a
      href={siteConfig.phoneTel}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg shadow-accent/40 pulse-ring"
      aria-label={`Appeler RepereFuite au ${siteConfig.phoneDisplay}`}
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
