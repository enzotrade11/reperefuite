import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: "Recherche de Fuite - Loire-Nord (42) | RepereFuite",
  description: "Intervention rapide pour recherche de fuite sans destruction dans la Loire-Nord (42).",
}

export default function LoireNordPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/zones-intervention" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux zones d'intervention
          </Link>
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intervention en Loire-Nord (42)
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                RepereFuite intervient rapidement en Loire-Nord pour résoudre et localiser vos fuites complexes sans casser vos murs, sols ou terrasses. Nous utilisons l'inspection vidéo, la détection électro-acoustique ou encore le gaz traceur.
              </p>
              
              {/* Espace pour ajouts futurs par l'utilisateur */}
              <div className="mt-8 p-8 border-2 border-dashed border-gray-200 bg-gray-50 rounded-2xl text-center">
                <p className="text-gray-500 font-medium">
                  Espace réservé au contenu futur
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Vous pourrez ajouter ici du texte détaillé, des photos de vos interventions dans la Loire et des vidéos spécifiques à cette zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MiddleCTA />
    </>
  )
}
