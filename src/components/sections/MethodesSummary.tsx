'use client'

import Link from 'next/link'
import { Ear, Wind, Camera, TestTube2, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

const methodes = [
  { icon: Ear, label: 'Détection acoustique' },
  { icon: Wind, label: 'Gaz traceur' },
  { icon: Camera, label: 'Inspection du réseau' },
  { icon: TestTube2, label: 'Analyse des installations' },
]

export default function MethodesSummary() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nos méthodes de recherche de fuite
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Selon la configuration du réseau et les symptômes constatés,
              différentes méthodes de détection peuvent être utilisées pour
              localiser précisément l&apos;origine de la fuite.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {methodes.map((methode, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <methode.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">
                  {methode.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link
              href="/methodes-recherche-fuite"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir toutes nos méthodes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
