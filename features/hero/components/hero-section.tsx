"use client"

import Link from "next/link"
import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(SplitText)

export function HeroSection() {
  const creativeRef = useRef<HTMLDivElement>(null)
  const developerRef = useRef<HTMLDivElement>(null)
  const videoSlotRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    gsap.set([creativeRef.current, developerRef.current], {
      autoAlpha: 1
    })

    const mm = gsap.matchMedia()

    mm.add("(max-width: 767px)", () => {
      const video = videoRef.current
      const videoSlot = videoSlotRef.current

      if (!video || !videoSlot) return

      videoSlot.appendChild(video)

      gsap.set(videoSlot, {
        height: 0,
        marginBlock: 0,
        overflow: "hidden"
      })
      gsap.set(video, {
        position: "relative",
        inset: "auto",
        xPercent: 0,
        yPercent: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        autoAlpha: 0
      })

      const tl = gsap
        .timeline({ delay: 0.5 })
        .to(videoSlot, {
          height: () => Math.min(window.innerWidth * 0.56, 260),
          marginBlock: 8,
          duration: 1,
          ease: "power3.inOut"
        })
        .to(
          video,
          {
            autoAlpha: 1,
            duration: 0.3
          },
          "<0.15"
        )
        .call(() => video.play())

      return () => {
        tl.kill()
        videoSlot.appendChild(video)
        gsap.set(videoSlot, { clearProps: "height,marginBlock,overflow" })
        gsap.set(video, {
          clearProps:
            "position,inset,xPercent,yPercent,width,height,objectFit,autoAlpha"
        })
      }
    })

    mm.add("(min-width: 768px)", () => {
      const softwareTitle = creativeRef.current
      const video = videoRef.current
      const videoSlot = videoSlotRef.current

      if (!softwareTitle || !video) return

      videoSlot?.appendChild(video)

      const split = new SplitText(softwareTitle, { type: "chars" })
      const iChar = split.chars[5]

      if (!iChar) {
        split.revert()
        return
      }

      gsap.set(iChar, {
        position: "relative",
        yPercent: 15,
        display: "inline-block",
        overflow: "hidden"
      })

      iChar.appendChild(video)
      gsap.set(video, {
        position: "absolute",
        top: 0,
        left: "50%",
        xPercent: -49,
        yPercent: 20,
        height: "72%",
        objectFit: "cover",
        autoAlpha: 0
      })

      const tl = gsap
        .timeline()
        .to(iChar, {
          width: () => (window.innerWidth >= 1024 ? 170 : 150),
          duration: 1,
          ease: "power3.inOut",
          delay: 0.5
        })
        .to(
          video,
          {
            autoAlpha: 1,
            width: () => (window.innerWidth >= 1024 ? 160 : 150),
            transformOrigin: "left center",
            duration: 0.3
          },
          "<"
        )
        .call(() => video.play())

      return () => {
        tl.kill()
        videoSlot?.appendChild(video)
        split.revert()
        gsap.set(video, {
          clearProps:
            "position,top,left,xPercent,yPercent,width,height,objectFit,autoAlpha,transformOrigin"
        })
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <div className="mb-24 flex h-[93dvh] flex-col justify-between p-4">
      <div></div>
      <div className="mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-start justify-start text-6xl leading-none font-bold md:w-auto md:max-w-none md:text-9xl lg:text-[9rem]">
        <div ref={creativeRef} className="opacity-0">
          CREATIVE
        </div>
        <div
          ref={videoSlotRef}
          className="h-0 w-full overflow-hidden md:hidden"
        >
          <video
            ref={videoRef}
            src="/videos/work-showcase-for-portfolio.mp4"
            muted
            loop
            playsInline
            className="h-full w-full bg-white object-cover opacity-0"
          />
        </div>
        <div ref={developerRef} className="opacity-0">
          DEVELOPER
        </div>
        <div className="w-full text-end text-sm font-light text-muted-foreground">
          Based in Phnom Penh
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          {/*<div className="relative size-24 bg-muted md:size-32">
            <Image
              src={"/sokhuong-profile-image-600.jpg"}
              alt="Sokhuong's profile image"
              fill
              className="object-cover"
            />
          </div>*/}
        </div>

        <Link
          href={"/book-a-call"}
          data-transition-ignore
          className="text-muted-foreground outline-none focus:ring-2 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
        >
          <div className="bg-foreground p-2 font-mono font-light text-background">
            LET&apos;S TALK
          </div>
        </Link>
      </div>
    </div>
  )
}
