import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(useGSAP, SplitText)

const createCardTween = (card: Element | HTMLElement | null) => {
  return gsap.fromTo(
    card,
    {
      y: 50
    },
    {
      y: 0,
      ease: "elastic.out(1,0.4)",
      duration: 0.5,
      paused: true,
      onStart: () => {
        gsap.set(card, {
          opacity: 1
        })
      },
      onReverseComplete: () => {
        gsap.set(card, {
          opacity: 0
        })
      }
    }
  )
}

export function TechStackSection() {
  const techStackSection = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!techStackSection.current) return
      const splitTech = new SplitText("h2", { type: "chars" })

      const techStackAnimation = gsap.to(splitTech.chars, {
        x: () => Math.random() * 200 - 50,
        y: () => Math.random() * 200 - 50,
        rotationZ: () => Math.random() * 90 - 45,
        ease: "power3.out",
        duration: 0.2,
        paused: true
      })
      const card1 = techStackSection.current.querySelector("#card-wrapper-1")
      const card2 = techStackSection.current.querySelector("#card-wrapper-2")
      const card3 = techStackSection.current.querySelector("#card-wrapper-3")

      const cardsTweens = [
        createCardTween(card1),
        createCardTween(card2),
        createCardTween(card3)
      ]

      let played = 0

      const st = ScrollTrigger.create({
        trigger: techStackSection.current,
        start: "top top",
        end: "+=300%",
        // markers: true,
        pin: true,
        onUpdate: (self) => {
          if (self.direction === 1) {
            const nextStep = Math.floor(self.progress * 3)

            if (nextStep >= 3) return

            if (played < nextStep + 1) {
              cardsTweens[nextStep].play()
              played++
            }
          } else {
            const nextStep = Math.ceil(self.progress * 3)

            if (nextStep >= played) return

            cardsTweens[nextStep].reverse()
            played--
          }
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
        <h2 className="mx-auto text-9xl font-bold uppercase">Tech Stack</h2>
      </div>
      <div className="absolute inset-0 flex h-full items-center justify-center">
        {["A", "B", "C"].map((content, index) => (
          <div
            key={content}
            id={`card-wrapper-${index + 1}`}
            className="rounded-lg border opacity-0"
          >
            <div className="flex h-72 w-56 items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg">
              <div className="text-4xl">{content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
