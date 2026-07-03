"use client"

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(SplitText)

export function HeroSection() {
  const softwareTitleRef = useRef<HTMLDivElement>(null)
  const engineerTitleRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.set([softwareTitleRef.current, engineerTitleRef.current], {
      autoAlpha: 1
    })

    const tl = gsap.timeline()
    const animateText = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (!ref.current) return

      const split = SplitText.create(ref.current, { type: "chars" })

      tl.fromTo(
        split.chars,
        { y: 150, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.02,
          ease: "power3.out"
        }
      )
    }

    document.fonts.ready.then(() => {
      animateText(softwareTitleRef)
      animateText(engineerTitleRef)
    })
  }, [])

  return (
    <div className="relative z-20 container mx-auto mt-32 h-[calc(100vh-10rem)] items-center">
      <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
        <div className="overflow-clip uppercase">
          <div ref={softwareTitleRef} className="opacity-0">
            Software
          </div>
        </div>

        <div className="overflow-clip uppercase">
          <div ref={engineerTitleRef} className="opacity-0">
            Engineer
          </div>
        </div>
      </div>
    </div>
  )
}
