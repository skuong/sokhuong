import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { GolangLogo } from "./golang-logo"
import { GsapLogo } from "./gsap-logo"
import { MotionLogo } from "./motion-logo"
import { ReactJsLogo } from "./react-js-logo"
import { RustLogo } from "./rust-logo"
import { TailwindCssLogo } from "./tailwindcss-logo"
import { ThreeJsLogo } from "./three-js-logo"
import { TypeScriptLogo } from "./type-script-logo"
import { VueJsLogo } from "./vue-js-logo"

export function ColoredTechStackLogoGrid({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("grid grid-cols-6", className)} {...props}>
      <div className="col-span-2 flex aspect-square items-center justify-center p-8 text-blue-800">
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
      <div className="col-span-1 aspect-square border bg-muted">A</div>
      <div className="col-span-1 aspect-square border bg-muted">A</div>
    </div>
  )
}
