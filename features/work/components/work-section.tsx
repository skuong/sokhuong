import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { gsap } from "@/lib/gsap"

import { WorkTimelineScrollArea } from "./work-timeline-scroll-area"

export function WorkSection() {
  const workSection = useRef<HTMLDivElement | null>(null)
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: workSection.current,
      scrub: true,
      animation: gsap.fromTo(
        ".curtain",
        { scaleY: 0 },
        {
          scaleY: gsap.utils.wrap([5.2, 8, 6, 10, 5.5]),
          transformOrigin: "center bottom"
        }
      )
    })

    gsap
      .timeline()
      .to("#work-content", {
        scale: 10,
        scrollTrigger: {
          trigger: workSection.current,
          start: "top center",
          end: "+=6000",
          // pin: true,
          scrub: true
        }
      })
      .fromTo(
        ".bottom-curtain",

        { scaleY: 0 },
        {
          scaleY: gsap.utils.wrap([3.2, 6, 4, 8, 3]),
          transformOrigin: "center bottom",
          scrollTrigger: {
            trigger: workSection.current,
            scrub: true,
            start: "bottom bottom",
            markers: true
          }
        }
      )
  })

  return (
    <section
      ref={workSection}
      className="relative h-screen bg-white text-black"
    >
      <div className="absolute top-0 flex h-px w-full bg-pink-600">
        <div className="relative h-px w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-white" />
        </div>
      </div>

      <div>
        <div className="text-black">
          <div id="work-content">Content</div>
        </div>
      </div>

      <div className="absolute bottom-0 flex h-px w-full bg-pink-600">
        <div className="relative h-px w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
        <div className="relative h-px w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black" />
        </div>
      </div>
    </section>
  )
}
