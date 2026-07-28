"use client"

import { motion } from "framer-motion"
import { references } from "../data/site-data"

const layouts = [
  "col-span-2 row-span-1",
  "col-span-4 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
]

export default function ReferencesSection() {
  return (
    <section id="references" className="bg-red-custom py-14 pb-[72px]">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-white mb-10"
        >
          Références
        </motion.h2>

        <div className="grid grid-cols-6 gap-4">
          {references.map((ref, i) => (
            <motion.a
              key={ref.slug}
              href="/realisations"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-md group ${layouts[i]} h-[220px]`}
            >
              <img
                src={ref.image}
                alt={ref.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 bottom-2 text-white font-head font-extrabold text-[17px] uppercase drop-shadow-lg">
                {ref.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
