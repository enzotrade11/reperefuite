import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Recherche de Fuite - Est Lyonnais | RepereFuite",
  description: "Intervention rapide pour recherche de fuite sans destruction dans l'Est Lyonnais.",
}

export default function EstLyonnaisPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/zones-intervention" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux zones d'intervention
          </Link>
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intervention dans l'Est Lyonnais
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                RepereFuite intervient rapidement dans tout l'Est Lyonnais pour vos besoins en recherche de fuite sans destruction.
                Que ce soit pour une habitation, une piscine ou une canalisation enterrée, nos techniciens sont équipés des dernières technologies non destructives adaptées à votre environnement.
              </p>
              
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-bron-toiture.jpg"
                  alt="Intervention recherche de fuite toiture terrasse à Bron (69500)"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    Recherche de fuite sur toiture terrasse à Bron (69500)
                  </h2>
                  <p className="mt-0">
                    Nouvelle intervention réussie pour RepereFuite.fr ! Nous avons été sollicités pour une infiltration d'eau complexe sur une <Link href="/recherche-fuite-terrasse-lyon" className="text-secondary font-medium hover:underline">toiture terrasse</Link> dans la commune de Bron.
                  </p>
                  <p>
                    Grâce à l'utilisation de colorants traceurs (fluorescéine) et à une inspection minutieuse, nous avons localisé avec précision une fissure critique dans le revêtement d'étanchéité, invisible à l'œil nu.
                  </p>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">Pourquoi nous choisir à Bron ?</h3>
                  <ul className="list-none pl-0 space-y-4 my-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">✅</span> 
                      <div>
                        <strong>Diagnostic sans casse :</strong> Nous trouvons l'origine sans dégrader votre toit grâce à <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">nos méthodes expertes</Link>.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">✅</span> 
                      <div>
                        <strong>Expertise locale :</strong> Intervention très rapide sur Bron, Chassieu, Saint-Priest et tout l'Est Lyonnais.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">✅</span> 
                      <div>
                        <strong>Rapport détaillé :</strong> Un document complet vous est remis pour votre assurance afin de déclencher les <Link href="/diagnostic-humidite" className="text-secondary font-medium hover:underline">réparations suite à l'infiltration</Link>.
                      </div>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    Ne laissez pas une infiltration d'eau dégrader votre plafond ou votre isolation. Une détection précise limite grandement les coûts de réparation.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 Besoin d'un diagnostic à Bron ? <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Cliquez ici pour nous appeler !</Link>
                  </p>
                </div>
              </div>

              {/* Intervention Meyzieu */}
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-meyzieu-canalisation.jpg"
                  alt="Recherche de fuite canalisation enterrée à Meyzieu (69330)"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🔍 Recherche de fuite canalisation enterrée à Meyzieu (69330)
                  </h2>
                  <p className="mt-0">
                    Votre facture d'eau s'envole ou votre terrain s'affaisse ? RepereFuite.fr intervient en urgence à Meyzieu pour localiser vos fuites invisibles sous terre, sans rien casser !
                  </p>
                  <p>
                    Spécialistes des <Link href="/recherche-fuite-canalisation-enterree" className="text-secondary font-medium hover:underline">canalisations enterrées</Link> dans l'Est Lyonnais, nous utilisons des technologies de pointe pour un diagnostic ultra-précis :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 my-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💨</span> 
                      <div>
                        <strong>Gaz traceur :</strong> Injection (Azote-Hydrogène) pour les <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">fuites indétectables</Link>.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🎧</span> 
                      <div>
                        <strong>Corrélation acoustique :</strong> Pour écouter le sol et cibler le point de rupture avec précision.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📹</span> 
                      <div>
                        <strong>Caméra endoscopique :</strong> Pour l'inspection vidéo interne de vos évacuations.
                      </div>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">Pourquoi nous appeler à Meyzieu ?</h3>
                  <ul className="list-none pl-0 space-y-4 my-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💰</span> 
                      <div>
                        <strong>Économie :</strong> On ne creuse qu'au bon endroit. Pas besoin de retourner tout votre jardin ou de casser votre belle terrasse !
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📍</span> 
                      <div>
                        <strong>Secteur :</strong> Intervention rapide sur Meyzieu, Décines, Jonage et Genas.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📑</span> 
                      <div>
                        <strong>Assurance :</strong> Nous fournissons un rapport d’expertise complet pour votre prise en charge sinistre (valable pour votre <Link href="/contact" className="text-secondary font-medium hover:underline">assurance</Link>).
                      </div>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    Ne laissez pas l'eau gaspiller votre argent. Faites appel au savoir-faire de RepereFuite.fr.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Contactez-nous pour un devis ou une intervention immédiate !</Link>
                  </p>
                </div>
              </div>
              
              {/* Intervention Décines */}
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-decines-fuite.jpg"
                  alt="Intervention fuite d'eau enterrée à Décines-Charpieu (69150)"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🛑 Stop au gaspillage : Localisez votre fuite enterrée à Décines-Charpieu (69150) sans rien casser !
                  </h2>
                  <p className="mt-0">
                    Votre compteur d'eau s'affole ou une zone humide apparaît dans votre jardin ? Une <Link href="/recherche-fuite-canalisation-enterree" className="text-secondary font-medium hover:underline">fuite invisible sous terre</Link> est une bombe à retardement pour votre portefeuille et vos fondations.
                  </p>
                  <p>
                    Récemment intervenus avec succès à Décines, les experts de RepereFuite.fr ont sécurisé des installations en localisant des fuites complexes sans aucune destruction. Notre savoir-faire ne s'arrête pas aux frontières de la ville : nous déployons notre arsenal technologique à Décines-Charpieu, mais aussi dans toutes les communes voisines comme Villeurbanne, Vaulx-en-Velin et Meyzieu.
                  </p>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🎯 Pourquoi sommes-nous les leaders de la détection dans l'Est Lyonnais ?</h3>
                  <p className="mb-4">
                    Casser au hasard est une erreur coûteuse. Nous utilisons des technologies de pointe pour un <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">diagnostic chirurgical</Link> :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">⚡</span> 
                      <div>
                        <strong>Gaz Traceur haute précision :</strong> Pour détecter l'indétectable sous dalle béton ou bitume.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🎧</span> 
                      <div>
                        <strong>Corrélation Acoustique :</strong> Nous écoutons le sol pour cibler le point de rupture exact.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">👁️</span> 
                      <div>
                        <strong>Inspection Vidéo HD :</strong> Une immersion totale dans vos canalisations pour voir l'invisible.
                      </div>
                    </li>
                  </ul>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">💎 Le contrat RepereFuite.fr : Proximité et Expertise</h3>
                  <p className="mb-4">
                    Basés au cœur de votre secteur, nous quadrillons l'Est Lyonnais pour une réactivité maximale. En nous choisissant, vous obtenez :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📍</span> 
                      <div>
                        <strong>Une précision millimétrée :</strong> On localise, vous réparez à moindre frais. Pas de tranchées inutiles dans votre jardin !
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📑</span> 
                      <div>
                        <strong>Un rapport blindé pour l'assurance :</strong> Nous fournissons un dossier technique complet. Vos frais de recherche sont souvent remboursés à 100% par votre <Link href="/contact" className="text-secondary font-medium hover:underline">assurance habitation</Link> !
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🚀</span> 
                      <div>
                        <strong>Rayonnement Local :</strong> Que vous soyez à Décines, Meyzieu, Villeurbanne ou Vaulx-en-Velin, nous sommes chez vous en un temps record.
                      </div>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    🔥 Ne laissez pas l'eau gagner du terrain ! Intervention immédiate à Décines et dans tout l'Est Lyonnais.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Appelez maintenant pour une intervention | Diagnostic expert – Rapport officiel</Link>
                  </p>
                </div>
              </div>

              {/* Intervention Vaulx-en-Velin */}
              <div className="mt-12 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-vaulx-piscine.jpg"
                  alt="Intervention recherche de fuite piscine à Vaulx-en-Velin"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🏊 Plongez l'esprit tranquille : Recherche de fuite Piscine à Vaulx-en-Velin (69120)
                  </h2>
                  <p className="mt-0">
                    Une baisse anormale du niveau d'eau de votre bassin vous inquiète ? L'équipe de RepereFuite.fr, historiquement basée à Vaulx-en-Velin, est récemment intervenue pour résoudre un cas critique de <Link href="/recherche-fuite-piscine" className="text-secondary font-medium hover:underline">fuite d'eau sur une piscine</Link> résidentielle de la commune.
                  </p>
                  <p>
                    En tant qu'acteurs locaux incontournables, nous mettons toute notre expertise en <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">recherche de fuite non destructive</Link> au profit de nos voisins Vaudais et grands Lyonnais. Notre but ? Sauver vos installations aquatiques avant de coûteux travaux de démolition.
                  </p>
                  
                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🔬 Des technologies de pointe certifiées Zéro Casse</h3>
                  <p className="mb-4">
                    Que vous possédiez une piscine béton, coque ou liner, nous préservons vos abords et votre terrasse. Nos techniciens qualifiés déploient des méthodes infaillibles :
                  </p>
                  
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💦</span> 
                      <div>
                        <strong>Mise sous pression :</strong> Contrôle ciblé des bondes de fond, refoulements et skimmers pour repérer ou exclure toute <Link href="/recherche-fuite-canalisation-enterree" className="text-secondary font-medium hover:underline">fuite de canalisation enterrée</Link>.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💨</span> 
                      <div>
                        <strong>Détection sous plage au Gaz Traceur :</strong> Injection sécurisée pour isoler les ruptures de réseaux invisibles cachées sous les margelles et le carrelage.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🎧</span> 
                      <div>
                        <strong>Détection Ultrasonique :</strong> Une écoute ultra-sensible capable de capter avec précision les sifflements d'eau à travers les parois.
                      </div>
                    </li>
                  </ul>

                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🏆 L'Avantage RepereFuite.fr à Vaulx-en-Velin</h3>
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📍</span> 
                      <div>
                        <strong>L'Ultra-Proximité :</strong> Notre siège étant situé à Vaulx-en-Velin, nous vous garantissons une réactivité exceptionnelle sur votre secteur et dans tout l'Est Lyonnais !
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">📑</span> 
                      <div>
                        <strong>Rapport officiel pour Assurance :</strong> A l'issue du constat, un rapport technique complet vous est fourni. Il facilitera vos démarches et la prise en charge par votre <Link href="/contact" className="text-secondary font-medium hover:underline">assurance habitation</Link>.
                      </div>
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    🔥 N'attendez pas de voir votre facture d'eau s'envoler ou la terre s'affaisser ! Un diagnostic rapide préserve la structure de votre terrasse.
                  </div>
                  
                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Contactez de suite votre expert local (Vaulx-en-Velin) pour une intervention rapide !</Link>
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
