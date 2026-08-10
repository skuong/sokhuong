import { useRef } from "react"

import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"

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
          end: "+=600%",
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
            duration: 1
          },
          "<0.3"
        )
        .to(
          {},
          {
            duration: 4
          }
        )
        .to(
          {},
          {
            duration: 4,
            onStart: () => {
              gsap.to("[data-work-id=id-1] > [data-info=figure]", {
                clipPath: "polygon(0% 0%, 100% -10%, 100% 100%, 0% 100%)"
              })
            },
            onReverseComplete: () => {
              gsap.to("[data-work-id=id-1] > [data-info=figure]", {
                clipPath: "polygon(0% 110%, 100% 100%, 100% 100%, 0% 110%)"
              })
            }
          }
        )
        .to(
          {},
          {
            duration: 4,
            onStart: () => {
              gsap.to("[data-work-id=id-2] > [data-info=figure]", {
                clipPath: "polygon(0% 0%, 100% -10%, 100% 100%, 0% 100%)"
              })
            },
            onReverseComplete: () => {
              gsap.to("[data-work-id=id-2] > [data-info=figure]", {
                clipPath: "polygon(0% 110%, 100% 100%, 100% 100%, 0% 110%)"
              })
            }
          }
        )
        .to(
          {},
          {
            duration: 1
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
