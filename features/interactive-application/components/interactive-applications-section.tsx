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

  useGSAP(() => {
    gsap.from(titleLine1Ref.current, {
      scrollTrigger: {
        trigger: titleLine1Ref.current,
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: 300
    })

    gsap.from(titleLine2Ref.current, {
      scrollTrigger: {
        trigger: titleLine2Ref.current,
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: -300
    })
  }, [])

  return (
    <section className="mt-36">
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

      <div className="py-24">
        <View className="relative aspect-video w-screen border">
          <TabletScene theme={resolvedTheme}></TabletScene>
        </View>
      </div>
    </section>
  )
}

export { InteractiveApplicationsSection }
