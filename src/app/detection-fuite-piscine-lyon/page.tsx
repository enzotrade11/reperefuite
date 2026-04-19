import type { Metadata } from 'next'
import Link from 'next/link'
import {
  PhoneCall,
  CheckCircle2,
  Droplets,
  MapPin,
  ShieldCheck,
  Zap,
  Star,
  FlaskConical,
  Headphones,
  Camera
} from 'lucide-react'
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
  title: 'Détection Fuite Piscine Lyon | Expert Indépendant Sans Casse',
  description:
    "Baisse de niveau anormale ? Répère Fuite est l'expert Lyonnais en recherche de fuite de piscine non destructive. Gaz traceur & Acoustique. Devis gratuit.",
  alternates: {
    canonical: "https://reperefuite.fr/detection-fuite-piscine-lyon",
  },
};

const faqItems = [
  {
    question: "Où intervenez-vous exactement autour de Lyon ?",
    answer: "Nous intervenons dans tout le Grand Lyon, le Rhône (69), le Nord-Isère (38) et le Sud de l'Ain (01). Cela inclut des villes comme Villeurbanne, Genas, Chassieu, Meyzieu, ou encore Bourgoin-Jallieu.",
  },
  {
    question: "Comment faites-vous pour trouver la fuite sans casser ma terrasse ?",
    answer: "Nous utilisons des technologies professionnelles spécifiques : injection de gaz traceur inoffensif sous pression, sondes acoustiques haute-fidélité et caméras d'inspection vidéo. Ces outils permettent de 'voir' et d''entendre' à travers le béton et la terre.",
  },
  {
    question: "Mon assurance habitation prend-elle en charge votre intervention ?",
    answer: "Dans la majorité des cas, si vous avez souscrit la garantie 'Fuite d'Eau' ou 'Dégâts des eaux' avec option piscine, les frais de recherche de fuite sont pris en charge. Notre rapport technique détaillé est valide auprès de toutes les compagnies d'assurance françaises.",
  },
  {
    question: "Quel est le délai pour une intervention ?",
    answer: "Face à une fuite sérieuse (pompe qui se désamorce, bassin qui se vide rapidement), nous faisons le maximum pour intervenir sous 48 à 72 heures dans la région de Lyon.",
  },
];

export default function LandingPiscineLyon() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <BreadcrumbJsonLd
        items={[
          {
            label: "Détection fuite piscine Lyon",
            href: "/detection-fuite-piscine-lyon",
          },
        ]}
      />

      <div className="bg-primary pb-12 pt-16 md:pt-24 border-b-8 border-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge variant="outline" className="text-white border-white/30 mb-6 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm uppercase tracking-wider font-semibold">
            🔥 Urgence Baisse de niveau d'eau
          </Badge>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-5xl font-black mb-6 leading-tight text-balance">
            Détection de fuite piscine à <span className="text-secondary">Lyon</span> & région lyonnaise
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
            Localisation précise <strong>sans rien détruire</strong>. Rapport d'expert reconnu par les assurances. Stoppez la fuite dès cette semaine.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button href={siteConfig.phoneTel} variant="accent" size="lg" className="w-full sm:w-auto text-xl px-8 py-5 shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-transform">
              <PhoneCall className="w-6 h-6 mr-2 animate-pulse" />
              Appeler pour un Devis
            </Button>
            <p className="text-sm text-blue-200 mt-2 sm:mt-0 font-medium bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-green-400"/> Artisan expert indépendant</span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-10 mt-10">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 text-secondary mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">Avis Excellents</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-6 h-6 text-secondary mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">Délai Court</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-6 h-6 text-secondary mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">Zéro Casse</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-secondary mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">Lyon & +50km</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light/50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          {/* Problème & Solution */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110 duration-500"></div>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative z-10 text-balance">
              Votre piscine perd plus d'un centimètre par jour ?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl relative z-10 leading-relaxed">
              Ne laissez pas une fuite menacer la structure de votre terrasse ou faire bondir votre facture d'eau. 
              Le terrassement à l'aveugle est une méthode dépassée et onéreuse.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <h3 className="font-bold text-red-700 flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl">✕</div>
                  L'ancienne méthode
                </h3>
                <ul className="text-sm text-gray-600 space-y-3 pl-3 border-l-2 border-red-100">
                  <li className="flex gap-2">Creuser au hasard</li>
                  <li className="flex gap-2">Abîmer les plages (béton, carrelage, bois)</li>
                  <li className="flex gap-2">Vider la piscine (danger pour la structure)</li>
                  <li className="flex gap-2 font-semibold">Dépenser des milliers d'euros inutilement</li>
                </ul>
              </div>
              <div className="space-y-4 bg-primary/5 p-6 rounded-2xl border border-primary/20">
                <h3 className="font-bold text-primary flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xl">✓</div>
                  Méthode Répère Fuite
                </h3>
                <ul className="text-sm text-gray-800 space-y-3 font-medium">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />Diagnostic scientifique localisé</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />L'environnement reste intact</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />Piscine maintenue en eau</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />Ciblage exact pour une réparation ciblée</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comment je trouve la fuite ? */}
          <section>
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-2 block">Technologie Non Destructive</span>
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mes outils d'investigation
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Nous inspectons l'intégralité du bassin et de ses canalisations enterrées avec des appareils de pointe pour trouver la fuite au centimètre près.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Gaz Traceur", subtitle: "Pour les tuyaux enterrés", desc: "Injection d'hydrogène inoffensif. Le capteur renifle le gaz qui remonte à la surface à l'aplomb de la fuite.", color: "bg-blue-50 border-blue-100", icon: FlaskConical },
                { title: "Acoustique", subtitle: "Écoute des réseaux", desc: "Amplificateur de son ultra-sensible pour entendre l'eau s'échapper sous le béton, même à 1 mètre de profondeur.", color: "bg-amber-50 border-amber-100", icon: Headphones },
                { title: "Endoscopie TV", subtitle: "Caméra interne", desc: "Inspection vidéo des canalisations de la piscine pour repérer les fissures, les racines ou l'écrasement.", color: "bg-teal-50 border-teal-100", icon: Camera }
              ].map(tech => (
                <div key={tech.title} className={`p-8 rounded-3xl border text-center transition-transform hover:-translate-y-2 duration-300 ${tech.color}`}>
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <tech.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-sora font-bold text-gray-900 text-xl mb-1">{tech.title}</h3>
                  <span className="text-xs text-secondary font-bold tracking-wider uppercase mb-4 block">{tech.subtitle}</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center bg-white shadow-xl shadow-primary/5 border border-primary/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <h3 className="text-2xl font-sora font-bold text-primary mb-4">Le Rapport d'Intervention</h3>
              <p className="text-gray-700 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto text-balance">
                Notre rapport est complet, photographié, et reconnu par les <strong>piscinistes</strong> (pour réparer) et les <strong>assurances</strong> (pour votre remboursement).
              </p>
              <Button href={siteConfig.phoneTel} variant="accent" size="lg" className="shadow-lg shadow-accent/20">
                Demander un diagnostic au {siteConfig.phoneDisplay}
              </Button>
            </div>
          </section>

          <FAQ
            title="Questions fréquentes sur l'intervention"
            items={faqItems}
          />
          
        </article>
      </div>
      <CTABanner />
    </>
  );
}
