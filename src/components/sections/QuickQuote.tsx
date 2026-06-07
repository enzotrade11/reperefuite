'use client'

import { useState } from 'react'
import { Phone, Send, CheckCircle2, Zap } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import Link from 'next/link'

export default function QuickQuote() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-dark relative overflow-hidden">
      {/* Décor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #187FE1 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texte gauche */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-secondary" />
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
                Réponse sous 2h
              </span>
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Devis rapide &amp; gratuit
            </h2>
            <p className="text-blue-200 leading-relaxed mb-8">
              Vous suspectez une fuite à <strong className="text-white">Meyzieu, Bron, Décines, Vaulx-en-Velin, Saint-Priest</strong> ou ailleurs dans l&apos;Est Lyonnais ? Remplissez ce formulaire et recevez un retour de notre technicien en moins de 2 heures.
            </p>
            <ul className="space-y-3 text-sm text-blue-200">
              {[
                'Devis gratuit, sans engagement',
                'Intervention sous 24–48h',
                'Rapport pour assurance inclus',
                'Toutes assurances acceptées',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2 text-white font-bold hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Appel direct : {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Formulaire droite */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
                <p className="text-gray-500 text-sm">
                  Nous vous recontactons dans les 2 heures.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-sora text-xl font-bold text-gray-900 mb-6">
                  Votre demande de devis
                </h3>

                {error && (
                  <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    Une erreur est survenue. Appelez-nous directement au {siteConfig.phoneDisplay}.
                  </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="access_key" value={siteConfig.web3formsKey} />
                  <input type="hidden" name="subject" value="Devis rapide – RepereFuite" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="qname" className="block text-xs font-semibold text-gray-600 mb-1">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="qname"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="qphone" className="block text-xs font-semibold text-gray-600 mb-1">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="qphone"
                        name="phone"
                        required
                        placeholder="06 xx xx xx xx"
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="qtype" className="block text-xs font-semibold text-gray-600 mb-1">
                      Type de problème *
                    </label>
                    <select
                      id="qtype"
                      name="type"
                      required
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="fuite-habitation">Fuite habitation (sous dalle, mur...)</option>
                      <option value="fuite-piscine">Fuite piscine</option>
                      <option value="canalisation-enterree">Canalisation enterrée</option>
                      <option value="infiltration-toiture">Infiltration toiture / terrasse</option>
                      <option value="humidite">Humidité inexpliquée</option>
                      <option value="surconsommation">Surconsommation d&apos;eau</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="qcity" className="block text-xs font-semibold text-gray-600 mb-1">
                      Ville d&apos;intervention *
                    </label>
                    <input
                      type="text"
                      id="qcity"
                      name="city"
                      required
                      placeholder="Ex : Meyzieu, Bron, Décines..."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="qrgpd"
                      required
                      className="mt-0.5 rounded border-gray-300"
                    />
                    <label htmlFor="qrgpd" className="text-xs text-gray-400">
                      J&apos;accepte que mes données soient utilisées pour le traitement de ma demande. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-accent text-white font-bold rounded-lg hover:bg-red-600 transition-colors disabled:opacity-60 shadow-lg shadow-accent/25 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Ou appelez directement :{' '}
                    <Link href={siteConfig.phoneTel} className="text-primary font-semibold">
                      {siteConfig.phoneDisplay}
                    </Link>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
