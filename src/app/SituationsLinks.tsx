'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

const situations = [
  { label: "Compteur d'eau qui tourne sans consommation", href: '/recherche-fuite-habitation' },
  { label: 'Fuite sous dalle', href: '/recherche-fuite-habitation' },
  { label: 'Fuite piscine', href: '/recherche-fuite-piscine' },
  { label: "Infiltration d'eau dans une pièce", href: '/diagnostic-humidite' },
  { label: 'Fuite après compteur', href: '/recherche-fuite-canalisation-enterree' },
  { label: 'Diagnostic humidité', href: '/diagnostic-humidite' },
]

export default function SituationsLinks() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Recherche de fuite selon votre situation
            </h2>
            <p className="text-gray-600">
              Certains symptômes ou situations nécessitent une recherche de fuite
              ciblée.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {situations.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <Link
                href={item.href}
                className="flex items-center justify-between p-4 bg-light rounded-xl hover:bg-primary/5 hover:shadow-sm transition-all group"
              >
                <span className="text-gray-800 font-medium">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
