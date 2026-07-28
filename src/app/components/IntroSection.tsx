"use client"

import { motion } from "framer-motion"
import { ArrowForward } from "./Icons"
import { siteConfig } from "../data/site-data"

export default function IntroSection() {
  return (
    <section className="bg-blue-custom text-white text-center py-16 md:py-[72px]">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-head font-extrabold text-[28px] md:text-[30px] uppercase tracking-[0.5px] mb-6 leading-tight"
        >
          {siteConfig.name} — L&apos;EXPERTISE DE {siteConfig.ceo.toUpperCase()}, INGÉNIEURE EN GÉNIE CIVIL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[960px] mx-auto mb-9 text-[17px] leading-relaxed"
        >
          <span style={{ color: "#ffffff" }}>{siteConfig.intro}</span>
        </motion.p>
        <motion.a
          href="/a-propos/presentation"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="btn-red inline-flex"
        >
          Lire la suite <ArrowForward />
        </motion.a>
      </div>
    </section>
  )
}
