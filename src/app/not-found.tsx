import Link from 'next/link'
import { Home, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export default function NotFound() {
  return (
    <section className="py-24 lg:py-40 bg-light">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-8xl font-sora font-bold text-primary/20 mb-6">
          404
        </div>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Page non trouvée
        </h1>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Button>
          <Button href={siteConfig.phoneTel} variant="accent">
            <Phone className="w-4 h-4" />
            {siteConfig.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  )
}
