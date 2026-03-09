'use client'

import { MapPin } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/siteConfig'

export default function ZoneIntervention() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Zone d&apos;intervention recherche de fuite
            </h2>
            <p className="text-gray-600 leading-relaxed">
              RepereFuite intervient pour la recherche de fuite sans destruction
              dans la région lyonnaise, le Nord Isère et le Sud Ain. Nous
              intervenons également dans les communes voisines pour la
              localisation de fuite d&apos;eau sur habitation, piscine ou réseau
              enterré.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-light rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-sora font-bold text-gray-900">
                  Rhône (69)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.communes.rhone.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-light rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-sora font-bold text-gray-900">
                  Isère (38)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.communes.isere.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-light rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-sora font-bold text-gray-900">
                  Ain (01)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.communes.ain.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <p className="text-center text-gray-500 mt-8 text-sm">
            {siteConfig.zoneDetail}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
