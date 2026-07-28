"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/app/data/site-data"

export default function PresentationPage() {
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
              Présentation
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              {siteConfig.name} — une ingénierie d&apos;excellence au service de vos projets
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="font-head font-extrabold text-[22px] text-red-custom uppercase mb-6">
                Notre ambition est de nous positionner comme un acteur de référence.
              </h2>
              <div className="text-[16.5px] leading-relaxed space-y-5 text-gray-700">
                <p>
                  {siteConfig.name} est une entreprise créée par une ingénieure en génie civil ayant une expertise
                  avérée dans l&apos;ingénierie des structures, la conception architecturale et le management global
                  de tous types de projets de BTP, et qui a fait carrière au sein de grands projets au Sénégal.
                </p>
                <p>
                  Grâce à des compétences multidisciplinaires et à une expertise pointue, nous vous aidons à
                  réaliser toutes vos ambitions en terme de projets immobiliers. Notre ambition est de nous
                  positionner comme un acteur de référence dans les domaines du BTP, des études techniques et
                  de la promotion immobilière au Sénégal et dans toute la sous-région.
                </p>
                <p>
                  Nous intervenons sur les différents métiers du BTP et de l&apos;immobilier (ingénierie,
                  assistance à maître d&apos;ouvrage, maîtrise d&apos;ouvrage déléguée, architecture, construction,
                  promotion immobilière, services).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mt-8">
              <h2 className="font-head font-extrabold text-[22px] text-blue-custom uppercase mb-6">
                Notre professionnalisme, notre engagement et notre sens du service de proximité
              </h2>
              <div className="text-[16.5px] leading-relaxed space-y-5 text-gray-700">
                <p>
                  Notre entreprise accompagne ses clients en leur offrant des prestations sur mesure à la hauteur
                  de leurs attentes et de leurs budgets, et en s&apos;adaptant constamment et rapidement à leurs
                  besoins changeants.
                </p>
                <p>
                  Pour chaque projet, nous nous engageons à apporter le meilleur à nos clients dans la mise en
                  œuvre du projet, l&apos;organisation des équipes et du matériel pour une qualité optimale du
                  produit fini tout en respectant l&apos;enveloppe budgétaire et le délai contractuel définis en amont.
                </p>
                <p>
                  Partenaire stratégique de nos clients, nous vous accompagnons de la réflexion à l&apos;aboutissement
                  de vos projets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
