import { Metadata } from 'next'
import Link from 'next/link'
import AssurancesCarousel from '@/components/sections/AssurancesCarousel'
import MiddleCTA from '@/components/sections/MiddleCTA'

export const metadata: Metadata = {
  title: "Zones d'intervention | RepereFuite",
  description: "Découvrez nos zones d'intervention pour la recherche de fuite sans destruction autour de Lyon : Métropole, Est Lyonnais, Ain, Isère...",
}

const zones = [
  { name: "Lyon Métropole", path: "/zones-intervention/lyon-metropole" },
  { name: "Est Lyonnais", path: "/zones-intervention/est-lyonnais" },
  { name: "Nord de Lyon", path: "/zones-intervention/nord-de-lyon" },
  { name: "Nord-Rhône & Beaujolais (69)", path: "/zones-intervention/nord-rhone" },
  { name: "Nord-Isère (38)", path: "/zones-intervention/nord-isere" },
  { name: "Ain-Sud (01)", path: "/zones-intervention/ain-sud" },
  { name: "Loire-Nord (42)", path: "/zones-intervention/loire-nord" },
]

export default function ZonesInterventionPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Zones d'Intervention
            </h1>
            <p className="text-lg text-gray-600">
              RepereFuite intervient rapidement chez vous pour toute recherche de fuite sans destruction.
              Sélectionnez votre secteur ci-dessous pour plus d'informations.
            </p>
          </div>

          <div className="mb-16 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Standard Google Maps iframe centered on Lyon. Can be replaced with a custom Google My Maps URL later for colored zones */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178125.75333519398!2d4.7330756578036!3d45.75795551980839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1711900000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-4 bg-blue-50 text-blue-800 text-sm text-center border-t border-blue-100">
              💡 <strong>Astuce :</strong> Cette carte pointe actuellement sur la région de Lyon. Vous pourrez plus tard la remplacer par votre carte personnalisée "Google My Maps" avec les zones colorées.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone) => (
              <Link
                key={zone.path}
                href={zone.path}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {zone.name}
                </h3>
                <p className="text-primary font-medium flex items-center gap-2">
                  Voir cette zone <span className="text-lg">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <AssurancesCarousel />

      <MiddleCTA />
    </>
  )
}
