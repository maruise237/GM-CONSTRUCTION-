"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/app/data/site-data"

export default function ObjectifsPage() {
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
              Nos Objectifs
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Atteindre leurs objectifs dès le début.
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Atteindre leurs objectifs dès le début.
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700">
                La satisfaction du client est plus qu&apos;un slogan chez {siteConfig.name}. Pour nous,
                il s&apos;agit de cultiver et de maintenir de solides relations en collaborant avec nos
                clients pour comprendre leurs besoins et les aider à atteindre leurs objectifs dès le
                début. Nous ne pouvons pas considérer qu&apos;un projet soit réussi sans que notre client
                ne soit entièrement satisfait.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Bâtir des relations à long terme
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700">
                L&apos;ambition de {siteConfig.name} est de réaliser ses projets en accordant une
                attention personnelle à la qualité du produit fini, et au respect des délais et des
                budgets de nos clients. Notre principal objectif est de bâtir des relations à long
                terme avec tous nos clients, basées sur l&apos;intégrité, la performance, la qualité des
                produits livrés et la quête permanente de la satisfaction client.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Nous sommes constamment à l&apos;écoute de vos besoins
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700">
                Nous souhaitons que chaque client puisse quel que soit son budget, réaliser son rêve
                légitime de devenir propriétaire tout en bénéficiant de prestations de qualité et
                d&apos;un accompagnement personnalisé. D&apos;une façon générale, nous ambitionnons de nouer
                une véritable relation de partenariat avec les clients dès le début du projet et sommes
                constamment à l&apos;écoute de leurs besoins, afin d&apos;avoir une vision claire et partagée
                pour leurs projets, dans le but de construire avec eux le projet adapté à leur mode de
                vie en recherchant les solutions architecturales et financières qui répondent à leurs
                attentes comme à leurs budgets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
