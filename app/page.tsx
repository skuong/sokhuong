"use client"

import { useRef } from "react"

import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { PhoneticNameWithHoverCard } from "@/features/art/components/phonetic-name-with-hover-card"
import { InteractiveApplicationsSection } from "@/features/interactive-application/components/interactive-applications-section"
import { WorkTimelineScrollArea } from "@/features/work/components/work-timeline-scroll-area"

export default function HomePage() {
  const canvasContainer = useRef<HTMLDivElement>(null)

  return (
    <div ref={canvasContainer}>
      <div className="fixed inset-0 -z-10">
        {canvasContainer && (
          // @ts-expect-error the canvasContainer will be available
          <Canvas eventSource={canvasContainer}>
            <View.Port />
          </Canvas>
        )}
      </div>

      <header className="container mx-auto pt-16 pb-8">
        <PhoneticNameWithHoverCard />
      </header>

      <main>
        <div className="relative h-[calc(100vh-10rem)]">
          <WorkTimelineScrollArea />
        </div>

        <InteractiveApplicationsSection />
      </main>
    </div>
  )
}
