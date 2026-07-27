"use client"

import { motion } from "framer-motion"
import { ArrowForward } from "./Icons"
import { siteConfig } from "../data/site-data"

export default function AboutSection() {
  return (
    <section id="about" className="py-[70px]">
      <div className="container-main grid md:grid-cols-[1fr_1.15fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-gray-200 h-[300px] md:h-full min-h-[280px] rounded overflow-hidden flex items-center justify-center"
        >
          <div className="text-center p-6">
            <div className="w-24 h-24 rounded-full bg-blue-custom mx-auto mb-4 flex items-center justify-center text-white font-head font-extrabold text-2xl">
              GM
            </div>
            <p className="text-gray-600 font-head font-bold text-sm uppercase tracking-wider">
              {siteConfig.ceo}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {siteConfig.ceoTitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="section-title inline-block border-b-3 border-blue-custom pb-1.5 mb-5">
            À Propos
          </h3>
          <p className="text-[16.5px] leading-relaxed mb-8 whitespace-pre-line">
            {siteConfig.about}
          </p>
          <a href="#services" className="btn-red">
            Nos services <ArrowForward />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
