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
            {[...partners, ...partners].map((p, i) => (
              <img
                key={i}
                src={p.logo}
                alt={p.name}
                className="h-[52px] w-auto object-contain opacity-90 grayscale-[35%] hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
