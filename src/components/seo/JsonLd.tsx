import { siteConfig } from '@/data/siteConfig'

type JsonLdProps = {
  faqItems?: { question: string; answer: string }[]
}

export default function JsonLd({ faqItems }: JsonLdProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Plumber'],
    name: siteConfig.name,
    description: siteConfig.fullTagline,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/logo-reperefuite.png`,
    logo: `${siteConfig.url}/images/logo-reperefuite.png`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '8',
      bestRating: '5',
      worstRating: '1',
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
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lyon',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.764,
      longitude: 4.8357,
    },
    sameAs: [
      'https://www.google.com/search?q=Rep%C3%A8reFuite+-+Recherche+de+fuite+%26+D%C3%A9tection+non+destructive',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de détection de fuite',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recherche de fuite habitation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Détection de fuite piscine' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recherche de fuite canalisation enterrée' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic infiltration toiture' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic humidité' } },
      ],
    },
    priceRange: '$$',
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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}
