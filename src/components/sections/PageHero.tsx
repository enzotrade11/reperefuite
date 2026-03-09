'use client'

import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'

type PageHeroProps = {
  children: React.ReactNode
}

export default function PageHero({ children }: PageHeroProps) {
  return (
    <section className="relative py-12 lg:py-20 text-white overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary-light/80" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>{children}</FadeIn>
      </div>
    </section>
  )
}
