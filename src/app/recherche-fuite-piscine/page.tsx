import type { Metadata } from 'next'
import Link from 'next/link'
import AssurancesCarousel from '@/components/sections/AssurancesCarousel'
import { CheckCircle2, ArrowRight, Droplets, MapPin, Wrench, Info, Thermometer, Gauge, Camera, FileText, FlaskConical, Headphones } from 'lucide-react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import MiddleCTA from '@/components/sections/MiddleCTA'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'
import PoolLadder from '@/components/ui/icons/PoolLadder'

export const metadata: Metadata = {
  title: 'Recherche de Fuite Piscine Lyon | Détection Sans Destruction | Répère Fuite',
  description:
    "Baisse du niveau de votre piscine ? Répère Fuite détecte les fuites sur bassin et canalisations à Lyon sans rien casser. Expertise technique et rapport assurance.",
  alternates: {
    canonical: "https://reperefuite.fr/recherche-fuite-piscine",
  },
};

const faqItems = [
  {
    question: "Comment savoir si ma piscine fuit ou si c'est l'évaporation ?",
    answer:
      "La méthode la plus simple est 'le test du seau' : placez un seau rempli d'eau sur une marche de la piscine et comparez la baisse de niveau entre le seau et le bassin. Si la piscine descend plus vite que le seau, vous avez une fuite. Une évaporation naturelle dépasse rarement 1 à 2 cm par semaine selon le climat.",
  },
  {
    question: "Quelles sont les causes fréquentes d'une fuite de piscine ?",
    answer:
      "Les fuites peuvent provenir des pièces à sceller (skimmers, buses de refoulement, prises balai), de la structure du bassin (fissures, liner percé), ou des canalisations enterrées reliant le bassin au local technique.",
  },
  {
    question: "L'assurance prend-elle en charge la recherche de fuite piscine ?",
    answer:
      "Oui, de nombreux contrats d'assurance habitation incluent une garantie 'Dégâts des eaux' qui couvre les frais de recherche de fuite non destructive. Notre rapport technique détaillé est indispensable pour votre dossier d'indemnisation.",
  },
  {
    question: "Intervenez-vous sur tous les types de piscines à Lyon ?",
    answer:
      "Nous intervenons sur toutes les structures : piscines coques, liner, carrelage, béton armé ou encore piscines miroir et à débordement. Nos outils s'adaptent à chaque revêtement.",
  },
];

const tags = [
  "recherche de fuite piscine lyon",
  "détection fuite bassin sans casse",
  "fuite canalisation piscine",
  "expert piscine lyon",
  "baisse niveau eau piscine",
];

export default function PiscinePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Recherche de fuite piscine",
            href: "/recherche-fuite-piscine",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Recherche de fuite piscine" }]} />

      <PageHero backgroundImage="/images/piscine-hero.jpg">
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Expertise Bassin & Réseaux
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Recherche de Fuite Piscine à Lyon — Diagnostiquer Sans Détruire
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Votre piscine perd de l'eau ? Ne laissez pas une fuite vider votre bassin et fragiliser son environnement.
          <strong>Répère Fuite</strong> localise avec précision l'origine de l'infiltration, que ce soit sur le bassin
          ou le réseau hydraulique, <strong>sans aucune destruction</strong>.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Appeler RepereFuite
          </Button>
          <Button href="/contact" variant="white">
            Demander un diagnostic
          </Button>
        </div>
      </PageHero>

      <AssurancesCarousel />

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
          {/* Introduction */}
          <section className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              Une piscine qui &quot;consomme&quot; trop n&apos;est pas seulement une perte écologique et financière ; c&apos;est souvent le signe d&apos;une anomalie structurelle ou d&apos;une rupture de canalisation invisible sous la plage de votre bassin.
            </p>
            <p>
              À Lyon et dans l&apos;Est Lyonnais, les terrains argileux travaillent et peuvent exercer des tensions sur les canalisations enterrées de votre piscine. Chez <strong>Répère Fuite</strong>, nous transformons une recherche autrefois aveugle en une expertise scientifique. Nous intervenons pour localiser le point exact de la fuite sans jamais arracher votre carrelage ou décaisser votre jardin au hasard.
            </p>
            <p>
              Qu&apos;il s&apos;agisse d&apos;une micro-fissure dans une pièce à sceller (skimmer, refoulement), d&apos;un collage défectueux sous terre ou d&apos;un problème d&apos;étanchéité du bassin, nos méthodes non destructives vous apportent une réponse claire. Une fois la fuite localisée, la réparation peut être effectuée de manière ciblée, rapide et beaucoup moins coûteuse.
            </p>
          </section>

          <MiddleCTA />

          {/* Maillage vers sous-page spécifique */}
          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-sora font-bold text-gray-900 text-xl mb-2">Focus : Piscines Enterrées</h3>
                <p className="text-gray-600 text-sm">Découvrez nos méthodes spécifiques pour les bassins excavés et les réseaux sous dallage.</p>
              </div>
              <Button href="/detection-fuite-piscine-enterree" variant="primary" size="sm">
                Voir l'expertise dédiée
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </section>

          {/* Pourquoi suspecter une fuite */}
          <section className="bg-light -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12 text-center text-balance">
                Les signes qui prouvent que votre piscine fuit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Une baisse du niveau d'eau supérieure à 2 cm par semaine (hors usage intensif).",
                  "L'apparition d'algues malgré un traitement chimique correct (apport d'eau neuve constant).",
                  "Des traces d'humidité ou d'eau stagnante sur la plage de piscine ou vers le local technique.",
                  "La présence de bulles d'air constantes dans les buses de refoulement (prise d'air sur l'aspiration).",
                  "Un affaissement du terrain, des dalles de la plage ou une fissure sur la structure du bassin.",
                  "Une augmentation anormale de votre facture d'eau ou de la consommation de produits de traitement.",
                  "Une pompe de filtration qui se désamorce régulièrement sans raison apparente.",
                ].map((signe, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{signe}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Méthodes */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Nos technologies de détection pour piscine
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: "Le Gaz Traceur (Spécial Canalisation)",
                  icon: FlaskConical,
                  desc: "Nous mettons sous pression le circuit suspect avec un mélange d'azote et d'hydrogène. Le gaz remonte à la surface à l'endroit précis de la rupture de canalisation, même sous la dalle de béton ou la terre.",
                  method: "Indispensable pour vos canalisations enterrées entre la piscine et le local technique.",
                },
                {
                  title: "L'électro-acoustique (Écoute des réseaux)",
                  icon: Headphones,
                  desc: "Nos techniciens utilisent des capteurs sonores haute précision pour localiser le bruit généré par la fuite d'eau sous pression. Cette écoute active permet de cibler la zone sinistrée avec une grande fiabilité.",
                  method: "Efficace sur les réseaux hydrauliques et les pièces à sceller.",
                },
                {
                  title: "L'inspection vidéo par caméra",
                  icon: Camera,
                  desc: "Une micro-caméra étanche est introduite dans les tuyauteries pour visualiser l'intérieur des canalisations. Nous repérons ainsi les écrasements, les racines qui percent le PVC ou les déboîtements de raccords.",
                  method: "Parfait pour valider l'état structurel des canalisations horizontales et verticales.",
                },
                {
                  title: "Les tests de mise en pression",
                  icon: Gauge,
                  desc: "Chaque circuit (aspiration, refoulement, prise balai) est isolé et testé individuellement pour confirmer l'étanchéité ou localiser le réseau défaillant avant d'approfondir la recherche locale.",
                  method: "Étape fondamentale pour cerner le périmètre de la recherche.",
                },
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sora text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-secondary bg-secondary/5 px-4 py-1.5 rounded-full">
                        <Wrench className="w-3.5 h-3.5" />
                        Technique : {item.method}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Zones d'interventions */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Expertise Piscine dans toute la région Lyonnaise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed mb-12">
              <div className="space-y-6">
                <p>
                  Les piscines de la région subissent les assauts du temps et les mouvements de sol. À <strong>Villeurbanne, Genas, ou Chassieu</strong>, les propriétaires nous font confiance pour la protection de leur équipement de loisir.
                </p>
                <p>
                  Nous intervenons rapidement pour stopper le gaspillage d'eau et de produits chimiques. Notre rapport final est un outil précieux pour votre piscinier réparateur ou pour votre compagnie d'assurance.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Lyon", "Villeurbanne", "Chassieu", "Genas", "Meyzieu", "Bourgoin-Jallieu", "Miribel"].map((city) => (
                    <span key={city} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm">
                      <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-sm">
                <h3 className="font-sora font-semibold text-lg text-primary mb-6 flex items-center gap-2">
                  <Info className="w-5 h-5" /> À savoir avant d'appeler
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Gardez votre eau propre :</strong> Une eau claire facilite grandement l'inspection visuelle et l'usage de certains colorants traceurs si nécessaire.</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Identifiez les symptômes :</strong> Notez précisément depuis quand la baisse a commencé et si elle s'accentue lors du fonctionnement de la pompe.</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Assurance */}
          <section className="bg-primary/5 p-12 rounded-3xl border border-primary/10">
            <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <FileText className="w-16 h-16 text-primary shrink-0" />
              <div>
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-4">
                  Votre assurance et les fuites de piscine
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bon à savoir : une partie importante des contrats d'assurance habitation prend en charge la <strong>recherche de fuite non destructive</strong> sur les canalisations de piscine. Notre rapport agréé, avec photos à l'appui, est l'élément qui prouve à l'assureur l'origine du sinistre et justifie la prise en charge de l'intervention.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Demandez conseil pour votre dossier <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur la recherche de fuite piscine"
            items={faqItems}
          />

        </article>
      </div>

      <CTABanner />
    </>
  );
}
