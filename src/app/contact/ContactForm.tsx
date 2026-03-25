'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight, Send, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'
import FadeIn from '@/components/ui/FadeIn'

const sidebarLinks = [
  { label: 'Recherche de fuite habitation', href: '/recherche-fuite-habitation' },
  { label: 'Recherche de fuite piscine', href: '/recherche-fuite-piscine' },
  { label: 'Recherche de fuite réseau enterré', href: '/recherche-fuite-reseau-enterre' },
  { label: 'Diagnostic humidité', href: '/diagnostic-humidite' },
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Contact info */}
            <FadeIn>
              <div className="mb-12">
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-4">
                  Contacter RepereFuite
                </h2>
                <p className="text-gray-600 mb-6">
                  Pour toute suspicion de fuite d&apos;eau, infiltration ou problème
                  d&apos;humidité, vous pouvez contacter RepereFuite pour obtenir un
                  diagnostic et organiser une intervention.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href={siteConfig.phoneTel}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-gray-500">Téléphone</p>
                      <p className="font-semibold text-gray-900">{siteConfig.phoneDisplay}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-semibold text-gray-900 text-sm">{siteConfig.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-gray-500">Zone</p>
                      <p className="font-semibold text-gray-900 text-sm">{siteConfig.zone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="font-sora text-2xl font-bold text-gray-900 mb-6">
                  Demande d&apos;intervention
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-600">
                      Nous vous recontacterons dans les meilleurs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="hidden"
                      name="access_key"
                      value={siteConfig.web3formsKey}
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="Nouvelle demande – RepereFuite"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                          Type de problème
                        </label>
                        <select
                          id="type"
                          name="type"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Sélectionner...</option>
                          <option value="fuite-habitation">Fuite habitation</option>
                          <option value="fuite-piscine">Fuite piscine</option>
                          <option value="fuite-reseau">Fuite réseau enterré</option>
                          <option value="humidite">Humidité / Infiltration</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse du bien
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="rgpd"
                        required
                        className="mt-1 rounded border-gray-300"
                      />
                      <label htmlFor="rgpd" className="text-sm text-gray-500">
                        J&apos;accepte que mes données soient utilisées pour le
                        traitement de ma demande. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 shadow-lg shadow-accent/25"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? 'Envoi...' : 'Envoyer la demande'}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-500 text-sm mt-4">
                RepereFuite intervient dans un rayon d&apos;environ 50 km autour de
                l&apos;est lyonnais.
              </p>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="font-sora font-bold text-gray-900 mb-4">
                  Nos services
                </h3>
                <div className="space-y-2">
                  {sidebarLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-primary">
                        {link.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>

                <hr className="my-6 border-gray-200" />

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">Besoin urgent ?</p>
                  <Button href={siteConfig.phoneTel} variant="accent" className="w-full">
                    <Phone className="w-4 h-4" />
                    {siteConfig.phoneDisplay}
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
