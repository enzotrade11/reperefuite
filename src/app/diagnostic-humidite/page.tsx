import type { Metadata } from 'next'
import Link from 'next/link'
import AssurancesCarousel from '@/components/sections/AssurancesCarousel'
import { Droplets, AlertTriangle, Search, CheckCircle2, ArrowRight, Info, FileText, MapPin, Home, Thermometer, Wind } from 'lucide-react'
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
  title: 'Diagnostic Humidité Lyon | Recherche d\'Origine Infiltration & Fuite',
  description:
    "Taches d'humidité ? Moisissures ? Répère Fuite réalise votre diagnostic humidité à Lyon. Identification précise de l'origine : fuite, infiltration ou condensation.",
  alternates: {
    canonical: "https://reperefuite.fr/diagnostic-humidite",
  },
};

const faqItems = [
  {
    question: "Pourquoi faire appel à un expert pour un diagnostic humidité ?",
    answer:
      "L'humidité est un symptôme, pas la cause. Un expert utilise des outils de mesure spécifiques (hygromètres, caméras thermiques) pour déterminer si l'eau provient d'une fuite de canalisation, d'une infiltration par la façade ou d'un défaut de ventilation. Cela évite des traitements coûteux et inutiles.",
  },
  {
    question: "Qu'est-ce que les remontées capillaires ?",
    answer:
      "C'est l'humidité du sol qui remonte dans les murs par porosité. Cela se manifeste par du salpêtre, des peintures qui cloquent en bas des murs et une odeur de terre. Le diagnostic permet de les différencier d'une fuite de canalisation enterrée.",
  },
  {
    question: "L'assurance prend-elle en charge le diagnostic humidité ?",
    answer:
      "Si l'humidité est consécutive à un événement soudain (fuite), la recherche d'origine est généralement couverte. S'il s'agit d'un problème structurel (ventilation, étanchéité façade), cela dépend de vos garanties. Notre rapport détaillé est indispensable pour votre déclaration de sinistre.",
  },
  {
    question: "Comment traiter définitivement l'humidité ?",
    answer:
      "Le traitement dépend du diagnostic : réparation d'une fuite, pose d'une VMC pour la condensation, ou injection de résine pour les remontées capillaires. On ne traite jamais l'humidité sans avoir identifié sa source exacte.",
  },
];

export default function DiagnosticHumiditePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Diagnostic humidité",
            href: "/diagnostic-humidite",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Diagnostic humidité" }]} />

      <PageHero backgroundImage="/images/humidite-hero.jpg">
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Analyse & Recherche d'Origine
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Diagnostic Humidité à Lyon — Identifier la Source pour Mieux Traiter
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Moisissures, taches brunes ou odeurs persistantes ? Ne laissez pas l'humidité dégrader votre santé et votre patrimoine. 
          <strong>Répère Fuite</strong> analyse l'origine de vos problèmes d'eau dans toute la région lyonnaise.
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
              L'humidité dans une maison est un puzzle complexe. Une tache au plafond peut provenir d'une tuile cassée, mais aussi d'un micro-trou dans un tuyau de chauffage ou d'un pont thermique créant de la condensation.
            </p>
            <p>
              À Lyon et dans l&apos;Est Lyonnais, les bâtiments anciens comme les constructions neuves subissent des désordres liés à l&apos;eau. Chez <strong>Répère Fuite</strong>, nous ne vendons pas de traitements de surface. Notre métier est purement diagnostique : nous utilisons des technologies non destructives pour &quot;voir&quot; à travers les parois et identifier la cause réelle de l&apos;humidité.
            </p>
            <p>
              Un <strong>diagnostic humidité</strong> précis vous évite de repeindre inutilement un mur qui continuera de se dégrader, ou de poser une VMC alors que le problème est une fuite enterrée sous votre dalle. Nous remettons un rapport technique complet, indispensable pour justifier vos demandes de travaux ou vos prises en charge d&apos;assurance.
            </p>
          </section>

          <MiddleCTA />

          {/* Maillage inter-pages */}
          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="font-sora font-bold text-gray-900 mb-4">Diagnostics liés :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recherche-fuite-habitation" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Home className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Recherche de fuite habitation</span>
              </Link>
              <Link href="/recherche-fuite-terrasse-lyon" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Search className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Infiltration toiture terrasse</span>
              </Link>
            </div>
          </section>

          {/* Symptômes et Danger */}
          <section className="bg-light -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12 text-center text-balance">
                Les signaux d'alerte qui nécessitent un diagnostic
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Apparition de moisissures noires ou vertes (coins de murs, plafonds).",
                  "Peintures qui cloquent, papiers peints qui se décollent.",
                  "Présence de salpêtre (poudre blanche) sur les murs ou les bas de cloisons.",
                  "Odeur de 'renfermé' ou de terre persistante malgré l'aération.",
                  "Buée constante sur les vitres au petit matin (signe de condensation).",
                  "Murs froids au toucher ou sensation de parois 'poisseuses'.",
                  "Taches jaunâtres ou brunes s'étendant après chaque averse.",
                ].map((signe, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm font-medium">{signe}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Les 3 Grandes Causes */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Les trois origines principales de l'humidité
            </h2>
            <div className="space-y-12">
              {[
                {
                  title: "Les Infiltrations Accidentelles",
                  icon: Droplets,
                  desc: "Elles proviennent d'un défaut d'étanchéité extérieur : façade fissurée, tuile déplacée, joint de fenêtre usé ou fuite sur toiture terrasse. L'eau pénètre lors des pluies et migre dans les matériaux.",
                  impact: "Risque de dégradation structurelle et dégâts des eaux.",
                },
                {
                  title: "Les Fuites de Canalisations",
                  icon: Search,
                  desc: "Souvent invisibles, elles se situent dans les cloisons ou sous les planchers (chauffage au sol, évacuations). Elles créent une humidité constante qui ne sèche jamais, même en été.",
                  impact: "Surconsommation d'eau et sinistre permanent.",
                },
                {
                  title: "La Condensation et l'Air vicié",
                  icon: Wind,
                  desc: "Liée à un pont thermique ou une ventilation (VMC) défaillante. L'air humide se condense sur les parois froides, favorisant la prolifération de micro-organismes nocifs pour la santé.",
                  impact: "Problèmes respiratoires et dégradation de la qualité de l'air.",
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
                        <Info className="w-3.5 h-3.5" />
                        Impact : {item.impact}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Processus Diagnostic */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Notre protocole d'expertise à Lyon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed mb-12">
              <div className="space-y-6">
                <p>
                  Chaque diagnostic commence par un audit visuel et une mesure d&apos;hygrométrie pour cartographier les zones les plus humides. À <strong>Lyon ou Villeurbanne</strong>, nous adaptons nos tests selon l&apos;ancienneté du bâti.
                </p>
                <p>
                  Nous utilisons la <strong>thermographie infrarouge</strong> pour détecter les fuites de chauffage et les ponts thermiques, ainsi que des <strong>humidimètres à induction</strong> pour mesurer l&apos;humidité à cœur sans percer vos murs.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Lyon", "Villeurbanne", "Meyzieu", "Genas", "Chassieu", "Bourgoin-Jallieu"].map((city) => (
                    <span key={city} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm">
                      <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-sora font-semibold text-lg text-primary mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Votre rapport d'expertise
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Photos & Mesures :</strong> Preuve irréfutable de l'état des murs.</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Préconisations :</strong> Nous vous orientons vers le bon corps de métier (plombier, étancheur, façadier).</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur l'humidité"
            items={faqItems}
          />

        </article>
      </div>

      <CTABanner />
    </>
  );
}
