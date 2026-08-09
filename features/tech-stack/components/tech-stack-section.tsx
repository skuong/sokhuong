import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { GSDevTools } from "gsap/GSDevTools"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

import { animateCardIn } from "@/features/tech-stack/utils/animate-card-in"
import { animateCardOut } from "@/features/tech-stack/utils/animate-card-out"
import {
  animateTechStackMarqueeIn,
  animateTechStackMarqueeOut
} from "@/features/tech-stack/utils/animate-tech-stack-marquee"
import { animateTechStackTitle } from "@/features/tech-stack/utils/animate-tech-stack-title"
import { gsap } from "@/lib/gsap"

gsap.registerPlugin(useGSAP, SplitText)

export function TechStackSection() {
  const techStackSection = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!techStackSection.current) return

      const splitTech = new SplitText("h2", { type: "chars" })
      const techStackAnimation = animateTechStackTitle(splitTech.chars)
      // GSDevTools.create({ animation: techStackAnimation })

      const card1 = techStackSection.current.querySelector("#card-wrapper-1")
      const card2 = techStackSection.current.querySelector("#card-wrapper-2")
      const card3 = techStackSection.current.querySelector("#card-wrapper-3")
      const cards = [card1, card2, card3]

      let played = 0
      let showedAllTech = false

      ScrollTrigger.create({
        trigger: techStackSection.current,
        start: "top top",
        end: "+=400%",
        markers: true,
        pin: true,
        onUpdate: (self) => {
          if (self.direction === 1) {
            const nextStep = Math.floor(self.progress * 3)
            if (played <= nextStep) {
              animateCardIn(cards, nextStep)
              played++
            }

            if (self.progress > 0.9 && !showedAllTech) {
              animateTechStackMarqueeIn("#tech-stack-marquee-top", "top")
              animateTechStackMarqueeIn("#tech-stack-marquee-bottom", "bottom")
              showedAllTech = true
            }
          } else {
            const nextStep = Math.ceil(self.progress * 3)

            if (played > nextStep) {
              animateCardOut(cards, nextStep)
              played--
            }

            if (self.progress < 0.9 && showedAllTech) {
              animateTechStackMarqueeOut("#tech-stack-marquee-top", "top")
              animateTechStackMarqueeOut("#tech-stack-marquee-bottom", "bottom")
              showedAllTech = false
            }
          }
        },
        onEnter: () => {
          techStackAnimation.play()
        },
        onLeaveBack: () => {
          techStackAnimation.reverse()
        }
      })
    },
    {
      scope: techStackSection
    }
  )
  return (
    <section ref={techStackSection} className="relative mt-44 h-dvh">
      <div className="flex h-full items-center">
        <h2 className="mx-auto text-6xl font-bold uppercase sm:text-7xl md:text-[7rem] lg:text-[9rem] xl:text-[10rem]">
          Tech Stack
        </h2>
      </div>
      <div className="absolute inset-0 flex h-full items-center justify-center">
        <div className="relative flex h-full w-full items-center justify-center">
          {["A", "B", "C"].map((content, index) => (
            <div
              key={content}
              id={`card-wrapper-${index + 1}`}
              className="absolute rounded-lg border opacity-0"
            >
              <div className="flex h-96 w-72 items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg">
                <div className="text-4xl">{content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col">
          <div
            id="tech-stack-marquee-top"
            className="h-32 -translate-y-4 -rotate-z-3 bg-neutral-900 opacity-0"
          ></div>
          <div
            id="tech-stack-marquee-bottom"
            className="mt-auto h-32 translate-y-4 -rotate-z-3 bg-neutral-900 opacity-0"
          ></div>
        </div>
      </div>
    </section>
  )
}
