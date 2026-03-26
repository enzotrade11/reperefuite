import type { Metadata } from 'next'
import Link from 'next/link'
import { Ear, Wind, Camera, TestTube2, Cloud, Radio, FileText, CheckCircle2, ArrowRight, Info, Search, ShieldCheck, Droplets, MapPin, Gauge, Thermometer } from 'lucide-react'
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

export const metadata: Metadata = {
  title: 'Méthodes Recherche de Fuite Non Destructive Lyon | Expert Détection',
  description:
    "Découvrez nos technologies de recherche de fuite sans destruction à Lyon : gaz traceur, acoustique, caméra, fumigène. Expertise précise et rapport assurance.",
  alternates: {
    canonical: "https://reperefuite.fr/methodes-recherche-fuite",
  },
};

const faqItems = [
  {
    question: "Pourquoi privilégier la recherche de fuite non destructive ?",
    answer:
      "C'est la méthode la plus économique et la moins invasive. Au lieu de casser des murs ou des sols au hasard pour trouver un tuyau percé, nous localisons le point exact du problème. Les travaux de remise en état sont ainsi réduits au strict minimum.",
  },
  {
    question: "Quelle méthode est la plus fiable ?",
    answer:
      "Il n'y a pas une méthode 'miracle'. La fiabilité repose sur le croisement des techniques. Par exemple, on utilise souvent le gaz traceur pour confirmer une zone détectée au préalable par acoustique. C'est le cumul des indices qui garantit la précision du diagnostic.",
  },
  {
    question: "Le matériel utilisé est-il dangereux pour ma santé ou mon jardin ?",
    answer:
      "Absolument pas. Les gaz injectés sont neutres et inoffensifs (mélange azote/hydrogène). Les colorants comme la fluorescéine sont biodégradables et sans danger pour l'environnement ou les piscines. La fumée utilisée est inodore et ne laisse aucune trace.",
  },
  {
    question: "Intervenez-vous avec tout le matériel nécessaire ?",
    answer:
      "Oui, nos techniciens arrivent sur place avec un véhicule équipé de l'ensemble des technologies citées. Nous adaptons notre stratégie en temps réel selon les découvertes sur le terrain.",
  },
];

const methodes = [
  {
    icon: Ear,
    title: 'Détection Électro-Acoustique',
    description:
      "L'eau qui sort d'un tuyau sous pression crée une vibration acoustique unique. Nos microphones de sol ultra-sensibles captent cette fréquence de bruit de fuite à travers le béton, le carrelage ou la terre.",
    usages: [
      'Canalisations intérieures (cloisons, dalles)',
      'Réseaux d\'alimentation enterrés',
      'Canalisations de piscines (refoulements, aspirations)',
    ],
    tech: "Amplification numérique des bruits de fuite.",
  },
  {
    icon: Gauge,
    title: 'Injection de Gaz Traceur',
    description:
      "On injecte un mélange azote-hydrogène (gaz léger et neutre) après avoir vidé la canalisation suspecte. Le gaz remonte verticalement au point de rupture et traverse même les matériaux les plus denses.",
    usages: [
      'Micro-fuites invisibles après compteur',
      'Tuyauteries sous terrasses ou bitume',
      'Piscines enterrées et systèmes de chauffage',
    ],
    tech: "Sensibilité de détection de quelques parts par million (PPM).",
  },
  {
    icon: Camera,
    title: 'Inspection Vidéo (Endoscopie)',
    description:
      "Introduction de caméras HD étanches dans les réseaux d'évacuation ou d'aspiration pour visualiser l'intérieur des tuyaux. Nous repérons les fissures, déboîtements, racines ou écrasements.",
    usages: [
      "Diagnostic structurel des évacuations (PVC, fonte)",
      "Vérification des skimmers et tuyauteries de piscine",
      "Contrôle de conformité de réseaux neufs",
    ],
    tech: "Caméra flexible avec enregistrement vidéo et photo.",
  },
  {
    icon: TestTube2,
    title: 'Coloration (Traceurs UV)',
    description:
      "Utilisation de colorants biodégradables (fluorescéine, jaune, bleu) qui deviennent fluorescents sous lampe UV. Cela permet de suivre le cheminement de l'eau lors d'infiltrations complexes.",
    usages: [
      "Infiltrations sur toitures et terrasses",
      "Fuites de douches à l'italienne ou baignoires",
      "Recherche d'origine d'humidité sur murs de façades",
    ],
    tech: "Traceurs biodégradables haute concentration.",
  },
  {
    icon: Wind,
    title: 'Test Fumigène (Smoke Test)',
    description:
      "Injection de fumée haute densité sous les membranes d'étanchéité ou dans les réseaux d'évacuation d'air. La fumée s'échappe par la moindre fissure ou défaut de soudure.",
    usages: [
      "Étanchéité de toitures terrasses lyonnaises",
      "Joints de dilatation et relevés d'étanchéité",
      "Localisation d'odeurs de canalisations",
    ],
    tech: "Générateur de fumée sèche inodore.",
  },
  {
    icon: Thermometer,
    title: 'Thermographie Infrarouge',
    description:
      "Analyse des variations de température sur les surfaces. Une fuite d'eau chaude (chauffage, ECS) ou une infiltration froide crée une signature thermique détectable à la caméra infrarouge.",
    usages: [
      "Fuites sur chauffage au sol (PCBT)",
      "Localisation de ponts thermiques et humidité",
      "Infiltrations invisibles en façade",
    ],
    tech: "Caméra thermique haute résolution.",
  },
];

export default function MethodesPage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[{ label: 'Méthodes de recherche de fuite', href: '/methodes-recherche-fuite' }]}
      />
      <Breadcrumbs items={[{ label: 'Méthodes de recherche de fuite' }]} />

      <PageHero backgroundImage="/images/methodes-hero.jpg">
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Technologies & Savoir-faire
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Nos Méthodes de Recherche de Fuite Sans Destruction à Lyon
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Pour chaque fuite, sa technologie. <strong>Répère Fuite</strong> déploie un arsenal de méthodes 
          non destructives pour localiser l'origine de votre sinistre avec une précision millimétrique.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Diagnostiquer ma fuite
          </Button>
          <Button href="/contact" variant="white">
            Demander un devis
          </Button>
        </div>
      </PageHero>

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
          {/* Introduction */}
          <section className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              L'époque où l'on ouvrait des tranchées au hasard pour chercher un tuyau percé est révolue. Aujourd'hui, la recherche de fuite est une affaire d'équipement de pointe et d'expérience technique.
            </p>
            <p>
              À Lyon, les interventions de <strong>Répère Fuite</strong> reposent sur un principe fondamental : la préservation de vos supports. Que vous ayez un marbre précieux, une terrasse en carrelage grand format ou un jardin paysager, nous mettons tout en œuvre pour localiser le dégât des eaux sans rien casser.
            </p>
            <p>
              Nos techniciens ne se contentent pas d&apos;utiliser une seule méthode. La force de notre diagnostic réside dans le <strong>croisement des technologies</strong>. Si l&apos;acoustique pointe une zone, le gaz traceur viendra confirmer le point exact de la fuite. C&apos;est cette rigueur qui nous permet d&apos;afficher un taux de réussite quasi total et de satisfaire les exigences des compagnies d&apos;assurance.
            </p>
          </section>

          <MiddleCTA />

          {/* Maillage inter-pages stratégique */}
          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="font-sora font-bold text-gray-900 mb-4">Appliquer ces méthodes par domaine :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/recherche-fuite-habitation" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Search className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Habitation</span>
              </Link>
              <Link href="/recherche-fuite-piscine" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Piscine</span>
              </Link>
              <Link href="/recherche-fuite-reseau-enterre" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Réseau Enterré</span>
              </Link>
            </div>
          </section>

          {/* Liste des méthodes détaillée */}
          <section className="space-y-16">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12 text-center text-balance">
              Le détail de nos technologies embarquées
            </h2>
            <div className="grid grid-cols-1 gap-12">
              {methodes.map((methode, i) => (
                <FadeIn key={i}>
                  <div className="group flex flex-col md:flex-row gap-8 items-start p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <methode.icon className="w-8 h-8 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sora text-xl font-bold text-gray-900 mb-3">{methode.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{methode.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Applications principales</p>
                          <ul className="space-y-2">
                            {methode.usages.map((usage, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-secondary" />
                                {usage}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-light p-4 rounded-xl border border-gray-100 flex flex-col justify-center">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Technologie employée</p>
                          <p className="text-sm text-gray-900 font-medium italic">"{methode.tech}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Rapport assurance & Conclusion */}
          <section className="bg-dark p-12 rounded-[3rem] text-white">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="shrink-0 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="font-sora text-2xl font-bold mb-4">La finalité : Votre rapport d'expertise</h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Après chaque intervention, nos méthodes se traduisent par un document opposable : le rapport de recherche de fuite. Ce dossier contient les photos des tests, les mesures effectuées et la localisation précise du point de fuite. C&apos;est ce document qui permet la prise en charge des travaux de réparation par votre assurance.
                </p>
                <div className="flex gap-4">
                  <Badge variant="primary" className="bg-white/20 text-white border-0">Agréé Assurance</Badge>
                  <Badge variant="primary" className="bg-white/20 text-white border-0">Non Destructif</Badge>
                </div>
              </div>
            </div>
          </section>

          <FAQ
            title="Questions sur nos méthodes"
            items={faqItems}
          />

        </article>
      </div>

      <CTABanner />
    </>
  );
}
