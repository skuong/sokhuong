import Link from "next/link"
import { PropsWithChildren } from "react"

import { AlternateItemExpansionCarouselIcon } from "@/features/sketches/components/alternate-item-expansion-carousel-icon"
import { HorizontalCarouselIcon } from "@/features/sketches/components/horizontal-carousel-icon"

export default function SketchesLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex h-dvh w-dvw items-center">
      <div className="h-full w-14 shrink-0 bg-foreground text-background">
        <div className="aspect-square">
          <Link
            href={
              "/sketches/carousel-with-secondary-animation-for-centered-smaller-image"
            }
            className="flex h-full w-full items-center justify-center"
          >
            <HorizontalCarouselIcon />
          </Link>
        </div>
        <div className="flex aspect-square items-center justify-center">
          <Link
            href={"/sketches/alternate-item-expansion-carousel"}
            className="flex h-full w-full items-center justify-center"
          >
            <AlternateItemExpansionCarouselIcon />
          </Link>
        </div>
      </div>
      <div className="relative h-full flex-1">{children}</div>
    </div>
  )
}
