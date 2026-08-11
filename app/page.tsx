"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

// import { View } from "@react-three/drei"
// import { Canvas } from "@react-three/fiber"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

import { ContactIntroSection } from "@/features/contact/components/contact-intro-section"
import { Footer } from "@/features/footer/components/footer"
import { Header } from "@/features/header/components/header"
import { HeroSection } from "@/features/hero/components/hero-section"
import { ServiceSection } from "@/features/menu/components/service-section"
import { TechStackSection } from "@/features/tech-stack/components/tech-stack-section"
import { MobileWorkSection } from "@/features/work/components/mobile-work-section"
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
      {/*<div className="fixed inset-0 -z-10">
        {canvasContainer && (
          // @ts-expect-error the canvasContainer will be available
          <Canvas eventSource={canvasContainer}>
            <View.Port />
          </Canvas>
        )}
      </div>*/}

      <Header />

      <main id="main">
        <HeroSection />
        <MobileWorkSection className="p-4 sm:hidden" />
        <WorkSection className="hidden sm:block" />

        <ServiceSection />
        <TechStackSection />
        <div className="mb-24 hidden sm:block">
          <ContactIntroSection />
          <div className="mt-8 flex items-center justify-center">
            <Link
              href={"/book-a-call"}
              data-transition-ignore
              className="text-muted-foreground outline-none focus:ring-2 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              <div className="bg-foreground p-4 text-6xl font-bold text-background">
                Let's talk
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
