'use client'

import Image from 'next/image'
import { Phone, ArrowRight, Check, Clock, Zap, ShieldCheck, Home, Droplets, Gauge } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/siteConfig'
import PoolLadder from '@/components/ui/icons/PoolLadder'

const tags = [
  { label: 'habitation', icon: Home },
  { label: 'piscine', icon: PoolLadder },
  { label: 'canalisation enterrée', icon: Droplets },
  { label: 'fuite après compteur', icon: Gauge },
]

export default function Hero() {
  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
        {/* Background image */}
        <Image
          src="/images/hero-thermal.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-blue-900/90" />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge variant="primary" className="bg-white/10 text-white mb-6 backdrop-blur-sm border-blue-400">
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
                dans les habitations, piscines et canalisations enterrées, sans destruction
                inutile.
              </p>
              <p className="text-blue-200 mb-6">
                Intervention dans l&apos;Est lyonnais, le Nord Isère, le Sud Ain et
                les secteurs alentours.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tags.map((tag) => {
                  const Icon = tag.icon
                  return (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-100"
                    >
                      <Icon className="w-3.5 h-3.5 text-secondary" />
                      {tag.label}
                    </span>
                  )
                })}
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
                <Button href="/contact" variant="outline" className="border-white text-white" size="lg">
                  Demander un diagnostic
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-[#111827] text-white py-10 relative z-10 border-b-2 border-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center">
                <Clock className="w-10 h-10 text-accent mb-3" />
                <div className="font-bold text-2xl font-sora">10 ans</div>
                <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider">d'expérience</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center">
                <Zap className="w-10 h-10 text-accent mb-3" />
                <div className="font-bold text-2xl font-sora">Intervention</div>
                <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider">Rapide</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-accent mb-3" />
                <div className="font-bold text-2xl font-sora">Agréé</div>
                <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider">assurance</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
