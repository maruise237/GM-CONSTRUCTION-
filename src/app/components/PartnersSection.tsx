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
              <span
                key={i}
                className="text-[18px] font-head font-bold text-gray-400 hover:text-blue-custom transition-colors duration-300 whitespace-nowrap uppercase tracking-widest"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
