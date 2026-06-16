import { siteConfig } from '@/data/siteConfig'

type JsonLdProps = {
  faqItems?: { question: string; answer: string }[]
}

export default function JsonLd({ faqItems }: JsonLdProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Plumber'],
    // @id lie cette entité au Knowledge Graph Google — doit être l'URL canonique stable
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.gbpName,
    alternateName: siteConfig.name,
    description: siteConfig.fullTagline,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/logo-reperefuite.png`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo-reperefuite.png`,
      width: 324,
      height: 90,
    },
    // Avis — synchronisé avec GBP via siteConfig
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.reviews.ratingValue,
      reviewCount: siteConfig.reviews.reviewCount,
      bestRating: siteConfig.reviews.bestRating,
      worstRating: siteConfig.reviews.worstRating,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    // Zone de chalandise — correspond aux villes du site
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Villeurbanne' },
      { '@type': 'City', name: 'Bron' },
      { '@type': 'City', name: 'Décines-Charpieu' },
      { '@type': 'City', name: 'Meyzieu' },
      { '@type': 'City', name: 'Chassieu' },
      { '@type': 'City', name: 'Genas' },
      { '@type': 'City', name: 'Saint-Priest' },
      { '@type': 'City', name: 'Vaulx-en-Velin' },
      { '@type': 'City', name: 'Rillieux-la-Pape' },
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'City', name: 'Bourgoin-Jallieu' },
      { '@type': 'City', name: "L'Isle-d'Abeau" },
      { '@type': 'City', name: 'Miribel' },
      { '@type': 'City', name: 'Beynost' },
      { '@type': 'City', name: 'Ambérieu-en-Bugey' },
      { '@type': 'AdministrativeArea', name: 'Est lyonnais' },
      { '@type': 'AdministrativeArea', name: 'Nord Isère' },
      { '@type': 'AdministrativeArea', name: 'Sud Ain' },
    ],
    // Adresse NAP — identique à la fiche GBP
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    // sameAs — liens vers profils officiels (aide Google à unifier l'entité)
    sameAs: [
      siteConfig.google.businessUrl,
    ],
    // Catalogue de services
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de détection de fuite sans destruction',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Recherche de fuite habitation',
            url: `${siteConfig.url}/recherche-fuite-habitation`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Détection de fuite piscine',
            url: `${siteConfig.url}/recherche-fuite-piscine`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Recherche de fuite canalisation enterrée',
            url: `${siteConfig.url}/recherche-fuite-canalisation-enterree`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diagnostic infiltration toiture terrasse',
            url: `${siteConfig.url}/diagnostic-infiltration-toiture`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diagnostic humidité',
            url: `${siteConfig.url}/diagnostic-humidite`,
          },
        },
      ],
    },
    priceRange: '$$',
    // Domaines d'expertise — renforce la thématique pour l'entité Knowledge Graph
    knowsAbout: [
      'Détection de fuite non destructive',
      'Recherche de fuite par gaz traceur',
      'Recherche de fuite acoustique',
      'Thermographie infrarouge',
      'Fuite sous dalle',
      'Fuite piscine enterrée',
      'Dégât des eaux',
      'Surconsommation eau',
    ],
  }

  // Schéma Organisation séparé pour renforcer l'entité de marque
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.gbpName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    // logo doit être un ImageObject (et non une URL string) pour éviter les avertissements Google
    logo: {
      '@type': 'ImageObject',
      '@id': `${siteConfig.url}/#logo`,
      url: `${siteConfig.url}/images/logo-reperefuite.png`,
      width: 324,
      height: 90,
      caption: siteConfig.gbpName,
    },
    image: `${siteConfig.url}/images/logo-reperefuite.png`,
    description: siteConfig.fullTagline,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Est lyonnais, Nord Isère, Sud Ain',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    sameAs: [
      siteConfig.google.businessUrl,
    ],
  }

  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}
