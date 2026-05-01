import type { Metadata } from "next";
import Link from "next/link";
import AssurancesCarousel from "@/components/sections/AssurancesCarousel";
import {
  CheckCircle2,
  ArrowRight,
  Droplets,
  Wrench,
  MapPin,
  FileText,
  Camera,
  Thermometer,
  Info,
  FlaskConical,
  Headphones,
  AlertTriangle,
  Layers,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import MiddleCTA from "@/components/sections/MiddleCTA";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageHero from "@/components/sections/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title:
    "Fuite Sous Dalle & Canalisation Encastrée Lyon | Détection Sans Casse | Répère Fuite",
  description:
    "Fuite sous dalle béton ou canalisation encastrée à Lyon ? Répère Fuite localise l'origine avec précision (gaz traceur, thermique, acoustique) sans démolition. Rapport assurance inclus. Intervention rapide Est Lyonnais.",
  alternates: {
    canonical: "https://reperefuite.fr/fuite-sous-dalle-encastree",
  },
  keywords: [
    "fuite sous dalle lyon",
    "canalisation encastrée fuite",
    "détection fuite sous dalle béton",
    "fuite encastrée sans casse",
    "recherche fuite dalle lyon",
    "fuite canalisation encastrée mur",
    "expert fuite sous dalle",
  ],
};

const faqItems = [
  {
    question:
      "Comment savoir si j'ai une fuite sous ma dalle béton ou dans une canalisation encastrée ?",
    answer:
      "Les signes principaux sont : un compteur d'eau qui tourne la nuit toutes vannes fermées, des taches d'humidité en bas des murs sans origine visible, du carrelage qui sonne creux, des joints qui noircissent progressivement, ou encore une baisse de pression récurrente sur votre réseau d'alimentation en eau.",
  },
  {
    question:
      "Faut-il casser le carrelage ou la dalle pour trouver la fuite ?",
    answer:
      "Non. C'est précisément notre valeur ajoutée : grâce à nos technologies non destructives (injection de gaz traceur H2/N2, caméra thermique infrarouge, électro-acoustique), nous localisons la fuite à travers la dalle, le carrelage ou la chape avec une précision de quelques centimètres, sans aucune démolition préalable. Le carrelage ne sera cassé qu'à l'endroit exact indiqué par notre diagnostic.",
  },
  {
    question:
      "Mon assurance prend-elle en charge la recherche de fuite sous dalle ?",
    answer:
      "Dans la très grande majorité des cas, oui. Votre contrat d'assurance multirisques habitation (MRH) couvre les frais de recherche de fuite non destructive via la garantie Dégâts des Eaux et les conventions IRSI/CIDRE. Nous vous remettons après intervention un rapport technique détaillé avec photos, spécialement structuré pour faciliter votre dossier de remboursement.",
  },
  {
    question:
      "Quelle est la différence entre une fuite sous dalle et une fuite sur canalisation encastrée ?",
    answer:
      "Une fuite sous dalle désigne typiquement une canalisation d'alimentation (eau froide, eau chaude sanitaire ou circuit de chauffage) qui court horizontalement dans ou sous la chape béton. Une fuite sur canalisation encastrée est généralement verticale : la canalisation est noyée dans la maçonnerie d'un mur ou d'une cloison. Les deux nécessitent les mêmes techniques de détection non destructive pour être localisées sans démolir.",
  },
  {
    question: "Combien de temps dure une recherche de fuite sous dalle ?",
    answer:
      "Une intervention complète dure généralement entre 2 et 4 heures selon la superficie de la pièce et la complexité du réseau. Nous combinons en général deux méthodes complémentaires pour une fiabilité totale : par exemple le gaz traceur pour localiser précisément le point de fuite, et la caméra thermique pour délimiter l'étendue de la nappe humide.",
  },
  {
    question: "Pouvez-vous intervenir dans un appartement en copropriété ?",
    answer:
      "Oui, nous intervenons aussi bien dans les maisons individuelles que dans les appartements en copropriété. Pour les appartements, nous travaillons en coordination avec le syndic si nécessaire, notamment pour l'accès aux colonnes montantes ou aux parties communes. Notre rapport assurance précise clairement les responsabilités (propriétaire, copropriété, assurance de l'immeuble) afin d'accélérer la prise en charge du sinistre.",
  },
];

const tags = [
  "fuite sous dalle béton lyon",
  "canalisation encastrée mur",
  "fuite canalisation eau chaude sanitaire",
  "détection non destructive",
  "gaz traceur H2",
  "thermographie infrarouge",
];

export default function FuiteSousDallePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Fuite sous dalle et canalisation encastrée",
            href: "/fuite-sous-dalle-encastree",
          },
        ]}
      />
      <Breadcrumbs
        items={[{ label: "Fuite sous dalle & encastrée" }]}
      />

      <PageHero>
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Détection Sous Dalle & Canalisation Encastrée
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Fuite Sous Dalle ou Canalisation Encastrée à Lyon — Zéro Démolition
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Carrelage qui sonne creux, humidité envahissante, compteur qui tourne…
          La fuite se cache sous votre dalle ou dans vos murs.{" "}
          <strong>Répère Fuite</strong> la localise à quelques centimètres près
          grâce à des technologies de pointe,{" "}
          <strong>sans jamais casser ce qui n'est pas touché</strong>.
        </p>
        <p className="text-blue-200 text-sm mb-6">
          Ce type de fuite concerne aussi bien les{" "}
          <Link
            href="/recherche-fuite-habitation"
            className="underline hover:text-white transition-colors"
          >
            maisons et appartements
          </Link>{" "}
          que les{" "}
          <Link
            href="/recherche-fuite-canalisation-enterree"
            className="underline hover:text-white transition-colors"
          >
            réseaux enterrés extérieurs
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-100"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Appeler Répère Fuite
          </Button>
          <Button href="/contact" variant="white">
            Demander un diagnostic
          </Button>
        </div>
      </PageHero>

      <AssurancesCarousel />

      {/* Cross links / Maillage interne */}
      <section className="py-4 bg-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/recherche-fuite-habitation"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Recherche de fuite habitation <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/recherche-fuite-canalisation-enterree"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Fuite canalisation enterrée <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/methodes-recherche-fuite"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Nos méthodes de détection <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/diagnostic-humidite"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Diagnostic humidité <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">

          {/* Introduction */}
          <section className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              Sous votre beau carrelage, derrière vos cloisons fraîchement
              peintes, court un réseau de canalisations invisible. Lorsque l'une
              d'elles se rompt, l'eau s'écoule en silence pendant des semaines,
              parfois des mois, avant que les premiers symptômes n'apparaissent.
              À ce stade, les dégâts sont souvent considérables.
            </p>
            <p>
              La <strong>détection de fuite sous dalle à Lyon</strong> est l'une
              des interventions les plus délicates du domaine de la plomberie
              diagnostique. Contrairement à une fuite visible sur un robinet ou
              sous un évier, la canalisation défectueuse est noyée dans du béton,
              de la chape ou de la maçonnerie épaisse. Sans les bons outils, il
              est impossible de savoir où intervenir avec précision.
            </p>
            <p>
              C'est pourquoi <strong>Répère Fuite</strong> a investi dans les
              technologies de détection non destructive les plus avancées du
              marché. Notre approche multiméthodologique combine l'acoustique,
              la thermographie et la tracéologie gazeuse pour couvrir tous les
              scénarios, même les plus complexes : colonnes montantes encastrées,
              alimentations en eau chaude sanitaire noyées dans la maçonnerie,
              ou réseaux d'évacuation dissimulés dans des façades épaisses.
            </p>
            <p>
              Résultat : nous vous indiquons avec une précision de quelques
              centimètres où se situe la fuite. Votre plombier réparateur n'a
              plus qu'à ouvrir la zone indiquée, réparer le défaut, et refermer.
              Une économie de temps, d'argent et de stress considérable par
              rapport à une démolition à l'aveugle.
            </p>
          </section>

          <MiddleCTA />

          {/* Comprendre les fuites sous dalle */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-4">
              Pourquoi les canalisations sous dalle et encastrées fuient-elles ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Une canalisation noyée dans le béton n'est pas à l'abri des
              défauts. Plusieurs mécanismes peuvent la mettre en défaut au fil
              du temps.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Layers,
                  title: "Corrosion et vieillissement des matériaux",
                  desc: "Les canalisations en cuivre, acier galvanisé ou plomb (dans les bâtiments anciens) sont soumises à la corrosion électrolytique. Le contact prolongé avec le béton alcalin, l'électrolyse due à des courants parasites ou la qualité de l'eau agressive accélère ce phénomène. En quelques décennies, des piqûres microscopiques suffisent pour déclencher une fuite sous dalle invisible.",
                },
                {
                  icon: Zap,
                  title: "Mouvements de structure et tassements",
                  desc: "Les habitations bougent imperceptiblement avec les saisons : dilatation thermique de la dalle, tassements différentiels du sol, vibrations dues à des travaux voisins. Ces micros-mouvements peuvent suffire à rompre un sertissage, désolidariser un raccord ou fissurer une canalisation encastrée dans une cloison soumise aux contraintes.",
                },
                {
                  icon: AlertTriangle,
                  title: "Malfaçons et défauts de pose",
                  desc: "Lors de la construction ou d'une rénovation, une soudure mal exécutée, un raccord trop serré à froid ou une canalisation en PER mal emmanchée dans son raccord à compression reste une bombe à retardement. Ces défauts latents ne se révèlent parfois qu'après plusieurs années, sous l'effet du vieillissement ou d'un choc de pression.",
                },
                {
                  icon: Droplets,
                  title: "Coup de bélier et surpression",
                  desc: "La fermeture brusque d'une vanne ou d'un robinet génère une onde de pression violente (coup de bélier) qui peut fissurer une canalisation fragilisée. Dans les immeubles sans disconnecteurs ou sans vase d'expansion sur le circuit de chauffage, la pression peut atteindre des niveaux destructeurs pour les assemblages encastrés.",
                },
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="bg-light p-6 rounded-2xl border border-gray-100 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-sora font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Symptômes */}
          <section className="bg-light -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-4 text-center text-balance">
                Les 8 signaux d'alerte d'une fuite sous dalle ou encastrée
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Reconnaître les symptômes précoces permet d'intervenir avant que
                les dommages ne s'amplifient.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Compteur d'eau qui tourne la nuit, toutes vannes fermées (indicateur le plus fiable).",
                  "Carrelage ou parquet qui sonne creux dans une zone précise, alors qu'il était solide avant.",
                  "Taches d'humidité persistantes en pied de mur, sans explication visible.",
                  "Joints de carrelage qui noircissent, s'effritent ou présentent des cloques.",
                  "Baisse de pression progressive ou répétitive sur votre réseau d'eau ou chauffage.",
                  "Sol anormalement humide ou tiède à un endroit précis, sans explication visible.",
                  "Odeur de moisi persistante dans une pièce malgré une bonne ventilation.",
                  "Facture d'eau en forte hausse sans changement de comportement.",
                ].map((signe, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{signe}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-secondary/5 rounded-xl border border-secondary/20 text-center">
                <p className="text-gray-700 italic">
                  <strong>Conseil :</strong> Le test le plus simple est de
                  relever votre index compteur avant de vous coucher et de le
                  vérifier le lendemain matin levé. Si l'index a bougé sans
                  aucune utilisation nocturne d'eau, vous avez très probablement
                  une fuite active qui doit être localisée.
                </p>
              </div>
            </div>
          </section>

          {/* Méthodes technologiques */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-4">
              Nos 4 technologies de détection : trouver ce qu'on ne voit pas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Chaque situation est unique. C'est pourquoi nous utilisons des
              méthodes complémentaires et adaptées à votre configuration, pour
              une précision optimale et une validation croisée du diagnostic.
              Pour en savoir plus sur notre approche globale, visitez notre page{" "}
              <Link
                href="/methodes-recherche-fuite"
                className="text-primary underline hover:text-primary/80"
              >
                méthodes de recherche de fuite
              </Link>
              .
            </p>
            <div className="space-y-16">
              {[
                {
                  title: "1. L'injection de gaz traceur H2/N2",
                  icon: FlaskConical,
                  desc: "C'est notre méthode de référence pour les fuites sous dalle. La canalisation est vidangée et isolée, puis on y injecte un mélange de 95% d'azote et 5% d'hydrogène. Ce gaz extrêmement léger et diffusant traverse la chape et le béton pour ressortir à l'air libre au-dessus du point de fuite. Notre détecteur électronique à renifleur capte le moindre picogramme de ce gaz traceur.",
                  method:
                    "Précision de localisation : quelques centimètres. Idéal pour toute canalisation sous chape (PER, cuivre, multicouche).",
                },
                {
                  title: "2. La thermographie infrarouge",
                  icon: Thermometer,
                  desc: "Une caméra infrarouge capte les différences de température à la surface de votre sol ou de vos cloisons. Une fuite d'eau chaude sanitaire (ECS) crée une zone chaude visible à l'image. Une fuite d'eau froide génère inversement une zone de refroidissement. La thermographie permet de cartographier avec précision l'étendue de la nappe humide piégée sous votre chape ou dans votre cloison.",
                  method:
                    "Visualisation en temps réel de la nappe humide et du trajet de la canalisation dans la chape.",
                },
                {
                  title: "3. La détection électro-acoustique",
                  icon: Headphones,
                  desc: "L'eau qui s'échappe sous pression d'une canalisation percée génère un bruit à haute fréquence, inaudible à l'oreille humaine. Nos capteurs piezo-électriques ultrasensibles, positionnés à la surface du sol, 'écoutent' vos dalles et localisent le point de bruit maximum, qui correspond à la position de la fuite. Cette méthode est efficace même à travers plusieurs couches de matériaux.",
                  method:
                    "Particulièrement adapté aux canalisations d'alimentation sous pression et aux colonnes encastrées dans les cloisons.",
                },
                {
                  title: "4. L'inspection par caméra endoscopique",
                  icon: Camera,
                  desc: "Pour les canalisations d'évacuation encastrées (eaux usées, eaux pluviales) ou accessibles via un regard, nous introduisons une micro-caméra hauté définition télécommandée. Elle révèle visuellement les fissures, les joints défectueux, les infiltrations de racines ou les écrasements de canalisation qui causent des fuites insidieuses.",
                  method:
                    "Essentiel pour les colonnes d'évacuation en milieu encastré et les réseaux AC/EC intérieurs difficiles d'accès.",
                },
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sora text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-secondary bg-secondary/5 px-4 py-1.5 rounded-full">
                        <Wrench className="w-3.5 h-3.5" />
                        Efficacité : {item.method}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>


          {/* Déroulement intervention */}
          <section className="border-t pt-16">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Les étapes de notre intervention sous dalle
            </h2>
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/20">
              {[
                {
                  step: "1",
                  title: "Évaluation téléphonique",
                  text: "Nous collectons vos observations (symptômes, configuration du bâtiment, type de réseau) pour préparer le bon matériel avant d'arriver chez vous.",
                },
                {
                  step: "2",
                  title: "Test de pressurisation",
                  text: "Sur votre réseau, nous effectuons un test de pression à l'azote pour confirmer la présence et localiser grossièrement le tronçon défaillant.",
                },
                {
                  step: "3",
                  title: "Détection multiméthodologique",
                  text: "Déploiement du gaz traceur, de la caméra thermique et/ou de la détection acoustique selon la configuration. Nous croisons les résultats pour une précision maximale.",
                },
                {
                  step: "4",
                  title: "Marquage sur site",
                  text: "La zone exacte de la fuite est physiquement marquée sur votre sol ou votre mur. Votre plombier peut intervenir directement sans tâtonnement.",
                },
                {
                  step: "5",
                  title: "Rapport assurance",
                  text: "Transmission sous 48h de votre rapport complet : description de l'intervention, méthodes utilisées, localisation précise avec photos et schéma, conforme aux exigences IRSI.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start pl-4 bg-white">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg shadow-primary/30 mt-1">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Zones intervention */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Zone d'intervention : Lyon, Est Lyonnais et Nord-Isère
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
              <div className="space-y-6">
                <p>
                  Basés dans l'Est Lyonnais, nos techniciens se déplacent
                  rapidement dans un large rayon autour de Lyon pour toute{" "}
                  <strong>recherche de fuite sous dalle</strong> ou sur{" "}
                  <strong>canalisation encastrée</strong>. Que vous soyez un
                  particulier, une copropriété ou un gestionnaire de patrimoine,
                  nous adaptons nos horaires à votre urgence.
                </p>
                <p>
                  Notre connaissance du tissu bâti local (immeubles
                  haussmanniens du centre de Lyon, pavillons des années 70-90 de
                  l'Est, résidences plus récentes du Nord-Isère) nous permet
                  d'anticiper les configurations de réseau les plus fréquentes
                  dans chaque secteur.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Lyon",
                    "Villeurbanne",
                    "Bron",
                    "Meyzieu",
                    "Décines",
                    "Vaulx-en-Velin",
                    "Vénissieux",
                    "Caluire",
                    "Bourgoin-Jallieu",
                    "L'Isle d'Abeau",
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm"
                    >
                      <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-sora font-semibold text-lg text-primary mb-6 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Pourquoi Répère Fuite ?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong>Localisation au centime près</strong> grâce à la
                      combinaison de 3 technologies complémentaires sur site.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong>Rapport assurance normalisé IRSI</strong> inclus,
                      rédigé pour faciliter la prise en charge par votre MRH.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong>Intervention rapide</strong>, généralement sous
                      48h à 72h après contact.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong>Indépendant de tout plombier réparateur</strong> :
                      notre seul objectif est de localiser, pas de vendre des
                      travaux.
                    </div>
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
                  Remboursement assurance : ce que couvre votre MRH
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dans le cadre des conventions IRSI (qui régissent les dégâts
                  des eaux entre assurances), les frais de recherche de fuite
                  non destructive sont intégralement pris en charge dans la
                  quasi-totalité des contrats multirisques habitation. La
                  condition : que vous disposiez d'un rapport technique
                  professionnel attestant de l'intervention.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Notre rapport, illustré de photos et de mesures, est
                  structuré pour répondre aux exigences des experts mandatés par
                  les assureurs. Il vous évite des allers-retours fastidieux et
                  accélère considérablement le déblocage de votre
                  remboursement.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-primary font-bold hover:gap-2 transition-all"
                >
                  Préparer votre dossier assurance{" "}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

          {/* Maillage interne additionnel */}
          <section className="border-t pt-16">
            <h2 className="font-sora text-2xl font-bold text-gray-900 mb-8">
              Nos autres expertises en détection de fuite
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              La fuite sous dalle n'est pas toujours isolée. Elle peut être
              associée à d'autres problématiques que nos équipes maîtrisent
              également.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  href: "/recherche-fuite-habitation",
                  title: "Fuite en habitation",
                  desc: "Toutes les fuites dans votre maison ou appartement, du réseau sanitaire aux évacuations.",
                },
                {
                  href: "/recherche-fuite-canalisation-enterree",
                  title: "Canalisation enterrée",
                  desc: "Fuites invisible sur vos réseaux enterrés extérieurs, adduction d'eau ou réseau EU.",
                },
                {
                  href: "/recherche-fuite-piscine",
                  title: "Fuite piscine",
                  desc: "Votre piscine perd de l'eau ? Nous localisons les micro-fuites de structure ou de circuit.",
                },
                {
                  href: "/recherche-fuite-terrasse-lyon",
                  title: "Toiture terrasse",
                  desc: "Infiltration sur votre toiture terrasse ou toit plat avec détection sans démontage.",
                },
                {
                  href: "/diagnostic-humidite",
                  title: "Diagnostic humidité",
                  desc: "Identifier l'origine d'une humidité persistante, remontées capillaires ou condensation.",
                },
                {
                  href: "/methodes-recherche-fuite",
                  title: "Méthodes de détection",
                  desc: "Découvrez en détail toutes nos technologies : gaz traceur, thermique, acoustique.",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group p-6 bg-light rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="font-sora font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                    {link.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-gray-600">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="prose prose-blue max-w-none pt-12 border-t">
            <h2 className="font-sora text-gray-900">
              Ne laissez plus l'eau ronger votre maison en silence
            </h2>
            <p>
              Une <strong>fuite sous dalle non traitée</strong> est une bombe à
              retardement. Elle dégrade le béton de votre structure, détruit les
              finitions, crée un environnement propice aux moisissures
              (Stachybotrys, Aspergillus) dangereuses pour la santé, et peut
              atteindre les armatures métalliques du plancher. Le coût d'une
              telle négligence se compte souvent en dizaines de milliers d'euros
              de rénovation.
            </p>
            <p>
              Investir dans une <strong>recherche de fuite professionnelle</strong> avec Répère Fuite, c'est au contraire la décision la plus économique que vous puissiez prendre. En localisant précisément le défaut, vous permettez à votre plombier de n'ouvrir que ce qui est nécessaire, au bon endroit, la première fois. Résultat : moins de matériaux gâchés, moins de journées de travaux, moins d'inconvénients pour vos occupants.
            </p>
            <p>
              Nos équipes interviennent dans tout le Grand Lyon et le
              Nord-Isère. Contactez-nous dès maintenant pour une évaluation
              rapide de votre situation et une prise en charge au plus tôt.
            </p>

            <div className="mt-12 p-8 bg-gray-900 rounded-3xl text-white">
              <h3 className="text-white font-sora text-2xl mb-4">
                Votre fuite sous dalle mérite un vrai diagnostic
              </h3>
              <p className="text-gray-400 mb-8">
                Ne cédez pas à la tentation du carrelage cassé à l'aveugle.
                Faites confiance à la technologie et à l'expertise Répère Fuite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.phoneTel} variant="accent" size="lg">
                  Appeler Répère Fuite
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Formulaire de contact
                </Button>
              </div>
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur la fuite sous dalle et canalisation encastrée"
            items={faqItems}
          />
        </article>
      </div>

      <CTABanner />
    </>
  );
}
