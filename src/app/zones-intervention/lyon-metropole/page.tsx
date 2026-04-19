import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Recherche de Fuite - Lyon Métropole | RepereFuite",
  description: "Intervention rapide pour recherche de fuite sans destruction sur la métropole de Lyon.",
}

export default function LyonMetropolePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/zones-intervention" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux zones d'intervention
          </Link>
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intervention sur Lyon Métropole
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                RepereFuite intervient rapidement sur l'ensemble de la métropole de Lyon pour vos besoins en recherche de fuite sans destruction.
                Que ce soit pour une habitation, une piscine ou une canalisation enterrée, nos techniciens sont équipés des dernières technologies non destructives.
              </p>
              
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-lyon-bellecour.jpg"
                  alt="Intervention recherche de fuite Lyon Bellecour"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    Recherche de fuite non destructive à Lyon Bellecour 📍
                  </h2>
                  <p className="mt-0">
                    Besoin d'un expert en détection de fuite d'eau sans casse ? RepereFuite.fr est intervenu récemment au cœur du 2ème arrondissement, près de la Place Bellecour, pour une recherche de fuite complexe en milieu urbain.
                  </p>
                  <p>
                    Que ce soit pour une <Link href="/recherche-fuite-habitation" className="text-secondary font-medium hover:underline">infiltration en appartement</Link>, un problème de <Link href="/recherche-fuite-canalisation-enterree" className="text-secondary font-medium hover:underline">canalisation sous dalle</Link> ou une fuite de <Link href="/recherche-fuite-terrasse-lyon" className="text-secondary font-medium hover:underline">toiture-terrasse</Link> en Presqu'île, nous utilisons les <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">technologies les plus avancées</Link> :
                  </p>
                  <ul className="list-none pl-0 space-y-2 my-6">
                    <li className="flex items-center"><span className="mr-3 text-xl">🔬</span> Corrélation acoustique & Écoute ultrasonique</li>
                    <li className="flex items-center"><span className="mr-3 text-xl">💨</span> Gaz traceur pour les canalisations enterrées</li>
                    <li className="flex items-center"><span className="mr-3 text-xl">📸</span> Inspection vidéo par caméra endoscopique</li>
                    <li className="flex items-center"><span className="mr-3 text-xl">🌡️</span> Thermographie infrarouge</li>
                  </ul>
                  <p className="font-medium text-gray-800 mb-0">
                    Nous <Link href="/contact" className="text-secondary hover:underline">intervenons rapidement</Link> à Lyon Bellecour, Perrache et Cordeliers pour localiser l'origine du sinistre sans dégrader votre support. Un rapport détaillé vous est remis pour votre assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MiddleCTA />
    </>
  )
}
