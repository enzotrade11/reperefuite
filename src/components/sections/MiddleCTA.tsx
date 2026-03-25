'use client'

import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/siteConfig'

export default function MiddleCTA() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <FadeIn>
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
          <h3 className="font-sora text-2xl sm:text-3xl font-bold mb-4">
            Besoin d'un expert pour localiser votre fuite ?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Nos techniciens interviennent rapidement pour un diagnostic précis et sans destruction. Retrouvez votre tranquillité d'esprit en quelques heures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={siteConfig.phoneTel} variant="accent" size="lg" className="shadow-lg shadow-accent/30 hover:shadow-accent/50">
              <Phone className="w-5 h-5 mr-2" />
              Appeler RepereFuite
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Demander un devis
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            L'intervention peut être prise en charge par votre assurance habitation.
          </p>
        </div>
      </FadeIn>
    </div>
  )
}
