import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

import { NextJsCard } from "@/features/tech-stack/components/next-js-card"
import { TailwindCssCard } from "@/features/tech-stack/components/tailwind-css-card"
import { ThreeJsCard } from "@/features/tech-stack/components/three-js-card"
import { animateCardIn } from "@/features/tech-stack/utils/animate-card-in"
import { animateCardOut } from "@/features/tech-stack/utils/animate-card-out"
import {
  animateTechStackMarqueeIn,
  animateTechStackMarqueeOut
} from "@/features/tech-stack/utils/animate-tech-stack-marquee"
import { animateTechStackTitle } from "@/features/tech-stack/utils/animate-tech-stack-title"
import { gsap } from "@/lib/gsap"

import { TechStackMarquee } from "./tech-stack-marquee"

gsap.registerPlugin(useGSAP, SplitText)

export function TechStackSection() {
  const techStackSection = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!techStackSection.current) return

      const splitTech = new SplitText("h2", { type: "chars" })
      const techStackAnimation = animateTechStackTitle(splitTech.chars)

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
        // markers: true,
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
    <section ref={techStackSection} className="relative mb-24 h-dvh">
      <div className="flex h-full items-center">
        <h2 className="mx-auto text-6xl font-bold uppercase sm:text-7xl md:text-[7rem] lg:text-[9rem] xl:text-[10rem]">
          Tech Stack
        </h2>
      </div>
      <div className="absolute inset-0 flex h-full items-center justify-center">
        <div className="relative flex h-full w-full items-center justify-center">
          <TailwindCssCard id={`card-wrapper-1`} />
          <NextJsCard id={`card-wrapper-2`} />
          <ThreeJsCard id={`card-wrapper-3`} />
        </div>
        <div className="absolute inset-0 flex flex-col">
          <TechStackMarquee
            id="tech-stack-marquee-top"
            className="-translate-y-4 -rotate-z-3"
          />
          <TechStackMarquee
            id="tech-stack-marquee-bottom"
            className="mt-auto translate-y-4 -rotate-z-3"
          />
        </div>
      </div>
    </section>
  )
}
