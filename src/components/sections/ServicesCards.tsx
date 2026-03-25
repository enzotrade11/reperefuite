'use client'

import Link from 'next/link'
import { Home, Shovel, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import PoolLadder from '@/components/ui/icons/PoolLadder'

const services = [
  {
    icon: Home,
    title: 'Recherche de fuite habitation',
    description:
      "Localisation de fuite sur réseau intérieur, canalisation, fuite invisible, infiltration ou problème lié à l'eau dans la maison.",
    href: '/recherche-fuite-habitation',
  },
  {
    icon: PoolLadder,
    title: 'Recherche de fuite piscine',
    description:
      "Détection de fuite sur bassin, canalisation enterrée, pièce à sceller, local technique ou réseau hydraulique de piscine.",
    href: '/recherche-fuite-piscine',
  },
  {
    icon: Shovel,
    title: 'Recherche de fuite réseau enterré',
    description:
      "Localisation précise des fuites sur canalisations enterrées, alimentation d'eau, fuite après compteur ou réseau extérieur.",
    href: '/recherche-fuite-reseau-enterre',
  },
]

export default function ServicesCards() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nos services de recherche de fuite
            </h2>
            <p className="text-gray-600 leading-relaxed">
              RepereFuite intervient pour différents types de recherches de fuite
              sans destruction :
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link href={service.href} className="group block">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-sora text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-gray-500 mt-8 text-sm">
            RepereFuite intervient également pour le{" "}
            <Link href="/recherche-fuite-terrasse-lyon" className="text-primary hover:underline font-medium">
              diagnostic d&apos;infiltration provenant d&apos;une toiture terrasse
            </Link>{" "}
            ou d&apos;un toit plat.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
