"use client"

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { View } from "@react-three/drei"
import { useTheme } from "@teispace/next-themes"

import { TabletScene } from "@/features/interactive-application/components/tablet-scene"
import { gsap } from "@/lib/gsap"

const InteractiveApplicationsSection = () => {
  const { resolvedTheme } = useTheme()
  const titleLine1Ref = useRef(null)
  const titleLine2Ref = useRef(null)
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "+=5000",
        scrub: true,
        pin: true,
        pinSpacing: true
        // markers: true
      }
    })

    tl.from(titleLine1Ref.current, { scale: 20, y: 1300, x: -50 }).from(
      titleLine2Ref.current,
      { scale: 20, y: 4000 },
      0
    )
  }, [])

  return (
    <section className="mt-36">
      <div ref={sectionRef}>
        <div
          ref={titleLine1Ref}
          className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        >
          Interactive
        </div>

        <div
          ref={titleLine2Ref}
          className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        >
          Applications
        </div>
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
