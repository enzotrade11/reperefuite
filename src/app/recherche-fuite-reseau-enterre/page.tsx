import type { Metadata } from 'next'
import { CheckCircle2, Droplets, Gauge, MapPin, Shovel } from 'lucide-react'
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
  title: 'Recherche de fuite réseau enterré sans destruction – RepereFuite Lyon Est',
  description:
    "Recherche de fuite réseau enterré sans destruction dans l'Est lyonnais. Fuite après compteur, canalisation enterrée, réseau extérieur. RepereFuite.",
  alternates: { canonical: 'https://reperefuite.fr/recherche-fuite-reseau-enterre' },
}

const faqItems = [
  {
    question: 'Comment savoir si une canalisation enterrée fuit ?',
    answer:
      "Une fuite sur un réseau enterré peut provoquer une surconsommation d'eau, un compteur qui tourne sans utilisation ou une zone humide dans le jardin.",
  },
  {
    question: 'Peut-on localiser une fuite sur une canalisation enterrée sans creuser ?',
    answer:
      'Oui. Des méthodes comme la détection acoustique ou le gaz traceur permettent souvent de localiser précisément une fuite sans casser ni creuser inutilement.',
  },
  {
    question: 'Une fuite après compteur est-elle détectable ?',
    answer:
      "Oui. Une recherche de fuite permet d'identifier l'origine d'une fuite située entre le compteur d'eau et l'habitation ou sur un réseau extérieur.",
  },
]

const signes = [
  { icon: Gauge, text: "Compteur d'eau qui tourne sans consommation" },
  { icon: Droplets, text: "Surconsommation d'eau inexpliquée" },
  { icon: Droplets, text: 'Zone humide dans le jardin' },
  { icon: Droplets, text: 'Sol anormalement détrempé' },
  { icon: Droplets, text: "Pression d'eau qui diminue dans l'habitation" },
]

const types = [
  "Alimentation d'eau entre le compteur et la maison",
  "Réseau d'arrosage enterré",
  'Canalisation extérieure',
  "Alimentation d'eau d'une dépendance ou d'un bâtiment annexe",
  'Fuite après compteur',
]

const methodes = [
  'Détection acoustique des bruits de fuite',
  'Utilisation de gaz traceur',
  'Corrélation acoustique sur canalisation enterrée',
  'Analyse du réseau',
  'Inspection des zones suspectes',
]

export default function ReseauEnterrePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[{ label: 'Recherche de fuite réseau enterré', href: '/recherche-fuite-reseau-enterre' }]}
      />
      <Breadcrumbs items={[{ label: 'Recherche de fuite réseau enterré' }]} />

      {/* Hero */}
      <PageHero>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Recherche de fuite réseau enterré sans destruction
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed mb-8">
          Certaines fuites peuvent se produire sur une canalisation située sous
          terre, entre le compteur et la maison ou dans un réseau extérieur.
          Lorsqu&apos;elles ne sont pas visibles, une recherche de fuite permet de
          localiser précisément l&apos;origine du problème sans avoir à creuser
          inutilement.
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
              Quand suspecter une fuite sur un réseau enterré ?
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {signes.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <s.icon className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">{s.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Détection de fuite sur canalisation enterrée
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {types.map((t, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3">
                  <Shovel className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-gray-700">{t}</span>
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
              Méthodes de détection des fuites enterrées
            </h2>
          </FadeIn>
          <div className="space-y-3 mb-6">
            {methodes.map((m, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-700">{m}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 text-sm">
              Ces méthodes permettent généralement de localiser la fuite avec
              précision, sans avoir à creuser sur de grandes zones.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Zone */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Intervention recherche de fuite dans l&apos;est lyonnais, nord Isère et Ain
            </h2>
            <p className="text-gray-600 mb-6">
              Le secteur d&apos;intervention couvre environ 50 km autour de l&apos;est lyonnais.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {['Vaulx-en-Velin', 'Décines', 'Meyzieu', 'Genas', 'Chassieu', 'Saint-Priest', 'Bourgoin-Jallieu', 'Ambérieu-en-Bugey'].map((c) => (
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
        title="Questions fréquentes sur la recherche de fuite réseau enterré"
        items={faqItems}
      />

      <CTABanner />
    </>
  )
}
