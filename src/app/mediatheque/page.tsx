"use client"

import { motion } from "framer-motion"
import { Film, FileText } from "lucide-react"
import { siteConfig } from "@/app/data/site-data"

export default function MediathequePage() {
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
              Médiathèque
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Photos, vidéos et documents de nos projets
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-8">
            <motion.a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-red-custom rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Film size={36} className="text-white" />
              </div>
              <h2 className="font-head font-extrabold text-[20px] text-blue-custom uppercase mb-2">Vidéos</h2>
              <p className="text-[14.5px] text-gray-600">
                Découvrez nos projets en images sur LinkedIn
              </p>
            </motion.a>

            <motion.a
              href={`mailto:${siteConfig.email}?subject=Demande%20de%20documents`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-10 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-blue-custom rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FileText size={36} className="text-white" />
              </div>
              <h2 className="font-head font-extrabold text-[20px] text-blue-custom uppercase mb-2">Documents</h2>
              <p className="text-[14.5px] text-gray-600">
                Demandez notre brochure et nos références
              </p>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}
