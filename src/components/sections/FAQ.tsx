'use client'

import Accordion from '@/components/ui/Accordion'
import FadeIn from '@/components/ui/FadeIn'

type FAQProps = {
  title?: string
  items: { question: string; answer: string }[]
}

export default function FAQ({
  title = 'Questions fréquentes',
  items,
}: FAQProps) {
  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion items={items} />
        </FadeIn>
      </div>
    </section>
  )
}
