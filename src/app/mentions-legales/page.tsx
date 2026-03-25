import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Mentions légales – RepereFuite',
  description: 'Mentions légales du site reperefuite.fr.',
  alternates: { canonical: 'https://reperefuite.fr/mentions-legales' },
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Mentions légales' }]} />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h1 className="font-sora text-3xl font-bold text-gray-900 mb-8">
            Mentions légales
          </h1>

          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>reperefuite.fr</strong> est édité par RepereFuite.
          </p>
          <ul>
            <li>Email : {siteConfig.email}</li>
            <li>Téléphone : {siteConfig.phoneDisplay}</li>
          </ul>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logo) est la
            propriété de RepereFuite ou de ses partenaires. Toute reproduction
            est interdite sans autorisation préalable.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations collectées via le formulaire de contact sont
            destinées uniquement au traitement de votre demande. Conformément au
            RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données. Pour exercer ce droit, contactez-nous à{' '}
            {siteConfig.email}.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi. Seuls des cookies
            techniques nécessaires au fonctionnement du site peuvent être
            utilisés.
          </p>

          <h2>Conception du site</h2>
          <p>
            Site réalisé par{' '}
            <a
              href={siteConfig.creditAgency.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {siteConfig.creditAgency.name}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
