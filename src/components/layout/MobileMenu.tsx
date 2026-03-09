'use client'

import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { siteConfig, navLinks } from '@/data/siteConfig'
import { cn } from '@/lib/utils'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-16 right-0 w-80 max-w-[85vw] h-[calc(100vh-4rem)] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-xl',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 text-gray-700 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <hr className="my-4 border-gray-200" />

          <a
            href={siteConfig.phoneTel}
            className="flex items-center gap-3 px-4 py-3 bg-accent text-white font-semibold rounded-lg"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phoneDisplay}
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary"
          >
            <Mail className="w-5 h-5" />
            {siteConfig.email}
          </a>
        </nav>
      </div>
    </>
  )
}
