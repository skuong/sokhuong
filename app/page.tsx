"use client"

import { useEffect, useRef } from "react"

import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

import { PhoneticNameWithHoverCard } from "@/features/art/components/phonetic-name-with-hover-card"
import { Footer } from "@/features/footer/components/footer"
import { HeroSection } from "@/features/hero/components/hero-section"
import { LargeContactButtonSection } from "@/features/hero/components/large-contact-button-section"
import { InteractiveApplicationsSection } from "@/features/interactive-application/components/interactive-applications-section"
import { MenuSection } from "@/features/menu/components/menu-section"
import { SocialSection } from "@/features/social/components/social-section"
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

      <LargeContactButtonSection />

      <header className="container mx-auto px-4 pt-16 sm:px-6 md:px-0">
        <PhoneticNameWithHoverCard />
      </header>

      <main>
        <HeroSection />

        <WorkSection />

        <InteractiveApplicationsSection />
        <TechStackSection />

        <div className="mt-36">
          <SocialSection />
        </div>

        <MenuSection />
      </main>

      <Footer />
    </div>
  )
}
