import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { GSDevTools } from "gsap/GSDevTools"
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

gsap.registerPlugin(useGSAP, SplitText, GSDevTools, ScrollTrigger)

export function TechStackSection() {
  const techStackSection = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!techStackSection.current) return

      const techStackAnimation = animateTechStackTitle(
        gsap.utils.toArray("h2 div")
      )

      const titleDescambleTimeline = gsap.to("h2 div:not([data-char='.'])", {
        yPercent: -100,
        stagger: 0.1,
        duration: 1,
        ease: "expo.inOut"
      })

      ScrollTrigger.create({
        trigger: "[data-info=heading]",
        start: "top 90%",
        animation: titleDescambleTimeline,
        once: true,
        fastScrollEnd: true
      })

      const card1 = techStackSection.current.querySelector("#card-wrapper-1")
      const card2 = techStackSection.current.querySelector("#card-wrapper-2")
      const card3 = techStackSection.current.querySelector("#card-wrapper-3")
      const cards = [card1, card2, card3]

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: techStackSection.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true
          // markers: true
        }
      })

      tl.to({}, {})
        .to(
          {},
          {
            onStart: () => {
              techStackAnimation.play()
            },
            onReverseComplete: () => {
              techStackAnimation.pause(0)
            }
          }
        )
        .to(
          {},
          {
            duration: 1,
            onStart: () => {
              animateCardIn(cards, 0)
            },
            onReverseComplete: () => {
              animateCardOut(cards, 0)
            }
          },
          "<"
        )
        .to(
          {},
          {
            duration: 1,
            onStart: () => {
              animateCardIn(cards, 1)
            },
            onReverseComplete: () => {
              animateCardOut(cards, 1)
            }
          }
        )
        .to(
          {},
          {
            duration: 1,
            onStart: () => {
              animateCardIn(cards, 2)
            },
            onReverseComplete: () => {
              animateCardOut(cards, 2)
            }
          }
        )
        .to(
          {},
          {
            duration: 0.5,
            onStart: () => {
              animateTechStackMarqueeIn("#tech-stack-marquee-top", "top")
              animateTechStackMarqueeIn("#tech-stack-marquee-bottom", "bottom")
            },
            onReverseComplete: () => {
              animateTechStackMarqueeOut("#tech-stack-marquee-top", "top")
              animateTechStackMarqueeOut("#tech-stack-marquee-bottom", "bottom")
            }
          }
        )
    },
    {
      scope: techStackSection
    }
  )

  return (
    <section ref={techStackSection} className="relative mb-24 h-dvh">
      <div className="flex h-full items-center">
        <h2
          data-info="heading"
          aria-label="Tech Stack"
          className="mx-auto flex overflow-hidden text-5xl leading-[0.75] font-bold uppercase sm:text-7xl md:text-[7rem] lg:text-[9rem] xl:text-[10rem]"
        >
          <div
            aria-hidden
            data-char="T"
            className="before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)]"
          >
            R
          </div>
          <div
            aria-hidden
            data-char="."
            className="-ml-1 before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)] md:-ml-3"
          >
            E
          </div>
          <div
            aria-hidden
            data-char="."
            className="before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)]"
          >
            C
          </div>
          <div
            aria-hidden
            data-char="."
            className="before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)]"
          >
            H
          </div>
          <div
            aria-hidden
            data-char="."
            className="ml-4 before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)] md:ml-6"
          >
            S
          </div>
          <div
            aria-hidden
            data-char="."
            className="before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)]"
          >
            T
          </div>
          <div
            aria-hidden
            data-char="A"
            className="before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)]"
          >
            E
          </div>
          <div
            aria-hidden
            data-char="C"
            className="before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)]"
          >
            A
          </div>
          <div
            aria-hidden
            data-char="."
            className="before:absolute before:inset-0 before:bottom-0 before:left-0 before:translate-y-full before:content-[attr(data-char)]"
          >
            K
          </div>
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
