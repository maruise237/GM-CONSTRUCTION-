"use client"

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-black overflow-hidden">
      <div className="relative w-full h-[75vh] min-h-[400px] max-h-[750px] overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/Xa5tEn4SOo4?autoplay=1&mute=1&loop=1&playlist=Xa5tEn4SOo4&controls=0&rel=0&showinfo=0&modestbranding=1"
          title="GM CONSTRUCTION"
          className="absolute top-1/2 left-1/2 border-0 pointer-events-none"
          style={{
            width: "177.78vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  )
}
