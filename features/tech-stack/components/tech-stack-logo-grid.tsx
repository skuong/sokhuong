import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { NoColorBlenderLogo } from "./no-color-logo/blender-logo"
import { NoColorFigmaLogo } from "./no-color-logo/figma-logo"
import { GolangLogo } from "./no-color-logo/golang-logo"
import { GsapLogo } from "./no-color-logo/gsap-logo"
import { MotionLogo } from "./no-color-logo/motion-logo"
import { NoColorPythonLogo } from "./no-color-logo/python-logo"
import { NoColorReactJsLogo } from "./no-color-logo/react-js-logo"
import { RustLogo } from "./no-color-logo/rust-logo"
import { NoColorTailwindCssLogo } from "./no-color-logo/tailwindcss-logo"
import { NoColorTanstackLogo } from "./no-color-logo/tanstack-logo"
import { NoColorTauriLogo } from "./no-color-logo/tauri-logo"
import { ThreeJsLogo } from "./no-color-logo/three-js-logo"
import { TypeScriptLogo } from "./no-color-logo/type-script-logo"
import { NoColorVueJsLogo, VueJsLogo } from "./no-color-logo/vue-js-logo"
import { NoColorZodLogo } from "./no-color-logo/zod-logo"

export function TechStackLogoGrid({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("grid grid-cols-6", className)} {...props}>
      <div className="col-span-2 flex aspect-square items-center justify-center p-8">
        <NoColorReactJsLogo />
      </div>
      <div className="col-span-2 aspect-square">
        <TypeScriptLogo />
      </div>
      <div className="col-span-2 aspect-square">
        <ThreeJsLogo />
      </div>

      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorTailwindCssLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorVueJsLogo />
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

      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorTanstackLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorZodLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorPythonLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorTauriLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorBlenderLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <NoColorFigmaLogo />
      </div>
    </div>
  )
}
