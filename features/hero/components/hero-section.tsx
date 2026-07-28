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

  useGSAP(() => {
    gsap.set([softwareTitleRef.current, engineerTitleRef.current], {
      autoAlpha: 1
    })

    gsap.to(softwareTitleRef.current, {
      duration: 1,
      scrambleText: {
        text: "CREATIVE",
        chars: "C%#/$",
        revealDelay: 0.5,
        speed: 0.5
      }
    })
    gsap.to(engineerTitleRef.current, {
      duration: 1,
      scrambleText: {
        text: "DEVELOPER",
        chars: "/@#!*",
        revealDelay: 0.5,
        speed: 0.3,
        newClass: "myClass"
      }
    })
  }, [])

  return (
    <div className="flex h-screen flex-col justify-between border p-4">
      <div className="flex justify-between">
        <div className="font-mono font-light text-muted-foreground">KHUONG</div>
        <div className="font-mono font-light text-muted-foreground">MENU</div>
      </div>
      <div className="flex flex-col items-center text-6xl font-bold md:text-9xl">
        <div ref={softwareTitleRef} className="opacity-0">
          CREATIVE
        </div>
        <div ref={engineerTitleRef} className="opacity-0">
          DEVELOPER
        </div>
      </div>
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
