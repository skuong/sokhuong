import { useRef } from "react"

import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(useGSAP)

export function IntroSection() {
  const introductionSection = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        "#introduction",
        {
          xPercent: 110
        },
        {
          xPercent: -240,

          scrollTrigger: {
            trigger: introductionSection.current,
            start: "top 45%",
            end: "+=2000",
            scrub: true,
            pin: true
          }
        }
      )
    },
    {
      scope: introductionSection
    }
  )

  return (
    <section ref={introductionSection} className="text-9xl font-bold">
      <p id="introduction" className="whitespace-nowrap">
        <span id="greeting">Hi I&apos;m Sokhuong</span>
        <span>, </span>
        <span id="what-i-do">creative developer based in Phnom Penh.</span>
      </p>
    </section>
  )
}
