"use client"

import { motion } from "framer-motion"

export default function PilotagePage() {
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
              Pilotage &amp; Coordination
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              De la conception jusqu&apos;à la remise des clés
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                GM CONSTRUCTION représente le maître d&apos;ouvrage sur le chantier
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700">
                Sur les plans technique, administratif et financier, notre équipe de professionnels
                prend en charge l&apos;ensemble de la gestion de votre projet.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Nos missions de pilotage
              </h2>
              <ul className="space-y-4 text-[16.5px] text-gray-700">
                {[
                  "Planification et ordonnancement des travaux",
                  "Coordination des intervenants et corps d'état",
                  "Contrôle de l'avancement et des délais",
                  "Gestion budgétaire et financière du projet",
                  "Suivi de la conformité technique et réglementaire",
                  "Réunions de chantier et reporting",
                  "Réception des travaux et levée des réserves",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-custom text-xl leading-none mt-[-1px]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
