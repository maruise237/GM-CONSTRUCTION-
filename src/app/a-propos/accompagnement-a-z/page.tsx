"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AccompagnementPage() {
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
              Accompagnement A-Z
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              De la réflexion à l&apos;aboutissement de vos projets
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Un accompagnement complet et personnalisé
              </h2>
              <div className="text-[16.5px] leading-relaxed space-y-5 text-gray-700">
                <p>
                  GM CONSTRUCTION vous accompagne à chaque étape de votre projet immobilier, de la
                  réflexion initiale jusqu&apos;à la remise des clés.
                </p>
                <p>
                  Notre approche globale couvre l&apos;ensemble des phases du projet : études de faisabilité,
                  conception architecturale, calculs de structures, suivi de chantier, coordination des
                  équipes et livraison finale.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="w-12 h-12 bg-red-custom rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                <h3 className="font-head font-bold text-[17px] text-blue-custom uppercase mb-3">Étude & Conseil</h3>
                <p className="text-[14.5px] text-gray-600 leading-relaxed">
                  Analyse de vos besoins, étude de faisabilité, conseil sur les aspects techniques et
                  budgétaires.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="w-12 h-12 bg-blue-custom rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                <h3 className="font-head font-bold text-[17px] text-blue-custom uppercase mb-3">Conception</h3>
                <p className="text-[14.5px] text-gray-600 leading-relaxed">
                  Plans architecturaux 2D/3D, calculs de structures béton armé, plans d&apos;exécution.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="w-12 h-12 bg-red-custom rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                <h3 className="font-head font-bold text-[17px] text-blue-custom uppercase mb-3">Réalisation</h3>
                <p className="text-[14.5px] text-gray-600 leading-relaxed">
                  Suivi et gestion de chantier, coordination des équipes, contrôle qualité et respect
                  des délais.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="w-12 h-12 bg-blue-custom rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">4</div>
                <h3 className="font-head font-bold text-[17px] text-blue-custom uppercase mb-3">Livraison</h3>
                <p className="text-[14.5px] text-gray-600 leading-relaxed">
                  Réception des travaux, levée des réserves et accompagnement pour la mise en service
                  de votre bien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
