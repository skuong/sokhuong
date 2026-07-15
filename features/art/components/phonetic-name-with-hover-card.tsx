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
        className="cursor-pointer font-noto-sans text-8xl font-bold"
      >
        <span
          id="name-phonetic-symbols"
          className="bg-[repeating-linear-gradient(-45deg,var(--color-neutral-200)_0,var(--color-neutral-200)_1px,transparent_1px,transparent_10px)] text-transparent subpixel-antialiased [-webkit-text-stroke:1px_black] dark:bg-[repeating-linear-gradient(-45deg,var(--color-neutral-800)_0,var(--color-neutral-800)_1px,transparent_1px,transparent_10px)] dark:[-webkit-text-stroke:1px_white]"
        >
          kʊəŋ
        </span>
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
