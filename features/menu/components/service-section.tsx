"use client"

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { gsap } from "@/lib/gsap"

const services = [
  "Web App",
  "Accessibility",
  "Desktop App",
  "UI/UX",
  "Animation",
  "SEO",
  "3D Modeling"
]

export function ServiceSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titlePanelRef = useRef<HTMLDivElement | null>(null)
  const serviceListRef = useRef<HTMLUListElement | null>(null)

  useGSAP(
    () => {
      if (!sectionRef.current || !titlePanelRef.current) return

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
          trigger: sectionRef.current,
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
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative mt-36 py-44 text-black md:grid md:grid-cols-[minmax(11rem,20vw)_1fr]"
    >
      <aside className="relative z-10 flex h-20 items-center px-6 text-white md:block md:h-auto md:px-0 md:py-0">
        <div
          ref={titlePanelRef}
          className="flex h-20 w-full items-center px-6 md:h-screen md:items-start md:px-7 md:py-16"
        >
          <div className="text-xl font-light tracking-tight uppercase md:text-4xl">
            Service
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
            className="service-row group flex min-h-36 w-full items-center justify-between gap-6 bg-white px-4 py-8 text-5xl leading-none text-black sm:text-7xl md:min-h-[10.8rem] md:bg-transparent md:px-8 md:text-8xl md:text-white lg:text-9xl xl:min-h-43 xl:text-[7.5rem] 2xl:text-[9rem]"
          >
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
