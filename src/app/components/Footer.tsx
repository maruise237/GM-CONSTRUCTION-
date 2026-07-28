"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Globe } from "lucide-react"
import { siteConfig, footerLinks } from "../data/site-data"

export default function Footer() {
  return (
    <>
      <footer id="contact" className="border-t border-gray-200 py-14 pb-12">
        <div className="container-main grid md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/general/logo.png" alt="GM CONSTRUCTION" className="h-[70px] w-auto mb-3.5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-head font-extrabold text-[17px] text-blue-custom uppercase mb-5 tracking-[0.4px]">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {footerLinks.rapides.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14.5px] uppercase text-gray-800 hover:text-red-custom transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-head font-extrabold text-[17px] text-blue-custom uppercase mb-5 tracking-[0.4px]">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14.5px] uppercase text-gray-800 hover:text-red-custom transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-head font-extrabold text-[17px] text-blue-custom uppercase mb-5 tracking-[0.4px]">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5 items-start text-[14.5px]">
                <MapPin size={15} className="text-red-custom shrink-0 mt-1" />
                {siteConfig.address}
              </li>
              <li className="flex gap-2.5 items-start text-[14.5px]">
                <Phone size={15} className="text-red-custom shrink-0 mt-1" />
                {siteConfig.phone}
              </li>
              <li className="flex gap-2.5 items-start text-[14.5px]">
                <Mail size={15} className="text-red-custom shrink-0 mt-1" />
                {siteConfig.email}
              </li>
              <li className="flex gap-2.5 items-start text-[14.5px]">
                <Globe size={15} className="text-red-custom shrink-0 mt-1" />
                {siteConfig.website}
              </li>
            </ul>
          </motion.div>
        </div>
      </footer>

      <div className="bg-red-custom text-white py-4 text-sm">
        <div className="container-main flex flex-col md:flex-row justify-between items-center gap-2.5">
          <span>
            &copy;{siteConfig.year} {siteConfig.name}. Tous les droits sont réservés
          </span>
          <div className="flex gap-[18px]">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M22.5 5.9c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.4 2-2.5-.9.5-1.8.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2 4.8a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.1c0 2.2 1.5 4 3.6 4.4a4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1.5 19 12.7 12.7 0 0 0 8.4 21c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.3z"/></svg>
            </a>
            <a href={siteConfig.linkedin} aria-label="LinkedIn" className="hover:opacity-75 transition-opacity" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M6.9 8.6H3.6V21h3.3V8.6zM5.2 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 13.4c0-3.1-1.7-4.6-3.9-4.6-1.8 0-2.6 1-3 1.7V8.6H10.8V21h3.3v-6.6c0-1.5.6-2.4 1.9-2.4 1.2 0 1.7.9 1.7 2.4V21H21v-7.6z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-75 transition-opacity">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.3 7.5.3s4.6 0 7.7-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15V8.4l6.2 3.3L9.7 15z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
