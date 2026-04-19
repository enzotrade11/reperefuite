import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Recherche de Fuite - Ain-Sud (01) | RepereFuite",
  description: "Intervention rapide pour recherche de fuite sans destruction en Ain-Sud (01).",
}

export default function AinSudPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/zones-intervention" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux zones d'intervention
          </Link>
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intervention en Ain-Sud (01)
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                RepereFuite intervient rapidement dans le sud de l'Ain, notamment vers Miribel, Beynost, Neyron et Ambérieu-en-Bugey, pour la recherche de vos fuites d'eau. Que ce soit sur une canalisation enterrée ou en intérieur, nous utilisons des techniques d'inspection non destructives de pointe.
              </p>
              
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-beynost-piscine.jpg"
                  alt="Expert en Recherche de Fuite de Piscine à Beynost (01700)"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🏊 Expert en Recherche de Fuite de Piscine à Beynost (01700)
                  </h2>
                  <p className="mt-0">
                    Votre bassin perd du niveau ? Vous suspectez une fissure ou un problème d'étanchéité ? RepereFuite.fr est le spécialiste de la <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">détection sans casse</Link> sur la Côtière. Nous réalisons chaque recherche de <Link href="/recherche-fuite-canalisation-enterree" className="text-secondary font-medium hover:underline">canalisation enterrée</Link> liée aux circuits hydrauliques de votre <Link href="/recherche-fuite-piscine" className="text-secondary font-medium hover:underline">piscine</Link> (refoulement, prise balai, skimmers) avec une précision absolue.
                  </p>
                  <p className="mb-6">
                    Nous intervenons en urgence à Beynost, mais aussi dans les villes de Saint-Maurice-de-Beynost, Miribel, La Boisse et Neyron pour sauver votre saison de baignade.
                  </p>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🏗️ Diagnostic technique et recherche de canalisation enterrée dans le 01</h3>
                  <p className="mb-4">
                    Localiser une <Link href="/recherche-fuite-piscine" className="text-secondary font-medium hover:underline">fuite sous une plage de piscine</Link> ou un dallage sans rien détruire est un défi que nous relevons grâce à notre équipement de pointe. À Beynost, nous passons votre installation au crible :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💨</span> 
                      <div>
                        <strong>Gaz Traceur (Azote-Hydrogène) :</strong> La solution n°1 pour la recherche de canalisation enterrée sous les terrasses ou les jardins entourant le bassin.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🎧</span> 
                      <div>
                        <strong>Écoute Acoustique (Ultra-sons) :</strong> Pour cibler précisément le bruit de la fuite sur les conduits de filtration.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🧪</span> 
                      <div>
                        <strong>Test de mise sous pression :</strong> Vérification individuelle de chaque réseau pour isoler le tronçon défectueux.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📹</span> 
                      <div>
                        <strong>Inspection Vidéo HD :</strong> Exploration interne des tuyaux pour détecter un déboîtement ou un écrasement de gaine.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🔬</span> 
                      <div>
                        <strong>Contrôle du Liner et des joints :</strong> Détection par colorants traceurs des micro-fissures sur les skimmers, projecteurs et buses.
                      </div>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🏆 Pourquoi choisir RepereFuite.fr pour votre piscine à Beynost ?</h3>
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🛠️</span> 
                      <div>
                        <strong>Zéro Casse Inutile :</strong> Grâce à notre expertise en recherche de canalisation enterrée, nous évitons de détruire vos margelles ou votre plage de piscine au hasard.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📑</span> 
                      <div>
                        <strong>Rapport d'Expertise Assurance :</strong> Nous fournissons un rapport technique complet indispensable pour le remboursement des frais de recherche par votre <Link href="/contact" className="text-secondary font-medium hover:underline">assurance</Link>.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📍</span> 
                      <div>
                        <strong>Savoir-faire Local :</strong> Une connaissance parfaite des terrains de la Côtière pour une intervention rapide à Beynost et dans tout le 01.
                      </div>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    🔥 Ne laissez pas votre budget "s'évaporer" ! Une fuite de piscine peut doubler votre facture d'eau et fragiliser le sol autour du bassin. Confiez votre diagnostic à un expert certifié.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Contactez votre expert piscine au 07.85.43.24.08</Link>
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
