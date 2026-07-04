"use client"

import { useEffect, useRef } from "react"

import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { GSDevTools } from "gsap/GSDevTools"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { Plus } from "lucide-react"

import { Cursor } from "@/components/ui/custom-cursor"
import { PhoneticNameWithHoverCard } from "@/features/art/components/phonetic-name-with-hover-card"
import { HeroSection } from "@/features/hero/components/hero-section"
import { InteractiveApplicationsSection } from "@/features/interactive-application/components/interactive-applications-section"
import { SocialSection } from "@/features/social/components/social-section"
import { TechStackSection } from "@/features/tech-stack/components/tech-stack-section"
import { WorkTimelineScrollArea } from "@/features/work/components/work-timeline-scroll-area"
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
    <div ref={canvasContainer} className="relative overflow-hidden border">
      <div className="fixed inset-0 z-10">
        {canvasContainer && (
          // @ts-expect-error the canvasContainer will be available
          <Canvas eventSource={canvasContainer}>
            <View.Port />
          </Canvas>
        )}
      </div>

      <div className="group absolute right-0 z-50 hidden h-[calc(100vh-18rem)] w-4/12 bg-[repeating-linear-gradient(-45deg,var(--color-neutral-300)_0,var(--color-neutral-300)_1px,transparent_1px,transparent_10px)] md:flex dark:bg-[repeating-linear-gradient(-45deg,var(--color-neutral-800)_0,var(--color-neutral-800)_1px,transparent_1px,transparent_10px)]">
        <Cursor
          name="Work together"
          className="m-auto flex"
          cursorColor="white"
          svgClassName="size-14"
        >
          <div className="group z-10 flex size-56 bg-rose-800">
            <Plus
              strokeLinecap="round"
              className="m-auto size-24 rounded-full stroke-[0.5px] text-rose-300"
            />
          </div>
        </Cursor>

        <div className="absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 border border-r border-b border-rose-800 bg-black transition-transform duration-200 group-hover:-translate-x-5/12 group-hover:-translate-y-5/12"></div>
      </div>

      <header className="container mx-auto px-4 pt-16 sm:px-6 md:px-0">
        <PhoneticNameWithHoverCard />
      </header>

      <main>
        <HeroSection />

        <div className="relative z-20 h-[calc(100vh-10rem)]">
          <WorkTimelineScrollArea />
        </div>

        <InteractiveApplicationsSection />
        <TechStackSection />

        <div className="mt-36">
          <SocialSection />
        </div>
      </main>
    </div>
  )
}
