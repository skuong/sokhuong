"use client"

import { PropsWithChildren, useRef } from "react"

import { useGSAP } from "@gsap/react"
import { TransitionRouter } from "next-transition-router"

import { gsap } from "@/lib/gsap"

export function TransitionWrapper({ children }: PropsWithChildren) {
  const transitionOverlayRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!transitionOverlayRef.current) return

      const bars = transitionOverlayRef.current.querySelectorAll(":scope > div")

      gsap.set(bars, {
        yPercent: 100,
        autoAlpha: 1
      })
    },
    {
      scope: transitionOverlayRef
    }
  )

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        if (!transitionOverlayRef.current) return

        const tl = gsap.timeline({ onComplete: next })

        const bars =
          transitionOverlayRef.current.querySelectorAll(":scope > div")

        tl.to(bars, {
          yPercent: 0,
          stagger: 0.02,
          ease: "power2.out"
        })

        return () => tl.kill()
      }}

      enter={(next) => {
        if (!transitionOverlayRef.current) return

        const tl = gsap.timeline({
          onComplete: () => {
            next()

            gsap.set(bars, {
              yPercent: 100
            })
          }
        })

        const bars =
          transitionOverlayRef.current.querySelectorAll(":scope > div")

        tl.to(bars, {
          yPercent: -100,
          stagger: 0.02,
          ease: "power2.out"
        })

        return () => tl.kill()
      }}
    >
      <div
        ref={transitionOverlayRef}
        className="pointer-events-none fixed inset-0 z-50 flex"
      >
        <div className="h-full w-1/5 bg-black opacity-0"></div>
        <div className="h-full w-1/5 bg-black opacity-0"></div>
        <div className="flex h-full w-1/5 items-center justify-center bg-black text-xl opacity-0">
          USK
        </div>
        <div className="h-full w-1/5 bg-black opacity-0"></div>
        <div className="h-full w-1/5 bg-black opacity-0"></div>
      </div>
      {children}
    </TransitionRouter>
  )
}
