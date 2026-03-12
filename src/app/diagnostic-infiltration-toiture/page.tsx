import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, Home, FileText, MapPin } from 'lucide-react'
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
  title: 'Diagnostic infiltration toiture terrasse – RepereFuite Lyon Est',
  description:
    "Recherche de fuite et diagnostic infiltration toiture terrasse. Infiltration d'eau, humidité plafond, étanchéité. RepereFuite Lyon Est.",
  alternates: { canonical: 'https://reperefuite.fr/diagnostic-infiltration-toiture' },
}

const faqItems = [
  {
    question: 'Comment savoir si une toiture terrasse fuit ?',
    answer:
      "Une infiltration provenant d'une toiture terrasse peut provoquer des taches d'humidité au plafond, des peintures qui cloquent ou l'apparition de moisissures.",
  },
  {
    question: "Une infiltration toiture terrasse peut-elle venir d'ailleurs ?",
    answer:
      "Oui. L'eau peut circuler dans la structure du bâtiment et apparaître dans une autre pièce. Elle peut provenir de l'étanchéité, d'un joint défectueux, d'une fissure ou d'un problème d'évacuation des eaux pluviales.",
  },
  {
    question: 'Comment localiser une fuite sur une toiture terrasse ?',
    answer:
      "Des méthodes de recherche de fuite non destructives peuvent être utilisées afin d'identifier précisément l'origine de l'infiltration.",
  },
]

const signes = [
  "Tache d'humidité au plafond",
  'Peinture qui cloque',
  "Apparition d'humidité après la pluie",
  "Infiltration d'eau dans une pièce",
  'Moisissures sur un mur',
]

const origines = [
  'Toiture',
  'Terrasse',
  'Étanchéité dégradée',
  'Fissure dans la façade',
  'Joint défectueux',
]

export default function InfiltrationToiturePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[{ label: 'Diagnostic infiltration toiture terrasse', href: '/diagnostic-infiltration-toiture' }]}
      />
      <Breadcrumbs items={[{ label: 'Diagnostic infiltration toiture terrasse' }]} />

      {/* Hero */}
      <PageHero>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Recherche de fuite et diagnostic infiltration toiture terrasse
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed mb-6">
          Une infiltration d&apos;eau provenant d&apos;une toiture ou d&apos;une terrasse
          peut provoquer l&apos;apparition d&apos;humidité dans une habitation. Ces
          infiltrations peuvent entraîner des taches au plafond, des murs humides
          ou des dégradations dans certaines pièces. RepereFuite intervient pour
          rechercher l&apos;origine des infiltrations d&apos;eau afin d&apos;identifier
          précisément la cause du problème.
        </p>
        <p className="text-blue-200 text-sm mb-8 italic">
          Vous résidez dans la région lyonnaise ? Découvrez notre service dédié à la{" "}
          <Link href="/recherche-fuite-terrasse-lyon" className="underline hover:text-white transition-colors">
            recherche de fuite terrasse Lyon
          </Link>.
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
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Quels sont les signes d&apos;une infiltration toiture terrasse ?
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {signes.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <Droplets className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">{s}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Origines */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              D&apos;où peut provenir une infiltration ?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {origines.map((o, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-light rounded-xl p-4">
                  <Home className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-gray-700">{o}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Recherche */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Recherche de l&apos;origine d&apos;une infiltration
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorsque l&apos;origine n&apos;est pas visible, il est nécessaire
              d&apos;analyser la situation afin d&apos;identifier la cause du problème.
              L&apos;objectif est de localiser l&apos;origine de l&apos;infiltration afin
              de permettre une réparation adaptée.
            </p>
          </FadeIn>

          {/* Rapport assurance */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-sora font-bold text-gray-900 mb-2">
                    Rapport de recherche de fuite pour assurance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Après la recherche de fuite, un rapport d&apos;intervention peut être
                    établi afin de détailler les investigations réalisées et les
                    méthodes utilisées. Ce rapport peut être transmis à votre
                    assurance, à votre syndic ou à l&apos;entreprise chargée de la
                    réparation.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Secteurs d&apos;intervention
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Lyon', 'Villeurbanne', 'Vaulx-en-Velin', 'Est lyonnais', 'Nord Isère', 'Sud Ain'].map((c) => (
                <span key={c} className="px-3 py-1 bg-light rounded-full text-sm text-gray-700 border border-gray-200">
                  <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQ
        title="Questions fréquentes sur l'infiltration toiture terrasse"
        items={faqItems}
      />

      <CTABanner />
    </>
  )
}
