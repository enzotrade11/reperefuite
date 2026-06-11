'use client'

import { Phone, CheckCircle2, Zap } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export default function QuickQuote() {

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

          {/* Google Form droite */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-blue-700 px-6 py-4">
              <h3 className="font-sora text-lg font-bold text-white">Votre demande de devis</h3>
            </div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfSRKE2k4UyKNwExLOBnN8pHfO1VLLulEaVIaABdho1QSFybA/viewform?embedded=true"
              width="100%"
              height="520"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulaire de devis RepereFuite"
              className="block"
            >
              Chargement…
            </iframe>
          </div>

        </div>
      </div>
    </section>
  )
}
