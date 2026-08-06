"use client"
import Image from "next/image"
import { useRef, useState } from "react"

import { useGSAP } from "@gsap/react"

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

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

export default function CarouselWithSecondaryAnimationForCenteredSmallerImage() {
  const secondaryCarouselRef = useRef<HTMLDivElement>(null)
  const [api, setApi] = useState<CarouselApi>()

  useGSAP(
    () => {
      if (!api) return

      const tl = gsap.timeline({ paused: true })
      tl.to(":scope > div", {
        yPercent: -100,
        ease: "none"
      })

      const onScroll = () => {
        const overall = api.scrollProgress()
        tl.progress(gsap.utils.mapRange(0, 1, 0, 0.666, overall))
      }

      api.on("scroll", onScroll)
      return () => {
        api.off("scroll", onScroll)
      }
    },
    {
      scope: secondaryCarouselRef,
      dependencies: [api]
    }
  )

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Carousel
        setApi={setApi}
        className="relative h-full w-full overflow-hidden [&>div:first-child]:h-full"
      >
        <CarouselContent className="relative h-full">
          {images.map((image, index) => (
            <CarouselItem
              key={image.src}
              className={cn("relative cursor-grab")}
            >
              <div
                className={cn(
                  "relative h-full w-full overflow-clip object-cover",
                  index > 0 && "ml-4"
                )}
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                  className="h-full w-full overflow-clip object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={"absolute left-4"} />
        <CarouselNext className={"absolute right-4"} />

        <div
          ref={secondaryCarouselRef}
          className="pointer-events-none absolute top-1/2 left-1/2 aspect-9/12 w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        >
          <div className="relative aspect-9/12 w-36">
            {images.map((image) => (
              <div className="relative h-full w-full" key={image.src}>
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  )
}
