"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { services, siteConfig } from "../data/site-data"
import * as Icons from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Users: Icons.Users,
  PencilRuler: Icons.PencilRuler,
  Building2: Icons.Building2,
  Settings: Icons.Settings,
  Home: Icons.Home,
  Landmark: Icons.Landmark,
}

export default function ServicesSection() {
  const [active, setActive] = useState(0)

  const items = [
    { label: "Conseil & assistance", icon: "Users", desc: services[0].description },
    { label: "Conception", icon: "PencilRuler", desc: services[1].description },
    {
      label: "Pilotage & Coordination",
      icon: "Settings",
      desc: services[3].description,
    },
    { label: "Construction", icon: "Building2", desc: services[2].description },
    {
      label: "Promotion Immobilière",
      icon: "Landmark",
      desc: services[4].description,
    },
  ]

  const positions = [
    { top: "-14px", left: "50%", x: "-50%", y: "0" },
    { top: "50%", right: "-24px", x: "0", y: "-50%" },
    { bottom: "8px", right: "56px", x: "0", y: "0" },
    { bottom: "8px", left: "56px", x: "0", y: "0" },
    { top: "50%", left: "-24px", x: "0", y: "-50%" },
  ]

  return (
    <section id="about" className="py-10">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-100 rounded overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-custom to-red-custom flex items-center justify-center text-white font-head font-bold text-lg p-4 text-center">
                <div>
                  <p className="text-5xl font-extrabold mb-2">GM</p>
                  <p className="text-sm uppercase tracking-widest">{siteConfig.ceo}</p>
                  <p className="text-xs mt-1 opacity-80">{siteConfig.ceoTitle}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="services"
          >
            <h3 className="section-title mb-4">Services</h3>
            <div className="relative w-[340px] h-[340px] mx-auto md:w-full md:aspect-square max-w-[400px]">
              <div className="absolute inset-[30px] border-2 border-gray-200 rounded-full" />

              <div className="absolute inset-[90px] rounded-full bg-white flex flex-col items-center justify-center text-center p-4 z-10 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className="text-xs leading-relaxed"
                  >
                    <p>{items[active].desc}</p>
                  </motion.div>
                </AnimatePresence>
                <a href="/services/conseil-assistance" className="text-red-custom font-semibold text-xs mt-2 hover:underline">
                  Lire la suite
                </a>
              </div>

              {items.map((item, i) => {
                const SvgIcon = iconMap[item.icon] || Icons.HelpCircle
                const pos = positions[i]
                return (
                  <button
                    key={item.label}
                    onClick={() => setActive(i)}
                    className="absolute w-[85px] h-[85px] rounded-full flex flex-col items-center justify-center gap-1 text-center font-head font-bold text-[9px] leading-tight cursor-pointer border-4 border-white shadow-lg transition-all duration-200 z-20 p-1.5"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      right: (pos as any).right,
                      bottom: (pos as any).bottom,
                      transform: `translate(${pos.x}, ${pos.y})`,
                      backgroundColor: active === i ? "#a80d0d" : "#0062ad",
                      color: "#fff",
                    }}
                  >
                    <SvgIcon size={16} />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-10">
        <KenBurnsInner />
      </div>
    </section>
  )
}

function KenBurnsInner() {
  const [current, setCurrent] = useState(0)
  const images = [
    "https://www.batiluxafrica.com/wp-content/uploads/2024/10/sci01-scaled.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2022/03/A3-HALDANTEC-4-e14cad5774.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2024/10/Sakoura-105-scaled.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2018/12/residence6a-1080x600-e30c82f821.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2022/03/IDF-Rendering-39BAFC33-24ba7c9eec.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2023/08/A3-1-scaled.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2023/04/IMG-20230125-WA0017-scaled.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2025/06/KM-Arch.jpg",
    "https://www.batiluxafrica.com/wp-content/uploads/2022/03/YUM1-1-1170x600-6ce54689bb.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1.08)" : "scale(1)",
            transition: "opacity 1000ms ease-in-out, transform 8000ms ease-in-out",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}


