import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reperefuite.fr'

  // List of paths
  const paths = [
    '',
    '/recherche-fuite-habitation',
    '/fuite-sous-dalle-encastree',
    '/surconsommation-eau-facture-elevee',
    '/degat-des-eaux-appartement',
    '/recherche-fuite-piscine',
    '/recherche-fuite-canalisation-enterree',
    '/recherche-fuite-terrasse-lyon',
    '/diagnostic-humidite',
    '/diagnostic-infiltration-toiture',
    '/methodes-recherche-fuite',
    '/contact',
    '/mentions-legales',
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
}
