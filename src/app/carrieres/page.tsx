"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/app/data/site-data"

export default function CarrieresPage() {
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
              Carrières
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Rejoignez une équipe dynamique et passionnée
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Nos valeurs
              </h2>
              <p className="text-[16.5px] leading-relaxed text-gray-700 mb-8">
                {siteConfig.name} fonde son développement sur une culture fortement marquée par la
                prééminence donnée aux collaborateurs.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-[15.5px] text-gray-700">
                {[
                  "Les hommes constituent la première valeur de notre entreprise",
                  "Le client est la raison d'être de l'entreprise",
                  "La qualité est la clé de la compétitivité",
                  "La créativité pour des offres originales",
                  "L'innovation technique pour notre succès",
                  "Le respect de soi, des autres et de l'environnement",
                  "La promotion des hommes basée sur le mérite",
                  "La formation pour enrichir la vie professionnelle",
                ].map((val, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-red-custom text-xl leading-none mt-[-1px]">•</span>
                    {val}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Postes à pourvoir
              </h2>
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-head font-bold text-[17px] text-blue-custom">Responsable études de prix</h3>
                  <p className="text-[14.5px] text-gray-600 mt-1">CDI • Dakar, Sénégal</p>
                </div>
                <a
                  href={`mailto:${siteConfig.email}?subject=Candidature%20-%20Responsable%20%C3%A9tudes%20de%20prix`}
                  className="inline-flex items-center gap-2 bg-red-custom text-white font-head font-bold text-[13px] uppercase px-5 py-2.5 rounded hover:bg-red-700 transition-colors"
                >
                  Postuler
                </a>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-[16.5px] text-gray-700 mb-4">
                  Vous partagez nos valeurs et souhaitez nous rejoindre ?
                </p>
                <a
                  href={`mailto:${siteConfig.email}?subject=Candidature%20spontan%C3%A9e`}
                  className="inline-flex items-center gap-2 bg-blue-custom text-white font-head font-bold text-[13px] uppercase px-6 py-3 rounded hover:bg-blue-800 transition-colors"
                >
                  Candidature spontanée
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
