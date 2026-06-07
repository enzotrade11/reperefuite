import Hero from '@/components/sections/Hero'
import AssurancesCarousel from '@/components/sections/AssurancesCarousel'
import SituationsGrid from '@/components/sections/SituationsGrid'
import ServicesCards from '@/components/sections/ServicesCards'
import WhyUs from '@/components/sections/WhyUs'
import MethodesSummary from '@/components/sections/MethodesSummary'
import ZoneIntervention from '@/components/sections/ZoneIntervention'
import SituationsLinks from './SituationsLinks'
import WhySansDestruction from './WhySansDestruction'
import CTABanner from '@/components/sections/CTABanner'
import MiddleCTA from '@/components/sections/MiddleCTA'
import JsonLd from '@/components/seo/JsonLd'
import HomeFAQ, { homeFaqItems } from '@/components/sections/HomeFAQ'
import QuickQuote from '@/components/sections/QuickQuote'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://reperefuite.fr',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd faqItems={homeFaqItems} />
      <Hero />
      <AssurancesCarousel />

      {/* Introduction SEO riche */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-blue max-w-none">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
              Expert Recherche de Fuite d&apos;Eau Sans Destruction — Lyon, Meyzieu, Bron, Décines, Vaulx-en-Velin
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              Une fuite d&apos;eau invisible peut causer des dégâts considérables avant même que la première goutte ne soit visible. À <strong>Lyon</strong>, <strong>Meyzieu</strong>, <strong>Bron</strong> et dans tout l&apos;Est Lyonnais, Répère Fuite intervient avec des technologies de pointe pour localiser l&apos;origine du sinistre sans rien casser.
            </p>
            <p>
              Que vous soyez confronté à une <strong>fuite d&apos;eau dans votre maison à Décines</strong>, une consommation excessive inexpliquée à <strong>Vaulx-en-Velin</strong>, une infiltration sur votre <strong>toiture terrasse à Chassieu</strong> ou une <strong>fuite de piscine à Saint-Priest</strong>, notre équipe de techniciens spécialisés met tout en œuvre pour un diagnostic précis et rapide. La détection non destructive est l&apos;assurance de protéger votre patrimoine tout en minimisant les coûts de réparation.
            </p>
          </article>
        </div>
      </section>

      <SituationsGrid />
      <ServicesCards />

      {/* Section Expertise Locale */}
      <section className="bg-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-6">
                Détection de fuite non destructive à Lyon et dans l&apos;Est Lyonnais
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Économies majeures", desc: "Évitez la démolition de carrelages, dalles ou cloisons à Meyzieu, Bron ou Genas — nous localisons sans casser." },
                  { title: "Précision millimétrique", desc: "Nos outils (gaz traceur, acoustique) ciblent le point exact de la rupture à Décines, Chassieu ou Saint-Priest." },
                  { title: "Rapport pour assurance", desc: "Nous remettons un dossier complet pour faciliter votre prise en charge par l'assurance, partout dans le Rhône (69)." },
                  { title: "Rapidité d'intervention", desc: "Intervention sous 48h à Vaulx-en-Velin, Rillieux-la-Pape, Caluire-et-Cuire et dans tout le Nord Isère." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h3 className="font-sora text-xl font-bold text-primary mb-4">Notre Zone d&apos;Action</h3>
                <p className="text-gray-700 mb-4">
                  Basés au cœur de l&apos;Est Lyonnais, nous intervenons quotidiennement à <strong>Lyon, Villeurbanne, Bron, Meyzieu, Décines-Charpieu, Chassieu, Genas, Saint-Priest, Vaulx-en-Velin, Rillieux-la-Pape, Caluire-et-Cuire</strong>.
                </p>
                <p className="text-gray-700 mb-6">
                  Nous couvrons également le Nord Isère (<strong>Bourgoin-Jallieu, L&apos;Isle-d&apos;Abeau</strong>) et le Sud de l&apos;Ain (<strong>Miribel, Beynost, Ambérieu-en-Bugey</strong>).
                </p>
                <Link href="/zones-intervention" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Consulter notre zone d&apos;intervention <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <QuickQuote />

      <MiddleCTA />

      <WhyUs />
      <MethodesSummary />
      <ZoneIntervention />
      <SituationsLinks />
      <WhySansDestruction />
      <HomeFAQ />
      <CTABanner />
    </>
  )
}
