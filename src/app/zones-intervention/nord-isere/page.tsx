import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Recherche de Fuite - Nord-Isère (38) | RepereFuite",
  description: "Intervention rapide pour recherche de fuite sans destruction dans le Nord-Isère (38).",
}

export default function NordIserePage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/zones-intervention" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux zones d'intervention
          </Link>
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intervention en Nord-Isère (38)
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                RepereFuite intervient rapidement en Nord-Isère (38), notamment vers Bourgoin-Jallieu, L'Isle-d'Abeau et Saint-Quentin-Fallavier, pour vos besoins en recherche de fuite sans destruction.
                Nos techniciens localisent vos fuites d'eau avec précision et sans rien casser.
              </p>
              
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-charvieu-infiltration.jpg"
                  alt="Recherche de fuite et infiltration à Charvieu-Chavagneux (38230)"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🏠 Expert en Recherche de Fuite et Infiltration à Charvieu-Chavagneux (38230)
                  </h2>
                  <p className="mt-0">
                    Vous constatez des traces d'humidité au plafond ? Un mur qui cloque ou une odeur de moisissure persistante ? Les <Link href="/diagnostic-humidite" className="text-secondary font-medium hover:underline">infiltrations d'eau</Link> sont insidieuses et peuvent gravement endommager la structure de votre habitat.
                  </p>
                  <p>
                    RepereFuite.fr est intervenu récemment à Charvieu-Chavagneux pour résoudre un problème d'infiltration complexe en <Link href="/diagnostic-infiltration-toiture" className="text-secondary font-medium hover:underline">toiture-terrasse</Link>. Grâce à nos <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">méthodes de détection non destructive</Link>, nous avons identifié l'origine précise du sinistre sans causer de dégâts supplémentaires à la propriété.
                  </p>
                  <p className="mb-4">
                    Spécialistes de l'Est Lyonnais et du <strong>Nord-Isère</strong>, nous intervenons rapidement à Charvieu-Chavagneux, mais aussi dans toutes les communes voisines : Pont-de-Chéruy, Tignieu-Jameyzieu, Janneyrias, Colombier-Saugnieu et Pusignan.
                  </p>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🔬 Un diagnostic de pointe pour stopper vos infiltrations</h3>
                  <p className="mb-4">
                    Identifier l'origine d'une humidité n'est pas une mince affaire. À Charvieu-Chavagneux, nous utilisons des technologies de pointe pour un diagnostic incontestable :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🌡️</span> 
                      <div>
                        <strong>Thermographie Infrarouge :</strong> Visualisation des ponts thermiques et des zones de rétention d'eau derrière les cloisons ou sous les toits.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🔦</span> 
                      <div>
                        <strong>Tests par Colorants Traceurs (Fluorescéine) :</strong> Idéal pour simuler une pluie et tracer le cheminement de l'eau sur les façades, balcons ou menuiseries.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💨</span> 
                      <div>
                        <strong>Gaz Traceur & Fumigène :</strong> Utilisés pour vérifier l'étanchéité des toitures-terrasses et des évacuations d'eaux pluviales.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🎧</span> 
                      <div>
                        <strong>Humidimètre de précision :</strong> Mesure du taux d'humidité des matériaux pour cartographier l'étendue des dégâts.
                      </div>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🏆 Pourquoi faire appel à RepereFuite.fr dans le 38230 ?</h3>
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🚀</span> 
                      <div>
                        <strong>Réactivité Nord-Isère :</strong> Basés à proximité de la zone commerciale de Tignieu, nous intervenons en un temps record pour limiter les dommages dans la <Link href="/recherche-fuite-habitation" className="text-secondary font-medium hover:underline">fuite habitation</Link>, mais aussi de <Link href="/recherche-fuite-piscine" className="text-secondary font-medium hover:underline">piscine</Link> ou de <Link href="/recherche-fuite-canalisation-enterree" className="text-secondary font-medium hover:underline">fuite après compteur</Link>.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📑</span> 
                      <div>
                        <strong>Rapport d'Expertise Assurance :</strong> Nous vous remettons un dossier technique détaillé. Ce document est indispensable pour obtenir la prise en charge de vos travaux de réparation par votre <Link href="/contact" className="text-secondary font-medium hover:underline">assurance habitation</Link>.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🛠️</span> 
                      <div>
                        <strong>Approche Zéro Casse :</strong> Notre mission est de localiser, pas de détruire. Vous économisez sur les frais de remise en état.
                      </div>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    🔥 Ne laissez pas l'humidité s'installer ! Une infiltration non traitée peut entraîner des problèmes de santé et une dépréciation de votre bien immobilier. Faites confiance à l'expertise de RepereFuite.fr.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Appelez votre expert local pour un diagnostic (Charvieu-Chavagneux, Pont-de-Chéruy, Tignieu...)</Link>
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
