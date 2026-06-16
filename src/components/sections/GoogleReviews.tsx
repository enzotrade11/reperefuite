import { Star, ExternalLink, PenLine } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/data/siteConfig'

// ⚠️ TODO : Remplacez ces données par vos vrais avis Google Business
// Vous pouvez copier les vrais textes depuis votre fiche GBP
const reviews = [
  {
    author: 'Sophie D.',
    initials: 'SD',
    avatarBg: '#187FE1',
    date: 'il y a 3 semaines',
    text: "Intervention rapide et très professionnelle pour une fuite sous dalle. Localisée avec précision, sans aucune destruction. Le rapport nous a permis d'être pris en charge par l'assurance. Je recommande !",
  },
  {
    author: 'Pierre M.',
    initials: 'PM',
    avatarBg: '#16a34a',
    date: 'il y a 1 mois',
    text: "Excellent travail pour la détection d'une fuite sur ma piscine à Meyzieu. Très professionnel, efficace et à l'écoute. Le problème a été trouvé en moins d'une heure. Super service !",
  },
  {
    author: 'Isabelle R.',
    initials: 'IR',
    avatarBg: '#7c3aed',
    date: 'il y a 2 mois',
    text: "Suite à une surconsommation d'eau inexpliquée, j'ai fait appel à RepereFuite. Réponse rapide, technicien ponctuel et très pédagogue. La fuite était dans une canalisation enterrée — trouvée sans creuser !",
  },
]

function GoogleGLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

// Server Component — zero JS, léger pour Core Web Vitals
export default function GoogleReviews() {
  const { ratingValue, reviewCount } = siteConfig.reviews
  const { businessUrl, reviewUrl } = siteConfig.google

  return (
    <section className="py-12 bg-light border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête : badge global + actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <GoogleGLogo />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-gray-900">{ratingValue}</span>
            <span className="text-sm text-gray-500">
              · {reviewCount} avis sur Google
            </span>
          </div>

          {/* Boutons d'action GBP */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Lire tous les avis */}
            <Link
              href={businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Voir tous les avis <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            {/* CTA : Laisser un avis — signal GBP fort */}
            <Link
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              <PenLine className="w-3.5 h-3.5" />
              Laisser un avis
            </Link>
          </div>
        </div>

        {/* 3 cartes d'avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                  style={{ backgroundColor: review.avatarBg }}
                >
                  {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm">{review.author}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
                <GoogleGLogo />
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Incitation à laisser un avis — signal de confiance */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-3">
            Vous avez fait appel à nous ? Partagez votre expérience, cela aide d&apos;autres particuliers à nous trouver.
          </p>
          <Link
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-5 py-2.5 rounded-full hover:bg-primary/5 transition-colors"
          >
            <GoogleGLogo />
            Déposer mon avis sur Google
          </Link>
        </div>

      </div>
    </section>
  )
}
