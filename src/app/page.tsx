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
      <JsonLd />
      <Hero />
      <AssurancesCarousel />

      {/* Introduction SEO riche */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-blue max-w-none">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
              Expert en Recherche de Fuite d'Eau Sans Destruction à Lyon et Environs
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              Une fuite d'eau invisible peut causer des dégâts considérables avant même que la première goutte ne soit visible. À Lyon, Répère Fuite intervient avec des technologies de pointe pour localiser l'origine du sinistre sans rien casser.
            </p>
            <p>
              Que vous soyez confronté à une <strong>fuite d'eau dans votre maison</strong>, une consommation excessive inexpliquée ou une infiltration sur votre <strong>toiture terrasse à Lyon</strong>, notre équipe de techniciens spécialisés met tout en œuvre pour un diagnostic précis et rapide. La détection non destructive est l'assurance de protéger votre patrimoine tout en minimisant les coûts de réparation.
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
                Pourquoi choisir une détection de fuite non destructive ?
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Économies majeures", desc: "Évitez la démolition de carrelages, dalles ou cloisons pour chercher la fuite." },
                  { title: "Précision millimétrique", desc: "Nos outils (gaz traceur, acoustique) ciblent le point exact de la rupture." },
                  { title: "Rapport pour assurance", desc: "Nous remettons un dossier complet pour faciliter votre prise en charge par l'assurance." },
                  { title: "Rapidité d'intervention", desc: "Nous intervenons sous 48h dans tout l'Est Lyonnais et alentours." }
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
                <h3 className="font-sora text-xl font-bold text-primary mb-4">Notre Zone d'Action</h3>
                <p className="text-gray-700 mb-6">
                  Basés au cœur de l'Est Lyonnais, nous intervenons quotidiennement à <strong>Lyon, Villeurbanne, Bron, Meyzieu, Décines</strong>, ainsi que dans le Nord Isère (<strong>Bourgoin-Jallieu</strong>) et le Sud de l'Ain. Nos techniciens connaissent parfaitement les spécificités des constructions locales.
                </p>
                <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Consulter notre zone d'intervention <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <MiddleCTA />

      <WhyUs />
      <MethodesSummary />
      <ZoneIntervention />
      <SituationsLinks />
      <WhySansDestruction />
      <CTABanner />
    </>
  )
}
