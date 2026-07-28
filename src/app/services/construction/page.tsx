"use client"

import { motion } from "framer-motion"

export default function ConstructionPage() {
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
              Construction
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Des réalisations solides et durables
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Nous intervenons en tant que constructeur tous corps d&apos;état
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700 mb-6">
                et livrons des produits « clés en main » dans des délais et prix initialement convenus
                à l&apos;avance.
              </p>

              <h3 className="font-head font-bold text-[17px] text-blue-custom uppercase mb-4">
                Nos prestations comprennent notamment
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-[16.5px] text-gray-700">
                {[
                  "Fondations et terrassement",
                  "Gros œuvre (béton armé, maçonnerie)",
                  "Second œuvre (plomberie, électricité)",
                  "Menuiseries et serrureries",
                  "Revêtements et finitions",
                  "Peinture et décoration",
                  "VRD (Voirie et Réseaux Divers)",
                  "Aménagements extérieurs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-custom text-xl leading-none mt-[-1px]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Notre engagement qualité
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700">
                Nous utilisons des matériaux rigoureusement sélectionnés, conformes aux normes en
                vigueur, et nos équipes sont formées aux techniques de construction les plus récentes
                pour garantir la durabilité et la qualité de vos ouvrages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
