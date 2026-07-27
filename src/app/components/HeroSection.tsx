"use client"

import { motion } from "framer-motion"
import { siteConfig } from "../data/site-data"

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-black">
      <div className="relative w-full aspect-video max-h-[80vh] overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/Xa5tEn4SOo4?autoplay=1&mute=1&loop=1&playlist=Xa5tEn4SOo4&controls=1&rel=0"
          title="GM CONSTRUCTION"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}
