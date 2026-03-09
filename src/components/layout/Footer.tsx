import Link from 'next/link'
import { Phone, Mail, MapPin, Droplets } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

const serviceLinks = [
  { label: 'Recherche fuite sans destruction', href: '/' },
  { label: 'Recherche fuite habitation', href: '/recherche-fuite-habitation' },
  { label: 'Recherche fuite piscine', href: '/recherche-fuite-piscine' },
  { label: 'Recherche fuite réseau enterré', href: '/recherche-fuite-reseau-enterre' },
  { label: 'Diagnostic humidité', href: '/diagnostic-humidite' },
  { label: 'Infiltration toiture terrasse', href: '/diagnostic-infiltration-toiture' },
  { label: 'Méthodes de détection', href: '/methodes-recherche-fuite' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-secondary" />
              <span className="font-sora text-xl font-bold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-lg font-semibold text-white mb-1">
              {siteConfig.tagline}
            </p>
            <p className="text-gray-400">
              Habitation &bull; Piscine &bull; Réseau enterré
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center gap-2 text-white hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Zone d&apos;intervention
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p>
                    Est lyonnais (Vaulx-en-Velin, Décines, Meyzieu, Bron)
                  </p>
                  <p>Nord Isère</p>
                  <p>Sud Ain</p>
                </div>
              </div>
              <p className="text-gray-400 mt-4">{siteConfig.zoneDetail}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <span>&bull;</span>
            <span>
              Site réalisé par{' '}
              <a
                href={siteConfig.creditAgency.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                {siteConfig.creditAgency.name}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
