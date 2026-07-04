"use client"

import { useEffect, useRef } from "react"

import { useGSAP } from "@gsap/react"
import { GSDevTools } from "gsap/GSDevTools"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"
import { Plus } from "lucide-react"

import { Cursor } from "@/components/ui/custom-cursor"
import { gsap } from "@/lib/gsap"

gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(SplitText)

export function HeroSection() {
  const softwareTitleRef = useRef<HTMLDivElement>(null)
  const engineerTitleRef = useRef<HTMLDivElement>(null)
  const workedAtRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    //
    GSDevTools.create({
      css: "z-index: 9999;"
    })
  })

  useGSAP(() => {
    gsap.set(
      [softwareTitleRef.current, engineerTitleRef.current, workedAtRef.current],
      {
        autoAlpha: 1
      }
    )

    const animateText = (
      ref: React.RefObject<HTMLDivElement | null>,
      delay: number = 0
    ) => {
      if (!ref.current) return

      const split = SplitText.create(ref.current, { type: "chars" })

      gsap.fromTo(
        split.chars,
        { y: 150, autoAlpha: 0 },
        {
          delay,
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
      animateText(workedAtRef, 0.25)
    })
  }, [])

  return (
    <div className="relative z-20 container mx-auto mt-24 h-[calc(100vh-36rem)] items-center">
      <div className="relative flex justify-between space-y-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
        <div className="overflow-clip">
          <div className="-translate-x-2">
            <div
              ref={softwareTitleRef}
              className="font-extralight text-rose-200 uppercase opacity-0"
            >
              Creative
            </div>
          </div>

          <div className="-translate-x-3 overflow-clip">
            <div
              ref={engineerTitleRef}
              className="text-rose-300 uppercase opacity-0"
            >
              Developer
            </div>
          </div>

          <div className="mt-20 overflow-clip">
            <div
              ref={workedAtRef}
              className="text-2xl text-muted-foreground uppercase opacity-0"
            >
              Worked at
            </div>
          </div>
        </div>

        <div className="flex w-3/12 bg-[repeating-linear-gradient(-45deg,var(--color-neutral-300)_0,var(--color-neutral-300)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(-45deg,var(--color-neutral-800)_0,var(--color-neutral-800)_1px,transparent_1px,transparent_10px)]">
          <Cursor
            name="Work together"
            className="m-auto flex"
            cursorColor="white"
            svgClassName="size-14"
          >
            <div className="group flex size-48 bg-rose-800">
              <Plus
                strokeLinecap="round"
                className="m-auto size-24 rounded-full stroke-[0.5px] text-rose-300"
              />
            </div>
          </Cursor>
        </div>
      </div>
    </div>
  )
}
