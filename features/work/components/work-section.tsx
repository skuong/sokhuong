import { useRef } from "react"

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

import {
  descriptionBackInAnimation,
  descriptionBackOutAnimation,
  descriptionInAnimation,
  descriptionOutAnimation
} from "../utils/description-animations"
import { WorkDetails } from "./work-details"
import { WorkIntroSection, workIntroAnimation } from "./work-intro-section"

gsap.registerPlugin(useGSAP)

const works = [
  {
    title: "360 virtual tour",
    description:
      "Enabling visiting future home online with 360 degree technology right at the comfort of your web browser",
    image:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Landing page",
    description:
      "Enabling visiting future home online with 360 degree technology right at the comfort of your web browser",
    image:
      "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Admin dashboard",
    description:
      "Enabling visiting future home online with 360 degree technology right at the comfort of your web browser",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

export function WorkSection() {
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
          end: isDesktop ? "+=500%" : "+=200%",
          // markers: true,
          scrub: true,
          pin: true
        }
      })

      const introTimeline = workIntroAnimation({ trigger: workSection.current })
      mainTimeline.add(introTimeline)

      mainTimeline.from("[data-work-intro=third-word]", {
        yPercent: 50
      })
      mainTimeline.to("[data-work-intro=third-word]", {
        scale: 1.25,
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
          "<0.3"
        )
        .to(
          {},
          {
            duration: 1
          }
        )
        .to(
          {},
          {
            duration: 1,
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
            duration: 1,
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
            duration: 0.2
          }
        )
    },
    {
      scope: workSection
    }
  )

  return (
    <section ref={workSection} className="relative text-foreground">
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
