"use client"

import { motion } from "framer-motion"
import { whyChooseUs } from "../data/site-data"

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 pb-[72px]">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title mb-10"
        >
          Pourquoi nous choisir
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative min-h-[210px] bg-red-custom rounded-lg overflow-hidden cursor-default"
            >
              <div className="flex flex-col items-center justify-center gap-4 p-6 text-center min-h-[210px]">
                <img src={item.image} alt="" className="w-14 h-14 object-contain" />
                <h3 className="text-white font-head font-bold text-[16.5px] leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-blue-custom/96 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-[13.5px] leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
