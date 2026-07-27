"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  target: number
  started: boolean
  duration?: number
}

export default function CountUp({ target, started, duration = 1600 }: Props) {
  const [count, setCount] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!started) return
    const t0 = performance.now()

    function tick(t: number) {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(target * eased))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [started, target, duration])

  return <>{count}</>
}
