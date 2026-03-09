import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Droplets, Waves, MapPin } from 'lucide-react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Recherche de fuite piscine sans destruction – RepereFuite Lyon Est',
  description:
    "Recherche de fuite piscine sans destruction dans l'Est lyonnais. Détection de fuite sur bassin, canalisation, local technique. RepereFuite.",
  alternates: { canonical: 'https://reperefuite.fr/recherche-fuite-piscine' },
}

const faqItems = [
  {
    question: 'Comment savoir si une piscine a une fuite ?',
    answer:
      "Une baisse importante du niveau d'eau peut indiquer la présence d'une fuite dans le bassin ou dans le réseau hydraulique.",
  },
  {
    question: 'Peut-on localiser une fuite piscine sans casser ?',
    answer:
      'Oui, certaines méthodes de détection permettent de localiser précisément une fuite sans destruction.',
  },
  {
    question: "Une piscine peut-elle perdre de l'eau naturellement ?",
    answer:
      "Oui, l'évaporation peut provoquer une légère baisse du niveau d'eau, surtout en période chaude.",
  },
]

const signes = [
  "Baisse rapide du niveau d'eau",
  'Humidité autour de la piscine',
  "Présence d'eau près du local technique",
  "Bulles d'air dans le circuit hydraulique",
  'Besoin de remplir la piscine régulièrement',
]

const emplacements = [
  'Fuite sur le bassin',
  'Fuite sur canalisation enterrée',
  'Fuite sur skimmer',
  'Fuite sur bonde de fond',
  'Fuite sur circuit hydraulique',
  'Fuite dans le local technique',
]

const methodes = [
  'Détection acoustique',
  'Gaz traceur',
  'Inspection du bassin',
  'Contrôle du circuit hydraulique',
]

const secteurs = {
  'Rhône (69)': ['Vaulx-en-Velin', 'Rillieux-la-Pape', 'Caluire-et-Cuire', 'Chassieu', 'Genas'],
  'Ain (01)': ['Miribel', 'Beynost', 'Neyron'],
  'Isère (38)': ['Bourgoin-Jallieu', "L'Isle-d'Abeau", 'Saint-Quentin-Fallavier'],
}

export default function PiscinePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[{ label: 'Recherche de fuite piscine', href: '/recherche-fuite-piscine' }]}
      />
      <Breadcrumbs items={[{ label: 'Recherche de fuite piscine' }]} />

      {/* Hero */}
      <PageHero>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Recherche de fuite piscine sans destruction
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed mb-4">
          Une baisse anormale du niveau d&apos;eau dans une piscine peut indiquer la
          présence d&apos;une fuite d&apos;eau dans le bassin ou les canalisations. La fuite
          peut provenir du bassin, des canalisations enterrées, du local technique
          ou d&apos;un élément du circuit hydraulique.
        </p>
        <p className="text-blue-200 text-sm mb-8">
          RepereFuite intervient pour la recherche de fuite piscine sans destruction
          dans l&apos;est lyonnais, le nord de l&apos;Isère et l&apos;Ain, afin de localiser
          précisément l&apos;origine du problème.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Appeler RepereFuite
          </Button>
          <Button href="/contact" variant="white">
            Demander un diagnostic
          </Button>
        </div>
      </PageHero>

      {/* Signes */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Quand suspecter une fuite sur une piscine ?
            </h2>
            <p className="text-gray-600 mb-8">
              Une piscine peut perdre un peu d&apos;eau naturellement à cause de
              l&apos;évaporation. En revanche, une baisse importante ou régulière du
              niveau d&apos;eau peut révéler une fuite.
            </p>
          </FadeIn>
          <div className="space-y-3">
            {signes.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <Waves className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">{s}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Emplacements */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Où se situent les fuites sur une piscine ?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emplacements.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-light rounded-xl p-4">
                  <Droplets className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodes */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Comment se déroule une recherche de fuite piscine ?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {methodes.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                  <p className="font-semibold text-gray-900 text-sm">{m}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Recherche de fuite piscine : secteurs d&apos;intervention
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(secteurs).map(([dept, communes], i) => (
              <FadeIn key={dept} delay={i * 0.1}>
                <div className="bg-light rounded-2xl p-5">
                  <h3 className="font-sora font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {dept}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {communes.map((c) => (
                      <span key={c} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title="Questions fréquentes sur la recherche de fuite piscine"
        items={faqItems}
      />

      <CTABanner />
    </>
  )
}
