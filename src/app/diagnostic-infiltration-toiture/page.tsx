import type { Metadata } from 'next'
import Link from 'next/link'
import AssurancesCarousel from '@/components/sections/AssurancesCarousel'
import { Droplets, Home, FileText, MapPin, CheckCircle2, ArrowRight, Info, Search, ShieldCheck, Waves, Wind, CloudRain, Camera } from 'lucide-react'
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
  title: 'Diagnostic Infiltration Toiture Terrasse Lyon | Recherche de Fuite Expert',
  description:
    "Fuite sur votre toit terrasse ? Répère Fuite diagnostique l'origine précise des infiltrations à Lyon sans destruction : fumigène, colorants, humidimétrie.",
  alternates: {
    canonical: "https://reperefuite.fr/diagnostic-infiltration-toiture",
  },
};

const faqItems = [
  {
    question: "Comment détecte-t-on une fuite sur une toiture terrasse ?",
    answer:
      "Nous utilisons plusieurs méthodes complémentaires : le test fumigène (injection de fumée sous l'étanchéité), la mise en eau par colorants (fluorescéine) ou l'inspection par drone/vidéo. Ces techniques permettent de voir ce que l'œil humain ne peut pas déceler.",
  },
  {
    question: "Est-ce que l'infiltration vient forcément de l'étanchéité ?",
    answer:
      "Pas toujours. L'eau peut s'infiltrer par un relevé d'étanchéité, une évacuation d'eaux pluviales (EP) bouchée, un joint de dilatation défectueux ou même une fissure en façade juste au-dessus de la terrasse.",
  },
  {
    question: "Quelle est la différence entre ce diagnostic et une recherche de fuite classique ?",
    answer:
      "Le diagnostic infiltration toiture se concentre sur l'enveloppe du bâtiment et les points singuliers du toit (évacuations, émergences, couvertines). C'est une expertise technique spécifique qui demande du matériel adapté aux travaux en hauteur.",
  },
  {
    question: "Le rapport d'expertise est-il valable pour mon syndic ou assurance ?",
    answer:
      "Oui, notre rapport détaillé avec photos annotées et schéma de localisation est conçu pour être transmis aux assureurs, syndics de copropriété et entreprises d'étanchéité pour la réalisation des devis de réparation.",
  },
];

export default function InfiltrationToiturePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Diagnostic infiltration toiture",
            href: "/diagnostic-infiltration-toiture",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Diagnostic infiltration toiture" }]} />

      <PageHero backgroundImage="/images/toiture-hero.jpg">
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Étanchéité & Enveloppe
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Diagnostic Infiltration Toiture Terrasse à Lyon
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Votre plafond est taché après chaque pluie ? L'eau s'infiltre dans votre logement ?
          <strong>Répère Fuite</strong> analyse l'origine de vos infiltrations sur toitures terrasses dans le Grand Lyon.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Appeler un expert
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
              Une infiltration sur toiture terrasse est rarement évidente. L&apos;eau peut s&apos;introduire à un endroit et ressortir dix mètres plus loin, migrant à travers la structure béton ou l&apos;isolant.
            </p>
            <p>
              À Lyon, les toits terrasses sont omniprésents, que ce soit en copropriété ou en maison individuelle (Villa toit). Avec le temps, les membranes d&apos;étanchéité perdent de leur souplesse ou subissent des chocs mécaniques. Chez <strong>Répère Fuite</strong>, nous transformons une recherche incertaine en une localisation précise.
            </p>
            <p>
              Notre objectif est d&apos;éviter la réfection complète de l&apos;étanchéité si une simple réparation ciblée suffit. Nous intervenons pour diagnostiquer les points de faiblesse : relevés, évacuations d&apos;eaux pluviales (EP), joints de dilatation ou encore les émergences (conduits de cheminée, climatisations).
            </p>
          </section>

          <MiddleCTA />

          {/* Maillage inter-pages localisé */}
          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="font-sora font-bold text-gray-900 mb-4">Service localisé :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recherche-fuite-terrasse-lyon" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Spécialiste Toiture Terrasse Lyon</span>
              </Link>
              <Link href="/diagnostic-humidite" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Diagnostic Humidité complet</span>
              </Link>
            </div>
          </section>

          {/* Signes d'alerte */}
          <section className="bg-light -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12 text-center">
                Signes d'une infiltration sur votre toit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Auréoles jaunâtres ou brunes au plafond sous la terrasse.",
                  "Suintements d'eau persistants lors d'épisodes pluvieux.",
                  "Claquage de la peinture ou cloques d'eau sur les sous-faces.",
                  "Apparition de moisissures sur les angles de plafonds.",
                  "Écoulements au niveau des boîtes à eau ou des descentes pluviales.",
                  "Dalles de terrasse qui bougent ou stagnation d'eau anormale.",
                  "Humidité apparente sur la façade juste sous l'acrotère.",
                ].map((signe, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <CloudRain className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm font-medium">{signe}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Méthodes de diagnostic */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Comment trouvons-nous la fuite sur votre toit ?
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: "Test Fumigène (Fumée sous pression)",
                  icon: Wind,
                  desc: "Nous injectons une fumée épaisse sous la membrane d'étanchéité. Là où l'air passe, l'eau passe : la fumée qui s'échappe en surface nous indique précisément le trou ou la déchirure invisible.",
                  method: "Indispensable pour tester les relevés et les surfaces nues.",
                },
                {
                  title: "Coloration par Traceurs (Fluorescéine)",
                  icon: Droplets,
                  desc: "L'utilisation de colorants réactifs aux UV (comme la fluorescéine) permet de simuler une pluie intense et de suivre le cheminement de l'eau jusqu'à sa résurgence intérieure.",
                  method: "Validation de l'origine exacte de l'infiltration.",
                },
                {
                  title: "Humidimétrie & Thermographie",
                  icon: Search,
                  desc: "La caméra thermique permet de détecter les zones de rétention d'eau sous l'étanchéité grâce à la différence de température entre l'eau stockée et la structure sèche.",
                  method: "Repérage des poches d'eau destructrices pour l'isolant.",
                },
                {
                  title: "Inspection Vidéo des Évacuations",
                  icon: Camera,
                  desc: "Passage d'une caméra dans les évacuations d'eaux pluviales pour vérifier qu'elles ne sont pas percées ou déboîtées dans l'épaisseur du mur ou du plancher.",
                  method: "Exclure un défaut de plomberie extérieure.",
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
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Technique : {item.method}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Expertise Locale / Sécurité */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Expertise Toiture Terrasse dans tout le Rhône & l&apos;Est Lyonnais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed mb-12">
              <div className="space-y-6">
                <p>
                  Les interventions en toiture nécessitent un savoir-faire et une prudence particulière. À <strong>Meyzieu, Genas, ou Villeurbanne</strong>, Répère Fuite intervient sur tous types de supports (béton, bois, acier) et de revêtements (graviers, dalles sur plots, étanchéité autoprotégée).
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Lyon", "Meyzieu", "Décines", "Villeurbanne", "Genas", "Chassieu", "Bourgoin-Jallieu"].map((city) => (
                    <span key={city} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm">
                      <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-sm">
                <h3 className="font-sora font-semibold text-lg text-primary mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Votre dossier technique
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Précision :</strong> Rapport avec photos des tests (fumée, colorants).</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Accompagnement :</strong> Nous vous aidons à comprendre l'origine pour que vous puissiez faire réaliser les bons travaux.</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur les infiltrations de toit"
            items={faqItems}
          />

        </article>
      </div>

      <CTABanner />
    </>
  );
}
