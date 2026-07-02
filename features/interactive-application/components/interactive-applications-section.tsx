"use client"

import { useEffect } from "react"

import { View } from "@react-three/drei"
import { useTheme } from "@teispace/next-themes"

import { TabletScene } from "@/features/interactive-application/components/tablet-scene"
import { gsap } from "@/lib/gsap"

const InteractiveApplicationsSection = () => {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    gsap.from("#interactive-app-title-line-1", {
      scrollTrigger: {
        trigger: "#interactive-app-title-line-1",
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: 300
    })

    gsap.from("#interactive-app-title-line-2", {
      scrollTrigger: {
        trigger: "#interactive-app-title-line-2",
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: -300
    })
  }, [])

  return (
    <section className="" id="interactive-app">
      <div
        id="interactive-app-title-line-1"
        className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
      >
        Interactive
      </div>

      <div
        className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        id="interactive-app-title-line-2"
      >
        Applications
      </div>

      <div className="py-24">
        <View className="relative aspect-video w-screen border">
          <TabletScene theme={resolvedTheme}></TabletScene>
        </View>
      </div>
    </section>
  )
}

export { InteractiveApplicationsSection }
