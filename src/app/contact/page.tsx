"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/app/data/site-data"

export default function ContactPage() {
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
              Contact
            </h1>
            <p className="text-[17px] text-gray-600 max-w-[800px] mx-auto">
              Discutons de votre projet
            </p>
          </motion.div>

          <div className="max-w-[960px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-lg shadow-sm p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-custom rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-head font-bold text-[15px] text-blue-custom uppercase mb-1">Adresse</h3>
                    <p className="text-[14.5px] text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-custom rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-head font-bold text-[15px] text-blue-custom uppercase mb-1">Téléphone</h3>
                    <p className="text-[14.5px] text-gray-600">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-custom rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-head font-bold text-[15px] text-blue-custom uppercase mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-[14.5px] text-red-custom hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-head font-bold text-[15px] text-blue-custom uppercase mb-3">Réseaux sociaux</h3>
                  <div className="flex gap-3">
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-custom rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.9 8.6H3.6V21h3.3V8.6zM5.2 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 13.4c0-3.1-1.7-4.6-3.9-4.6-1.8 0-2.6 1-3 1.7V8.6H10.8V21h3.3v-6.6c0-1.5.6-2.4 1.9-2.4 1.2 0 1.7.9 1.7 2.4V21H21v-7.6z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-custom rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.3 7.5.3s4.6 0 7.7-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15V8.4l6.2 3.3L9.7 15z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm p-8"
              >
                <h2 className="font-head font-extrabold text-[20px] text-blue-custom uppercase mb-6">
                  Envoyez-nous un message
                </h2>
                <form
                  action={`mailto:${siteConfig.email}`}
                  method="post"
                  encType="text/plain"
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase mb-1.5">Nom & Prénom</label>
                    <input type="text" name="nom" required className="w-full border border-gray-300 rounded px-4 py-2.5 text-[15px] focus:outline-none focus:border-red-custom transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase mb-1.5">Email</label>
                    <input type="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2.5 text-[15px] focus:outline-none focus:border-red-custom transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase mb-1.5">Téléphone</label>
                    <input type="tel" name="telephone" className="w-full border border-gray-300 rounded px-4 py-2.5 text-[15px] focus:outline-none focus:border-red-custom transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase mb-1.5">Message</label>
                    <textarea name="message" rows={5} required className="w-full border border-gray-300 rounded px-4 py-2.5 text-[15px] focus:outline-none focus:border-red-custom transition-colors resize-y" />
                  </div>
                  <button type="submit" className="w-full bg-red-custom text-white font-head font-bold text-[14px] uppercase px-6 py-3 rounded hover:bg-red-700 transition-colors">
                    Envoyer
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
