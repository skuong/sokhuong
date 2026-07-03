import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import {
  Box,
  Html,
  OrbitControls,
  OrthographicCamera,
  Plane,
  View
} from "@react-three/drei"

import { TechStackLogoGrid } from "@/features/tech-stack/components/tech-stack-logo-grid"
import { gsap } from "@/lib/gsap"

export function TechStackSection() {
  const header1 = useRef(null)
  const header2 = useRef(null)

  useGSAP(() => {
    gsap.from(header1.current, {
      scrollTrigger: {
        trigger: header1.current,
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: 300
    })

    gsap.from(header2.current, {
      scrollTrigger: {
        trigger: header2.current,
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: -300
    })
  }, [])

  return (
    <section className="relative">
      <h2 className="flex flex-col">
        <span
          ref={header1}
          className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        >
          Modern
        </span>
        <span
          ref={header2}
          className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        >
          Stacks
        </span>
      </h2>

      <section className="relative">
        <TechStackLogoGrid className="border px-24" />

        <div className="absolute inset-0 z-20 w-full">
          <div className="h-full w-full">
            <View className="h-full w-full [&>div]:h-full [&>div]:w-full">
              <OrthographicCamera makeDefault position={[0, 0, 5]} />
              <Html
                center
                transform
                scale={40}
                position={[0, 0, 0]}
                occlude="blending"
                className="border px-24"
                geometry={<planeGeometry args={[100, 100, 10]} />}
              >
                <TechStackLogoGrid />
              </Html>
            </View>
          </div>
        </div>
      </section>
    </section>
  )
}
