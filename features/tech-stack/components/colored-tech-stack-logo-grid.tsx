import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { BlenderLogo } from "./colored-logo/blender-logo"
import { FigmaLogo } from "./colored-logo/figma-logo"
import { GolangLogo } from "./colored-logo/golang-logo"
import { GsapLogo } from "./colored-logo/gsap-logo"
import { MotionLogo } from "./colored-logo/motion-logo"
import { ReactJsLogo } from "./colored-logo/react-js-logo"
import { RustLogo } from "./colored-logo/rust-logo"
import { TailwindCssLogo } from "./colored-logo/tailwindcss-logo"
import { ThreeJsLogo } from "./colored-logo/three-js-logo"
import { TypeScriptLogo } from "./colored-logo/type-script-logo"
import { VueJsLogo } from "./colored-logo/vue-js-logo"

export function ColoredTechStackLogoGrid({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("grid grid-cols-6", className)} {...props}>
      <div className="col-span-2 flex aspect-square items-center justify-center p-8">
        <ReactJsLogo />
      </div>
      <div className="col-span-2 aspect-square text-black/30">
        <TypeScriptLogo />
      </div>
      <div className="col-span-2 aspect-square">
        <ThreeJsLogo />
      </div>

      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <TailwindCssLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <VueJsLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <RustLogo />
      </div>

      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <GolangLogo />
      </div>

      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <GsapLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <MotionLogo />
      </div>

      <div className="col-span-1 aspect-square border bg-muted">A</div>
      <div className="col-span-1 aspect-square border bg-muted">A</div>
      <div className="col-span-1 aspect-square border bg-muted">A</div>
      <div className="col-span-1 aspect-square border bg-muted">A</div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <BlenderLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <FigmaLogo />
      </div>
    </div>
  )
}
