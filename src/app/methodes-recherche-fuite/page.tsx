import type { Metadata } from 'next'
import { Ear, Wind, Camera, TestTube2, Waves, Radio, FileText } from 'lucide-react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import CTABanner from '@/components/sections/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Méthodes de recherche de fuite sans destruction – RepereFuite',
  description:
    "Découvrez les méthodes de recherche de fuite sans destruction : détection acoustique, gaz traceur, caméra, fluorescéine, fumigation. RepereFuite Lyon Est.",
  alternates: { canonical: 'https://reperefuite.fr/methodes-recherche-fuite' },
}

const methodes = [
  {
    icon: Ear,
    title: 'Détection de fuite par méthode acoustique',
    description:
      "Certaines fuites produisent un bruit caractéristique lorsque l'eau s'échappe sous pression dans une canalisation. La détection acoustique consiste à écouter ces bruits à l'aide d'un matériel spécialisé afin de localiser la zone de fuite.",
    usages: [
      'Canalisations enterrées',
      "Réseaux d'alimentation en eau",
      'Fuites situées sous une dalle',
    ],
  },
  {
    icon: Wind,
    title: 'Recherche de fuite par gaz traceur',
    description:
      "Le gaz traceur est une méthode utilisée pour localiser certaines fuites difficiles à détecter. Un gaz inoffensif est injecté dans la canalisation. Lorsqu'il s'échappe par la fuite, il remonte à la surface et peut être détecté à l'aide d'un appareil spécifique.",
    usages: [
      'Réseaux enterrés',
      'Fuites sous dalle',
      'Micro-fuites difficiles à repérer',
    ],
  },
  {
    icon: TestTube2,
    title: 'Détection de fuite par fluorescéine',
    description:
      "La fluorescéine est un colorant utilisé pour repérer certaines fuites d'eau ou infiltrations. Ce produit permet de suivre le cheminement de l'eau et d'identifier l'origine d'une infiltration.",
    usages: [
      "Recherche d'infiltration",
      "Test d'étanchéité",
      "Détection de cheminement de l'eau",
    ],
  },
  {
    icon: Waves,
    title: 'Détection de fuite par fumigation',
    description:
      "La fumigation consiste à injecter une fumée visible dans une canalisation ou un réseau afin de repérer l'endroit où elle s'échappe.",
    usages: [
      "Recherche de défaut d'étanchéité",
      "Contrôle de réseau d'évacuation",
      'Détection de fuite sur réseau enterré',
    ],
  },
  {
    icon: Camera,
    title: 'Inspection de canalisation par caméra',
    description:
      "L'inspection par caméra permet de visualiser l'intérieur d'une canalisation afin d'identifier certaines anomalies ou zones suspectes.",
    usages: [
      'Inspection de canalisation',
      "Vérification de réseaux d'évacuation",
      'Localisation de zones suspectes',
    ],
  },
  {
    icon: Radio,
    title: 'Détection par corrélation acoustique',
    description:
      "La corrélation acoustique est utilisée pour localiser une fuite sur une canalisation enterrée entre deux points du réseau. Cette technique permet de déterminer précisément la zone de fuite.",
    usages: [
      'Canalisation enterrée longue distance',
      'Réseau d\'alimentation en eau',
    ],
  },
]

export default function MethodesPage() {
  return (
    <>
      <JsonLd />
      <BreadcrumbJsonLd
        items={[{ label: 'Méthodes de recherche de fuite', href: '/methodes-recherche-fuite' }]}
      />
      <Breadcrumbs items={[{ label: 'Méthodes de recherche de fuite' }]} />

      {/* Hero */}
      <PageHero>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Méthodes de recherche de fuite sans destruction
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed">
          Une fuite d&apos;eau n&apos;est pas toujours visible immédiatement. Elle peut
          se situer dans une canalisation enterrée, sous une dalle ou dans le
          réseau hydraulique d&apos;une piscine. Pour localiser précisément
          l&apos;origine du problème, différentes méthodes de détection peuvent
          être utilisées. Ces techniques permettent généralement de trouver une
          fuite sans casser inutilement les sols ou les murs.
        </p>
      </PageHero>

      {/* Pourquoi */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Pourquoi utiliser des méthodes de détection de fuite ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorsqu&apos;une fuite n&apos;est pas visible, il est souvent difficile
              d&apos;identifier précisément l&apos;endroit où l&apos;eau s&apos;échappe.
              Les méthodes de recherche de fuite permettent d&apos;analyser le réseau
              et de localiser la zone du problème avec précision.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Éviter des travaux inutiles', 'Éviter des recherches destructives', 'Éviter des réparations approximatives'].map((item) => (
                <span key={item} className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 shadow-sm border border-gray-100">
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Méthodes détaillées */}
      {methodes.map((methode, index) => (
        <section
          key={index}
          className={`py-16 lg:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <methode.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-sora text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {methode.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {methode.description}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Utilisée pour :
                    </p>
                    <ul className="space-y-1">
                      {methode.usages.map((usage, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                          {usage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Rapport assurance */}
      <section className="py-16 lg:py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h2 className="font-sora text-2xl sm:text-3xl font-bold mb-4">
                  Rapport de recherche de fuite pour assurance
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  À l&apos;issue d&apos;une recherche de fuite, un rapport
                  d&apos;intervention peut être remis. Ce document précise les
                  investigations réalisées, les méthodes de détection utilisées et
                  la localisation probable de l&apos;origine de la fuite.
                </p>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Ce rapport peut être transmis à votre assurance, à votre syndic
                  ou à l&apos;entreprise chargée de la réparation afin de faciliter
                  la prise en charge du sinistre.
                </p>
                <p className="text-blue-200 text-sm">
                  Les recherches de fuite peuvent également être réalisées à la
                  demande d&apos;un syndic, d&apos;un expert d&apos;assurance ou
                  d&apos;une entreprise chargée de la réparation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
