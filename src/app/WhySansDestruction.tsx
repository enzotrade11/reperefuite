'use client'

import FadeIn from '@/components/ui/FadeIn'

export default function WhySansDestruction() {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Pourquoi faire une recherche de fuite sans destruction ?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Une recherche de fuite sans destruction permet de localiser
            précisément l&apos;origine d&apos;une fuite d&apos;eau sans casser
            inutilement les sols ou les murs. Cela permet d&apos;éviter des
            travaux inutiles et de faciliter la réparation.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
