"use client"

import { motion } from "framer-motion"
import { references } from "../data/site-data"

export default function ReferencesSection() {
  const row1 = references.slice(0, 2)
  const row2 = references.slice(2)

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

        <div className="grid grid-cols-2 gap-4 mb-4">
          {row1.map((ref, i) => (
            <FlipCard key={ref.slug} title={ref.title} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {row2.map((ref, i) => (
            <FlipCard key={ref.slug} title={ref.title} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FlipCard({ title, index }: { title: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group perspective-[1000px] h-[200px]"
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg flex flex-col items-center justify-center gap-3 [backface-visibility:hidden]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M20 7h-4a4 4 0 0 0-8 0H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <h3 className="text-white font-head font-extrabold text-lg uppercase tracking-wide">
            {title}
          </h3>
        </div>
        <div className="absolute inset-0 bg-blue-custom rounded-lg flex flex-col items-center justify-center gap-3 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M20 7h-4a4 4 0 0 0-8 0H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <a
            href="/realisations"
            className="text-white font-head font-bold text-base uppercase hover:underline"
          >
            {title}
          </a>
        </div>
      </div>
    </motion.div>
  )
}
