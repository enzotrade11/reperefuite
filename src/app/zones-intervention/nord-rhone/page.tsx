import { Metadata } from 'next'
import MiddleCTA from '@/components/sections/MiddleCTA'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'
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

              {/* Bloc 2 — Intervention Villefranche-sur-Saône toiture cheminée */}
              <div className="mt-16 overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
                <Image
                  src="/images/intervention-villefranche-toiture-cheminee.jpg"
                  alt="Recherche de fuite toiture cheminée à Villefranche-sur-Saône (69400) – test fluorescéine"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                    🏠 Recherche de Fuite Toiture &amp; Cheminée à Villefranche-sur-Saône (69400)
                  </h2>
                  <p className="mt-0">
                    Vous constatez des <strong>infiltrations d'eau</strong> autour de votre cheminée ou au niveau de la toiture ? C'est l'un des désordres les plus fréquents que nous rencontrons dans le secteur de <strong>Villefranche-sur-Saône</strong>. L'eau s'infiltre souvent au niveau de l'<strong>abergement de cheminée</strong> (jonction entre la maçonnerie et la couverture), des <strong>solins dégradés</strong> ou des <strong>tuiles fissurées</strong>.
                  </p>
                  <p>
                    Sur cette intervention à Villefranche-sur-Saône, notre technicien a réalisé un <strong>test à la fluorescéine</strong> pour tracer le cheminement exact de l'eau. Le colorant vert visible sur la photo confirme une <Link href="/diagnostic-infiltration-toiture" className="text-secondary font-medium hover:underline">infiltration au niveau du solin de cheminée</Link>. Ce diagnostic précis permet d'éviter des travaux inutiles et de cibler la réparation au bon endroit.
                  </p>

                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🔍 Comment nous détectons les fuites de toiture ?</h3>
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🟢</span>
                      <div>
                        <strong>Test à la fluorescéine :</strong> Nous appliquons un colorant fluorescent vert sur les zones suspectes de la toiture. Si le traceur apparaît à l'intérieur, la fuite est confirmée et localisée avec précision.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🌡️</span>
                      <div>
                        <strong>Caméra thermique infrarouge :</strong> Elle révèle les zones humides invisibles à l'œil nu dans les murs, plafonds et combles, même sans traces apparentes.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">💨</span>
                      <div>
                        <strong>Test fumigène :</strong> Idéal pour les toitures complexes, la fumée révèle les passages d'air et d'eau au niveau des raccords, faîtages et noues.
                      </div>
                    </li>
                  </ul>

                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">⚠️ Pourquoi agir vite en cas de fuite de toiture ?</h3>
                  <p className="mb-4">
                    Une <strong>infiltration de toiture non traitée</strong> peut entraîner des dégâts considérables en quelques semaines :
                  </p>
                  <ul className="list-none pl-0 space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🏚️</span>
                      <div>
                        <strong>Dégradation de la charpente :</strong> L'humidité permanente fragilise le bois et favorise les insectes xylophages (capricornes, vrillettes).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">🦠</span>
                      <div>
                        <strong>Moisissures et problèmes de santé :</strong> L'eau stagnante derrière les murs crée un environnement propice aux moisissures, nocives pour les voies respiratoires.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-xl leading-tight">⚡</span>
                      <div>
                        <strong>Risque électrique :</strong> L'eau qui chemine dans les murs peut atteindre les gaines électriques et provoquer des courts-circuits.
                      </div>
                    </li>
                  </ul>

                  <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">📍 Nos interventions toiture dans le Nord-Rhône</h3>
                  <p className="mb-4">
                    Nous intervenons régulièrement pour des <Link href="/diagnostic-infiltration-toiture" className="text-secondary font-medium hover:underline">recherches de fuite de toiture</Link> dans tout le secteur nord du Rhône : <strong>Villefranche-sur-Saône</strong>, <strong>Gleizé</strong>, <strong>Limas</strong>, <strong>Arnas</strong>, <strong>Belleville-en-Beaujolais</strong>, <strong>Anse</strong>, <strong>Pommiers</strong>, <strong>Jassans-Riottier</strong> et <strong>Trévoux</strong>.
                  </p>
                  <p className="mb-6">
                    Que ce soit pour une fuite au niveau d'un <strong>abergement de cheminée</strong>, d'un <strong>velux</strong>, d'une <strong>noue</strong> ou d'une <strong>gouttière encastrée</strong>, notre <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">méthode sans destruction</Link> vous garantit un diagnostic fiable, un <strong>rapport d'expertise pour votre assurance</strong> et zéro dégât supplémentaire.
                  </p>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                    🔥 Infiltration toiture détectée à Villefranche-sur-Saône grâce au test fluorescéine ! Ne laissez pas l'eau s'infiltrer davantage. Contactez Répère Fuite pour un diagnostic rapide et sans casse.
                  </div>

                  <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                    📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Demandez votre diagnostic toiture dans le 69400 !</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 3 — Recherche de fuite piscine Cailloux-sur-Fontaines */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
              <Image
                src="/images/intervention-cailloux-fontaines-piscine.jpg"
                alt="Recherche de fuite piscine avec caméra RIDGID à Cailloux-sur-Fontaines (69270)"
                width={800}
                height={600}
                className="w-full h-64 md:h-80 object-cover m-0 hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 800px"
                quality={80}
              />
              <div className="p-6 sm:p-8 prose prose-lg text-gray-600">
                <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4 font-sora">
                  🏊 Recherche de Fuite Piscine à Cailloux-sur-Fontaines (69270)
                </h2>
                <p className="mt-0">
                  Votre <strong>piscine perd de l'eau</strong> de manière anormale ? Le niveau baisse de plusieurs centimètres par jour malgré l'absence d'évaporation ? Vous suspectez une <strong>fuite sur le bassin</strong>, les canalisations enterrées ou le local technique ? <strong>Répère Fuite</strong> intervient à <strong>Cailloux-sur-Fontaines</strong> et dans tout le Nord-Rhône pour localiser précisément l'origine de la perte d'eau.
                </p>
                <p>
                  Sur cette intervention à Cailloux-sur-Fontaines (69270), notre technicien utilise une <strong>caméra d'inspection vidéo RIDGID micro CA-350x</strong> pour examiner l'intérieur des canalisations de la piscine. Cet équipement professionnel nous permet de visualiser en temps réel l'état des tuyaux (fissures, déboîtements, racines) sans aucune <Link href="/methodes-recherche-fuite" className="text-secondary font-medium hover:underline">démolition</Link>.
                </p>

                <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">🔍 Nos méthodes de détection de fuite piscine</h3>
                <ul className="list-none pl-0 space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">📹</span>
                    <div>
                      <strong>Inspection vidéo des canalisations :</strong> Une micro-caméra est introduite dans les tuyaux d'aspiration et de refoulement pour détecter les fissures, les joints défaillants ou les déboîtements invisibles depuis l'extérieur.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">💨</span>
                    <div>
                      <strong>Test de mise en pression :</strong> Chaque ligne hydraulique (skimmer, bonde de fond, refoulement, prise balai) est testée individuellement pour identifier la canalisation défectueuse.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">🟢</span>
                    <div>
                      <strong>Test au colorant (fluorescéine) :</strong> Le colorant est injecté à proximité des pièces à sceller (skimmers, projecteurs, buses) pour voir si l'eau s'échappe du bassin à travers un joint ou une micro-fissure.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">👂</span>
                    <div>
                      <strong>Écoute acoustique :</strong> Grâce à un amplificateur de sons au sol, nous détectons le bruit caractéristique de l'eau qui fuit sous la plage ou dans le terrain, même à travers le béton.
                    </div>
                  </li>
                </ul>

                <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">⚠️ Les signes d'une fuite de piscine</h3>
                <ul className="list-none pl-0 space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">📉</span>
                    <div>
                      <strong>Baisse du niveau d'eau :</strong> Plus de 3 à 5 mm par jour de perte (au-delà de l'évaporation normale) indique presque toujours une fuite.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">🌿</span>
                    <div>
                      <strong>Zones humides autour du bassin :</strong> De l'herbe anormalement verte ou des flaques persistantes autour de la piscine sont des indices révélateurs.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">💧</span>
                    <div>
                      <strong>Surconsommation d'eau :</strong> Si vous devez remplir votre piscine plus souvent que d'habitude, une <Link href="/surconsommation-eau-facture-elevee" className="text-secondary font-medium hover:underline">surconsommation anormale</Link> doit vous alerter.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl leading-tight">🔧</span>
                    <div>
                      <strong>Bulles d'air dans le circuit :</strong> Des prises d'air dans le système de filtration signalent souvent une fuite sur la canalisation d'aspiration.
                    </div>
                  </li>
                </ul>

                <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">📍 Piscines dans le Nord-Rhône : nous intervenons partout</h3>
                <p className="mb-4">
                  Spécialistes de la <Link href="/recherche-fuite-piscine" className="text-secondary font-medium hover:underline">recherche de fuite piscine</Link>, nous couvrons toutes les communes du Nord du Rhône : <strong>Cailloux-sur-Fontaines</strong>, <strong>Rillieux-la-Pape</strong>, <strong>Fontaines-sur-Saône</strong>, <strong>Neuville-sur-Saône</strong>, <strong>Genay</strong>, <strong>Montanay</strong>, <strong>Fleurieu-sur-Saône</strong>, <strong>Albigny-sur-Saône</strong> et <strong>Collonges-au-Mont-d'Or</strong>.
                </p>
                <p className="mb-4">
                  Que votre piscine soit en <strong>béton</strong>, en <strong>liner</strong>, en <strong>coque polyester</strong> ou en <strong>carrelage</strong>, nous adaptons notre méthode de recherche. Nos interventions concernent aussi bien les <Link href="/detection-fuite-piscine-enterree" className="text-secondary font-medium hover:underline">piscines enterrées</Link> que les bassins semi-enterrés.
                </p>

                <h3 className="font-bold text-lg text-gray-900 mt-6 mb-4">📑 Rapport d'expertise inclus</h3>
                <p className="mb-6">
                  À l'issue de notre intervention, vous recevez un <strong>rapport technique complet</strong> avec photos, schémas et localisation précise de la fuite. Ce document est indispensable pour votre <strong>pisciniste</strong> (travaux de réparation ciblés) et peut servir dans le cadre d'un dossier d'assurance si la fuite a causé des dommages collatéraux.
                </p>

                <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6 text-gray-800 font-medium">
                  🔥 Fuite piscine détectée à Cailloux-sur-Fontaines grâce à l'inspection vidéo RIDGID ! Ne laissez pas votre bassin se vider. Contactez Répère Fuite pour un diagnostic complet et sans casse.
                </div>

                <p className="font-semibold text-gray-800 mb-0 flex items-center gap-2">
                  📞 <Link href="/contact" className="text-accent underline font-bold hover:text-red-600 transition-colors">Demandez votre diagnostic piscine dans le 69270 !</Link>
                </p>
              </div>
            </div>

            {/* Maillage inter-pages piscine */}
            <div className="mt-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-sora font-bold text-gray-900 mb-4">Nos expertises piscine :</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/recherche-fuite-piscine" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Recherche Fuite Piscine</span>
                </Link>
                <Link href="/detection-fuite-piscine-lyon" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Détection Fuite Piscine Lyon</span>
                </Link>
                <Link href="/detection-fuite-piscine-enterree" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Piscine Enterrée – Diagnostic</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MiddleCTA />
    </>
  )
}
