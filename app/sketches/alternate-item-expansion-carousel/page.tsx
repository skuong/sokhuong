"use client"

import Image from "next/image"
import { useRef } from "react"

import { useGSAP } from "@gsap/react"

import { Button } from "@/components/ui/button"
import { gsap } from "@/lib/gsap"

export default function AlternateItemExpansionCarouselPage() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Close view of a building in brutalism style with reflective black outside wall and glass"
    },
    {
      src: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Nice architecture image of a building"
    },
    {
      src: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Nice white building with mosaic curvy white wall"
    }
  ]

  const wrapperRef = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!wrapperRef.current) return
      const expanders = wrapperRef.current.querySelectorAll(":scope > div")
      let activeExpander: HTMLDivElement
      expanders.forEach((expander) => {
        const closeButton = expander.querySelector("button")

        const animation = gsap.timeline({ paused: true })
        animation.to(expander, {
          width: "16rem",
          duration: 0.4
        })

        expander.animation = animation
        expander.addEventListener("click", () => {
          if (activeExpander) {
            const animation = activeExpander.animation as gsap.core.Timeline
            animation.reverse()
          }

          const animation = expander.animation as gsap.core.Timeline
          animation.play()
          activeExpander = expander
        })

        closeButton?.addEventListener("click", (event) => {
          event.stopPropagation()
          const animation = expander.animation as gsap.core.Timeline
          animation.reverse()
        })
      })
    },
    {
      scope: wrapperRef
    }
  )

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        ref={wrapperRef}
        className="flex h-full w-full items-center justify-center gap-4 *:rounded-md"
      >
        {images.map((image) => (
          <div
            key={image.src}
            className="relative h-9/10 w-20 cursor-pointer overflow-hidden bg-cyan-500 sm:w-32"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <Button className={"translate-x-56"}>X</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
