"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { actualites } from "../data/site-data"

export default function ActualitesSection() {
  return (
    <section className="py-14 md:py-[72px] bg-gray-50">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title mb-10"
        >
          Actualités
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {actualites.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <div className="h-44 bg-gradient-to-br from-blue-custom to-red-custom flex items-center justify-center">
                <span className="text-white/20 font-head font-extrabold text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.5px] text-gray-500 mb-2">
                  <Calendar size={13} />
                  {item.date}
                  <span className="ml-auto text-red-custom font-bold">{item.category}</span>
                </div>
                <h3 className="font-head font-bold text-[16.5px] text-blue-custom leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
