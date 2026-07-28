"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(SplitText)

export function HeroSection() {
  const softwareTitleRef = useRef<HTMLDivElement>(null)
  const engineerTitleRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    gsap.set([softwareTitleRef.current, engineerTitleRef.current], {
      autoAlpha: 1
    })

    const tl = gsap.timeline()
    tl.add(() => {
      const split = new SplitText(softwareTitleRef.current, { type: "chars" })
      const iChar = split.chars[5]

      if (!iChar || !videoRef.current) return

      gsap.set(iChar, {
        position: "relative",
        yPercent: 15,
        display: "inline-block",
        overflow: "hidden"
      })

      iChar.appendChild(videoRef.current)
      gsap.set(videoRef.current, {
        position: "absolute",
        top: 0,
        left: "50%",
        xPercent: -49,
        yPercent: 20,
        height: "72%",
        objectFit: "cover",
        autoAlpha: 0
      })

      gsap
        .timeline()
        .to(iChar, {
          width: () => (window.innerWidth >= 1024 ? 170 : 150),
          duration: 1,
          ease: "power3.inOut",
          delay: 0.5
        })
        .to(
          videoRef.current,
          {
            autoAlpha: 1,
            width: () => (window.innerWidth >= 1024 ? 160 : 150),
            transformOrigin: "left center",
            duration: 0.3
          },
          "<"
        )
        .call(() => videoRef.current?.play())
    })
  }, [])

  return (
    <div className="flex h-screen flex-col justify-between border p-4">
      <div className="flex justify-between">
        <div className="font-mono font-light text-muted-foreground">KHUONG</div>
        <div className="font-mono font-light text-muted-foreground">MENU</div>
      </div>
      <div className="mx-auto flex flex-col items-start justify-start text-6xl font-bold md:text-9xl lg:text-[9rem]">
        <div ref={softwareTitleRef} className="opacity-0">
          CREATIVE
        </div>
        <div ref={engineerTitleRef} className="opacity-0">
          DEVELOPER
        </div>
      </div>

      <video
        ref={videoRef}
        src="https://placeholdervideo.dev/1280x720"
        muted
        loop
        playsInline
        className="absolute h-0 bg-white object-cover opacity-0"
      />

      <div className="flex items-end justify-between">
        <div>
          <div className="relative size-24 bg-muted md:size-32">
            <Image
              src={"/sokhuong-profile-image-600.jpg"}
              alt="Sokhuong's profile image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <Link href={"https://www.cal.eu/sokhuong/15min"} target="_blank">
          <div className="font-mono text-xl font-light text-muted-foreground md:text-2xl">
            LET&apos;S TALK
          </div>
        </Link>
      </div>
    </div>
  )
}
