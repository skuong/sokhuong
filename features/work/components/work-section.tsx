import { useRef, useState } from "react"

import { useGSAP } from "@gsap/react"
import { Mesh } from "three"

import { gsap } from "@/lib/gsap"

import { WorkHighlightScene } from "./work-highlight-scene"

export function WorkSection() {
  const workSection = useRef<HTMLDivElement | null>(null)
  const [box, setBox] = useState<Mesh | null>(null)

  useGSAP(
    () => {
      if (!workSection.current || !box) return

      gsap.set(".curtain", {
        autoAlpha: 1
      })

      gsap.fromTo(
        ".curtain",
        { scaleY: 0 },
        {
          scaleY: gsap.utils.wrap([5.2, 8, 6, 10, 5.5]),
          transformOrigin: "center bottom",
          scrollTrigger: {
            trigger: workSection.current,
            start: "top bottom",
            scrub: true
          }
        }
      )

      gsap.to(box.rotation, {
        x: 20,
        scrollTrigger: {
          trigger: workSection.current,
          start: "top bottom",
          end: "+=3500 -20%",
          scrub: true
        }
      })

      const tl = gsap.timeline({
        id: "work-section",
        scrollTrigger: {
          trigger: workSection.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          refreshPriority: 10
        }
      })

      tl.fromTo(
        ".bottom-curtain",
        { scaleY: 0 },
        {
          scaleY: gsap.utils.wrap([3.2, 6, 4, 8, 3]),
          transformOrigin: "center bottom",
          ease: "none"
        },
        2
      )
    },
    {
      dependencies: [box],
      revertOnUpdate: true
    }
  )

  return (
    <section ref={workSection} className="relative text-black">
      <div className="absolute top-0 flex h-px w-full bg-pink-600">
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white opacity-0" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white opacity-0" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white opacity-0" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white opacity-0" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white opacity-0" />
        </div>
      </div>

      <div>
        <div className="h-screen">
          <WorkHighlightScene onBoxReady={setBox} />
        </div>
      </div>

      <div className="absolute bottom-0 flex h-px w-full bg-pink-600">
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
      </div>
    </section>
  )
}
