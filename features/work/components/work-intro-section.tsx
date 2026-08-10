import { ComponentProps } from "react"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

export function WorkIntroSection({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-screen w-full flex-col items-center justify-center gap-4 text-muted-foreground uppercase",
        className
      )}
      {...props}
    >
      <div
        data-work-intro="first-word"
        className="absolute top-36 text-2xl font-light"
      >
        Highlight
      </div>
      <div className="absolute top-86 lowercase" data-work-intro="second-word">
        of my
      </div>
      <div
        data-work-intro="third-word"
        className="text-9xl font-bold sm:text-[12rem] md:text-[16rem] lg:text-[24rem]"
      >
        Work
      </div>
    </div>
  )
}

export function workIntroAnimation({ trigger }: { trigger: Element | null }) {
  const introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 80%",
      end: "bottom top",
      scrub: true
    }
  })

  introTimeline
    .from(["[data-work-intro=first-word]"], {
      scale: 5,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    })
    .from(
      ["[data-work-intro=second-word]"],
      {
        scale: 5,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      },
      "<0.2"
    )
    .to(["[data-work-intro=first-word]"], {
      opacity: 0,
      duration: 1
    })
    .to(["[data-work-intro=second-word]"], {
      opacity: 0,
      duration: 1
    })

  return introTimeline
}
