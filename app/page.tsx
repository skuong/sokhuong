"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

import { Footer } from "@/features/footer/components/footer"
import { Header } from "@/features/header/components/header"
import { HeroSection } from "@/features/hero/components/hero-section"
import { IntroSection } from "@/features/intro/components/intro-section"
import { ServiceSection } from "@/features/menu/components/service-section"
import { gsap } from "@/lib/gsap"

export default function HomePage() {
  const canvasContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
  }, [])

  return (
    <div ref={canvasContainer} className="relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        {canvasContainer && (
          // @ts-expect-error the canvasContainer will be available
          <Canvas eventSource={canvasContainer}>
            <View.Port />
          </Canvas>
        )}
      </div>

      <Link
        href={"#main"}
        className="pointer-events-none absolute top-4 left-4 bg-background p-2 opacity-0 ring-0 outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-pink-600"
      >
        Skip to main content
      </Link>

      <Header />

      <main id="main">
        <HeroSection />

        <IntroSection />

        <ServiceSection />
      </main>

      <Footer />
    </div>
  )
}
