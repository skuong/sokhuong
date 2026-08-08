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
      gsap.set("#work-lighlight-figure-2", {
        clipPath: "polygon(0% 110%, 100% 100%, 100% 100%, 0% 110%)"
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

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: workSection.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          markers: true
        }
      })

      introTl
        .from(["#work-intro-section-title"], {
          scale: 5,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out"
        })
        .from(
          ["#work-intro-section-of-my"],
          {
            scale: 5,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out"
          },
          "<0.2"
        )
        .to(["#work-intro-section-title"], {
          opacity: 0,
          duration: 1
        })
        .to(["#work-intro-section-of-my"], {
          opacity: 0,
          duration: 1
        })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workSection.current,
          // markers: true,
          scrub: true,
          pin: true
        }
      })

      tl.from("#work-intro-section-work-word", {
        yPercent: 50
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
      tl.to("#work-lighlight-figure-2", {
        clipPath: "polygon(0% 0%, 100% -10%, 100% 100%, 0% 100%)"
      })
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
        <div
          id="work-intro-section-title"
          className="absolute top-36 text-2xl font-light"
        >
          Highlight
        </div>
        <div
          id="work-intro-section-of-my"
          className="absolute top-86 lowercase"
        >
          of my
        </div>
        <div
          id="work-intro-section-work-word"
          className="text-9xl font-bold sm:text-[12rem] md:text-[16rem] lg:text-[24rem]"
        >
          Work
        </div>
      </div>

      <div className="absolute inset-0 h-full w-full">
        <div className="relative h-full w-full">
          <div
            id="work-lighlight-container"
            className="flex h-full w-full flex-col items-center justify-center gap-4"
          >
            <div
              id="project-counting-info"
              className="flex w-5/6 uppercase md:w-4/6"
            >
              <div className="text-2xl font-extralight text-muted-foreground">
                1
              </div>
              <div className="ml-auto text-sm text-muted-foreground">/3</div>
            </div>
            <div className="relative aspect-video w-5/6 md:w-4/6">
              <Image
                src={
                  "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="haha"
                fill
                className="overflow-clip rounded-lg"
              />
            </div>

            <div
              id="project-description"
              className="flex w-5/6 flex-col uppercase md:w-4/6 md:flex-row"
            >
              <h3
                id="project-description-title"
                className="h-fit text-3xl font-light"
              >
                <span className="inline-block">360 virtual tour</span>
              </h3>
              <p
                id="project-description-paragraph"
                className="max-w-xs text-sm normal-case md:ml-auto"
              >
                Enabling visiting future home online with 360 degree technology
                right at the comfort of your web browser
              </p>
            </div>
          </div>

          <div
            id="work-lighlight-container-2"
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4"
          >
            <div
              id="project-counting-info-2"
              className="flex w-5/6 uppercase opacity-0 md:w-4/6"
            >
              <div className="text-2xl font-extralight text-muted-foreground">
                1
              </div>
              <div className="ml-auto text-sm text-muted-foreground">/3</div>
            </div>
            <div
              id="work-lighlight-figure-2"
              className="relative aspect-video w-5/6 md:w-4/6"
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="haha"
                fill
                className="overflow-clip rounded-lg"
              />
            </div>

            <div
              id="project-description-2"
              className="flex w-5/6 flex-col uppercase opacity-0 md:w-4/6 md:flex-row"
            >
              <h3
                id="project-description-title-2"
                className="h-fit text-3xl font-light"
              >
                <span className="inline-block">360 virtual tour</span>
              </h3>
              <p
                id="project-description-paragraph-2"
                className="max-w-xs text-sm normal-case md:ml-auto"
              >
                Enabling visiting future home online with 360 degree technology
                right at the comfort of your web browser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
