import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Droplets, Gauge, Home, Eye, Wrench, MapPin, FileText } from 'lucide-react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Recherche de fuite habitation sans destruction – RepereFuite Lyon Est',
  description:
    "Recherche de fuite habitation sans destruction dans l'Est lyonnais. Localisation de fuite sur canalisation, fuite sous dalle, infiltration. RepereFuite.",
  alternates: { canonical: 'https://reperefuite.fr/recherche-fuite-habitation' },
}

const faqItems = [
  {
    question: "Comment savoir s'il y a une fuite dans une maison ?",
    answer:
      "Certains signes peuvent indiquer une fuite d'eau : compteur qui tourne sans consommation, humidité sur un mur, infiltration d'eau ou augmentation anormale de la consommation.",
  },
  {
    question: 'Peut-on localiser une fuite sans casser ?',
    answer:
      'Oui. Des méthodes de détection comme la détection acoustique ou le gaz traceur permettent souvent de localiser précisément une fuite sans destruction.',
  },
  {
    question: 'Combien coûte une recherche de fuite ?',
    answer:
      "Le tarif dépend de la configuration de l'installation et de la complexité de la recherche. Un diagnostic permet d'identifier précisément l'origine du problème.",
  },
]

const tags = [
  'fuite sur canalisation intérieure',
  'fuite sous dalle',
  'infiltration dans un mur ou un plafond',
  "fuite invisible dans une installation d'eau",
  "compteur d'eau qui tourne sans consommation",
]

const situations = [
  { icon: Gauge, text: "Compteur d'eau qui tourne sans consommation" },
  { icon: Droplets, text: "Tache d'humidité sur un mur" },
  { icon: Home, text: "Infiltration d'eau dans une pièce" },
  { icon: Eye, text: 'Fuite sous dalle' },
  { icon: Droplets, text: "Augmentation anormale de la consommation d'eau" },
]

const emplacements = [
  "Canalisation d'eau potable",
  'Réseau situé sous la dalle',
  'Canalisation dans un mur',
  'Réseau extérieur alimentant la maison',
  'Circuit de chauffage',
]

const methodes = [
  'Détection acoustique',
  'Gaz traceur',
  'Inspection du réseau',
  'Analyse des installations',
]

const reasons = [
  'Localisation précise de la fuite',
  'Méthodes de détection sans casse',
  "Diagnostic technique de l'installation",
  'Intervention ciblée pour éviter des travaux inutiles',
]

export default function HabitationPage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[{ label: 'Recherche de fuite habitation', href: '/recherche-fuite-habitation' }]}
      />
      <Breadcrumbs items={[{ label: 'Recherche de fuite habitation' }]} />

      {/* Hero */}
      <PageHero>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Recherche de fuite habitation sans destruction
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed mb-4">
          Une fuite d&apos;eau dans une habitation peut provoquer des infiltrations,
          de l&apos;humidité ou une surconsommation d&apos;eau. La recherche de fuite sans
          destruction permet d&apos;identifier précisément l&apos;origine du problème sans
          casser inutilement les sols ou les murs.
        </p>
        <p className="text-blue-200 text-sm mb-6">
          Certaines infiltrations peuvent également provenir d&apos;une{" "}
          <Link href="/recherche-fuite-terrasse-lyon" className="underline hover:text-white transition-colors">
            toiture terrasse
          </Link>{" "}
          ou d&apos;un toit plat.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Appeler RepereFuite
          </Button>
          <Button href="/contact" variant="white">
            Demander un diagnostic
          </Button>
        </div>
      </PageHero>

      {/* Cross links */}
      <section className="py-4 bg-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 text-sm">
          <Link href="/recherche-fuite-piscine" className="text-primary hover:underline flex items-center gap-1">
            Recherche de fuite piscine <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/recherche-fuite-reseau-enterre" className="text-primary hover:underline flex items-center gap-1">
            Recherche de fuite réseau enterré <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Zone */}
      <section className="py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-gray-600 text-sm leading-relaxed">
              RepereFuite intervient pour la recherche de fuite habitation sans destruction
              dans l&apos;est lyonnais, le nord de l&apos;Isère et le sud de l&apos;Ain,
              afin de localiser précisément l&apos;origine du problème.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Dans quelles situations rechercher une fuite dans une habitation ?
            </h2>
            <p className="text-gray-600 mb-8">
              Certaines situations peuvent indiquer la présence d&apos;une fuite d&apos;eau
              invisible dans une habitation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {situations.map((s, i) => (
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

      {/* Emplacements */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Où se situent les fuites dans une habitation ?
            </h2>
            <p className="text-gray-600 mb-8">
              Une fuite d&apos;eau dans une habitation peut apparaître à différents
              endroits du réseau.
            </p>
          </FadeIn>
          <div className="space-y-3">
            {emplacements.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3">
                  <Droplets className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-gray-500 text-sm mt-6">
              Certaines traces d&apos;humidité peuvent également provenir d&apos;une{" "}
              <Link href="/recherche-fuite-terrasse-lyon" className="text-primary hover:underline">
                infiltration par une toiture ou une terrasse
              </Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Méthodes */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Comment se déroule une recherche de fuite
            </h2>
            <p className="text-gray-600 mb-8">
              Les techniques utilisées peuvent varier selon la configuration du réseau.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {methodes.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p className="font-semibold text-gray-900 text-sm">{m}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="text-gray-600 text-sm">
              Ces méthodes permettent généralement de localiser la fuite sans casser
              les sols ou les murs inutilement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pourquoi spécialiste */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Pourquoi faire appel à un spécialiste
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-gray-700">{r}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Zone intervention */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Recherche de fuite habitation dans l&apos;Est lyonnais
            </h2>
            <p className="text-gray-600 mb-4">
              RepereFuite intervient pour la recherche de fuite habitation dans
              l&apos;est de la métropole lyonnaise, le nord de l&apos;Isère et le sud du
              département de l&apos;Ain.
            </p>
            <p className="text-gray-600 mb-6">
              Le secteur d&apos;intervention couvre environ 50 km autour de l&apos;est
              lyonnais.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Vaulx-en-Velin', 'Villeurbanne', 'Décines', 'Meyzieu', 'Bron', 'Bourgoin-Jallieu', 'Ambérieu-en-Bugey'].map((c) => (
                <span key={c} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200">
                  <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Rapport assurance */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-sora font-bold text-gray-900 mb-2">
                    Rapport d&apos;intervention pour assurance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Après la recherche de fuite, un rapport d&apos;intervention sera
                    établi afin de détailler les investigations réalisées et les
                    méthodes utilisées. Ce document peut être utile pour votre
                    assurance ou pour l&apos;entreprise chargée de la réparation.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQ
        title="Questions fréquentes sur la recherche de fuite habitation"
        items={faqItems}
      />

      <CTABanner />
    </>
  )
}
