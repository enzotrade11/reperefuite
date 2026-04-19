'use client'

import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import Image from 'next/image'

const assurances = [
  { name: 'Allianz', file: 'allianz.png' },
  { name: 'Groupama', file: 'groupama.png' },
  { name: 'GMF', file: 'gmf.png' },
  { name: 'MAAF', file: 'maaf.png' },
  { name: 'Matmut', file: 'matmut.png' },
  { name: 'MMA', file: 'mma.jpg' },
  { name: 'Generali', file: 'generali.png' },
  { name: 'Crédit Agricole', file: 'credit-agricole.png' },
  { name: 'Direct Assurance', file: 'direct-assurance.png' },
  { name: 'MAIF', file: 'maif.png' },
  { name: 'MACIF', file: 'macif.png' },
  { name: 'Axa', file: 'axa.png' },
  { name: 'Covea', file: 'covea.png' }
]

export default function AssurancesCarousel() {
  // Duplicate array multiple times to ensure enough width for seamless scrolling on large screens
  const logos = [...assurances, ...assurances, ...assurances, ...assurances]

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
            <ShieldCheck className="w-8 h-8 text-[#4CAF50]" />
            <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900">
              Toutes assurances acceptées
            </h2>
          </div>
          <p className="text-gray-600 font-medium flex items-center justify-center gap-2 mt-2">
            <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
            Prise en charge directe avec votre assurance
          </p>
        </FadeIn>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex w-max animate-[marquee_120s_linear_infinite] hover:[animation-play-state:paused]">
          {logos.map((assurance, index) => (
            <div
              key={`${assurance.file}-${index}`}
              className="flex items-center justify-center w-48 h-20 sm:w-56 sm:h-24 mx-3 sm:mx-4 bg-white border border-gray-100 rounded-xl shadow-sm transition-shadow shrink-0 overflow-hidden px-6"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/images/assurances/${assurance.file}`} 
                  alt={`${assurance.name} logo`} 
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
