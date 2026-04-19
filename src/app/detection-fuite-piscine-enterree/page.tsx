import type { Metadata } from 'next'
import Link from 'next/link'
import AssurancesCarousel from '@/components/sections/AssurancesCarousel'
import {
  CheckCircle2,
  Droplets,
  MapPin,
  Headphones,
  FlaskConical,
  Camera,
  Gauge,
  ArrowRight,
  Info
} from 'lucide-react'
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
  title: 'Détection fuite piscine enterrée Lyon | Sans Casse | Répère Fuite',
  description:
    "Votre piscine perd de l'eau ? Localisation fuite canalisation enterrée au centimètre près, sans vider le bassin ni casser une seule dalle.",
  alternates: {
    canonical: "https://reperefuite.fr/detection-fuite-piscine-enterree",
  },
};

const faqItems = [
  {
    question: "Comment savoir si c'est une fuite ou de l'évaporation ?",
    answer: "Faites le test du seau : remplissez un seau d'eau à ras bord, posez-le au bord du bassin sur une marche, et mesurez la perte d'eau de chaque côté sur 24h. Si le bassin perd plus que le seau, c'est une fuite — pas de l'évaporation naturelle.",
  },
  {
    question: "Faut-il vider la piscine pour la détection ?",
    answer: "Non, c'est même déconseillé ! Nous travaillons sur bassin en eau pour observer le circuit complet. L'objectif est de trouver la fuite de manière non destructive.",
  },
  {
    question: "Combien de temps dure une intervention ?",
    answer: "La détection complète (bassin et canalisations) dure en moyenne 2 à 4 heures selon la configuration du réseau et le nombre de circuits à tester.",
  },
  {
    question: "Est-ce que vous faites aussi la réparation ?",
    answer: "Nous sommes spécialisés exclusivement dans la détection. Cette indépendance vous garantit un diagnostic impartial : nous n'avons aucun intérêt à vous gonfler un devis de réparation. Notre rapport détaillé permet ensuite à votre pisciniste de réparer avec précision.",
  },
  {
    question: "L'assurance habitation prend-elle en charge la détection ?",
    answer: "Certaines assurances remboursent tout ou partie de la détection dans le cadre de la garantie 'Dégâts des eaux'. Notre rapport d'intervention écrit avec localisation précise est un document recevable par votre assureur. Nous vous conseillons de contacter votre compagnie avant l'intervention pour vérifier votre contrat.",
  },
];

export default function PiscineEnterreePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Recherche de fuite piscine",
            href: "/recherche-fuite-piscine",
          },
          {
            label: "Détection fuite piscine enterrée",
            href: "/detection-fuite-piscine-enterree",
          },
        ]}
      />
      <Breadcrumbs items={[
        { label: "Recherche de fuite piscine", href: "/recherche-fuite-piscine" },
        { label: "Piscine enterrée" }
      ]} />

      <PageHero backgroundImage="/images/piscine-hero.jpg">
        <Badge variant="outline" className="text-white border-white/20 mb-4 bg-primary/20 backdrop-blur-sm">
          Détection non destructive — Résultat en 1 intervention
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Détection fuite piscine enterrée
        </h1>
        <h2 className="text-xl sm:text-2xl text-blue-100 font-medium mb-6">
          Sans creuser. Sans démolir.
        </h2>
        <p className="text-lg text-blue-100/90 leading-relaxed max-w-3xl mb-8">
          Votre piscine perd de l'eau et vous ne savez pas d'où ça vient ? Nous localisons la fuite sur votre canalisation enterrée au centimètre près, sans vider le bassin ni casser une seule dalle.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Button href={siteConfig.phoneTel} variant="accent" size="lg" className="text-lg">
            {siteConfig.phoneDisplay}
          </Button>
          <Button href="#methode" variant="white" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
            Voir comment nous travaillons ↓
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-4xl font-black text-secondary font-sora">1</span>
            <span className="text-sm text-blue-100 uppercase tracking-wider font-semibold mt-1">seule intervention</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-secondary font-sora">0</span>
            <span className="text-sm text-blue-100 uppercase tracking-wider font-semibold mt-1">travaux destructifs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-secondary font-sora">+40km</span>
            <span className="text-sm text-blue-100 uppercase tracking-wider font-semibold mt-1">autour de Lyon</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-secondary font-sora">Rapport</span>
            <span className="text-sm text-blue-100 uppercase tracking-wider font-semibold mt-1">écrit fourni</span>
          </div>
        </div>
      </PageHero>

      <AssurancesCarousel />

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 lg:space-y-32">
          
          {/* Reconnaître le problème */}
          <section>
            <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-2 block">Reconnaître le problème</span>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Votre piscine a peut-être une fuite enterrée si...
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">
              Pas toujours évident à identifier. Une fuite sur la canalisation enterrée d'une piscine peut passer des semaines inaperçue. Voici les signaux qui ne trompent pas.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
              <h3 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
                ⚠️ Test rapide à faire ce soir :
              </h3>
              <p className="text-amber-900/80">
                Remplissez un seau d'eau à ras bord, posez-le au bord du bassin sur une marche, et mesurez la perte d'eau de chaque côté sur 24h. Si le bassin perd plus que le seau, c'est une fuite — pas de l'évaporation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Niveau qui baisse anormalement", desc: "Plus de 2-3 cm par semaine, même sans grosses chaleurs et avec une couverture.", icon: Droplets },
                { title: "Facture d'eau en hausse", desc: "Vous rajoutez régulièrement de l'eau sans raison apparente (impact direct sur la consommation annuelle).", icon: Droplets },
                { title: "Sol détrempé autour du bassin", desc: "Une zone de terrain toujours humide, de la mousse ou de l'herbe plus verte côté canalisations.", icon: Droplets },
                { title: "Pompe qui tourne à vide", desc: "L'aspiration perd de la puissance ou se désamorce. Signe d'une entrée d'air sur le réseau aspirant.", icon: Droplets },
                { title: "Perte stable hors filtration", desc: "La piscine perd autant pompe coupée que pompe en marche : la fuite est sur la structure, pas les tuyaux.", icon: Droplets },
                { title: "Fissures visibles sur le bassin", desc: "Microfissures sur le carrelage, le béton ou la coque qui laissent filtrer l'eau par capillarité.", icon: Droplets }
              ].map((item, i) => (
                <div key={i} className="bg-light/50 border border-gray-100 rounded-2xl p-6 flex gap-4 transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center sm:text-right hidden sm:block">
              <Button href={siteConfig.phoneTel} variant="accent" className="shadow-lg shadow-accent/20">
                Appeler
              </Button>
            </div>
          </section>

          <MiddleCTA />

          {/* Ma méthode d'intervention */}
          <section id="methode" className="scroll-mt-24">
            <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-2 block">Notre méthode d'intervention</span>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Comment se passe la détection ?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl">
              Une approche méthodique en 4 étapes. Nous travaillons de façon non invasive : votre piscine reste en eau, votre dalle intacte.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:via-gray-200 before:to-transparent">
              {[
                { step: "1", tag: "Prise de contact", title: "Échange téléphonique & devis", desc: "Avant toute intervention, on fait le point ensemble sur les symptômes, le type de piscine et les accès. Nous vous donnons un devis clair, sans surprise. Aucun déplacement inutile." },
                { step: "2", tag: "Sur site", title: "Inspection visuelle & tests préliminaires", desc: "Nous observons l'état du bassin, des skimmers, des refoulements et des équipements. Des tests de pression permettent d'isoler le circuit en cause : aspirant, refoulement ou structure." },
                { step: "3", tag: "Détection active", title: "Techniques non destructives ciblées", desc: "Écoute acoustique sur les canalisations enterrées, injection de gaz traceur sous pression, caméra endoscopique dans les tuyaux. Nous nous adaptons à votre configuration pour trouver précisément la fuite." },
                { step: "4", tag: "Bilan", title: "Rapport d'intervention détaillé", desc: "Nous vous remettons un rapport complet avec photos et marquage au sol de la zone à réparer, exploitable par un pisciniste et valable pour votre assurance." }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-ml-6 md:group-even:-mr-6 shadow-sm z-10 transition-transform group-hover:scale-110 duration-300">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-light/50 rounded-2xl p-6 shadow-sm border border-gray-100 transition-colors group-hover:bg-white">
                    <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-bold rounded-full mb-3 shadow-sm border border-gray-100">{item.tag}</span>
                    <h3 className="font-sora text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center hidden sm:block">
              <Button href={siteConfig.phoneTel} variant="accent" className="shadow-lg shadow-accent/20">
                Appeler
              </Button>
            </div>
          </section>

          {/* Outils et méthodes - Dark section */}
          <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light via-primary to-blue-950 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 lg:py-24 rounded-[3rem] text-white overflow-hidden relative">
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="text-blue-200 font-semibold tracking-wider text-sm uppercase mb-2 block">Outils & Méthodes</span>
              <h2 className="font-sora text-3xl sm:text-4xl font-bold mb-6">
                Les techniques de détection utilisées
              </h2>
              <p className="text-lg text-blue-100 mb-12 max-w-2xl leading-relaxed">
                Chaque situation est différente. Nous utilisons les outils adaptés à votre type de piscine et à la configuration de la canalisation enterrée.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Écoute acoustique", desc: "Microphone de sol ultra-sensible qui capte le bruit de l'eau qui fuit dans les canalisations enterrées, même à 1 m de profondeur.", icon: Headphones },
                  { title: "Gaz traceur", desc: "Injection d'un mélange de gaz inoffensif dans la canalisation. Détecteur en surface qui localise l'échappement au point de fuite.", icon: FlaskConical },
                  { title: "Caméra endoscopique", desc: "Inspection vidéo à l'intérieur des canalisations pour identifier fissures, joints défaillants ou corps étrangers.", icon: Camera },
                  { title: "Test de pression", desc: "Mise en pression de chaque circuit pour isoler la section défaillante avant d'aller plus loin dans la recherche.", icon: Gauge }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/15 transition-colors">
                    <h3 className="font-sora text-xl font-bold mb-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      {item.title}
                    </h3>
                    <p className="text-blue-50/80 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pourquoi faire appel */}
          <section>
            <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-2 block">Pourquoi faire appel à Répère Fuite</span>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance">
              La détection avant la réparation, c'est du temps et de l'argent économisés
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl">
              Creuser au hasard coûte cher et abîme votre propriété. Localiser précisément avant d'intervenir, c'est la seule approche intelligente.
            </p>

            <div className="space-y-4 max-w-3xl">
              {[
                "Aucune destruction inutile — nous ciblons exactement l'endroit à ouvrir, pas plus",
                "Piscine maintenue en eau pendant toute l'intervention",
                "Rapport exploitable par n'importe quel pisciniste ou plombier pour la réparation",
                "Intervention sur tous types de piscines : béton, coque polyester, liner, carrelage",
                "Devis transparent avant intervention — pas de mauvaise surprise",
                "Artisan indépendant, pas de franchise : vous avez notre numéro direct",
                "Zone d'intervention : Lyon, Rhône, Ain, Isère, Loire — rayon 40 km"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-light/50 border border-gray-100 rounded-xl hover:shadow-md hover:bg-white transition-all">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <p className="text-gray-800 font-medium">{text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 hidden sm:block">
              <Button href={siteConfig.phoneTel} variant="accent" className="shadow-lg shadow-accent/20">
                Appeler
              </Button>
            </div>
          </section>

          <FAQ
            title="Vos questions sur la détection fuite piscine enterrée"
            items={faqItems}
          />

          {/* Zone d'intervention */}
          <section className="bg-light/80 p-8 md:p-12 lg:p-16 rounded-[3rem] text-center border border-gray-100">
            <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-2 block">Zone d'intervention</span>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Détection fuite piscine Lyon & région
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Nous intervenons dans un rayon de 40 km autour de Vaulx-en-Velin, sur les départements du Rhône, de l'Ain, de l'Isère et de la Loire.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {siteConfig.communes.rhone.slice(0, 6).map((city) => (
                <span key={city} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                  {city}
                </span>
              ))}
              {siteConfig.communes.ain.slice(0, 2).map((city) => (
                <span key={city} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                  {city}
                </span>
              ))}
              {siteConfig.communes.isere.slice(0, 2).map((city) => (
                <span key={city} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                  {city}
                </span>
              ))}
            </div>
            
            <Button href={siteConfig.phoneTel} variant="accent" size="lg" className="shadow-xl shadow-accent/30 hover:scale-105 transition-transform duration-300">
              Appeler pour une intervention
            </Button>
          </section>

        </article>
      </div>

      <CTABanner />
    </>
  );
}
