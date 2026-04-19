import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Recherche de Fuite - Nord de Lyon | RepereFuite",
  description: "Intervention rapide pour recherche de fuite sans destruction au Nord de Lyon.",
}

export default function NordDeLyonPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/zones-intervention" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux zones d'intervention
          </Link>
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intervention au Nord de Lyon
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                RepereFuite intervient rapidement dans toute la zone Nord de Lyon pour vos besoins en recherche de fuite sans destruction.
                Que ce soit pour une habitation, une piscine ou une canalisation enterrée, nos techniciens sont équipés des dernières technologies non destructives adaptées à votre environnement.
              </p>
              
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-rillieux-piscine.jpg"
                  alt="Intervention recherche de fuite à Rillieux-la-Pape"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🏊 Expert en Recherche de Fuite de Piscine à Rillieux-la-Pape (69140)
                  </h2>
                  <p className="mt-0">
                    Votre bassin perd un niveau d'eau anormal ? Vous suspectez une <Link href="/recherche-fuite-piscine" className="text-secondary font-medium hover:underline">baisse de pression dans votre circuit de filtration</Link> ? RepereFuite.fr vient de réaliser une expertise technique sur une piscine résidentielle à Rillieux-la-Pape, évitant ainsi au propriétaire des travaux de terrassement coûteux et inutiles.
                  </p>
                  <p>
                    Spécialistes du diagnostic de <Link href="/recherche-fuite-piscine" className="text-secondary font-medium hover:underline">fuite d'eau sur bassins et équipements de baignade</Link>, nous intervenons rapidement dans tout le Nord de Lyon : de Caluire-et-Cuire à Sathonay-Village, en passant par Fontaines-sur-Saône, Miribel et Cailloux-sur-Fontaines.
                  </p>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🔍 Localisation de fuite sur bassin : Nos méthodes "Zéro Casse"</h3>
                  <p className="mb-4">
                    Une fuite sur une piscine peut provenir de multiples endroits. Nous inspectons chaque centimètre de votre installation grâce à des <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">outils de haute précision</Link> :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🔬</span> 
                      <div>
                        <strong>Test d'étanchéité des canalisations :</strong> Mise sous pression des circuits de refoulement, de la prise balai et du skimmer pour vérifier l'intégrité des tuyauteries enterrées.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🎧</span> 
                      <div>
                        <strong>Détection ultrasonique (Écoute acoustique) :</strong> Pour entendre les fuites d'eau sous les margelles ou derrière les parois du bassin.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💨</span> 
                      <div>
                        <strong>Inspection par Gaz Traceur :</strong> Localisation millimétrée des micro-fissures sur les réseaux de filtration dissimulés sous les plages de piscine.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">👁️</span> 
                      <div>
                        <strong>Contrôle du liner et des pièces à sceller :</strong> Vérification des brides, des projecteurs et des skimmers pour détecter tout défaut d'étanchéité ou fissure de la structure.
                      </div>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🏆 Pourquoi choisir RepereFuite.fr dans le Nord Lyonnais ?</h3>
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🛠️</span> 
                      <div>
                        <strong>Expertise Multimarque :</strong> Que vous ayez une piscine coque, béton ou avec liner, nous adaptons notre matériel de détection.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📑</span> 
                      <div>
                        <strong>Rapport pour Assurance :</strong> Une fuite de piscine peut être liée à un mouvement de terrain. Notre rapport d'expertise détaillé est votre meilleur allié pour <Link href="/contact" className="text-secondary font-medium hover:underline">monter un dossier de sinistre</Link>.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📍</span> 
                      <div>
                        <strong>Proximité Immédiate :</strong> Nous connaissons parfaitement le secteur de Rillieux et du Val de Saône, garantissant une intervention sous 48h.
                      </div>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    🔥 Ne laissez pas votre facture d'eau couler ! Sauvez votre saison de baignade à Rillieux-la-Pape et dans tout le 69.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Appelez votre technicien expert pour la recherche de fuite piscine</Link>
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
