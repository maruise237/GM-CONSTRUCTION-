"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ConseilAssistancePage() {
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
              Conseil &amp; Assistance
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Sous la fonction AMO ou MOD, nous sommes au service du client de la conception à la livraison
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Sous la fonction AMO (Assistant au Maître d&apos;Ouvrage) ou MOD (Maître d&apos;Ouvrage Délégué)
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700">
                et quel que soit la taille du projet, GM CONSTRUCTION est au service du client de la
                phase de conception à la livraison « clés en mains ».
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                GM CONSTRUCTION s&apos;adresse à tous ceux qui souhaitent réaliser un projet de BTP
              </h2>
              <ul className="grid md:grid-cols-2 gap-3 text-[16.5px] text-gray-700">
                {["Particuliers", "Groupements d'individus", "Entreprises", "Institutions", "Personnes morales"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-red-custom text-xl leading-none">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Notre équipe saura vous aider à trouver les meilleures solutions pour
              </h2>
              <ul className="grid md:grid-cols-2 gap-3 text-[16.5px] text-gray-700">
                {[
                  "Respecter votre budget",
                  "Optimiser les délais d'exécution",
                  "Structurer le projet en termes de coût",
                  "Coordonner les différents acteurs",
                  "Études de faisabilité",
                  "Coordination des études",
                  "Cahier des charges",
                  "Budget prévisionnel et délais de construction",
                  "Assistance lors des appels d'offres",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-custom text-xl leading-none mt-[-1px]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                En phase chantier, GM CONSTRUCTION
              </h2>
              <ul className="space-y-3 text-[16.5px] text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-custom text-xl leading-none mt-[-1px]">•</span>
                  Pilote et coordonne les travaux tous corps d&apos;état
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-custom text-xl leading-none mt-[-1px]">•</span>
                  Contrôle le respect du budget, des délais, des normes de construction et du cahier des charges
                </li>
              </ul>
              <p className="text-[16.5px] leading-relaxed text-gray-700 mt-6">
                En fin de chantier, nous sommes à vos côtés pour nous assurer que vos objectifs sont
                bien atteints. GM CONSTRUCTION vous assiste lors de la réception de votre ouvrage avec
                les constructeurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
