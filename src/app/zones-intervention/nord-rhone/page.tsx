import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Recherche de Fuite - Nord-Rhône & Beaujolais (69) | RepereFuite",
  description: "Intervention rapide pour recherche de fuite sans destruction dans le Nord-Rhône et le Beaujolais (69).",
}

export default function NordRhonePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/zones-intervention" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux zones d'intervention
          </Link>
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intervention en Nord-Rhône & Beaujolais (69)
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                RepereFuite intervient rapidement dans le Nord du Rhône, notamment vers Villefranche-sur-Saône, Limas, Gleizé et le Beaujolais, pour vos besoins en recherche de fuite sans destruction.
                Nos techniciens localisent vos fuites d'eau avec précision et sans rien casser.
              </p>
              
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-limas-humidite.jpg"
                  alt="Recherche de fuite et diagnostic d'infiltration à Limas (69400)"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🔍 Recherche de Fuite et Diagnostic d’Infiltration à Limas (69400)
                  </h2>
                  <p className="mt-0">
                    Vous constatez une tache d'humidité au plafond ? Vos murs présentent des traces de moisissure ou une odeur de renfermé persiste ? Ces signes ne trompent pas : vous êtes probablement victime d’une <Link href="/diagnostic-humidite" className="text-secondary font-medium hover:underline">fuite invisible</Link>.
                  </p>
                  <p>
                    RepereFuite.fr intervient en urgence à Limas pour stopper les dégâts. Qu'il s'agisse d'une infiltration par la <Link href="/diagnostic-infiltration-toiture" className="text-secondary font-medium hover:underline">toiture</Link>, d'un défaut d'étanchéité en façade ou de <Link href="/recherche-fuite-canalisation-enterree" className="text-secondary font-medium hover:underline">canalisations cassées</Link> dissimulées sous vos sols, nous localisons l'origine du problème grâce à notre <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">recherche sans casse</Link>.
                  </p>
                  <p className="mb-6">
                    Basés à proximité du Beaujolais, nous couvrons Limas, mais aussi les communes alentours comme Villefranche-sur-Saône, Gleizé, Arnas, Pommiers et Anse.
                  </p>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🛠️ Pourquoi avez-vous des problèmes d'humidité à Limas ?</h3>
                  <p className="mb-4">
                    Une fuite peut avoir de multiples origines. Notre métier est de lever le doute grâce à un diagnostic technique complet :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📹</span> 
                      <div>
                        <strong>Canalisations cassées ou déboîtées :</strong> Souvent la cause d'une humidité soudaine dans les murs ou d'un affaissement de terrain. Nous utilisons l'inspection vidéo pour voir l'intérieur de vos tuyaux d'évacuation.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🔦</span> 
                      <div>
                        <strong>Infiltration d'eau :</strong> Qu'elle provienne d'une terrasse, d'une menuiserie ou d'un toit, nous traçons le cheminement de l'eau avec des colorants fluorescents (fluorescéine).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💨</span> 
                      <div>
                        <strong>Fuites invisibles sous dalle :</strong> Une surconsommation d'eau ? Le gaz traceur nous permet de cibler le point de rupture exact, même sous un carrelage ou une chape béton.
                      </div>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🏆 L'expertise RepereFuite.fr dans le 69400</h3>
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🛠️</span> 
                      <div>
                        <strong>Zéro Casse :</strong> On ne casse pas pour chercher, on localise pour réparer. C'est une économie majeure sur vos futurs travaux de plomberie.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🛑</span> 
                      <div>
                        <strong>Stop à la moisissure :</strong> En identifiant la source rapidement, nous stoppons la prolifération des champignons et préservons la santé de votre foyer.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📑</span> 
                      <div>
                        <strong>Dossier Assurance :</strong> Nous vous fournissons un rapport d'expertise détaillé. Ce document est la pièce maîtresse pour obtenir le remboursement des frais de recherche par votre <Link href="/contact" className="text-secondary font-medium hover:underline">assurance habitation</Link>.
                      </div>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    🔥 Ne laissez pas une fuite détruire votre habitat ! Dès les premiers signes d'humidité, agissez. Que vous soyez à Limas, Villefranche ou Anse, nous sommes votre partenaire de confiance.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Contactez vite votre expert local pour intervenir !</Link>
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
