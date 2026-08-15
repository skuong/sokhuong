import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export const services = [
  {
    title: "Web development",
    description:
      "Build performant and accessible web applications that enhance business digital presence."
  },
  {
    title: "Accessibility",
    description:
      "Identify and fix accessibility issues to ensure your website is accessible for humans and AI."
  },
  {
    title: "Desktop app development",
    description: "Build desktop app that helps with administrative tasks."
  },
  {
    title: "GSAP animation",
    description:
      "Guide users through GSAP animation to enhance user experience and visual appeal."
  },
  {
    title: "Performance optimization",
    description:
      "Improve your website's loading speed for a better user experience."
  }
]

export function MobileServicesSection({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <section className={cn("relative text-foreground", className)} {...props}>
      <h2 className="mb-20 text-center text-4xl font-bold text-muted-foreground uppercase">
        Services
      </h2>

      <ul className="space-y-10">
        {services.map((work) => (
          <li key={work.title} className="space-y-2">
            <h3 className="text-3xl font-light">{work.title}</h3>
            <p className="text-muted-foreground">{work.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
