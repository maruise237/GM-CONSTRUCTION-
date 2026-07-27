"use client"

import { useEffect, useState } from "react"

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

export default function KenBurnsSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-900">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1.05)" : "scale(1)",
            transition: "opacity 1000ms ease-in-out, transform 8000ms ease-in-out",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
