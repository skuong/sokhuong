import Image from "next/image"
import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { works } from "./work-section"

export function MobileWorkSection({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <section className={cn("relative text-foreground", className)} {...props}>
      <h2 className="mb-20 text-center text-4xl font-bold text-muted-foreground uppercase">
        Work
      </h2>

      <ul className="space-y-10">
        {works.map((work) => (
          <li key={work.title} className="space-y-2">
            <div className="relative aspect-video w-full">
              <Image
                loading="lazy"
                src={work.image}
                fill
                className="h-full w-full overflow-clip rounded-md object-cover"
                alt="empty for now"
              />
            </div>
            <h3 className="text-3xl font-light">{work.title}</h3>
            <p className="text-muted-foreground">{work.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
