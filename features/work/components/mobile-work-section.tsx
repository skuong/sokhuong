import Image from "next/image"
import { ComponentProps, useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

import { works } from "./work-section"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function MobileWorkSection({
  className,
  ...props
}: ComponentProps<"div">) {
  const mobileWorkSectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const textWrappers = document.querySelectorAll("[data-info=text-wrapper]")
      gsap.set("[data-info=text-wrapper] > h3", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      })
      gsap.set("[data-info=text-wrapper] > h3 > span", {
        yPercent: 100
      })

      textWrappers.forEach((wrapper) => {
        const header = wrapper.querySelector("h3")
        const description = wrapper.querySelector("p")
        if (!header || !description) return

        ScrollTrigger.create({
          trigger: wrapper,
          start: "top bottom",
          animation: gsap
            .timeline()
            .fromTo(
              header.querySelector("span"),
              {
                yPercent: 100
              },
              {
                yPercent: 0
              }
            )
            .fromTo(
              header,
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
              },
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              },
              0
            )
        })
      })
    },
    {
      scope: mobileWorkSectionRef,
      dependencies: []
    }
  )
  return (
    <section
      ref={mobileWorkSectionRef}
      className={cn("relative text-foreground", className)}
      {...props}
    >
      <h2 className="mb-20 text-center text-4xl font-bold text-muted-foreground uppercase">
        Work
      </h2>

      <ul className="space-y-10">
        {works.map((work) => (
          <li key={work.title} className="space-y-2">
            <div className="relative aspect-video w-full">
              <Image
                loading="lazy"
                src={work.image}
                fill
                className="h-full w-full overflow-clip rounded-md object-cover"
                alt="empty for now"
              />
            </div>
            <div data-info="text-wrapper" className="space-y-2">
              <h3 className="w-fit text-xl font-light uppercase">
                <span className="inline-block">{work.title}</span>
              </h3>
              <p className="text-muted-foreground">{work.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
