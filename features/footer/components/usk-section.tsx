import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

export function UskSection() {
  const usk = useRef<HTMLDivElement | null>(null)
  const uskSection = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const split = SplitText.create(usk.current, {
      type: "chars"
    })

    gsap.from(split.chars, {
      y: 200,
      stagger: 0.1,
      scrollTrigger: {
        trigger: uskSection.current,
        toggleActions: "restart none none reverse"
      }
    })
  })

  return (
    <section ref={uskSection} className="mt-auto">
      <div
        ref={usk}
        className="pointer-events-none w-max text-[13rem] leading-none sm:text-[20rem] md:text-[28rem] lg:text-[36rem] xl:text-[38rem] 2xl:-mb-25 2xl:-ml-15 2xl:text-[46rem]"
      >
        USK
      </div>
    </section>
  )
}
