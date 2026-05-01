import type { Metadata } from "next";
import Link from "next/link";
import AssurancesCarousel from "@/components/sections/AssurancesCarousel";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Phone,
  AlertTriangle,
  BadgeEuro,
  Clock,
  ShieldCheck,
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
    "Facture d'Eau Anormalement Élevée ? Loi Warsmann Lyon | Répère Fuite",
  description:
    "Votre facture d'eau a explosé ? La loi Warsmann vous protège : votre fournisseur doit plafonner votre facture si une fuite est prouvée. Répère Fuite vous fournit le rapport officiel nécessaire. Intervention rapide Lyon et Est Lyonnais.",
  alternates: {
    canonical: "https://reperefuite.fr/surconsommation-eau-facture-elevee",
  },
  keywords: [
    "loi warsmann fuite eau",
    "facture eau trop élevée fuite",
    "surconsommation eau fuite lyon",
    "plafonnement facture eau fuite",
    "remboursement surconsommation eau",
    "rapport fuite eau assurance",
    "detection fuite eau lyon",
  ],
};

const faqItems = [
  {
    question: "Qu'est-ce que la loi Warsmann et qui est concerné ?",
    answer:
      "La loi Warsmann (loi n°2011-525 du 17 mai 2011, article 93) oblige les fournisseurs d'eau à plafonner votre facture en cas de fuite avérée sur votre installation intérieure, après le compteur. Elle s'applique à tous les abonnés domestiques (maisons, appartements). Concrètement, votre facture ne peut pas dépasser le double de votre consommation habituelle pour la période concernée, quel que soit le volume réellement consommé à cause de la fuite.",
  },
  {
    question:
      "Quelles démarches faire pour bénéficier du plafonnement loi Warsmann ?",
    answer:
      "Vous devez : 1) Faire constater et réparer la fuite par un plombier agréé. 2) Faire établir un rapport de détection par un professionnel (comme Répère Fuite) attestant de la localisation et de la nature de la fuite. 3) Envoyer ces documents à votre fournisseur d'eau dans un délai d'1 mois après la réparation. Le fournisseur doit alors réviser votre facture.",
  },
  {
    question:
      "Le rapport de Répère Fuite est-il valable pour la loi Warsmann ?",
    answer:
      "Oui. Notre rapport de detection de fuite est un document technique professionnel qui atteste de l'emplacement précis, de la cause, et de la nature de la fuite, avec photos à l'appui. Il est structuré pour répondre aux exigences des fournisseurs d'eau (Eau de Paris, Grand Lyon Métropole eau, SDEI...) et constitue la preuve requise pour votre dossier de plafonnement.",
  },
  {
    question: "La loi Warsmann s'applique-t-elle aux fuites enterrées ?",
    answer:
      "La loi Warsmann couvre les fuites après le compteur, c'est-à-dire sur votre réseau privé. Cela inclut les canalisations enterrées dans votre propriété, sous les dalles, ou encastrées dans vos murs. En revanche, une fuite sur la partie publique du réseau (avant le compteur) relève de la responsabilité du distributeur d'eau.",
  },
  {
    question:
      "Est-ce que mon assurance habitation couvre aussi la surconsommation ?",
    answer:
      "Votre assurance multirisques habitation (MRH) peut prendre en charge les frais de recherche de fuite et parfois les dommages causés par la fuite, selon votre contrat. La loi Warsmann, elle, agit directement sur votre facture d'eau. Les deux dispositifs sont complémentaires : notre rapport sert à la fois au plafonnement de votre facture d'eau ET à votre dossier assurance.",
  },
];

export default function SurconsommationEauPage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Surconsommation eau & loi Warsmann",
            href: "/surconsommation-eau-facture-elevee",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Surconsommation eau & loi Warsmann" }]} />

      <PageHero>
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Loi Warsmann — Protection des Abonnés
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Facture d'Eau Anormalement Élevée ?{" "}
          <span className="text-secondary">La loi vous protège.</span>
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Une fuite invisible a fait exploser votre consommation d'eau.{" "}
          <strong>La loi Warsmann oblige votre fournisseur à plafonner votre
          facture</strong> — à condition de prouver la fuite avec un rapport
          professionnel. C'est exactement ce que nous faisons.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg">
            Appeler Répère Fuite
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
            href="/recherche-fuite-canalisation-enterree"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Canalisation enterrée <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/methodes-recherche-fuite"
            className="text-primary hover:underline flex items-center gap-1"
          >
            Nos méthodes de détection <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">

          {/* Alerte principale */}
          <section className="bg-secondary/5 border border-secondary/20 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center">
            <AlertTriangle className="w-14 h-14 text-secondary shrink-0" />
            <div>
              <h2 className="font-sora text-xl font-bold text-gray-900 mb-2">
                Votre compteur a tourné sans que vous le sachiez
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Une fuite sous dalle, dans une canalisation encastrée ou sur un
                réseau enterré peut écouler plusieurs dizaines de m³ par mois
                sans qu'aucun symptôme visible n'apparaisse. Résultat : une
                facture 5, 10 ou 20 fois supérieure à la normale.{" "}
                <strong>Vous n'avez pas à payer ce surplus</strong>, à
                condition de le prouver.
              </p>
            </div>
          </section>

          {/* Loi Warsmann expliquée */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              La loi Warsmann : comment elle vous protège
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: BadgeEuro,
                  title: "Plafonnement garanti",
                  desc: "Votre fournisseur d'eau ne peut pas vous facturer plus du double de votre consommation habituelle si une fuite est prouvée sur votre réseau privé.",
                },
                {
                  icon: Clock,
                  title: "Délai d'1 mois",
                  desc: "Vous avez 1 mois après la réparation pour envoyer les justificatifs à votre fournisseur. Passé ce délai, le plafonnement ne s'applique plus.",
                },
                {
                  icon: ShieldCheck,
                  title: "Applicable partout",
                  desc: "La loi s'applique à tous les abonnés domestiques en France, quel que soit votre fournisseur d'eau (régie, Veolia, Suez, SDEI…).",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-light p-6 rounded-2xl border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-sora font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Important :</strong> La loi Warsmann ne s'applique
                qu'une seule fois pour un même abonnement (sauf si plus de 3
                ans se sont écoulés depuis le dernier recours). Le plafonnement
                porte uniquement sur la part consommation, pas sur l'abonnement
                ni les taxes fixes.
              </p>
            </div>
          </section>

          {/* Ce dont vous avez besoin */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Ce qu'il vous faut pour obtenir le plafonnement
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "Un rapport de détection de fuite professionnel",
                  desc: "Il doit attester de la localisation précise de la fuite, sa cause, et confirmer qu'elle se situe sur votre réseau privé (après compteur). C'est ce que Répère Fuite vous fournit.",
                },
                {
                  num: "2",
                  title: "Une attestation de réparation",
                  desc: "Un devis et facture de réparation émis par un plombier agréé, prouvant que la fuite a bien été réparée.",
                },
                {
                  num: "3",
                  title: "Un courrier à votre fournisseur d'eau",
                  desc: "Envoyé en recommandé avec accusé de réception, dans le mois suivant la réparation, accompagné des deux documents ci-dessus.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md shadow-primary/30">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Notre rapport */}
          <section className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <FileText className="w-14 h-14 text-primary shrink-0" />
              <div>
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-4">
                  Notre rapport : la pièce maîtresse de votre dossier
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  À l'issue de chaque intervention, Répère Fuite vous remet un
                  rapport technique complet incluant : la description des
                  méthodes utilisées (gaz traceur, caméra thermique, acoustique),
                  la localisation précise de la fuite avec photos, et la
                  confirmation qu'elle se situe sur votre installation privée
                  après compteur. Ce document est directement utilisable auprès
                  de votre fournisseur d'eau ET de votre assurance MRH.
                </p>
                <ul className="space-y-3">
                  {[
                    "Rapport structuré pour la loi Warsmann et les conventions IRSI",
                    "Photos et schéma de localisation inclus",
                    "Rédigé par un technicien certifié, avec en-tête professionnel",
                    "Transmis sous 48h par email en format PDF",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA intermédiaire */}
          <section className="text-center bg-gray-900 rounded-3xl p-10 text-white">
            <h2 className="font-sora text-2xl font-bold mb-4">
              Agissez avant la fin du délai d'1 mois
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Chaque jour compte. Une fois la fuite réparée, vous n'avez qu'un
              mois pour constituer votre dossier. Contactez-nous maintenant pour
              obtenir votre rapport rapidement.
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
              Quelle fuite est à l'origine de votre surconsommation ?
            </h2>
            <p className="text-gray-600 mb-8">
              Avant de constituer votre dossier loi Warsmann, il faut localiser
              et réparer la fuite. Selon votre configuration, voici nos services
              les plus courants :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  href: "/fuite-sous-dalle-encastree",
                  title: "Fuite sous dalle ou encastrée",
                  desc: "Canalisation noyée dans le béton ou dans une cloison, souvent à l'origine des grosses surconsommations.",
                },
                {
                  href: "/recherche-fuite-canalisation-enterree",
                  title: "Canalisation enterrée",
                  desc: "Fuite sur votre réseau privé enterré dans le jardin ou sous la voie d'accès.",
                },
                {
                  href: "/recherche-fuite-habitation",
                  title: "Fuite en habitation",
                  desc: "Réseau sanitaire intérieur, colonne montante ou réseau d'évacuation défaillant.",
                },
                {
                  href: "/recherche-fuite-piscine",
                  title: "Fuite piscine",
                  desc: "Une piscine qui perd quelques centimètres par jour peut représenter plusieurs m³ par semaine.",
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
            title="Questions fréquentes sur la loi Warsmann et la surconsommation d'eau"
            items={faqItems}
          />
        </article>
      </div>

      <CTABanner />
    </>
  );
}
