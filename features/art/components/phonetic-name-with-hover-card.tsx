"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card"

export function PhoneticNameWithHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={200}
        className="cursor-pointer font-noto-sans text-9xl font-bold"
      >
        <span id="name-phonetic-symbols">kʊəŋ</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <div className="flex flex-col">
          <div>I&apos;m Sokhuong Uon.</div>
          <div>
            You can call me Khuong /
            <span className="font-noto-sans text-lg">kʊəŋ</span>/
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
