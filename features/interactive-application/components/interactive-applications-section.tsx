"use client"

import { Canvas } from "@react-three/fiber"
import { useTheme } from "@teispace/next-themes"

import { TabletScene } from "@/features/interactive-application/components/tablet-scene"

const InteractiveApplicationsSection = () => {
  const { resolvedTheme } = useTheme()

  return (
    <div className="space-y-8 md:space-y-16">
      <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-9xl">
        Interactive
      </div>

      <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem]">
        Applications
      </div>

      <div className="py-24">
        <Canvas className="aspect-video w-screen border">
          <TabletScene theme={resolvedTheme}></TabletScene>
        </Canvas>
      </div>
    </div>
  )
}

export { InteractiveApplicationsSection }
