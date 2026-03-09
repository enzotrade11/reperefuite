'use client'

import { Droplets, Home, Gauge, Eye, Waves } from 'lucide-react'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/ui/FadeIn'

const situations = [
  {
    icon: Gauge,
    text: "Compteur d'eau qui tourne sans consommation",
  },
  {
    icon: Droplets,
    text: "Tache d'humidité sur un mur",
  },
  {
    icon: Home,
    text: "Infiltration d'eau dans une pièce",
  },
  {
    icon: Eye,
    text: 'Fuite sous dalle',
  },
  {
    icon: Waves,
    text: "Piscine qui perd de l'eau",
  },
  {
    icon: Droplets,
    text: "Surconsommation d'eau inexpliquée",
  },
]

export default function SituationsGrid() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Dans quelles situations rechercher une fuite ?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Certaines situations peuvent indiquer la présence d&apos;une fuite
              d&apos;eau invisible dans un réseau. La recherche de fuite permet alors
              de localiser précisément l&apos;origine du problème.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <Card className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
