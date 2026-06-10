'use client'

import Image from 'next/image'
import { Phone, ArrowRight, Check, Clock, Zap, ShieldCheck, Send, CheckCircle2, Home, Droplets, Gauge } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/siteConfig'
import PoolLadder from '@/components/ui/icons/PoolLadder'
import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
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
    <>
      <section className="relative text-white overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background image */}
        <Image
          src="/images/hero-thermal.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-blue-900/80" />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ---- Colonne gauche : texte ---- */}
            <div>
              <FadeIn>
                <Badge variant="primary" className="bg-white/10 text-white mb-5 backdrop-blur-sm border-blue-400">
                  Intervention rapide – Est lyonnais
                </Badge>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-balance">
                  Recherche de fuite d&apos;eau{' '}
                  <span className="text-secondary">sans destruction</span>{' '}
                  à Lyon
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Habitation, piscine, canalisation enterrée, toiture/terrasse — nous localisons
                  précisément l&apos;origine de la fuite{' '}
                  <strong className="text-white">sans casser</strong> ni démolir.
                  Intervention dans le <strong className="text-white">RHÔNE, L&apos;ISÈRE, L&apos;AIN</strong> et la <strong className="text-white">LOIRE</strong>.
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <ul className="space-y-2.5 mb-8">
                  {[
                    { icon: Home,     text: 'Fuites habitation, sous-dalle, murs' },
                    { icon: PoolLadder, text: 'Pertes de niveau piscine' },
                    { icon: Droplets, text: 'Canalisations enterrées' },
                    { icon: Gauge,    text: 'Surconsommation / fuite après compteur' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-blue-100 text-sm">
                      <span className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-secondary" />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.3}>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center gap-3 bg-accent hover:bg-red-600 transition-colors text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-accent/30 text-base"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant — {siteConfig.phoneDisplay}
                </a>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="flex flex-wrap gap-4 mt-5 text-xs text-blue-300">
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-secondary" />Devis gratuit</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-secondary" />Rapport assurance</span>
                  <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-secondary" />Intervention 24–48h</span>
                </div>
              </FadeIn>
            </div>

            {/* ---- Colonne droite : formulaire ---- */}
            <FadeIn delay={0.15}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/40 to-primary/40 rounded-2xl blur-lg opacity-60" />

                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  {/* Header formulaire */}
                  <div className="bg-gradient-to-r from-primary to-blue-700 px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Devis rapide & gratuit</p>
                      <p className="text-blue-200 text-xs">Réponse du technicien sous 2h</p>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 bg-secondary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      En ligne
                    </span>
                  </div>

                  <div className="px-6 py-6">
                    {submitted ? (
                      <div className="text-center py-8">
                        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
                        <p className="text-gray-500 text-sm mb-4">
                          Nous vous recontactons dans les 2 heures.
                        </p>
                        <a href={siteConfig.phoneTel} className="text-primary font-semibold text-sm hover:underline">
                          Ou appelez-nous : {siteConfig.phoneDisplay}
                        </a>
                      </div>
                    ) : (
                      <>
                        {error && (
                          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                            Erreur d&apos;envoi. Appelez-nous : {siteConfig.phoneDisplay}
                          </p>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <input type="hidden" name="access_key" value={siteConfig.web3formsKey} />
                          <input type="hidden" name="subject" value="Devis rapide – RepereFuite (Hero)" />

                          {/* Nom + Téléphone */}
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="hname" className="block text-xs font-semibold text-gray-600 mb-1">Nom *</label>
                              <input
                                type="text"
                                id="hname"
                                name="name"
                                required
                                placeholder="Votre nom"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                              />
                            </div>
                            <div>
                              <label htmlFor="hphone" className="block text-xs font-semibold text-gray-600 mb-1">Téléphone *</label>
                              <input
                                type="tel"
                                id="hphone"
                                name="phone"
                                required
                                placeholder="06 xx xx xx xx"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                              />
                            </div>
                          </div>

                          {/* Type de problème */}
                          <div>
                            <label htmlFor="htype" className="block text-xs font-semibold text-gray-600 mb-1">Type de problème *</label>
                            <select
                              id="htype"
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

                          {/* Ville + Email */}
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label htmlFor="hcity" className="block text-xs font-semibold text-gray-600 mb-1">Ville *</label>
                              <input
                                type="text"
                                id="hcity"
                                name="city"
                                required
                                placeholder="Ex : Meyzieu, Bron..."
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                              />
                            </div>
                            <div>
                              <label htmlFor="hemail" className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                              <input
                                type="email"
                                id="hemail"
                                name="email"
                                placeholder="votre@email.fr"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                              />
                            </div>
                          </div>

                          {/* RGPD */}
                          <div className="flex items-start gap-2">
                            <input type="checkbox" id="hrgpd" required className="mt-0.5 rounded border-gray-300" />
                            <label htmlFor="hrgpd" className="text-xs text-gray-400 leading-snug">
                              J&apos;accepte que mes données soient utilisées pour traiter ma demande. *
                            </label>
                          </div>

                          {/* Submit */}
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-red-600 transition-all disabled:opacity-60 shadow-lg shadow-accent/25 text-sm"
                          >
                            <Send className="w-4 h-4" />
                            {loading ? 'Envoi en cours...' : 'Recevoir mon devis gratuit'}
                          </button>

                          <p className="text-center text-xs text-gray-400">
                            Ou appelez directement :{' '}
                            <Link href={siteConfig.phoneTel} className="text-primary font-semibold hover:underline">
                              {siteConfig.phoneDisplay}
                            </Link>
                          </p>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-[#111827] text-white py-10 relative z-10 border-b-2 border-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center">
                <Clock className="w-10 h-10 text-accent mb-3" />
                <div className="font-bold text-2xl font-sora">10 ans</div>
                <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider">d&apos;expérience</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center">
                <Zap className="w-10 h-10 text-accent mb-3" />
                <div className="font-bold text-2xl font-sora">Intervention</div>
                <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider">Rapide</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-accent mb-3" />
                <div className="font-bold text-2xl font-sora">Agréé</div>
                <div className="text-sm text-gray-300 mt-1 uppercase tracking-wider">assurance</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
