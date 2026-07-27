"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { stats } from "../data/site-data"
import CountUp from "./CountUp"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 pb-[72px]" ref={ref}>
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title mb-5"
        >
          En Chiffres
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[760px] text-[16.5px] leading-relaxed mb-12"
        >
          {stats.intro}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <b className="block font-head font-extrabold text-[40px] text-blue-custom leading-none">
                {item.suffix && <span>{item.suffix} </span>}
                <CountUp target={item.value} started={isInView} duration={1500} />
              </b>
              <span className="block w-8 h-0.5 bg-blue-custom mx-auto my-3" />
              <span className="font-head font-bold text-[14px] text-blue-custom uppercase tracking-[0.4px]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
