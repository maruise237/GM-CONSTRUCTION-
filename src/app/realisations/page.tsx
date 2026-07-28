"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { realisations } from "@/app/data/site-data"

const categories = ["Tous", "Rénovation", "Résidentiel", "Architecture", "Génie Civil"]

export default function RealisationsPage() {
  const [filter, setFilter] = useState("Tous")
  const filtered = filter === "Tous" ? realisations : realisations.filter((r) => r.category === filter)

  return (
    <div className="bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="font-head font-extrabold text-[32px] md:text-[42px] text-blue-custom uppercase mb-4">
              Nos Réalisations
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Découvrez l&apos;ensemble de nos projets
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 font-head font-bold text-[13px] uppercase tracking-[0.5px] rounded transition-all ${
                  filter === cat
                    ? "bg-red-custom text-white"
                    : "bg-white text-blue-custom hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-custom to-red-custom flex items-center justify-center">
                  <span className="text-white/20 font-head font-extrabold text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-[1px] font-bold text-red-custom">
                    {item.category}
                  </span>
                  <h3 className="font-head font-bold text-[15.5px] text-blue-custom mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
