"use client"

import { motion } from "framer-motion"

export default function ConceptionPage() {
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
              Conception
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Des plans précis pour des projets solides
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Pour tous vos projets, GM CONSTRUCTION vous propose
              </h2>
              <ul className="space-y-4 text-[16.5px] text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>
                    <strong>La conception architecturale</strong> (plans 2D, coupes et vues 3D) par
                    notre équipe de professionnels
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>
                    <strong>Les plans béton armé</strong> avec notre bureau d&apos;études partenaire
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>
                    <strong>Les plans des lots techniques</strong> par des prestataires avec lesquels
                    nous avons l&apos;habitude de travailler
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Nos logiciels et outils
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-[16.5px] text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>AutoCAD & Revit pour les plans architecturaux</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>Robot Structural Analysis pour les calculs de structures</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>Logiciels de rendu 3D pour des visualisations réalistes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-custom rounded-full mt-2 shrink-0" />
                  <span>Suite Adobe pour les présentations et supports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
