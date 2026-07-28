"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/app/data/site-data"

export default function PositionnementPage() {
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
              Positionnement
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Un acteur de référence dans le BTP et la promotion immobilière
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Notre Positionnement Stratégique
              </h2>
              <div className="text-[16.5px] leading-relaxed space-y-5 text-gray-700">
                <p>
                  {siteConfig.name} se positionne comme un acteur majeur dans les domaines du BTP, de
                  l&apos;ingénierie des structures et de la promotion immobilière au Sénégal et dans la
                  sous-région.
                </p>
                <p>
                  Forte d&apos;une expertise en génie civil, structures béton armé, et conception
                  architecturale, notre entreprise apporte des solutions innovantes et adaptées aux
                  défis de la construction moderne en Afrique.
                </p>
                <p>
                  Nous intervenons sur l&apos;ensemble de la chaîne de valeur du projet immobilier :
                  de la conception des plans à la livraison finale, en passant par le suivi et la
                  gestion de projets, la coordination des équipes et la recherche de matériaux de
                  qualité.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Nos Domaines d&apos;Intervention
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-[16.5px] text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>Ingénierie des structures béton armé</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>Conception architecturale 2D/3D</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>Assistance à maîtrise d&apos;ouvrage</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>Maîtrise d&apos;œuvre déléguée</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>Construction tous corps d&apos;état</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-custom rounded-full mt-2 shrink-0" />
                  <span>Promotion immobilière</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
