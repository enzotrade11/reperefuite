'use client'

import { CheckCircle2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import PoolLadder from '@/components/ui/icons/PoolLadder'

const reasons = [
  'Localisation précise de la fuite',
  'Méthodes de détection sans casse',
  'Intervention sur habitation, piscine et canalisation enterrée',
  "Diagnostic technique de l'origine des problèmes liés à l'eau",
  'Aide à la compréhension du problème avant réparation',
]

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="font-sora text-2xl sm:text-3xl font-bold mb-6">
                Pourquoi faire appel à RepereFuite pour une recherche de fuite ?
              </h2>
              <p className="text-blue-200 leading-relaxed mb-8">
                RepereFuite est spécialisé dans la localisation de fuite d&apos;eau
                sans destruction. L&apos;objectif est d&apos;identifier précisément
                l&apos;origine d&apos;une fuite afin d&apos;éviter des travaux
                inutiles et des dégâts supplémentaires.
              </p>
              <ul className="space-y-4">
                {reasons.map((reason, index) => {
                  const isPool = reason.toLowerCase().includes('piscine')
                  const Icon = isPool ? PoolLadder : CheckCircle2
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-200">{reason}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-5xl font-sora font-bold text-secondary mb-2">50km</div>
                <p className="text-gray-300 mb-6">Rayon d&apos;intervention autour de Lyon Est</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-sora font-bold text-white">69</div>
                  <p className="text-xs text-gray-400">Rhône</p>
                </div>
                <div>
                  <div className="text-2xl font-sora font-bold text-white">38</div>
                  <p className="text-xs text-gray-400">Isère</p>
                </div>
                <div>
                  <div className="text-2xl font-sora font-bold text-white">01</div>
                  <p className="text-xs text-gray-400">Ain</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
