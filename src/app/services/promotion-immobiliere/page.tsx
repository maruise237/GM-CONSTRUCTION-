"use client"

import { motion } from "framer-motion"

export default function PromotionImmobilierePage() {
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
              Promotion Immobilière
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Vous avez un terrain bien placé ? Confiez-nous votre projet
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Vous avez un terrain avec un titre de propriété ?
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700 mb-6">
                Contactez GM CONSTRUCTION ! Nous nous occupons de tout.
              </p>

              <h3 className="font-head font-bold text-[17px] text-blue-custom uppercase mb-4">
                Nos services en promotion immobilière
              </h3>
              <ul className="space-y-3 text-[16.5px] text-gray-700">
                {[
                  "Location d'appartements meublés et non meublés",
                  "Vente d'appartements neufs et clés en main",
                  "Vente de terrains viabilisés",
                  "Vente de matériaux de construction (ciment, fer, etc.)",
                  "Montage de dossiers de financement",
                  "Recherche de partenaires et investisseurs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-custom text-xl leading-none mt-[-1px]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Pourquoi nous confier votre projet ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-[16.5px] text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>Expertise en ingénierie et construction</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>Réseau de partenaires et d&apos;investisseurs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>Accompagnement de A à Z</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>Transparence et professionnalisme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
