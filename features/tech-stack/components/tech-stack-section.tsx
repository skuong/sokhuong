import Image from "next/image"
import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { OrthographicCamera, View } from "@react-three/drei"

import { TechStackLogoGrid } from "@/features/tech-stack/components/tech-stack-logo-grid"
import { gsap } from "@/lib/gsap"

import { TechStackFluidGrid } from "./tech-stack-fluid-grid"

export function TechStackSection() {
  const header1 = useRef(null)
  const header2 = useRef(null)

  const techStackGridForCanvas = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
        <TechStackLogoGrid className="-z-10 border px-24" />

        <div className="absolute inset-0 z-50 w-full">
          <div className="h-full w-full">
            <View className="z-50 h-full w-full [&>div]:h-full [&>div]:w-full">
              <OrthographicCamera makeDefault position={[0, 0, 1]} />
              <TechStackFluidGrid
                htmlElementRef={techStackGridForCanvas}
                canvas2DRef={canvasRef}
              />
            </View>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 w-full -translate-x-full">
          <TechStackLogoGrid
            ref={techStackGridForCanvas}
            aria-hidden
            className="w-full bg-transparent px-24 text-rose-800"
          />
        </div>

        <div className="absolute top-0 z-50">
          <canvas ref={canvasRef} className="border" />
        </div>
      </section>
    </section>
  )
}
