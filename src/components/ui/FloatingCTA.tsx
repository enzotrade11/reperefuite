'use client'

import { Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-4 z-50 md:hidden flex flex-col items-center gap-2" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {/* Badge 5 étoiles Google */}
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-100 text-center">
        <div className="flex gap-0.5 mb-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-[9px] font-bold text-gray-700 leading-tight">5,0</span>
        <span className="text-[8px] text-gray-400 leading-tight">Google</span>
      </div>

      {/* Bouton téléphone — touch target min 48×48px */}
      <a
        href={siteConfig.phoneTel}
        className="flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg shadow-accent/40 pulse-ring active:scale-95 transition-transform"
        aria-label={`Appeler RepereFuite au ${siteConfig.phoneDisplay}`}
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}
