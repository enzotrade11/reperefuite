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
              
              {/* Cas client Lorette */}
              <div className="mt-12 bg-light p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-6">
                  Cas client : Dégât des eaux en appartement à Lorette (42)
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-4 text-base">
                    <p>
                      La photo ci-contre illustre parfaitement l'urgence d'un <strong>dégât des eaux en appartement</strong> : la peinture cloque, le plâtre gonfle, et l'humidité s'installe insidieusement dans les murs. Lors de cette intervention récente à <strong>Lorette (42)</strong>, la fuite était totalement invisible et encastrée.
                    </p>
                    <p>
                      Grâce à nos technologies non destructives, nous avons ciblé l'origine exacte de l'infiltration. Notre expertise en <Link href="/degat-des-eaux-appartement" className="text-primary hover:underline font-semibold">recherche de fuite en appartement</Link> permet de stopper l'aggravation des dommages sans aucune démolition.
                    </p>
                    <p>
                      La source provenait d'une canalisation noyée dans la maçonnerie. Si vous constatez ces symptômes chez vous, ne laissez pas l'eau ronger votre intérieur : découvrez notre solution de <Link href="/fuite-sous-dalle-encastree" className="text-primary hover:underline font-semibold">détection de fuite sous dalle et encastrée</Link>. 
                    </p>
                  </div>
                  <div className="w-full md:w-5/12 shrink-0">
                    <img 
                      src="/images/degat-eaux-lorette.jpg" 
                      alt="Peinture cloquée et mur gonflé suite à un dégât des eaux dans un appartement à Lorette 42" 
                      className="w-full h-auto rounded-2xl shadow-sm border border-gray-200"
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center italic">
                      Dégâts visibles sur cloisons (Intervention Lorette, 42)
                    </p>
                  </div>
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
