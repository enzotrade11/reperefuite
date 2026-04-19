import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  MapPin,
  ShieldCheck,
  FlaskConical,
  Headphones,
  Camera,
  Gauge,
  Droplets,
  Zap,
  Search
} from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import AssurancesCarousel from '@/components/sections/AssurancesCarousel'
import MiddleCTA from '@/components/sections/MiddleCTA'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import PageHero from '@/components/sections/PageHero'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Recherche de Fuite Piscine Bourgoin-Jallieu (Nord Isère) | Zéro Casse',
  description:
    "Détection de fuite piscine sans casse à Bourgoin-Jallieu et Nord Isère. Gaz traceur, acoustique, colorant. Intervention rapide et rapport assurance.",
  alternates: {
    canonical: "https://reperefuite.fr/zones-intervention/nord-isere/recherche-fuite-piscine-bourgoin-jallieu",
  },
};

export default function PiscineBourgoinJallieuPage() {
  return (
    <>
      <JsonLd />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Zones d'intervention",
            href: "/zones-intervention",
          },
          {
            label: "Nord-Isère",
            href: "/zones-intervention/nord-isere",
          },
          {
            label: "Recherche de Fuite Piscine Bourgoin-Jallieu",
            href: "/zones-intervention/nord-isere/recherche-fuite-piscine-bourgoin-jallieu",
          },
        ]}
      />
      
      <PageHero>
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Intervention Nord Isère (38)
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Recherche de Fuite Piscine Sans Destruction à Bourgoin-Jallieu
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Vous constatez une baisse anormale du niveau d'eau de votre bassin ? Ne cassez pas votre terrasse inutilement ! 
          Spécialistes de la détection de fuite non-destructive, nous intervenons rapidement à <strong>Bourgoin-Jallieu</strong> et ses alentours pour localiser l'origine du problème avec précision.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Intervention Rapide
          </Button>
          <Button href="/contact" variant="white">
            Demander un diagnostic
          </Button>
        </div>
      </PageHero>

      <AssurancesCarousel />

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
          
          <section className="prose prose-blue max-w-none">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              L'expertise Zéro Casse au service de votre bassin à Bourgoin-Jallieu
            </h2>
            
            <div className="my-8 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <div className="relative w-full aspect-video sm:aspect-[21/9]">
                <Image 
                  src="/images/zones/bourgoin-colorant.jpg" 
                  alt="Test au colorant fluorescéine dans une piscine à Bourgoin-Jallieu" 
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-500 italic px-4 py-3 bg-gray-50 m-0 border-t border-gray-100">
                Test au colorant (fluorescéine) sur une pièce à sceller pour confirmer une fuite.
              </p>
            </div>
            
            <p>
              Grâce à nos technologies innovantes, nous inspectons vos installations de piscine sans endommager vos aménagements extérieurs. 
              Fini les tranchées et les destructions inutiles. Nous localisons la fuite pour que la réparation soit ciblée au centimètre près.
            </p>
          </section>

          <MiddleCTA />

          {/* Maillage inter-pages */}
          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10 mt-12 mb-12">
            <h3 className="font-sora font-bold text-gray-900 mb-4">Diagnostics liés :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recherche-fuite-piscine" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Search className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Recherche de fuite piscine (Toutes Régions)</span>
              </Link>
              <Link href="/zones-intervention/nord-isere" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Spécialiste Nord-Isère (38)</span>
              </Link>
              <Link href="/recherche-fuite-canalisation-enterree" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Réseaux extérieurs et enterrés</span>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              🛠️ Nos méthodes de pointe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Mise en pression", desc: "Pour tester l'étanchéité de vos canalisations et circuits hydrauliques (skimmers, refoulements, prise balai).", icon: Gauge },
                { title: "Inspection vidéo par caméra", desc: "Caméra endoscopique pour visualiser l'état interne des tuyaux (fissures, racines, écrasement).", icon: Camera },
                { title: "Détection acoustique", desc: "Ultrasons permettant de repérer le bruit précis d'une fuite sous terre et sous les dalles.", icon: Headphones },
                { title: "Gaz traceur", desc: "Une méthode ultra-précise pour les micro-fuites sur les canalisations enterrées les plus infimes.", icon: FlaskConical },
                { title: "Tests au colorant", desc: "Corrélation acoustique et test visuel à la seringue pour le contrôle des pièces à sceller.", icon: Droplets },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-light/50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary/5 p-8 md:p-12 rounded-[3rem] border border-primary/10">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" /> 📍 Zone d'intervention Nord-Isère
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Basés au cœur de la région, nous nous déplaçons rapidement dans le <strong>Nord-Isère (38)</strong>. 
              Notre proximité nous permet d'intervenir en urgence à <strong>Bourgoin-Jallieu</strong> ainsi que dans les communes voisines :
            </p>
            <div className="flex flex-wrap gap-3">
              {["Bourgoin-Jallieu", "L'Isle-d'Abeau", "Villefontaine", "La Tour-du-Pin", "Saint-Quentin-Fallavier", "Ruy-Montceau", "Saint-Savin", "Domarin"].map((city) => (
                <span key={city} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100">
                  {city}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
              ✨ Pourquoi nous choisir ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Économie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vous évitez des travaux de démolition coûteux et préservez l'esthétique de votre terrasse et du jardin.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapidité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un diagnostic clair en une seule intervention. La localisation précise permet une réparation ciblée et immédiate.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapport Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous fournissons un document complet d'expertise, pour votre assurance afin de faciliter la prise en charge.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button href={siteConfig.phoneTel} variant="accent" size="lg" className="shadow-lg shadow-accent/20">
                Demander votre devis gratuit
              </Button>
            </div>
          </section>

        </article>
      </div>

      <CTABanner />
    </>
  )
}
