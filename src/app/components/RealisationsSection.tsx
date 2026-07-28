"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { realisations } from "../data/site-data"

interface Realisation {
  title: string
  category: string
  image?: string
}

export default function RealisationsSection({ items }: { items: Realisation[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const autoRef = useRef<ReturnType<typeof setInterval>>(0)

  const updateArrows = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
  }, [])

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 310, behavior: "smooth" })
    setTimeout(updateArrows, 350)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => updateArrows()
    el.addEventListener("scroll", onScroll)

    autoRef.current = setInterval(() => {
      if (!el) return
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: 310, behavior: "smooth" })
      }
    }, 2000)

    return () => {
      el.removeEventListener("scroll", onScroll)
      clearInterval(autoRef.current)
    }
  }, [updateArrows])

  return (
    <section id="realisations" className="bg-blue-custom py-14 pb-[72px] overflow-hidden">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-white mb-10"
        >
          Réalisations
        </motion.h2>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className={`absolute top-1/2 -translate-y-1/2 left-[-14px] w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border-none cursor-pointer hover:bg-gray-100 transition-colors ${
              !canScrollLeft ? "opacity-40" : ""
            }`}
            aria-label="Précédent"
          >
            <ChevronLeft size={16} className="text-blue-custom" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-1.5 pb-[18px] px-1"
          >
            {items.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                className="flex-[0_0_290px] snap-start bg-white rounded overflow-hidden shadow-lg group"
              >
                <div className="relative h-[172px] overflow-hidden">
                  <img
                    src={item.image || ""}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-blue-custom text-white text-[10px] font-head font-bold px-2 py-0.5 rounded uppercase tracking-wider z-10">
                    {item.category}
                  </span>
                  <div className="absolute inset-0 bg-blue-custom/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-head font-bold text-[12px] leading-relaxed uppercase p-3.5 pb-[18px] min-h-[84px]">
                  {item.title}
                </h3>
              </motion.article>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className={`absolute top-1/2 -translate-y-1/2 right-[-14px] w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border-none cursor-pointer hover:bg-gray-100 transition-colors ${
              !canScrollRight ? "opacity-40" : ""
            }`}
            aria-label="Suivant"
          >
            <ChevronRight size={16} className="text-blue-custom" />
          </button>
        </div>
      </div>
    </section>
  )
}
