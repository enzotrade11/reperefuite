import type { Metadata } from 'next'
import { Droplets, AlertTriangle, Search } from 'lucide-react'
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
  title: "Diagnostic humidité et recherche d'origine – RepereFuite Lyon Est",
  description:
    "Diagnostic humidité et recherche d'origine des problèmes d'eau. Fuite, infiltration, condensation. RepereFuite intervient dans l'Est lyonnais.",
  alternates: { canonical: 'https://reperefuite.fr/diagnostic-humidite' },
}

const faqItems = [
  {
    question: 'Pourquoi un mur devient-il humide ?',
    answer:
      "Un mur peut devenir humide pour différentes raisons : infiltration d'eau par l'extérieur, fuite dans une canalisation ou problème de condensation.",
  },
  {
    question: "Comment savoir si l'humidité provient d'une fuite ?",
    answer:
      "Dans certains cas, une recherche de fuite sans destruction peut être nécessaire pour vérifier l'origine du problème.",
  },
  {
    question: "Une infiltration peut-elle provoquer de l'humidité dans une maison ?",
    answer:
      "Oui, une infiltration provenant d'une toiture, d'une terrasse ou d'une façade peut provoquer l'apparition d'humidité.",
  },
  {
    question: 'Pourquoi faire un diagnostic humidité ?',
    answer:
      "Un diagnostic humidité permet de comprendre l'origine d'un problème lié à l'eau. Identifier précisément la cause de l'humidité permet d'éviter des travaux inutiles.",
  },
]

const zones = [
  'Mur intérieur',
  'Plafond',
  'Pièce sous toiture / terrasse',
  'Cave / sous-sol',
  'Autour de canalisations',
  'Autour d\'une fenêtre / façade',
]

const signes = [
  "Tache d'humidité sur un mur ou un plafond",
  'Peinture qui se décolle ou cloques',
  'Apparition de moisissures',
  "Odeur d'humidité persistante",
  "Infiltration d'eau après la pluie",
  'Mur ou plafond humide',
  'Salpêtre sur les murs',
]

const causes = [
  'Fuite sur une canalisation',
  "Infiltration provenant de la toiture ou d'une terrasse",
  'Infiltration par la façade',
  'Problème sur un réseau enterré',
  'Condensation liée à la ventilation',
  'Remontées capillaires dans les murs',
]

export default function DiagnosticHumiditePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[{ label: 'Diagnostic humidité', href: '/diagnostic-humidite' }]}
      />
      <Breadcrumbs items={[{ label: 'Diagnostic humidité' }]} />

      {/* Hero */}
      <PageHero>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Diagnostic humidité et recherche d&apos;origine des problèmes d&apos;eau
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed mb-8">
          La présence d&apos;humidité dans une maison ou un appartement peut avoir
          plusieurs origines. Il peut s&apos;agir d&apos;une fuite d&apos;eau, d&apos;une
          infiltration provenant de l&apos;extérieur ou d&apos;un problème lié au réseau
          de canalisation. RepereFuite intervient pour le diagnostic humidité et
          la recherche de l&apos;origine des problèmes liés à l&apos;eau, afin
          d&apos;identifier précisément la cause du phénomène.
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

      {/* Zones */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Où peut apparaître l&apos;humidité dans une habitation ?
            </h2>
            <p className="text-gray-600 mb-8">
              Un diagnostic humidité permet de déterminer si le problème provient
              d&apos;une fuite d&apos;eau, d&apos;une infiltration, d&apos;un défaut
              d&apos;étanchéité ou d&apos;un problème de condensation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map((z, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <Droplets className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700">{z}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Signes */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Quels sont les signes d&apos;un problème d&apos;humidité ?
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {signes.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-gray-700">{s}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Quelles sont les causes possibles de l&apos;humidité ?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {causes.map((c, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <Search className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-gray-700">{c}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Identifier */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Comment identifier l&apos;origine d&apos;un problème d&apos;humidité ?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorsque l&apos;origine de l&apos;humidité n&apos;est pas immédiatement
              visible, une analyse de la situation permet d&apos;orienter le diagnostic.
              Par exemple, une humidité localisée près d&apos;une canalisation peut
              indiquer une fuite, tandis qu&apos;une humidité apparaissant après la
              pluie peut être liée à une infiltration provenant de l&apos;extérieur.
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQ
        title="Questions fréquentes sur le diagnostic humidité"
        items={faqItems}
      />

      <CTABanner />
    </>
  )
}
