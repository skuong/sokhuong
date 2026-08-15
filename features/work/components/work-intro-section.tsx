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
      {/*<div
        data-work-intro="first-word"
        className="absolute top-36 text-2xl font-light"
      >
        Highlight
      </div>
      <div className="absolute top-86 lowercase" data-work-intro="second-word">
        of my
      </div>*/}
      <h2
        data-work-intro="third-word"
        className="text-6xl font-bold text-muted-foreground sm:text-[6rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem]"
      >
        Work
      </h2>
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
