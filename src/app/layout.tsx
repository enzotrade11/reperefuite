import type { Metadata } from 'next'
import { Poppins, Lato } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'
import GoogleReviews from '@/components/sections/GoogleReviews'
import '@/styles/globals.css'
import { siteConfig } from '@/data/siteConfig'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://reperefuite.fr'),
  title: {
    default: 'RepereFuite | Recherche de fuite sans destruction – Est lyonnais',
    template: '%s | RepereFuite',
  },
  description:
    "RepereFuite est spécialisé dans la recherche de fuite sans destruction dans l'Est lyonnais, le Nord Isère et le Sud Ain. Habitation, piscine, canalisation enterrée.",
  keywords: [
    'recherche de fuite',
    'fuite eau',
    'détection fuite',
    'sans destruction',
    'Lyon',
    'Est lyonnais',
    'fuite piscine',
    'fuite habitation',
    'canalisation enterrée',
    'recherche de fuite Lyon',
    'plombier fuite Lyon',
    'détection fuite non destructive',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://reperefuite.fr',
    siteName: 'RepereFuite',
    title: 'RepereFuite | Recherche de fuite sans destruction',
    description:
      "Spécialisé dans la localisation de fuites d'eau dans les habitations, piscines et canalisations enterrées, sans destruction inutile.",
    images: [
      {
        url: '/images/logo-reperefuite.png',
        width: 324,
        height: 90,
        alt: 'RepereFuite — Recherche de fuite sans destruction',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'nS3DVmK-irSz8qFFhy44GWgt_F7mfD0jGElDxr_udYQ',
  },
  // Meta tags géographiques — renforcent le SEO local
  other: {
    'geo.region': 'FR-69',
    'geo.placename': 'Lyon, Auvergne-Rhône-Alpes, France',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    'ICBM': `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${lato.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <GoogleReviews />
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
