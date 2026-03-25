import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Droplets, MapPin, Wrench, Info, Gauge, Camera, FileText, Shovel, Search } from 'lucide-react'
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
  title: 'Recherche de Fuite Réseau Enterré Lyon | Détection après compteur sans casse',
  description:
    "Surconsommation d'eau ? Votre compteur tourne sans arrêt ? Répère Fuite localise les fuites sur canalisations enterrées à Lyon et Est Lyonnais sans tranchée inutile.",
  alternates: {
    canonical: "https://reperefuite.fr/recherche-fuite-reseau-enterre",
  },
};

const faqItems = [
  {
    question: "Comment savoir si ma canalisation enterrée fuit ?",
    answer:
      "Le signe le plus fiable est le test du compteur : fermez tous vos robinets. Si le petit disque ou les chiffres de votre compteur d'eau continuent de tourner, il y a une fuite. D'autres signes incluent une zone anormalement humide dans votre jardin ou une baisse de pression aux robinets.",
  },
  {
    question: "Peut-on localiser une fuite sous une dalle béton ou du goudron ?",
    answer:
      "Absolument. Grâce au gaz traceur et à l'écoute électro-acoustique, nous pouvons localiser une fuite précisément à travers plusieurs dizaines de centimètres de béton, de bitume ou de terre, sans aucun creusement préalable.",
  },
  {
    question: "La recherche de fuite après compteur est-elle remboursée ?",
    answer:
      "La plupart des assurances habitation couvrent la 'Recherche de fuite' dans le cadre de la garantie Dégâts des Eaux. Notre rapport détaillé, incluant photos et localisation précise, est la pièce maîtresse demandée par votre assureur pour déclencher la prise en charge.",
  },
  {
    question: "Qu'est-ce qu'une fuite 'après compteur' ?",
    answer:
      "C'est une fuite située sur la partie privée de votre installation, entre le compteur d'eau (souvent en limite de propriété) et vos robinets intérieurs. La responsabilité de la perte d'eau et des réparations incombe alors au propriétaire.",
  },
];

export default function ReseauEnterrePage() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Recherche de fuite réseau enterré",
            href: "/recherche-fuite-reseau-enterre",
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Recherche de fuite réseau enterré" }]} />

      <PageHero backgroundImage="/images/reseau-hero.jpg">
        <Badge variant="outline" className="text-white border-white/20 mb-4">
          Localisation après compteur
        </Badge>
        <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Recherche de Fuite Réseau Enterré à Lyon — Expertise Sans Tranchée
        </h1>
        <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mb-8">
          Votre facture d'eau s'envole ? Votre compteur tourne alors que tout est fermé ? 
          <strong>Répère Fuite</strong> spécialise dans la détection non destructive de fuites sur canalisations 
          extérieures et réseaux enterrés dans tout l'Est Lyonnais.
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

      <div className="bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
          {/* Introduction */}
          <section className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              Une fuite sur un réseau enterré est invisible mais dévastatrice : elle gaspille des milliers de litres d'eau et peut fragiliser les fondations de votre habitation ou de vos murets de clôture.
            </p>
            <p>
              À Lyon, les variations de pression et les mouvements de terrain (sécheresse/pluie) sont les principales causes de rupture sur les canalisations d&apos;amenée d&apos;eau potable. Chez <strong>Répère Fuite</strong>, nous intervenons pour stopper cette hémorragie financière et écologique sans transformer votre jardin en champ de mines.
            </p>
            <p>
              Grâce à des technologies comme le <strong>gaz traceur</strong> ou la <strong>corrélation acoustique</strong>, nous localisons le point de rupture au centimètre près. Cette précision permet à votre plombier ou terrassier d&apos;intervenir sur une zone de quelques centimètres seulement, réduisant drastiquement les frais de remise en état de vos extérieurs.
            </p>
          </section>

          <MiddleCTA />

          {/* Maillage inter-pages */}
          <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="font-sora font-bold text-gray-900 mb-4">Besoin d'un autre diagnostic ?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recherche-fuite-habitation" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Search className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Fuite en habitation</span>
              </Link>
              <Link href="/detection-fuite-piscine-enterree" className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Fuite piscine enterrée</span>
              </Link>
            </div>
          </section>

          {/* Symptômes */}
          <section className="bg-light -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 rounded-[3rem]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12 text-center">
                Les signes d'une fuite enterrée
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Compteur d'eau qui tourne en continu, même robinets fermés.",
                  "Baisse de pression inexpliquée sur l'ensemble des points d'eau.",
                  "Présence d'algues ou de mousse sur un mur de clôture ou une terrasse.",
                  "Affaissement localisé de pavés, de dalles ou apparition de crevasses.",
                  "Végétation anormalement dense ou verte à un endroit précis du jardin.",
                  "Infiltration ou remontée d'eau dans une cave ou un vide sanitaire.",
                  "Facture d'eau multipliée par deux ou trois sans changement d'habitude.",
                ].map((signe, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{signe}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-12">
              Comment détecte-t-on une fuite sous terre ?
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: "Le Gaz Traceur",
                  icon: Gauge,
                  desc: "Mélange d'azote et d'hydrogène injecté sous pression. Le gaz s'échappe par la fuite et remonte à la verticale, traversant terre, goudron ou béton. Nos capteurs détectent alors la concentration de gaz en surface.",
                  method: "Précision chirurgicale pour les fuites les plus complexes.",
                },
                {
                  title: "Écoute Électro-acoustique",
                  icon: Waves,
                  desc: "L'eau qui s'échappe crée une vibration sonore spécifique. Nous utilisons des micros de sol ultra-sensibles qui filtrent les bruits ambiants pour n'isoler que la fréquence de la fuite.",
                  method: "Idéal pour les réseaux sous pression constante.",
                },
                {
                  title: "Inspection Vidéo",
                  icon: Camera,
                  desc: "Introduction d'une caméra HD dans les réseaux d'évacuation ou d'arrosage pour visualiser les déboîtements, les fissures ou les racines qui obstruent et percent vos réseaux.",
                  method: "Diagnostic visuel définitif de l'état structurel du tuyau.",
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
                        Technologie : {item.method}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Localisation / Zone */}
          <section>
            <h2 className="font-sora text-3xl font-bold text-gray-900 mb-8">
              Expertise après compteur dans tout le Rhône, l'Isère et l'Ain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed mb-12">
              <div className="space-y-6">
                <p>
                  Une fuite après compteur non détectée peut vous coûter des centaines d'euros par mois. À <strong>Lyon, Villeurbanne, ou Genas</strong>, les sols argileux sollicitent particulièrement les raccordements extérieurs. 
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Lyon", "Villeurbanne", "Genas", "Chassieu", "Décines", "Meyzieu", "Bourgoin-Jallieu"].map((city) => (
                    <span key={city} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm">
                      <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-sm">
                <h3 className="font-sora font-semibold text-lg text-primary mb-6 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Bon à savoir
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Loi Warsmann :</strong> Si vous avez une fuite après compteur, vous pouvez demander un écrêtement de votre facture d'eau sous certaines conditions, notamment en fournissant une attestation de réparation.</div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div><strong>Gain de temps :</strong> Nous localisons souvent la fuite en moins de 2 heures, là où une recherche manuelle prendrait des journées entières.</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur les fuites enterrées"
            items={faqItems}
          />

        </article>
      </div>

      <CTABanner />
    </>
  );
}
