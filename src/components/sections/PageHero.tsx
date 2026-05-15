'use client'

import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import { Award, Zap, ShieldCheck, MapPin } from 'lucide-react'

type PageHeroProps = {
  children: React.ReactNode
  backgroundImage?: string
}

const trustBadges = [
  { icon: Award,       label: "10 ans d'expérience" },
  { icon: Zap,         label: 'Intervention Rapide' },
  { icon: ShieldCheck, label: 'Agréé Assurance' },
  { icon: MapPin,      label: '50 km autour de Lyon' },
]

export default function PageHero({ children, backgroundImage = '/images/hero-bg.jpg' }: PageHeroProps) {
  return (
    <section className="relative py-10 lg:py-16 text-white overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-blue-900/90" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>{children}</FadeIn>

        {/* Trust badges */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white"
              >
                <Icon className="w-4 h-4 text-secondary shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
