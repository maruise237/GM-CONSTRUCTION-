"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowForward } from "./Icons"
import { siteConfig } from "../data/site-data"

export default function ObjectifsSection() {
  return (
    <section className="bg-blue-custom text-white py-14 md:py-[72px]">
      <div className="container-main">
        <div className="max-w-[960px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-head font-extrabold text-[30px] md:text-[34px] uppercase tracking-[0.5px] mb-6 text-center"
          >
            Objectifs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[17px] leading-relaxed text-center mb-9"
          >
            {siteConfig.about}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/a-propos/nos-objectifs"
              className="btn-red inline-flex"
            >
              Lire la suite <ArrowForward />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
