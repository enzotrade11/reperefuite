'use client'

import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/siteConfig'

type CTABannerProps = {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = "Une fuite d'eau, une infiltration ou une surconsommation d'eau ?",
  subtitle,
}: CTABannerProps) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary via-primary-light to-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-sora text-2xl sm:text-3xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-blue-100 mb-8 text-lg">{subtitle}</p>
          )}
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            <Phone className="w-5 h-5" />
            Appeler RepereFuite – Intervention rapide
          </Button>
          <p className="text-blue-200 text-sm mt-4">
            {siteConfig.phoneDisplay} – {siteConfig.zone}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
