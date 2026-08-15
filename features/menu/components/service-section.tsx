"use client"

import { ComponentProps, useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

const services = [
  "Web App",
  "Accessibility",
  "Desktop App",
  "UI/UX",
  "Animation"
]

export function ServiceSection({ className, ...props }: ComponentProps<"div">) {
  const sectionContainerRef = useRef<HTMLDivElement | null>(null)
  const titlePanelRef = useRef<HTMLDivElement | null>(null)
  const serviceListRef = useRef<HTMLUListElement | null>(null)

  useGSAP(
    () => {
      if (!sectionContainerRef.current || !titlePanelRef.current) return

      const serviceItems = gsap.utils.toArray<HTMLElement>(
        serviceListRef.current?.querySelectorAll(".service-row") ?? []
      )

      gsap.from(serviceItems, {
        yPercent: 18,
        autoAlpha: 0,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: serviceListRef.current,
          start: "top 80%",
          end: "bottom 25%",
          scrub: true
        }
      })

      const matchMedia = gsap.matchMedia()

      matchMedia.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: sectionContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: titlePanelRef.current,
          pinType: "fixed",
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true
        })
      })

      return () => matchMedia.revert()
    },
    { scope: sectionContainerRef }
  )

  return (
    <section className={cn("mt-24 md:mt-56", className)} {...props}>
      <h2 className="mx-auto text-center text-4xl font-bold text-muted-foreground uppercase sm:text-5xl md:text-[5rem] lg:text-[7rem] xl:text-[7rem]">
        Services
      </h2>

      <div
        ref={sectionContainerRef}
        className="relative py-44 text-black md:grid md:grid-cols-[minmax(11rem,20vw)_1fr]"
      >
        <aside className="relative z-10 flex h-20 items-center px-6 text-black md:block md:h-auto md:px-0 md:py-0 dark:text-white">
          <div
            ref={titlePanelRef}
            className="flex h-20 w-full items-center px-6 md:h-screen md:items-start md:px-7 md:py-16"
          >
            <div className="text-xl font-light tracking-tight text-muted-foreground md:text-3xl">
              What I can help with
            </div>
          </div>
        </aside>

        <ul
          ref={serviceListRef}
          className="font-black uppercase *:border-b *:border-black/45"
        >
          {services.map((service) => (
            <li
              key={service}
              className="service-row group flex min-h-36 w-full items-center justify-between gap-6 bg-white px-4 py-8 text-5xl leading-none text-black sm:text-7xl md:min-h-[10.8rem] md:bg-transparent md:px-8 md:text-8xl lg:text-9xl xl:min-h-43 xl:text-[7.5rem] 2xl:text-[9rem] dark:md:text-white"
            >
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
