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
    const width = window.innerWidth
    const height = window.innerHeight
    const aspect = width / height

    const offsetY = aspect > 1 ? height * aspect : height * (aspect / 0.7)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: `+=${5000 - height / aspect}`,
        scrub: true,
        pin: true,
        pinSpacing: true
      }
    })

    tl.from(titleLine1Ref.current, {
      scale: 20,
      y: offsetY,
      x: -30 * aspect,
      ease: "power4.out"
    }).from(
      titleLine2Ref.current,
      { scale: 20, y: offsetY * 4.5, ease: "power4.out" },
      0
    )
  }, [])

  return (
    <section className="overflow-hidden md:mt-36">
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
