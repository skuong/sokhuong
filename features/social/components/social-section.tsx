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

      <div className="relative my-36 flex h-screen w-full justify-center border border-red-800">
        <View className="h-full w-full">
          <SocialScene />
        </View>
      </div>
    </section>
  )
}
