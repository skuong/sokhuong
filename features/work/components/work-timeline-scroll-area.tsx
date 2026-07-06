"use client"

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  WorkExperience,
  WorkExperienceCard
} from "@/features/work/components/work-experience-card"
import { gsap } from "@/lib/gsap"
import { horizontalLoop } from "@/lib/horizontal-loop"

const works: WorkExperience[] = [
  {
    id: 1,
    slug: "zeal",
    company: "Zeal",
    role: "Research Intern",
    startDate: "2019-06-01",
    endDate: "2020-03-30",
    previewWorkEndDate: "2019-06-01"
  },
  {
    id: 2,
    slug: "quadusk",
    company: "Quadusk",
    role: "Co-founder, Developer Lead",
    startDate: "2020-05-01",
    endDate: "2022-09-30",
    previewWorkEndDate: "2020-03-30"
  },
  {
    id: 3,
    slug: "kirirom-digital-cambodia",
    company: "Kirirom Digital Cambodia",
    role: "Web Developer",
    startDate: "2023-02-01",
    endDate: "2024-01-31",
    previewWorkEndDate: "2022-09-30"
  },
  {
    id: 4,
    slug: "stringboard4education",
    company: "StringBoard4Education",
    role: "Web & System Developer",
    startDate: "2024-02-15",
    endDate: "2025-03-31",
    previewWorkEndDate: "2024-01-31"
  },
  {
    id: 5,
    slug: "tux-global-institute",
    company: "TUX Global Institute",
    role: "Web Developer",
    startDate: "2025-01-04",
    endDate: "2026-05-29",
    previewWorkEndDate: "2025-01-01"
  }
]

export function WorkTimelineScrollArea() {
  const railTrackRef = useRef<HTMLDivElement>(null)
  const railwayRef = useRef<HTMLDivElement>(null)
  const marqueeStartProgress = useRef(0)
  const ready = useRef(false)

  useGSAP(() => {
    const trains = gsap.utils.toArray(
      railTrackRef.current?.children ?? null
    ) as Element[]

    const tl = horizontalLoop(trains, {
      repeat: -1
    })
    const cycleDistance = tl.totalWidth
    let speedTween: GSAPTimeline

    ScrollTrigger.create({
      trigger: railwayRef.current,
      start: "center center",
      end: `+=${cycleDistance}`,
      pin: true,
      pinSpacing: true,
      onToggle: (self) => {
        if (self.isActive) {
          marqueeStartProgress.current = tl.progress()
          ready.current = true
          tl.pause()
        } else {
          tl.resume()
        }
      },
      onUpdate: (self) => {
        if (!ready.current) return
        const progress = self.progress

        tl.progress((progress + marqueeStartProgress.current) % 1)

        if (tl.isActive()) {
          speedTween && speedTween.kill()
          speedTween = gsap
            .timeline()
            .to(tl, {
              timeScale: self.direction,
              duration: 0.25
            })
            .to(
              tl,
              {
                timeScale: 1 * self.direction,
                duration: 1.5
              },
              "+=0.5"
            )
        }
      }
    })
  }, [])

  return (
    <div ref={railwayRef} className={"mt-32"}>
      <div ref={railTrackRef} className="flex w-fit gap-4 px-16 pt-24 pb-36">
        {works.map((work) => (
          <WorkExperienceCard work={work} key={work.id} />
        ))}
      </div>
    </div>
  )
}
