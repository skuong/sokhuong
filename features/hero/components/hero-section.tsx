"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

import { useGSAP } from "@gsap/react"
import { GSDevTools } from "gsap/GSDevTools"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"
import { Ellipse, Ellipsis, Plus } from "lucide-react"

import { Avatar, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { ReactJsLogo } from "@/features/tech-stack/components/colored-logo/react-js-logo"
import { TailwindCssLogo } from "@/features/tech-stack/components/colored-logo/tailwindcss-logo"
import { ThreeJsLogo } from "@/features/tech-stack/components/colored-logo/three-js-logo"
import { VueJsLogo } from "@/features/tech-stack/components/colored-logo/vue-js-logo"
import { gsap } from "@/lib/gsap"

import { SmallContactButton } from "./small-contact-button"

gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(SplitText)

export function HeroSection() {
  const softwareTitleRef = useRef<HTMLDivElement>(null)
  const engineerTitleRef = useRef<HTMLDivElement>(null)
  const workedAtRef = useRef<HTMLDivElement>(null)
  const companiesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    //
    // GSDevTools.create({
    //   css: "z-index: 9999;"
    // })
  })

  useGSAP(() => {
    gsap.set(
      [
        softwareTitleRef.current,
        engineerTitleRef.current,
        workedAtRef.current,
        companiesRef.current
      ],
      {
        autoAlpha: 1
      }
    )

    const animateText = (
      ref: React.RefObject<HTMLDivElement | null>,
      delay: number = 0
    ) => {
      if (!ref.current) return

      const split = SplitText.create(ref.current, { type: "chars" })

      gsap.fromTo(
        split.chars,
        { y: 150, autoAlpha: 0 },
        {
          delay,
          y: 0,
          autoAlpha: 1,
          stagger: 0.02,
          ease: "power3.out"
        }
      )
    }
    document.fonts.ready.then(() => {
      animateText(softwareTitleRef)
      animateText(engineerTitleRef)
      animateText(workedAtRef, 0.25)
    })

    if (companiesRef.current) {
      const avatars = companiesRef.current.children

      gsap.fromTo(
        avatars,
        {
          y: 50,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      )
    }
  }, [])

  return (
    <div className="relative z-20 container mx-auto mt-24 items-center px-4 sm:px-6 md:px-0">
      <div className="relative flex justify-between space-y-2 text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
        <div>
          <div className="md:-translate-x-1">
            <div
              ref={softwareTitleRef}
              className="font-extralight text-rose-300 uppercase opacity-0"
            >
              Creative
            </div>
          </div>

          <div className="overflow-clip md:-translate-x-2">
            <div
              ref={engineerTitleRef}
              className="font-semibold text-rose-300 uppercase opacity-0"
            >
              Developer
            </div>
          </div>

          <div className="flex w-fit flex-col justify-start space-y-4">
            <div className="mt-20 overflow-clip">
              <div
                ref={workedAtRef}
                className="text-2xl text-muted-foreground uppercase opacity-0"
              >
                Experience
              </div>
            </div>

            <AvatarGroup className="opacity-0 grayscale" ref={companiesRef}>
              <AvatarGroupCount>
                <Ellipsis />
              </AvatarGroupCount>
              <Avatar size="lg" className={"bg-background"}>
                <ThreeJsLogo />
              </Avatar>
              <Avatar size="lg" className={"bg-background"}>
                <VueJsLogo />
              </Avatar>
              <Avatar size="lg" className={"bg-background"}>
                <TailwindCssLogo />
              </Avatar>
              <Avatar size="lg" className={"bg-background"}>
                <ReactJsLogo />
              </Avatar>
            </AvatarGroup>

            {/*<SmallContactButton />*/}
          </div>
        </div>
      </div>
    </div>
  )
}
