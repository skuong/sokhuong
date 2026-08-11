import Image from "next/image"
import { ComponentProps, useRef } from "react"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, SplitText)

export function WorkDetails({
  title,
  description,
  image,
  className,
  ...props
}: ComponentProps<"div"> & {
  title: string
  description: string
  image: string
}) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!container.current) return

      gsap.set("[data-info=project-title]", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      })
      gsap.set("[data-info=project-title] > span", {
        yPercent: 100
      })

      const projectDescriptionSplitOuter = new SplitText(
        "[data-info=project-description]",
        {
          type: "lines",
          linesClass: "line-wrapper"
        }
      )

      const projectDescriptionSplitInner = new SplitText(
        projectDescriptionSplitOuter.lines,
        {
          type: "lines",
          linesClass: "line"
        }
      )

      gsap.set(projectDescriptionSplitOuter.lines, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      })
      gsap.set(projectDescriptionSplitInner.lines, {
        yPercent: 100
      })
    },
    {
      scope: container
    }
  )

  return (
    <div
      ref={container}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-4",
        className
      )}
      {...props}
    >
      <div
        data-info="project-counting"
        className="flex w-5/6 uppercase md:w-4/6"
      >
        <div className="text-2xl font-extralight text-muted-foreground opacity-0">
          1
        </div>
        <div className="ml-auto text-sm text-muted-foreground opacity-0">
          /3
        </div>
      </div>

      <div data-info="figure" className="relative aspect-video w-5/6 md:w-4/6">
        <Image
          src={image}
          alt="haha"
          fill
          className="overflow-clip rounded-lg object-cover"
        />
      </div>

      <div
        data-info="project-description-section"
        className="flex w-5/6 flex-col gap-2 uppercase md:w-4/6 md:flex-row"
      >
        <h3 data-info="project-title" className="h-fit text-3xl font-light">
          <span className="inline-block">{title}</span>
        </h3>
        <p
          data-info="project-description"
          className="max-w-xs text-sm normal-case md:ml-auto"
        >
          {description}
        </p>
      </div>
    </div>
  )
}
