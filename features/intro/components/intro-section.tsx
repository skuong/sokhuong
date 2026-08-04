import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)

export function IntroSection() {
  const introductionSection = useRef<HTMLDivElement>(null)
  const intro = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const getScrollAmount = () => {
        return (
          introductionSection.current!.offsetWidth -
          window.innerWidth +
          window.innerWidth / 2
        )
      }

      console.log(intro.current?.offsetWidth)
      const tween = gsap.fromTo(
        intro.current,
        {
          x: window.innerWidth
        },
        {
          x: () => -getScrollAmount(),
          duration: 3,
          ease: "none"
        }
      )

      ScrollTrigger.create({
        trigger: introductionSection.current,
        start: "top 50%",
        end: () => `+=${getScrollAmount()}`,
        scrub: true,
        pin: true,
        markers: true,
        animation: tween,
        invalidateOnRefresh: true
      })

      intro.current?.querySelectorAll(":scope > div").forEach((node, index) => {
        const contentElement = node.firstElementChild

        ScrollTrigger.create({
          trigger: node,
          containerAnimation: tween,
          start: "left 80%",
          end: "right 50%",
          animation: gsap.from(contentElement, {
            y: () => (index % 2 === 0 ? -100 : 100),
            opacity: 0
          }),
          scrub: true,
          markers: true
        })
      })
    },
    {
      scope: introductionSection
    }
  )

  return (
    <div ref={introductionSection} className="w-max text-9xl font-bold">
      <div ref={intro} id="introduction" className="flex gap-6">
        <div>
          <div>Hi</div>
        </div>
        <div>
          <div>I&apos;m</div>
        </div>
        <div>
          <div>Sokhuong,</div>
        </div>
        <div className="relative mr-128">
          <div>creative</div>
          <div className="absolute -top-4 -right-4 translate-x-full -translate-y-1/2 -rotate-z-12 rounded-lg bg-lime-400 px-6 py-4 text-black">
            Web
          </div>
          <div className="absolute -right-4 -bottom-4 translate-x-196 translate-y-full rounded-lg bg-indigo-300 px-6 py-4 text-black">
            Desktop
          </div>
        </div>
        <div>
          <div>developer</div>
        </div>
        <div>
          <div>based</div>
        </div>
        <div>
          <div>in</div>
        </div>
        <div>
          <div>Phnom Penh.</div>
        </div>
      </div>
    </div>
  )
}
