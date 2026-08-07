"use client"

import { useEffect, useRef } from "react"

import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

import { Footer } from "@/features/footer/components/footer"
import { Header } from "@/features/header/components/header"
import { HeroSection } from "@/features/hero/components/hero-section"
import { ServiceSection } from "@/features/menu/components/service-section"
import { TechStackSection } from "@/features/tech-stack/components/tech-stack-section"
import { WorkSection } from "@/features/work/components/work-section"
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

      <Header />

      <main id="main">
        <HeroSection />
        <WorkSection />

        <ServiceSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  )
}
