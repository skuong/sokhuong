"use client"

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { View } from "@react-three/drei"

import { gsap } from "@/lib/gsap"

import { SocialScene } from "./social-scene"

export function SocialSection() {
  const header = useRef(null)

  useGSAP(() => {
    gsap.from(header.current, {
      scrollTrigger: {
        trigger: header.current,
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: 300
    })
  }, [])

  return (
    <section>
      <h2 className="flex flex-col">
        <span
          ref={header}
          className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        >
          Social
        </span>
      </h2>

      <div className="relative z-50 my-36 flex aspect-video w-full justify-center">
        <View className="w-full">
          <SocialScene />
        </View>
      </div>
    </section>
  )
}
