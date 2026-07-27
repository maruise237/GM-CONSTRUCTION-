"use client"

import { motion } from "framer-motion"
import { partners } from "../data/site-data"

export default function PartnersSection() {
  return (
    <section id="partners" className="py-6 pb-16">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title mb-9"
        >
          Ils nous ont fait confiance
        </motion.h2>

        <div className="overflow-hidden relative">
          <div className="flex gap-[70px] items-center w-max animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="h-[60px] flex items-center justify-center px-6 bg-gray-50 rounded border border-gray-100 font-head font-bold text-sm text-gray-500 uppercase tracking-wider hover:border-blue-custom/30 hover:text-blue-custom transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-6">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Précédent">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Suivant">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
