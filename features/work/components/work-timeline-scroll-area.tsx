"use client"

import { useEffect, useRef } from "react"

import { useGSAP } from "@gsap/react"
import { Plus, Pointer } from "lucide-react"

import { Cursor } from "@/components/ui/custom-cursor"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  WorkExperience,
  WorkExperienceCard
} from "@/features/work/components/work-experience-card"
import { gsap } from "@/lib/gsap"

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
  const scrollAreaViewportRef = useRef<HTMLDivElement>(null)

  // useGSAP(() => {
  //   if (!scrollAreaViewportRef.current) return

  //   const element = scrollAreaViewportRef.current
  //   element.style.overflowY = "clip"

  //   gsap.to(element, {
  //     scrollTo: { x: element.scrollWidth - element.clientWidth },
  //     duration: 2.5,
  //     delay: 0.8,
  //     ease: "power3.inOut"
  //   })
  // }, [])

  return (
    <ScrollArea className={"mt-32"}>
      <div className="flex w-fit gap-4 px-16 pt-24 pb-36">
        {works.map((work) => (
          <WorkExperienceCard work={work} key={work.id} />
        ))}
      </div>
    </ScrollArea>
  )
}
