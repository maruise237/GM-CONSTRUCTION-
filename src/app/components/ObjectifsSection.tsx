"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowForward } from "./Icons"
import { siteConfig } from "../data/site-data"

export default function ObjectifsSection() {
  return (
    <section id="objectifs">
      <div className="container-main grid md:grid-cols-[1fr_1.15fr] gap-14 items-center py-[70px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/general/objectifs.jpg"
            alt="GM CONSTRUCTION — relation client"
            className="w-full h-full object-cover rounded"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title inline-block border-b-3 border-blue-custom pb-1.5 mb-5">
            Objectifs
          </h2>
          <p className="text-[16.5px] leading-relaxed mb-8">
            {siteConfig.about}
          </p>
          <Link
            href="/a-propos/nos-objectifs"
            className="btn-red inline-flex"
          >
            Lire la suite <ArrowForward />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
