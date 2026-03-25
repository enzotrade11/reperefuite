import type { Metadata } from 'next'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import PageHero from '@/components/sections/PageHero'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact – Recherche de fuite sans destruction | RepereFuite',
  description:
    "Contactez RepereFuite pour une recherche de fuite sans destruction à Lyon et environs. Diagnostic précis et intervention rapide.",
  alternates: {
    canonical: 'https://reperefuite.fr/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      {/* Hero */}
      <PageHero>
        <h1 className="font-sora text-3xl sm:text-4xl font-bold mb-4">
          Contact – Recherche de fuite sans destruction
        </h1>
        <p className="text-blue-100 text-lg">
          RepereFuite intervient pour la recherche de fuite sans destruction et
          le diagnostic d&apos;origine des problèmes d&apos;eau dans l&apos;est lyonnais,
          le nord de l&apos;Isère et le sud de l&apos;Ain.
        </p>
      </PageHero>

      <ContactForm />
    </>
  )
}
