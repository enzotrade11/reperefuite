import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reperefuite.fr'

  // List of paths
  const paths = [
    '',
    '/recherche-fuite-habitation',
    '/recherche-fuite-piscine',
    '/recherche-fuite-reseau-enterre',
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
