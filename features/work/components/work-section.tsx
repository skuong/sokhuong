import Image from "next/image"
import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

gsap.registerPlugin(useGSAP)

export function WorkSection() {
  const workSection = useRef<HTMLDivElement | null>(null)
  const workIntroSectionRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      gsap.set("#project-description h3", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      })

      const projectDescriptionParagraphOuterSplit = new SplitText(
        "#project-description-paragraph",
        { type: "lines" }
      )

      gsap.set(projectDescriptionParagraphOuterSplit.lines, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      })
      const projectDescriptionParagraphInnerSplit = new SplitText(
        projectDescriptionParagraphOuterSplit.lines,
        { type: "lines" }
      )

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workSection.current,
          markers: true,
          scrub: true,
          pin: true
        }
      })

      tl.from("#work-intro-section-work-word", {
        yPercent: 100
      })
      tl.to("#work-intro-section-work-word", {
        scale: 1.25,
        duration: 1
      })
      tl.from(
        "#work-lighlight-container",
        {
          yPercent: 100,
          duration: 1
        },
        "<0.3"
      )
      tl.to(
        "#project-description h3",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        "<0.8"
      )
      tl.from(
        "#project-description h3 span",
        {
          yPercent: 100
        },
        "<"
      )
      tl.from(
        projectDescriptionParagraphInnerSplit.lines,
        {
          yPercent: 100
        },
        "<"
      )
      tl.to(
        projectDescriptionParagraphOuterSplit.lines,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        "<"
      )
    },
    {
      scope: workSection
    }
  )

  return (
    <section ref={workSection} className="relative text-foreground">
      <div
        ref={workIntroSectionRef}
        className="flex h-screen w-full flex-col items-center justify-center gap-4 text-muted-foreground uppercase"
      >
        {/*<div className="text-2xl font-light">Highlight</div>
        <div className="lowercase">of my</div>*/}
        <div
          id="work-intro-section-work-word"
          className="text-[24rem] font-bold"
        >
          Work
        </div>
      </div>

      <div className="absolute inset-0 h-full w-full">
        <div
          id="work-lighlight-container"
          className="flex h-full w-full flex-col items-center justify-center gap-4"
        >
          <div id="project-counting-info" className="flex w-4/6 uppercase">
            <div className="text-2xl font-extralight text-muted-foreground">
              1
            </div>
            <div className="ml-auto text-sm text-muted-foreground">/3</div>
          </div>
          <div className="relative aspect-video w-4/6">
            <Image
              src={
                "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="haha"
              fill
              className="overflow-clip rounded-lg"
            />
          </div>

          <div id="project-description" className="flex w-4/6 uppercase">
            <h3
              id="project-description-title"
              className="h-fit text-3xl font-light"
            >
              <span className="inline-block">360 virtual tour</span>
            </h3>
            <p
              id="project-description-paragraph"
              className="ml-auto max-w-xs text-sm normal-case"
            >
              Enabling visiting future home online with 360 degree technology
              right at the comfort of your web browser
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
