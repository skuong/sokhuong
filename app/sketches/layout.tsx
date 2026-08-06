import Link from "next/link"
import { PropsWithChildren } from "react"

import { AlternateItemExpansionCarouselIcon } from "@/features/sketches/components/alternate-item-expansion-carousel-icon"
import { HorizontalCarouselIcon } from "@/features/sketches/components/horizontal-carousel-icon"

export default function SketchesLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex h-dvh w-dvw items-center">
      <div className="flex h-full w-14 shrink-0 flex-col items-center justify-start gap-2 bg-foreground text-background">
        <div className="mt-2 text-sm font-light uppercase">
          <Link href={"/"}>Home</Link>
        </div>

        <div className="mb-2 h-px w-1/2 bg-black"></div>

        <div className="aspect-square">
          <Link
            href={
              "/sketches/carousel-with-secondary-animation-for-centered-smaller-image"
            }
            className="flex h-full w-full items-center justify-center p-1"
          >
            <HorizontalCarouselIcon />
          </Link>
        </div>
        <div className="flex aspect-square items-center justify-center">
          <Link
            href={"/sketches/alternate-item-expansion-carousel"}
            className="flex h-full w-full items-center justify-center p-1"
          >
            <AlternateItemExpansionCarouselIcon />
          </Link>
        </div>
      </div>
      <div className="relative h-full flex-1">{children}</div>
    </div>
  )
}
