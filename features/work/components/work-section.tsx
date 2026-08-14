import { ComponentProps, useRef } from "react"

import { useGSAP } from "@gsap/react"

import {
  figureInAnimation,
  figureOutAnimation
} from "@/features/work/utils/figure-animations"
import {
  titleBackInAnimation,
  titleBackOutAnimation,
  titleInAnimation,
  titleOutAnimation
} from "@/features/work/utils/title-animations"
import { useMediaQuery } from "@/hooks/use-media-query"
import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

import {
  descriptionBackInAnimation,
  descriptionBackOutAnimation,
  descriptionInAnimation,
  descriptionOutAnimation
} from "../utils/description-animations"
import { WorkDetails } from "./work-details"
import { WorkIntroSection, workIntroAnimation } from "./work-intro-section"

gsap.registerPlugin(useGSAP)

export const works = [
  {
    title: "360 virtual tour",
    description:
      "Build 3D/360 virtual tour using Three.js and WebGL. Enable immersive experience of visiting a place virtually.",
    image: "/work-360-tour.png"
  },
  {
    title: "Landing page",
    description:
      "Build performant and accessible landing page that benefitial for User Experience and SEO which enhance business digital presense.",
    image: "/work-rhac.png"
  },
  {
    title: "Admin application",
    description:
      "Build web/desktop application for administrative tasks such as composting blog posts and managing invoices and receipts.",
    image: "/invoice-receipt-app.png"
  }
]

export function WorkSection({ className, ...props }: ComponentProps<"div">) {
  const workSection = useRef<HTMLDivElement | null>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useGSAP(
    () => {
      gsap.set(
        "[data-info=work-container]:not(:first-child) > [data-info=figure]",
        {
          clipPath: "polygon(0% 110%, 100% 100%, 100% 100%, 0% 110%)"
        }
      )

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: workSection.current,
          end: isDesktop ? "+=600%" : "+=200%",
          // markers: true,
          scrub: true,
          pin: true
        }
      })

      mainTimeline.to("[data-work-intro=third-word]", {
        scale: 3,
        duration: 1
      })
      mainTimeline
        .from(
          "[data-info=work-container]:first-child",
          {
            yPercent: 100,
            duration: 1,
            onComplete: () => {
              titleInAnimation(0).play()
              descriptionInAnimation(0).play()
            },
            onReverseComplete: () => {
              titleBackOutAnimation(0).play()

              descriptionBackOutAnimation(0).play()
            }
          },
          "<0.2"
        )
        .to(
          {},
          {
            duration: 2
          }
        )
        .to(
          {},
          {
            duration: 2,
            onStart: () => {
              figureInAnimation(1).play()
              titleOutAnimation(0).play()
              titleInAnimation(1).play()

              descriptionInAnimation(1).play()
              descriptionOutAnimation(0).play()
            },
            onReverseComplete: () => {
              figureOutAnimation(1).play()
              titleBackOutAnimation(1).play()
              titleBackInAnimation(0).play()

              descriptionBackOutAnimation(1).play()
              descriptionBackInAnimation(0).play()
            }
          }
        )
        .to(
          {},
          {
            duration: 2,
            onStart: () => {
              figureInAnimation(2).play()

              titleOutAnimation(1).play()
              titleInAnimation(2).play()

              descriptionInAnimation(2).play()
              descriptionOutAnimation(1).play()
            },
            onReverseComplete: () => {
              figureOutAnimation(2).play()

              titleBackOutAnimation(2).play()
              titleBackInAnimation(1).play()

              descriptionBackOutAnimation(2).play()
              descriptionBackInAnimation(1).play()
            }
          }
        )
        .to(
          {},
          {
            duration: 0.3
          }
        )
    },
    {
      scope: workSection
    }
  )

  return (
    <section
      ref={workSection}
      className={cn("relative text-foreground", className)}
      {...props}
    >
      <WorkIntroSection />

      <div className="absolute inset-0 h-full w-full">
        <div className="relative h-full w-full">
          {works.map((work, index) => (
            <WorkDetails
              key={work.title}
              data-info="work-container"
              data-work-id={`id-${index}`}
              title={work.title}
              description={work.description}
              image={work.image}
              className={index > 0 ? "absolute top-0" : ""}
            />
          ))}
        </div>
      </div>
      <div id="random" className="absolute"></div>
    </section>
  )
}
