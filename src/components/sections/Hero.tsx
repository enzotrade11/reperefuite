'use client'

import Image from 'next/image'
import { Phone, Check, Clock, Zap, ShieldCheck, Home, Droplets, Gauge } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import FadeIn from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/siteConfig'
import PoolLadder from '@/components/ui/icons/PoolLadder'

export default function Hero() {

  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center bg-slate-900">
        {/* Background image - taille normale, non zoomée */}
        <Image
          src="/images/hero-bg-piscine-blur.jpg"
          alt="Technicien RepereFuite en intervention détection fuite piscine"
          fill
          className="object-contain object-center opacity-50"
          priority
          quality={90}
        />
        {/* Dark overlay - style serrurier-urgence-centre.fr */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-blue-900/70" />

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

            {/* ---- Colonne droite : Google Form intégré ---- */}
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
                      <p className="text-white font-bold text-sm">Devis rapide &amp; gratuit</p>
                      <p className="text-blue-200 text-xs">Réponse du technicien sous 2h</p>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 bg-secondary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      En ligne
                    </span>
                  </div>

                  {/* Google Form iframe */}
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfSRKE2k4UyKNwExLOBnN8pHfO1VLLulEaVIaABdho1QSFybA/viewform?embedded=true"
                    width="100%"
                    height="520"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Formulaire de contact RepereFuite"
                    className="block"
                  >
                    Chargement…
                  </iframe>
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
