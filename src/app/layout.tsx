import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'
import '@/styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
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
    "RepereFuite est spécialisé dans la recherche de fuite sans destruction dans l'Est lyonnais, le Nord Isère et le Sud Ain. Habitation, piscine, réseau enterré.",
  keywords: [
    'recherche de fuite',
    'fuite eau',
    'détection fuite',
    'sans destruction',
    'Lyon',
    'Est lyonnais',
    'fuite piscine',
    'fuite habitation',
    'réseau enterré',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://reperefuite.fr',
    siteName: 'RepereFuite',
    title: 'RepereFuite | Recherche de fuite sans destruction',
    description:
      "Spécialisé dans la localisation de fuites d'eau dans les habitations, piscines et réseaux enterrés, sans destruction inutile.",
  },
  alternates: {
    canonical: 'https://reperefuite.fr',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
