"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { siteConfig } from "../data/site-data"
import { cn } from "../lib/utils"

const menuItems = [
  { label: "Accueil", href: "/" },
  {
    label: "A Propos",
    href: "/a-propos/presentation",
    children: [
      { label: "Présentation", href: "/a-propos/presentation" },
      { label: "Nos Objectifs", href: "/a-propos/nos-objectifs" },
      { label: "Positionnement", href: "/a-propos/positionnement" },
      { label: "Accompagnement A-Z", href: "/a-propos/accompagnement-a-z" },
    ],
  },
  {
    label: "Services",
    href: "/services/conseil-assistance",
    children: [
      { label: "Conseil & Assistance", href: "/services/conseil-assistance" },
      { label: "Conception", href: "/services/conception" },
      { label: "Construction", href: "/services/construction" },
      { label: "Pilotage & Coordination", href: "/services/pilotage-coordination" },
      { label: "Promotion Immobilière", href: "/services/promotion-immobiliere" },
    ],
  },
  {
    label: "Références",
    href: "/realisations",
    children: [
      { label: "Génie Civil", href: "/realisations" },
      { label: "Hôpitaux", href: "/realisations" },
      { label: "Résidentiel", href: "/realisations" },
      { label: "Tertiaire", href: "/realisations" },
    ],
  },
  { label: "Carrières", href: "/carrieres" },
  {
    label: "Médiathèque",
    href: "/mediatheque",
    children: [
      { label: "Documents", href: "/mediatheque" },
      { label: "Vidéos", href: "/mediatheque" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "w-full z-50 transition-all duration-300",
        scrolled
          ? "fixed top-0 bg-white shadow-md py-2"
          : "relative bg-white py-3.5"
      )}
    >
      <div className="container-main flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-[70px] h-[70px] bg-blue-custom rounded flex items-center justify-center text-white font-head font-extrabold text-xs leading-tight text-center p-1">
            GM
            <br />
            CONSTR.
          </div>
        </a>

        <nav className="hidden lg:flex items-center justify-center flex-1 px-6">
          {menuItems.map((item, i) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(i)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="font-head font-bold text-[15px] text-blue-custom uppercase tracking-[0.3px] px-3 py-2 hover:text-red-custom transition-colors inline-flex items-center gap-1 border-r border-gray-200 last:border-r-0"
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </a>
              {item.children && (
                <div
                  className={cn(
                    "absolute top-full left-0 min-w-[220px] bg-white shadow-lg border-t-2 border-red-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                    openDropdown === i && "opacity-100 visible"
                  )}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-6 py-2.5 text-[14px] text-blue-custom font-head font-bold uppercase hover:bg-gray-50 hover:text-red-custom transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 border-2 border-blue-custom text-blue-custom font-head font-bold text-[15px] px-4 py-2 rounded uppercase hover:bg-blue-custom hover:text-white transition-all duration-300 hover:scale-105"
          >
            RDV
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </a>
          <button
            className="lg:hidden text-blue-custom"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="w-14 h-14 bg-blue-custom rounded flex items-center justify-center text-white font-head font-extrabold text-xs leading-tight text-center p-1">
            GM
            <br />
            CONSTR.
          </div>
          <button onClick={() => setMenuOpen(false)} aria-label="Fermer">
            <X size={28} className="text-blue-custom" />
          </button>
        </div>
        <div className="p-4 space-y-1">
          {menuItems.map((item, i) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === i ? null : i)
                    }
                    className="w-full flex justify-between items-center font-head font-bold text-lg text-blue-custom uppercase py-2 hover:text-red-custom transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={cn(
                        "transition-transform duration-200",
                        mobileDropdown === i && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      mobileDropdown === i ? "max-h-96" : "max-h-0"
                    )}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block pl-4 py-2 text-base text-blue-custom font-head font-bold uppercase hover:text-red-custom"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="block font-head font-bold text-lg text-blue-custom uppercase py-2 hover:text-red-custom transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="/contact"
            className="mt-4 block text-center border-2 border-blue-custom text-blue-custom font-head font-bold text-base px-6 py-3 rounded uppercase hover:bg-blue-custom hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            RDV
          </a>
        </div>
      </div>
    </header>
  )
}
