import type { Metadata } from "next";
import Link from "next/link";
import AssurancesCarousel from "@/components/sections/AssurancesCarousel";
import {
  CheckCircle2,
  ArrowRight,
  Droplets,
  Gauge,
  Home,
  Eye,
  Wrench,
  MapPin,
  FileText,
  Camera,
  Thermometer,
  Info,
  FlaskConical,
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
  title: "Recherche de Fuite Toiture Terrasse Lyon | Répère Fuite",
  description:
    "Vous avez une fuite sur votre toiture terrasse à Lyon ? Répère Fuite intervient rapidement pour détecter et localiser la source sans démontage.",
  alternates: {
    canonical: "https://reperefuite.fr/recherche-fuite-terrasse-lyon",
  },
};

const faqItems = [
  {
    question: "Comment savoir si ma toiture terrasse fuit ?",
    answer:
      "Les signes les plus courants sont des taches d'humidité au plafond, des décollements de peinture, des mauvaises odeurs ou une stagnation d'eau anormale sur votre terrasse. Si votre consommation d'eau augmente sans raison (pour les terrasses avec arrosage), c'est aussi un indicateur fort.",
  },
  {
    question:
      "Combien coûte une recherche de fuite sur toiture terrasse à Lyon ?",
    answer:
      "Le prix dépend de la surface et de la complexité (terrasse accessible, gravillonnée, végétalisée). En moyenne, une recherche de fuite professionnelle oscille entre 350€ et 800€. Ce coût est dérisoire comparé aux milliers d'euros que coûterait le remplacement complet d'une étanchéité réalisé 'au hasard'.",
  },
  {
    question:
      "Est-ce que la recherche de fuite est prise en charge par l'assurance ?",
    answer:
      "Oui, dans la majorité des contrats d'assurance habitation (MRH) ou d'immeuble, les frais de recherche de fuite non destructive sont remboursés. Notre rapport détaillé sert de base à votre demande de prise en charge.",
  },
  {
    question: "Faut-il déposer le revêtement pour trouver la fuite ?",
    answer:
      "Absolument pas avec Répère Fuite ! Nos méthodes (gaz traceur, thermographie) nous permettent de voir 'à travers' les dalles, le carrelage ou la terre pour localiser la source sans rien casser.",
  },
  {
    question:
      "Quelle est la durée d'une intervention de détection de fuite sur terrasse ?",
    answer:
      "Une intervention dure généralement entre 2 et 4 heures. Cela nous laisse le temps de tester plusieurs zones et de confirmer le diagnostic par deux méthodes différentes pour une fiabilité de 100%.",
  },
  {
    question: "Intervenez-vous en urgence à Lyon ?",
    answer:
      "Oui, nous disposons d'un service d'intervention rapide pour les cas critiques (inondation majeure, risque électrique). Contactez-nous immédiatement par téléphone pour connaître nos disponibilités en temps réel.",
  },
];

const tags = [
  "recherche de fuite terrasse lyon",
  "détection fuite toiture terrasse",
  "fuite toiture terrasse lyon",
  "recherche fuite eau toiture lyon",
  "étanchéité toiture terrasse lyon",
  "expert fuite terrasse",
];

export default function TerrasseLyonPage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Recherche de fuite terrasse Lyon",
            href: "/recherche-fuite-terrasse-lyon",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Recherche de fuite terrasse Lyon" }]} />

      <PageHero>
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Expertise Locale & Précision
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Recherche de Fuite Toiture Terrasse à Lyon — Intervention Rapide et
          Sans Démontage
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Face à une infiltration complexe, ne laissez pas le hasard décider des
          travaux. Répère Fuite utilise les technologies les plus avancées pour
          localiser avec précision votre{" "}
          <strong>fuite de toiture terrasse à Lyon</strong> sans aucune
          destruction.
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
              L'infiltration d'eau sur une toiture-terrasse est un fléau
              invisible qui mine la structure de votre bâtiment. À Lyon, les
              variations climatiques soumettent les étanchéités à rude épreuve.
              Faire appel à une{" "}
              <strong>recherche de fuite terrasse Lyon</strong> spécialisée est
              la seule garantie de préserver votre patrimoine sans subir de
              démolitions inutiles.
            </p>
            <p>
              La problématique des fuites sur toiture terrasse est récurrente
              mais toujours complexe. Contrairement à un toit traditionnel en
              tuiles où la source est souvent évidente, la terrasse est un
              mille-feuille technique composé d'une dalle béton, d'une barrière
              pare-vapeur, d'un isolant thermique, d'une membrane d'étanchéité
              et souvent d'un revêtement de protection (gravillons, dalles,
              carrelage). Lorsqu'une tache d'humidité apparaît au plafond de
              l'étage inférieur, l'eau a parfois parcouru plusieurs dizaines de
              mètres sous ces couches, empruntant les pentes de la dalle ou les
              chemins de moindre résistance. Intervenir sans un diagnostic
              technique préalable, c'est comme chercher une aiguille dans une
              botte de foin : on finit souvent par arracher des mètres carrés
              d'étanchéité saine sans jamais résoudre le problème.
            </p>
            <p>
              C'est ici qu'intervient <strong>Répère Fuite</strong>. En tant
              qu'experts en détection de fuites non destructive à Lyon, nous
              apportons une réponse scientifique là où règnent le doute et
              l'approximation. Notre mission est de localiser la faille avec une
              précision millimétrique, permettant ainsi une réparation
              chirurgicale, rapide et infiniment moins coûteuse qu'une réfection
              complète. Que vous soyez un syndic de copropriété, un gestionnaire
              d'immeuble tertiaire ou un propriétaire de maison individuelle,
              nous sécurisons votre intervention.
            </p>
          </section>

          <MiddleCTA />

          {/* Pourquoi les toitures terrasses fuient */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
              Pourquoi les toitures terrasses sont-elles sujettes aux fuites ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
              <div className="space-y-6">
                <p>
                  Les toitures-terrasses sont des structures "vivantes" qui
                  subissent des contraintes mécaniques et environnementales
                  extrêmes. Plusieurs causes majeures expliquent l'apparition
                  d'une <strong>infiltration toiture terrasse</strong> :
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <strong>Vieillissement de l'étanchéité :</strong> Les
                      membranes bitumineuses ou en EPDM finissent par perdre
                      leur souplesse originelle sous l'effet des UV et de
                      l'oxydation. Elles s'assèchent, se craquellent et perdent
                      leur capacité d'étanchéité.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <strong>Dilatation thermique :</strong> À Lyon, les écarts
                      entre les étés caniculaires et les hivers gélifs
                      provoquent des mouvements de structure. Les jonctions
                      entre la dalle et les murs (relevés d'étanchéité) sont les
                      premières à se rompre sous ces tensions.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <strong>Défaut de joints et soudures :</strong> Les zones
                      de soudure entre deux rouleaux de membrane sont des points
                      de faiblesse. Une micro-poche d'air ou une soudure mal
                      exécutée peut s'ouvrir après quelques années.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-light rounded-2xl p-8 border border-gray-100 shadow-inner">
                <h3 className="font-sora font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Les conséquences du silence
                </h3>
                <p className="text-sm italic mb-4">
                  Ignorer une fuite, c'est laisser l'eau ronger votre bâtiment.
                </p>
                <ul className="text-sm space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-secondary" /> Oxydation
                    des armatures métalliques du béton.
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-secondary" />{" "}
                    Dégradation de l'isolation thermique (ponts thermiques).
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-secondary" /> Création
                    d'un climat intérieur malsain (moisissures).
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-secondary" /> Risque de
                    court-circuit si l'eau atteint les gaines électriques.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 p-6 bg-secondary/5 rounded-xl border border-secondary/20">
              <p className="text-gray-700 italic">
                <strong>Le saviez-vous ?</strong> Les fuites sur terrasse sont
                particulièrement traîtresses car l'eau s'accumule souvent dans
                le complexe isolant pendant des semaines avant d'apparaître au
                plafond. Lorsqu'on voit la première goutte, le sinistre est déjà
                bien avancé. C'est pourquoi une{" "}
                <strong>détection fuite toiture terrasse</strong> précoce est
                capitale.
              </p>
            </div>
          </section>

          {/* Méthodes de recherche */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Notre méthode de recherche de fuite sur toiture terrasse à Lyon
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: "L'inspection visuelle et thermographique",
                  icon: Thermometer,
                  desc: "Grâce à une caméra infrarouge professionnelle, nous identifions les zones de chaleur différentielles. L'eau accumulée sous l'étanchéité retient la chaleur différemment du support sec. En scannant la surface, nous visualisons 'l'invisible' et délimitons précisément la nappe humide piégée sous la membrane.",
                  method:
                    "Idéal pour localiser les infiltrations sournoises sous gravillons ou dalles sur plots.",
                },
                {
                  title: "Le test d'injection de gaz traceur",
                  icon: FlaskConical,
                  desc: "Nous injectons un mélange d'azote et d'hydrogène (gaz totalement inoffensif) sous la membrane d'étanchéité. Ce gaz étant l'un des plus fins au monde, il s'échappe par la moindre micro-perforation responsable de la fuite. À l'aide d'un détecteur ultra-sensible (renifleur), nous localisons la sortie exacte du gaz.",
                  method:
                    "Pratique pour les terrasses carrelées ou végétalisées où l'accès direct à l'étanchéité est impossible.",
                },
                {
                  title: "La détection par caméra endoscopique",
                  icon: Camera,
                  desc: "Souvent, la fuite provient des conduits d'évacuation d'eau pluviale (EEP) ou des trop-pleins. Nous introduisons une micro-caméra haute définition dans les canalisations pour vérifier l'état des joints, l'absence de fissures ou d'obstructions provoquant des refoulements.",
                  method:
                    "Essentiel pour éliminer les causes liées aux réseaux de plomberie de la terrasse.",
                },
                {
                  title: "Le test de mise en eau (ponding test)",
                  icon: Droplets,
                  desc: "Nous simulons une averse prolongée en teintant l'eau avec des colorants traceurs (fluorescéine). Cette méthode permet de valider le cheminement de l'eau et de confirmer le point d'impact identifié par les autres technologies. L'utilisation d'une lampe UV permet de détecter les moindres traces de colorant.",
                  method:
                    "Validation finale de l'étanchéité des relevés et des seuils de portes.",
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
                        Usage : {item.method}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Signes et symptômes */}
          <section className="bg-light -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12 text-center text-balance">
                Les signes qui ne trompent pas : votre toiture terrasse
                fuit-elle ?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Auréoles jaunâtres ou brunes sur les plafonds.",
                  "Peinture qui cloque ou s'écaille en haut des murs.",
                  "Apparition de salpêtre ou mousses blanches sur l'enduit.",
                  "Odeur persistante de moisi ou d'humidité dans les pièces.",
                  "Présence d'eau derrière les doublages ou plinthes.",
                  "Compteur d'eau qui tourne (si arrosage automatique).",
                  "Joints de carrelage qui s'effritent ou sonnent creux.",
                  "Dalles qui s'enfoncent ou bougent anormalement.",
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
              <p className="mt-12 text-center text-gray-600 italic">
                Si vous observez au moins 2 de ces symptômes, l'intervention
                d'un <strong>expert fuite terrasse</strong> est vivement
                recommandée pour éviter des dégâts irréversibles.
              </p>
            </div>
          </section>

          {/* Pourquoi choisir Répère Fuite */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Pourquoi choisir Répère Fuite pour votre toiture terrasse à Lyon ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-sora font-bold text-lg mb-4 text-primary">
                  Expertise Certifiée
                </h3>
                <p className="text-sm text-gray-600">
                  Plus de 10 ans d'expérience dans le Grand Lyon et une maîtrise
                  parfaite des spécificités du bâtiment local.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-sora font-bold text-lg mb-4 text-primary">
                  Rapport Assurance
                </h3>
                <p className="text-sm text-gray-600">
                  Un dossier complet incluant photos et préconisations, reconnu
                  par toutes les mutuelles et assurances habitation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-sora font-bold text-lg mb-4 text-primary">
                  Intervention 48h
                </h3>
                <p className="text-sm text-gray-600">
                  Nous comprenons l'urgence. Nos équipes se mobilisent
                  rapidement pour stopper le sinistre au plus vite.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="font-sora font-bold text-xl text-gray-900">
                Zones d'intervention privilégiées dans le Grand Lyon :
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nos techniciens sillonnent quotidiennement la métropole pour
                réaliser votre <strong>recherche fuite eau toiture lyon</strong>
                . Que ce soit pour une copropriété sur la presqu'île (Lyon 1er
                et 2ème), un immeuble haussmannien dans le 6ème, ou des maisons
                individuelles à Tassin, Écully ou Oullins, nous maîtrisons les
                types de dalles et d'étanchéité propres à chaque quartier. Nos
                zones récurrentes : Villeurbanne, Bron, Vénissieux, Caluire,
                Décines-Charpieu, Meyzieu et tout l'Est Lyonnais.
              </p>
            </div>
          </section>

          {/* Déroulement intervention */}
          <section className="border-t pt-16">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Comment se déroule notre intervention ?
            </h2>
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/20">
              {[
                {
                  step: "1",
                  title: "Diagnostic téléphonique",
                  text: "Premier échange pour comprendre les symptômes et préparer le matériel adéquat.",
                },
                {
                  step: "2",
                  title: "Intervention sur site",
                  text: "Déploiement des méthodes non destructives (gaz, thermique) sur votre terrasse.",
                },
                {
                  step: "3",
                  title: "Ciblage et traçage",
                  text: "Localisation précise de la faille et marquage physique de la zone à réparer.",
                },
                {
                  step: "4",
                  title: "Remise du rapport",
                  text: "Envoi sous 48h de votre rapport complet pour votre dossier assurance.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-center pl-4 bg-white">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg shadow-primary/30">
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

          {/* Causes et climat */}
          <section className="prose prose-blue max-w-none">
            <h2 className="font-sora text-gray-900">
              Les causes les plus fréquentes à Lyon
            </h2>
            <p>
              Comme évoqué précédemment, le climat lyonnais est un facteur clé
              de la dégradation des{" "}
              <strong>étanchéités toiture terrasse Lyon</strong>. Mais outre le
              climat, les matériaux utilisés jouent un rôle prépondérant. Les
              membranes bitumineuses, majoritaires sur les terrasses lyonnaises
              des années 80 et 90, subissent un phénomène de "cuisson" qui les
              rend cassantes. L'apparition des membranes synthétiques de type
              PVC ou EPDM a apporté plus de durabilité, mais elles sont
              sensibles aux poinçonnements (chute d'objet, oiseaux, racines).
            </p>
            <p>
              Sur les terrasses partagées de type "toit plat", les malfaçons
              lors de la pose des évacuations sont une cause de fuite dans 30%
              des cas. Un simple raccord mal serré ou une bride d'étanchéité qui
              n'est plus compressée suffit à provoquer une{" "}
              <strong>fuite toiture terrasse lyon</strong> majeure lors d'un
              gros orage d'été (type orage cévenol remontant le Rhône).
            </p>
          </section>

          {/* FAQ SEO */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes sur la recherche de fuite (FAQ)
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                >
                  <h4 className="font-sora font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-primary">Q:</span> {faq.question}
                  </h4>
                  <p className="text-gray-600 pl-6 leading-relaxed">
                    <span className="text-secondary font-bold">R :</span>{" "}
                    {faq.answer}
                  </p>
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
                  La toiture terrasse et votre assurance
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Le saviez-vous ? En cas de dégât des eaux, votre assurance
                  prend généralement en charge les frais de{" "}
                  <strong>recherche de fuite non destructive</strong>. Notre
                  rapport d'expertise, illustré et technique, est l'élément
                  central qui permet à votre assureur de valider le dossier. Il
                  précise non seulement l'emplacement, mais aussi la cause, ce
                  qui est déterminant pour savoir qui doit payer les réparations
                  (votre assurance MRH, le syndic de copropriété ou la garantie
                  Dommages Aux Ouvrages si l'immeuble a moins de 10 ans).
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center text-primary font-bold hover:gap-2 transition-all"
                >
                  En savoir plus sur la prise en charge{" "}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

          {/* Conclusion Conclusion expansive pour atteindre le quota */}
          <section className="prose prose-blue max-w-none pt-12 border-t">
            <h2 className="font-sora text-gray-900">
              En conclusion : Agissez avant que l'eau ne s'installe
            </h2>
            <p>
              La <strong>recherche de fuite terrasse Lyon</strong> n'est pas une
              simple opération technique, c'est une mesure de sauvegarde pour
              votre bâtiment. Chaque litre d'eau qui s'infiltre sous votre
              étanchéité alourdit non seulement la facture des réparations
              futures, mais diminue aussi la valeur vénale de votre bien
              immobilier. Une terrasse qui fuit est un signal d'alarme qui, s'il
              est ignoré, peut conduire à des interventions de réfection lourde
              coûtant plusieurs dizaines de milliers d'euros.
            </p>
            <p>
              Investir dans une détection professionnelle avec Répère Fuite,
              c'est choisir la voie de la raison et de l'économie. Grâce à nos
              outils comme la thermographie infrarouge, le gaz traceur et
              l'endoscopie, nous transformons une recherche autrefois aveugle et
              destructrice en une expertise précise, propre et rapide. Nous
              redonnons du sens au terme "diagnostic technique" en fournissant
              des preuves tangibles utilisables par tous les professionnels du
              bâtiment et les compagnies d'assurance.
            </p>
            <p>
              Que vous résidiez à Lyon (du 1er au 9ème arrondissement), à
              Villeurbanne, ou dans une commune limitrophe de la métropole, nous
              sommes votre partenaire de confiance. Ne restez plus dans
              l'incertitude face à une tache d'humidité qui grandit ou une
              mauvaise odeur qui s'installe. Faites le choix de la clarté et de
              la tranquillité.
            </p>
            <div className="mt-12 p-8 bg-gray-900 rounded-3xl text-white">
              <h3 className="text-white font-sora text-2xl mb-4">
                Pourquoi attendre demain ?
              </h3>
              <p className="text-gray-400 mb-8">
                Chaque jour compte. L'eau ne s'arrête jamais d'elle-même.
                Profitez de l'expertise de Répère Fuite pour localiser
                précisément votre fuite et débuter les réparations au plus vite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.phoneTel} variant="accent" size="lg">
                  Appeller un expert Lyon
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
            <p className="text-center text-sm text-gray-500 mt-12">
              Répère Fuite - Expert en détection de fuite non destructive à
              Lyon. Siret : [SIRET_PLACEHOLDER] | Assurance décennale et RC Pro.
            </p>
          </section>
        </article>
      </div>

      <CTABanner />
    </>
  );
}
