'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, ChevronDown } from 'lucide-react'
import { siteConfig, navLinks } from '@/data/siteConfig'
import { cn } from '@/lib/utils'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

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
          'fixed top-16 right-0 w-80 max-w-[85vw] h-[calc(100vh-4rem)] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-xl overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <div key={link.href} className="flex flex-col">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-colors w-full text-left"
                  >
                    {link.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", openDropdown === link.label && "rotate-180")} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out pl-4",
                    openDropdown === link.label ? "max-h-48 opacity-100 mb-2" : "max-h-0 opacity-0"
                  )}>
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={onClose}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary transition-colors border-l-2 border-gray-100 hover:border-primary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="px-4 py-3 text-gray-700 font-medium hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
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
