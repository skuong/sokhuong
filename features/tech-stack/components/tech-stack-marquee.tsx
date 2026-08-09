import { ComponentProps } from "react"

import { BetterAuth } from "@/features/tech-stack/components/logos/better-auth"
import { DrizzleOrm } from "@/features/tech-stack/components/logos/drizzle-orm"
import { Figma } from "@/features/tech-stack/components/logos/figma"
import { cn } from "@/lib/utils"

import { Blender } from "./logos/blender"
import { Cloudflare } from "./logos/cloudflare"
import { Dokploy } from "./logos/dokploy"
import { Github } from "./logos/github"
import { Gsap } from "./logos/gsap"
import { Hono } from "./logos/hono"
import { PayloadCms } from "./logos/payload-cms"
import { Resend } from "./logos/resend"
import { ShadcnUI } from "./logos/shadcn-ui"
import { Tauri } from "./logos/tauri"
import { Vercel } from "./logos/vercel"
import { Vue } from "./logos/vue"

export function TechStackMarquee({
  className,
  ...props
}: ComponentProps<"div">) {
  const logos = [
    {
      logo: <Figma />,
      title: "figma"
    },
    {
      logo: <BetterAuth />,
      title: "better-auth"
    },
    {
      logo: <DrizzleOrm />,
      title: "drizzle-orm"
    },
    {
      logo: <ShadcnUI />,
      title: "shadcn-ui"
    },
    {
      logo: <Tauri />,
      title: "tauri"
    },
    {
      logo: <Vercel />,
      title: "vercel"
    },
    {
      logo: <Hono />,
      title: "hono"
    },
    {
      logo: <PayloadCms />,
      title: "payload-cms"
    },
    {
      logo: <Gsap />,
      title: "gsap"
    },
    {
      logo: <Dokploy />,
      title: "dokploy"
    },
    {
      logo: <Blender />,
      title: "blender"
    },
    {
      logo: <Github />,
      title: "github"
    },
    {
      logo: <Vue />,
      title: "vue"
    },
    {
      logo: <Resend />,
      title: "resend"
    },
    {
      logo: <Cloudflare className="w-24" />,
      title: "cloudflare"
    }
  ]
  return (
    <div
      className={cn(
        "flex h-32 items-center bg-neutral-900 opacity-0",
        className
      )}
      {...props}
    >
      <ul className="relative flex h-1/2 items-center justify-start gap-8">
        {logos.map((logo) => (
          <li
            key={logo.title}
            className="flex aspect-square h-full items-center justify-center"
          >
            {logo.logo}
          </li>
        ))}
      </ul>
    </div>
  )
}
