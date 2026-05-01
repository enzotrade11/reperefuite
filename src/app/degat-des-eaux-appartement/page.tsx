import type { Metadata } from "next";
import Link from "next/link";
import AssurancesCarousel from "@/components/sections/AssurancesCarousel";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Phone,
  AlertTriangle,
  Users,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageHero from "@/components/sections/PageHero";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title:
    "Dégât des Eaux Appartement Lyon | Trouver l'Origine Sans Casse | Répère Fuite",
  description:
    "Dégât des eaux dans votre appartement ou celui du voisin ? Répère Fuite localise la fuite précisément sans démolition, établit le rapport pour votre assurance et copropriété. Intervention rapide Lyon et alentours.",
  alternates: {
    canonical: "https://reperefuite.fr/degat-des-eaux-appartement",
  },
  keywords: [
    "dégât des eaux appartement lyon",
    "fuite appartement voisin",
    "recherche fuite appartement",
    "expert dégât des eaux lyon",
    "rapport fuite assurance appartement",
    "convention IRSI fuite",
    "détection fuite appartement sans casse",
  ],
};

const faqItems = [
  {
    question:
      "Je subis un dégât des eaux venant de l'appartement du dessus, que faire ?",
    answer:
      "En cas de dégât des eaux venant d'un voisin, le plus important est de déclarer le sinistre à votre assureur dans les 5 jours ouvrés, puis de contacter l'assureur de votre voisin. La convention IRSI (qui remplace l'ancienne CID-COP) organise la prise en charge entre assureurs. Pour accélérer la résolution, il faut localiser rapidement l'origine de la fuite : c'est là qu'intervient Répère Fuite avec un rapport technique impartial.",
  },
  {
    question:
      "Qui paie la recherche de fuite dans un appartement en copropriété ?",
    answer:
      "Cela dépend de l'origine de la fuite. Si elle provient de votre appartement (canalisation privative), c'est votre assurance MRH qui prend en charge les frais de recherche. Si elle vient d'une partie commune (colonne montante, toiture), c'est l'assurance de la copropriété. Dans les deux cas, notre rapport permet de trancher clairement et d'éviter tout litige de responsabilité.",
  },
  {
    question: "Peut-on trouver la fuite sans casser les murs ou le carrelage ?",
    answer:
      "Oui. Grâce à nos technologies non destructives (gaz traceur, caméra thermique infrarouge, détection acoustique), nous localisons la fuite à quelques centimètres près, à travers les cloisons, dalles et carrelages, sans aucune démolition préalable. La réparation ne nécessite ainsi qu'une ouverture chirurgicale, minimisant les dommages dans votre appartement.",
  },
  {
    question:
      "Mon rapport de détection est-il valable auprès de la copropriété et de l'assurance ?",
    answer:
      "Oui. Notre rapport technique précise l'emplacement exact, la nature de la fuite, les méthodes utilisées, et la responsabilité (partie privative ou commune). Il est reconnu par les assureurs et les syndics de copropriété, et structuré pour correspondre aux exigences des conventions IRSI en vigueur.",
  },
  {
    question:
      "Combien de temps dure une intervention pour un dégât des eaux en appartement ?",
    answer:
      "Dans la grande majorité des cas, une intervention complète dure entre 1h30 et 3 heures. Nous combinons deux méthodes complémentaires pour garantir un diagnostic fiable, puis nous marquons physiquement la zone à ouvrir pour le plombier réparateur.",
  },
];

export default function DegatDesEauxAppartementPage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Dégât des eaux appartement",
            href: "/degat-des-eaux-appartement",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Dégât des eaux appartement" }]} />

      <PageHero>
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Sinistre Appartement — Copropriété
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Dégât des Eaux en Appartement à Lyon —{" "}
          <span className="text-secondary">Rapport Officiel pour Votre Assurance</span>
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Fuite du voisin, colonne commune, canalisation encastrée…{" "}
          <strong>Répère Fuite identifie l'origine exacte sans démolir</strong>{" "}
          et vous remet le rapport officiel pour votre assurance,{" "}
          votre syndic et la convention IRSI.{" "}
          <span className="text-blue-200">Intervention à Lyon et dans un rayon de 50 km.</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            <Phone className="w-4 h-4 mr-2" />
            Appeler en urgence
          </Button>
          <Button href="/contact" variant="white">
            Demander un rapport
          </Button>
        </div>
      </PageHero>

      <AssurancesCarousel />

      {/* Cross links */}
      <section className="py-4 bg-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/recherche-fuite-habitation"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Recherche de fuite habitation <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/fuite-sous-dalle-encastree"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Fuite sous dalle & encastrée <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/surconsommation-eau-facture-elevee"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Loi Warsmann & surconsommation <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/methodes-recherche-fuite"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Nos méthodes <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">

          {/* Alerte */}
          <section className="bg-secondary/5 border border-secondary/20 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center">
            <AlertTriangle className="w-14 h-14 text-secondary shrink-0" />
            <div>
              <h2 className="font-sora text-xl font-bold text-gray-900 mb-2">
                Un dégât des eaux non traité empire très vite
              </h2>
              <p className="text-gray-700 leading-relaxed">
                En appartement, la fuite traverse les planchers et cloisonsavant
                d'apparaître. Sans localisation précise, aucune réparation
                durable n'est possible — et le litige entre voisins ou avec le
                syndic peut durer des mois. Notre rapport technique met fin à
                l'incertitude en quelques heures.
              </p>
            </div>
          </section>

          {/* Situations typiques */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Les situations les plus fréquentes en appartement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Fuite venant de l'appartement du dessus",
                  desc: "Taches au plafond, peinture qui cloque, eau qui suinte… La fuite peut venir d'une canalisation encastrée, d'un siphon de douche défaillant ou d'un joint usé chez votre voisin. Nous identifions la source précise pour établir les responsabilités.",
                },
                {
                  icon: ClipboardList,
                  title: "Fuite sur colonne montante ou partie commune",
                  desc: "Les colonnes d'eau froide, chaude et d'évacuation sont souvent encastrées dans les murs communs. Si la fuite provient d'une partie commune, c'est la copropriété qui est responsable. Notre rapport le confirme officiellement.",
                },
                {
                  icon: ShieldCheck,
                  title: "Fuite dans votre propre appartement",
                  desc: "Canalisation encastrée dans un mur ou sous le carrelage de votre salle de bain ou cuisine. Nous la localisons sans casser, pour une réparation ciblée et un dossier assurance solide.",
                },
                {
                  icon: FileText,
                  title: "Litige entre voisins ou avec le syndic",
                  desc: "Sans preuve technique, les litiges s'enlisent. Notre rapport impartial, daté et signé par un technicien certifié, fait office de preuve opposable pour trancher la responsabilité.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-light p-6 rounded-2xl border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-sora font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Notre process */}
          <section className="border-t pt-16">
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Notre intervention en appartement : rapide et sans dégât
            </h2>
            <div className="space-y-6 relative before:content-[''] before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/20">
              {[
                {
                  step: "1",
                  title: "Contact et évaluation",
                  text: "Vous décrivez le sinistre par téléphone. Nous identifions le type de fuite probable et planifions l'intervention rapidement.",
                },
                {
                  step: "2",
                  title: "Détection non destructive",
                  text: "Déploiement de nos équipements (gaz traceur, caméra thermique, acoustique) pour localiser la fuite à travers cloisons et dalles.",
                },
                {
                  step: "3",
                  title: "Marquage et orientation",
                  text: "La zone précise est marquée pour le plombier réparateur. Fini les casses à l'aveugle.",
                },
                {
                  step: "4",
                  title: "Rapport complet sous 48h",
                  text: "Document technique avec photos, localisation, cause et responsabilité. Valable auprès de votre assureur, syndic et voisins.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start pl-4 bg-white">
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

          {/* Convention IRSI */}
          <section className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <FileText className="w-12 h-12 text-primary shrink-0" />
              <div>
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-4">
                  Convention IRSI : notre rapport pour accélérer votre dossier
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La convention IRSI (Inter-assureurs pour le Règlement des
                  Sinistres Immeuble) encadre les dégâts des eaux entre voisins
                  et copropriétés. Votre assureur a besoin d'un document
                  technique précis pour déclencher la prise en charge. Notre
                  rapport répond exactement à ces exigences.
                </p>
                <ul className="space-y-2">
                  {[
                    "Localisation précise de l'origine avec coordonnées et photos",
                    "Identification de la partie responsable (privative ou commune)",
                    "Méthodes de détection certifiées non destructives",
                    "Document transmis sous 48h, format PDF professionnel",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA urgence */}
          <section className="text-center bg-gray-900 rounded-3xl p-10 text-white">
            <h2 className="font-sora text-2xl font-bold mb-4">
              Ne laissez pas le sinistre s'aggraver
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Plus vous attendez, plus les dommages s'étendent aux appartements
              voisins. Contactez Répère Fuite pour une intervention rapide à
              Lyon et dans un rayon de 50 km.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={siteConfig.phoneTel} variant="accent" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Appeler maintenant
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
          </section>

          {/* Maillage interne */}
          <section>
            <h2 className="font-sora text-2xl font-bold text-gray-900 mb-6">
              Nos autres services liés aux sinistres dégât des eaux
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  href: "/fuite-sous-dalle-encastree",
                  title: "Fuite sous dalle ou encastrée",
                  desc: "Canalisation noyée dans le béton ou dans une cloison, très fréquente dans les appartements.",
                },
                {
                  href: "/surconsommation-eau-facture-elevee",
                  title: "Facture d'eau élevée — Loi Warsmann",
                  desc: "Si la fuite a fait exploser votre facture, la loi vous permet d'en limiter l'impact.",
                },
                {
                  href: "/recherche-fuite-habitation",
                  title: "Recherche de fuite habitation",
                  desc: "Notre service global pour toutes les fuites dans les maisons et appartements.",
                },
                {
                  href: "/diagnostic-humidite",
                  title: "Diagnostic humidité",
                  desc: "Humidité persistante sans fuite apparente ? Nous identifions l'origine exacte.",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group flex gap-4 p-5 bg-light rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <h3 className="font-sora font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur les dégâts des eaux en appartement"
            items={faqItems}
          />
        </article>
      </div>

      <CTABanner />
    </>
  );
}
