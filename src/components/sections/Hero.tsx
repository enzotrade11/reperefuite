'use client'

import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/siteConfig'

const tags = [
  'habitation',
  'piscine',
  'réseau enterré',
  'fuite invisible',
  'fuite après compteur',
]

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-light/75" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Badge variant="primary" className="bg-white/15 text-white mb-6 backdrop-blur-sm">
              Intervention rapide – Est lyonnais
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-balance">
              RepereFuite est spécialisé dans la recherche de fuite sans destruction.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-blue-100 mb-3 leading-relaxed max-w-2xl mx-auto">
              RepereFuite est spécialisé dans la localisation de fuites d&apos;eau
              dans les habitations, piscines et réseaux enterrés, sans destruction
              inutile.
            </p>
            <p className="text-blue-200 mb-6">
              Intervention dans l&apos;Est lyonnais, le Nord Isère, le Sud Ain et
              les secteurs alentours.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-100"
                >
                  <svg className="w-3.5 h-3.5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              Nous localisons précisément les fuites d&apos;eau sans casser
              inutilement les sols ou les murs. Grâce à différentes méthodes de
              détection, il est possible d&apos;identifier l&apos;origine d&apos;une fuite
              invisible afin de permettre une réparation ciblée.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={siteConfig.phoneTel} variant="accent" size="lg">
                <Phone className="w-5 h-5" />
                Appeler RepereFuite
              </Button>
              <Button href="/contact" variant="white" size="lg">
                Demander un diagnostic
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 32L80 37.3C160 43 320 53 480 53.3C640 53 800 43 960 37.3C1120 32 1280 32 1360 32L1440 32V60H0V60Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
