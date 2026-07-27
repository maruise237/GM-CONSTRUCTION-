"use client"

import { motion } from "framer-motion"
import { whyChooseUs } from "../data/site-data"

const animations = ["left", "up", "left", "up"]

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
              className="group perspective-[1000px] h-[280px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 rounded-lg overflow-hidden [backface-visibility:hidden]">
                  <div className="w-full h-full bg-red-custom flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-head font-bold text-lg">
                      {i + 1}
                    </div>
                    <h3 className="text-white font-head font-bold text-[16.5px] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-blue-custom rounded-lg flex items-center justify-center p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-white text-[13.5px] leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
