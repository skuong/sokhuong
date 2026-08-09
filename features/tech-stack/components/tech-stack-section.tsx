import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(useGSAP, SplitText)

const animateCardIn = (card: Element | HTMLElement | null) => {
  return gsap.fromTo(
    card,
    {
      y: 50,
      x: 0
    },
    {
      y: 0,
      x: 0,
      ease: "elastic.out(1,0.4)",
      duration: 0.5,
      onStart: () => {
        gsap.set(card, {
          opacity: 1
        })
      }
    }
  )
}

const animateCardOut = (card: Element | HTMLElement | null) => {
  return gsap.timeline().to(card, {
    x: 80,
    opacity: 0,
    ease: "power2.out",
    duration: 0.2
  })
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
              animateCardIn(cards[nextStep])
              played++
            }

            if (self.progress > 0.9 && !showedAllTech) {
              gsap.fromTo(
                "#tech-stack-marquee-top",
                {
                  opacity: 0,
                  yPercent: -50
                },
                {
                  opacity: 1,
                  yPercent: 0,
                  duration: 0.2,
                  ease: "elastic.out(1,0.4)"
                }
              )
              gsap.fromTo(
                "#tech-stack-marquee-bottom",
                {
                  opacity: 0,
                  yPercent: 50
                },
                {
                  opacity: 1,
                  yPercent: 0,
                  duration: 0.2,
                  ease: "elastic.out(1,0.4)"
                }
              )
              showedAllTech = true
            }
          } else {
            const nextStep = Math.ceil(self.progress * 3)

            if (played > nextStep) {
              animateCardOut(cards[nextStep])
              played--
            }

            if (self.progress < 0.9 && showedAllTech) {
              gsap.fromTo(
                "#tech-stack-marquee-top",
                {
                  opacity: 1,
                  yPercent: 0
                },
                {
                  opacity: 0,
                  yPercent: -50,
                  duration: 0.2,
                  ease: "power2.out"
                }
              )
              gsap.fromTo(
                "#tech-stack-marquee-bottom",
                {
                  opacity: 1,
                  yPercent: 0
                },
                {
                  opacity: 0,
                  yPercent: 50,
                  duration: 0.2,
                  ease: "power2.out"
                }
              )
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
        <h2 className="mx-auto text-9xl font-bold uppercase">Tech Stack</h2>
      </div>
      <div className="absolute inset-0 flex h-full items-center justify-center">
        <div className="relative flex h-full w-full items-center justify-center">
          {["A", "B", "C"].map((content, index) => (
            <div
              key={content}
              id={`card-wrapper-${index + 1}`}
              className="absolute rounded-lg border opacity-0"
            >
              <div className="flex h-80 w-64 items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg">
                <div className="text-4xl">{content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col">
          <div
            id="tech-stack-marquee-top"
            className="h-32 -translate-y-4 -rotate-z-3 bg-pink-800 opacity-0"
          ></div>
          <div
            id="tech-stack-marquee-bottom"
            className="mt-auto h-32 translate-y-4 -rotate-z-3 bg-blue-800 opacity-0"
          ></div>
        </div>
      </div>
    </section>
  )
}
