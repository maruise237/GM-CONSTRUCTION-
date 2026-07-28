"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Pause, Play } from "lucide-react"

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [playing, setPlaying] = useState(true)
  const playerRef = useRef<any>(null)
  const readyRef = useRef(false)

  const togglePlay = useCallback(() => {
    if (!playerRef.current) return
    if (playing) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }, [playing])

  useEffect(() => {
    if (!iframeRef.current) return

    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const first = document.getElementsByTagName("script")[0]
    first?.parentNode?.insertBefore(tag, first)

    let poll: ReturnType<typeof setInterval>

    const checkReady = () => {
      if ((window as any).YT && (window as any).YT.Player) {
        clearInterval(poll)
        playerRef.current = new (window as any).YT.Player(iframeRef.current!, {
          events: {
            onStateChange: (e: any) => {
              setPlaying(e.data === (window as any).YT.PlayerState.PLAYING)
            },
            onReady: () => {
              readyRef.current = true
            },
          },
        })
      }
    }
    poll = setInterval(checkReady, 300)

    return () => clearInterval(poll)
  }, [])

  return (
    <section id="hero" className="relative w-full bg-black overflow-hidden">
      <div className="relative w-full h-[75vh] min-h-[400px] max-h-[750px] overflow-hidden">
        <iframe
          ref={iframeRef}
          id="yt-hero-player"
          src="https://www.youtube.com/embed/Xa5tEn4SOo4?autoplay=1&mute=1&loop=1&playlist=Xa5tEn4SOo4&controls=0&rel=0&showinfo=0&modestbranding=1&enablejsapi=1"
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
        <button
          onClick={togglePlay}
          className="absolute bottom-6 right-6 z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 cursor-pointer"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
        </button>
      </div>
    </section>
  )
}
