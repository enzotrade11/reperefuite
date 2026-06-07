import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

// Partagé avec JsonLd pour le schema FAQPage
export const homeFaqItems = [
  {
    question: 'Comment fonctionne la recherche de fuite sans destruction ?',
    answer:
      'Nos techniciens utilisent des technologies non invasives : gaz traceur (hélium/hydrogène), écoute acoustique, caméra thermique infrarouge et colorants fluorescents. Ces méthodes permettent de localiser la fuite avec précision millimétrique, sans ouvrir vos murs ni casser votre carrelage. Une fois la fuite localisée, un rapport complet vous est remis.',
  },
  {
    question: "Quel est le prix d'une recherche de fuite ?",
    answer:
      "Le coût varie selon la complexité de l'intervention et le type de fuite (habitation, piscine, canalisation enterrée). Nous vous fournissons un devis clair avant toute intervention. Dans la majorité des cas de dégâts des eaux, votre assurance habitation prend en charge tout ou partie de nos honoraires.",
  },
  {
    question: "L'assurance habitation prend-elle en charge la recherche de fuite ?",
    answer:
      "Oui, dans la plupart des sinistres liés à un dégât des eaux, votre assurance prend en charge les frais de recherche de fuite. Notre rapport d'expertise est rédigé spécifiquement pour faciliter votre déclaration de sinistre. Nous travaillons avec toutes les grandes compagnies d'assurance (Allianz, Maif, Groupama, Axa, MMA, etc.).",
  },
  {
    question: "Combien de temps dure une intervention pour détecter une fuite ?",
    answer:
      "La majorité de nos interventions dure entre 1 et 3 heures, selon l'accessibilité du réseau et la complexité de la fuite. Dès la fin de l'intervention, vous recevez un rapport complet avec la localisation précise de la fuite et des photos géolocalisées.",
  },
  {
    question: 'Intervenez-vous en urgence ?',
    answer:
      "Oui. Nous intervenons généralement sous 24 à 48 heures dans tout notre secteur (Est Lyonnais, Nord Isère, Sud Ain). Pour les situations urgentes avec risque de dégâts importants, contactez-nous directement au 07 85 43 24 08 pour convenir d'un rendez-vous prioritaire.",
  },
  {
    question: 'Ma piscine perd de l\'eau. Comment savoir si c\'est une vraie fuite ?',
    answer:
      "Une piscine perd naturellement quelques centimètres d'eau par semaine par évaporation. Si la perte dépasse 2-3 cm/semaine ou est anormalement rapide, c'est suspect. Le test du seau (comparer l'évaporation dans le bassin et dans un seau posé sur la margelle) permet de confirmer. Si vous suspectez une fuite, contactez-nous pour un diagnostic précis.",
  },
  {
    question: 'Comment détecter une fuite dans une canalisation enterrée ?',
    answer:
      "Les signes d'une fuite enterrée sont : une surconsommation d'eau inexpliquée sur votre facture, une zone de terrain anormalement humide ou verte, une baisse de pression dans votre réseau. Nos techniciens utilisent le gaz traceur et l'écoute acoustique pour localiser la fuite sans aucune fouille préalable.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Nous intervenons dans tout l'Est Lyonnais et ses alentours : Lyon, Villeurbanne, Bron, Décines, Meyzieu, Chassieu, Genas, Saint-Priest, Vaulx-en-Velin, Rillieux-la-Pape, Caluire-et-Cuire (Rhône), Bourgoin-Jallieu, L'Isle-d'Abeau (Isère), Miribel, Beynost, Ambérieu-en-Bugey (Ain). Rayon d'intervention : 50 km autour de Lyon Est.",
  },
  {
    question: "Que contient le rapport de détection de fuite ?",
    answer:
      "Notre rapport d'expertise comprend : la description précise de la fuite et de son origine, la localisation exacte avec photos géolocalisées, les méthodes de détection utilisées, les préconisations de réparation et une conclusion technique. Ce document est reconnu par les assureurs et permet d'accélérer votre prise en charge.",
  },
  {
    question: "Peut-on détecter une infiltration de toiture sans démonter les tuiles ?",
    answer:
      "Oui, c'est précisément l'avantage de nos méthodes non destructives. Nous utilisons la caméra thermique infrarouge pour détecter les zones humides cachées dans la charpente et sous la toiture, ainsi que des colorants traceurs pour suivre le cheminement de l'eau. Aucun démontage n'est nécessaire pour le diagnostic.",
  },
]

export default function HomeFAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 bg-primary/5 rounded-full">
            FAQ
          </span>
          <h2 className="font-sora text-3xl font-bold text-gray-900 mt-2 mb-3">
            Questions fréquentes
          </h2>
          <p className="text-gray-500 text-sm">
            Tout ce que vous devez savoir sur la recherche de fuite sans destruction à Lyon et en région Auvergne-Rhône-Alpes.
          </p>
        </div>

        {/* Accordion natif — zéro JS, SEO-friendly */}
        <div className="space-y-2">
          {homeFaqItems.map((item, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-primary/30 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-gray-900 hover:text-primary transition-colors select-none list-none [&::-webkit-details-marker]:hidden">
                <span className="text-sm sm:text-base">{item.question}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CTA bas */}
        <p className="text-center mt-10 text-sm text-gray-500">
          Vous ne trouvez pas la réponse à votre question ?{' '}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contactez-nous directement →
          </Link>
        </p>
      </div>
    </section>
  )
}
