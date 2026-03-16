import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Droplets, Gauge, Home, Eye, Wrench, MapPin, FileText, Camera, Thermometer, Info } from 'lucide-react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: "Recherche de Fuite Habitation Lyon | Sans Destruction | Répère Fuite",
  description:
    "Fuite d'eau dans votre maison ou appartement à Lyon ? Répère Fuite détecte l'origine de l'infiltration sans casser. Intervention rapide dans l'Est Lyonnais et alentours.",
  alternates: {
    canonical: "https://reperefuite.fr/recherche-fuite-habitation",
  },
};

const faqItems = [
  {
    question: "Comment savoir s'il y a une fuite invisible dans ma maison ?",
    answer:
      "Plusieurs signes peuvent vous alerter : un compteur d'eau qui tourne alors que tous les robinets sont fermés (la nuit par exemple), l'apparition de taches d'humidité sur les murs ou plafonds, un décollement de papier peint, des moisissures, ou encore une facture d'eau anormalement élevée. En cas de doute, la première étape est de vérifier votre compteur.",
  },
  {
    question: "Faut-il casser le sol ou les murs pour localiser la fuite ?",
    answer:
      "Non, c'est tout l'intérêt de la recherche de fuite non destructive ! Grâce à nos équipements de pointe (gaz traceur, détection acoustique, caméra thermique), nous pouvons repérer avec précision l'origine de la fuite à travers le carrelage, les dalles béton ou les murs sans aucune démolition préalable.",
  },
  {
    question: "Est-ce que l'intervention est prise en charge par mon assurance ?",
    answer:
      "Oui, dans la majorité des cas, votre assurance multirisque habitation (MRH) prend en charge la facture de la recherche de fuite, notamment via la garantie 'Dégâts des eaux'. À l'issue de notre intervention, nous vous remettons un rapport détaillé, avec photos, conçu spécifiquement pour faciliter vos démarches auprès de votre assureur.",
  },
  {
    question: "Où intervenez-vous pour une recherche de fuite habitation ?",
    answer:
      "Nous couvrons l'ensemble de la région lyonnaise, avec une forte réactivité sur l'Est Lyonnais (Villeurbanne, Bron, Meyzieu, Décines, Vaulx-en-Velin), le Nord-Isère (Bourgoin-Jallieu) et le Sud de l'Ain. Nous pouvons également intervenir dans tout l'agglomération de Lyon.",
  },
  {
    question: "Combien coûte une recherche de fuite dans une maison ?",
    answer:
      "Le tarif varie en fonction de la complexité du réseau (intérieur, extérieur, enterré) et de l'étendue de la recherche. Cependant, un diagnostic professionnel précis vous fera toujours économiser des milliers d'euros de travaux inutiles. Contactez-nous pour obtenir un devis personnalisé très rapidement.",
  },
  {
    question: "Dans quels types d'habitations intervenez-vous ?",
    answer:
      "Nous agissons aussi bien dans les maisons individuelles (fuites sous dalle, réseaux extérieurs, sanitaires, piscines) que les appartements (fuites encastrées, colonnes montantes) ou les copropriétés entières.",
  },
];

const tags = [
  "recherche de fuite habitation lyon",
  "détection fuite maison sans casse",
  "fuite sous dalle lyon",
  "expert recherche fuite eau",
  "fuite canalisation intérieure",
  "fuite appartement lyon",
];

export default function HabitationPage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Recherche de fuite habitation",
            href: "/recherche-fuite-habitation",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Recherche de fuite habitation" }]} />

      <PageHero>
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Expertise Maison & Appartement
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Recherche de Fuite Habitation à Lyon : Détection Sans Destruction
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Face à un dégât des eaux, des moisissures inexplicables ou une surconsommation, chaque minute compte.
          <strong>Répère Fuite</strong> localise l'origine de vos infiltrations d'eau dans votre maison ou appartement
          avec une précision millimétrique, <strong>sans jamais casser</strong> vos sols ni vos murs.
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

      {/* Cross links */}
      <section className="py-4 bg-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 text-sm">
          <Link href="/recherche-fuite-piscine" className="text-primary hover:underline flex items-center gap-1">
            Recherche de fuite piscine <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/recherche-fuite-reseau-enterre" className="text-primary hover:underline flex items-center gap-1">
            Recherche de fuite réseau enterré <ArrowRight className="w-3 h-3" />
          </Link>
          <Link href="/recherche-fuite-terrasse-lyon" className="text-primary hover:underline flex items-center gap-1">
            Recherche de fuite toiture terrasse <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
          {/* Introduction */}
          <section className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              Une tache d&apos;humidité sur un mur, un parquet qui gondole, ou la facture d&apos;eau qui explose... Les fuites dans une habitation sont souvent invisibles, sournoises et causent des dégâts structurels importants avant même de se révéler au grand jour. Trouver leur origine devient alors une priorité absolue.
            </p>
            <p>
              Historiquement, la méthode consistait à casser les murs ou les dalles en suivant les traces d&apos;humidité jusqu&apos;à trouver la canalisation défectueuse. Une approche destructrice, coûteuse et traumatisante pour les propriétaires. Aujourd&apos;hui, avec la <strong>recherche de fuite sans casse à Lyon</strong>, Répère Fuite révolutionne les interventions. Nous utilisons des technologies non destructives pour scruter l&apos;intérieur de vos structures de manière scientifique.
            </p>
            <p>
              Que la fuite soit située sur votre réseau d&apos;alimentation d&apos;eau froide ou chaude, sur votre système de chauffage (plancher chauffant, radiateurs), sous une dalle béton complète ou dans les cloisons, nous avons le matériel adapté pour &quot;voir l&apos;invisible&quot;. La garantie pour vous de cibler les travaux de réparation uniquement là où ils sont nécessaires, en minimisant l&apos;impact sur votre lieu de vie.
            </p>
          </section>

          {/* Signes et symptômes */}
          <section className="bg-light -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12 text-center text-balance">
                Les symptômes d&apos;une fuite cachée dans votre maison
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Une rotation continue du compteur d'eau, même robinets fermés.",
                  "L'apparition de cloques sur les peintures ou de décollement du papier peint.",
                  "Une forte odeur persistante d'humidité ou de moisissure.",
                  "Des joints de carrelage qui s'effritent, se noircissent ou du carrelage qui sonne creux.",
                  "Un parquet flottant ou massif qui commence à gonfler ou se déformer.",
                  "Une baisse de pression répétitive sur votre chaudière ou circuit de chauffage.",
                  "L'apparition de salpêtre ou mousses blanches sur le bas des murs.",
                  "Des taches sombres au plafond de l'étage inférieur d'une maison.",
                ].map((signe, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{signe}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-center text-gray-600 italic">
                Si vous rencontrez l&apos;un de ces cas de figure, ne tardez pas. Une intervention rapide limite drastiquement
                les dégâts et les coûts liés à l&apos;assèchement des pièces.
              </p>
            </div>
          </section>

          {/* Méthodes technologiques */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Nos méthodes de pointe : Zéro casse, 100% précision
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: "La détection électro-acoustique",
                  icon: Home,
                  desc: "L'eau qui s'échappe d'une canalisation sous pression génère un bruit spécifique, inaudible à l'oreille nue. Grâce à notre matériel électro-acoustique ultrasensible avec filtrage des fréquences parasites, nous 'écoutons' vos murs et vos sols pour localiser la source de l'écoulement.",
                  method: "Idéal pour les canalisations d'eau sanitaire sous dalle ou encastrées dans les cloisons pleines.",
                },
                {
                  title: "L'injection de gaz traceur",
                  icon: Gauge,
                  desc: "Nous vidangeons la canalisation concernée pour y injecter un mélange inodore, incolore et non toxique (95% azote, 5% hydrogène). Ce gaz extrêmement volatile traverse les chapes, le béton, les dalles, le carrelage et remonte à la surface au point exact de la fuite.",
                  method: "Parfait pour les micro-fuites, les réseaux enterrés ou de grande longueur.",
                },
                {
                  title: "L'inspection thermographique (Caméra Infrarouge)",
                  icon: Thermometer,
                  desc: "Une caméra thermique haut de gamme analyse les rayonnements infrarouges (la chaleur) de vos parois. Une fuite modifie la température de surface (zone plus froide pour l'eau sanitaire, plus chaude pour le chauffage). L'image met instantanément en évidence les zones anormalement humides en sous-face.",
                  method: "Particulièrement efficace pour le plancher chauffant et la vérification globale de l'humidité des parois.",
                },
                {
                  title: "L'exploration par caméra endoscopique",
                  icon: Camera,
                  desc: "Introduction d'une mini-caméra flexible haute résolution équipée de LED à l'intérieur de vos canalisations d'évacuation, de vos gaines techniques ou derrière un faux plafond. L'inspection vidéo révèle les fissures, les joints défectueux, les obstructions ou un écrasement du réseau.",
                  method: "Indispensable pour vos descentes d'eaux usées, eaux vannes et colonnes pluviales de l'habitation.",
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
                        Technologie adaptée : {item.method}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Zones d'interventions et Pourquoi RepereFuite */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Intervention en Habitation, de Lyon à l&apos;Est Lyonnais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed mb-12">
              <div className="space-y-6">
                <p>
                  Les installations de plomberie d&apos;une habitation classique sont très denses et variées : cuivres soudés ou sertis, tubes PER, multicouches sous goulottes, ou alimentations en acier dans les bâtisses plus anciennes.
                </p>
                <p>
                  Nos connaissances des principes locaux de construction nous permettent d&apos;intervenir très efficacement
                  aussi bien sur un vieil appartement de la presqu&apos;île de Lyon qu&apos;une maison récente de l&apos;Est lyonnais
                  ou du Nord-Isère. En faisant appel à Répère Fuite, vous vous assurez les services d&apos;un acteur local
                  réputé capable d&apos;intervenir chez vous en un temps record.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Lyon", "Villeurbanne", "Bron", "Meyzieu", "Décines-Charpieu", "Vaulx-en-Velin", "Bourgoin-Jallieu"].map((city) => (
                    <span key={city} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm">
                      <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-sora font-semibold text-lg text-primary mb-6 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Les Atouts Répère Fuite
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Garantie de moyen de pointe</strong> pour éviter de creuser sans la certitude du diagnostic.</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Transparence et réactivité</strong> dès votre premier appel.</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Reconnu par les assureurs :</strong> La rédaction de notre rapport est normalisée pour l&apos;assurance et l&apos;expert qui viendra valider l&apos;indemnisation de vos sinistres.</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Déroulement intervention */}
          <section className="border-t pt-16">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Les étapes de notre intervention chez vous
            </h2>
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/20">
              {[
                { step: "1", title: "L'entretien d'évaluation", text: "Nous échangeons au téléphone pour bien comprendre le symptôme que vous avez observé, et fixons l'intervention au plus vite." },
                { step: "2", title: "Recherche de la cause", text: "Déploiement de notre équipement électro-acoustique, thermographique, humidimètre et des autres méthodologies (traçage de fluide...)." },
                { step: "3", title: "Marquage", text: "Une fois localisé le défaut ou l'anomalie d'étanchéité, nous le marquons physiquement pour que les travaux de réparation soient infaillibles." },
                { step: "4", title: "Rapport détaillé Assurance", text: "Le rapport complet (explications, causes, mesures et photos) attestant de l'investigation sans destruction, vous est transmis rapidement." },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-center pl-4 bg-white">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Assurance */}
          <section className="bg-primary/5 p-12 rounded-3xl border border-primary/10">
            <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <FileText className="w-16 h-16 text-primary shrink-0" />
              <div>
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-4">
                  Dégât des eaux et conventions d&apos;assurance
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Une bonne nouvelle dans la gestion de votre sinistre : notre intervention répond aux exigences des conventions IRSI en vigueur, facilitant ainsi la prise en charge éventuelle par votre assurance MRH ou celle de l&apos;immeuble.
                  Notre devis préalable et le rapport d&apos;expertise, incluant les preuves par l&apos;image, permettent au réseau sinistre d&apos;accélérer le déblocage des fonds sans aucun risque de litige majeur.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Contactez-nous pour votre dossier <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="prose prose-blue max-w-none pt-12 border-t">
            <h2 className="font-sora text-gray-900">
              Arrêtez les dommages, contactez l&apos;expert Répère Fuite
            </h2>
            <p>
              Agir vite avec les bonnes ressources évite bien des désagréments. Le prix initial d&apos;une <strong>recherche de fuite habitation sans destruction à Lyon</strong> ne pèse pas lourd comparé au coût potentiellement exorbitant du renouvellement d&apos;un parquet, de la gestion du risque structurel ou encore de l&apos;assèchement électrique.
            </p>
            <p>
              Évitez que l&apos;eau ne devienne l&apos;ennemie de votre maison en privilégiant une localisation professionnelle rapide. Nous avons tout le matériel nécessaire au sein de notre base de l&apos;Est Lyonnais pour vous aider à repartir du bon pied au plus tôt.
            </p>

            <div className="mt-12 p-8 bg-gray-900 rounded-3xl text-white">
              <h3 className="text-white font-sora text-2xl mb-4">Besoin d&apos;un diagnostic express ?</h3>
              <p className="text-gray-400 mb-8">
                Parce que l&apos;eau continue de couler... N&apos;hésitez plus pour obtenir un diagnostic sur-mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.phoneTel} variant="accent" size="lg">Appeler Répère Fuite</Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Formulaire contact</Button>
              </div>
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur la recherche de fuite habitation"
            items={faqItems}
          />

        </article>
      </div>

      <CTABanner />
    </>
  );
}
