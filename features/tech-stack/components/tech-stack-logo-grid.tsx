import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { GolangLogo } from "./no-color-logo/golang-logo"
import { GsapLogo } from "./no-color-logo/gsap-logo"
import { MotionLogo } from "./no-color-logo/motion-logo"
import { NoColorReactJsLogo } from "./no-color-logo/react-js-logo"
import { RustLogo } from "./no-color-logo/rust-logo"
import { TailwindCssLogo } from "./no-color-logo/tailwindcss-logo"
import { ThreeJsLogo } from "./no-color-logo/three-js-logo"
import { TypeScriptLogo } from "./no-color-logo/type-script-logo"
import { VueJsLogo } from "./no-color-logo/vue-js-logo"

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
        <TailwindCssLogo />
      </div>
      <div className="col-span-1 flex aspect-square items-center justify-center p-4">
        <svg viewBox="0 0 261.76 226.69">
          <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
            <g transform="translate(178.06 235.01)">
              <path
                d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                fill="currentColor"
              />
            </g>
            <g transform="translate(178.06 235.01)">
              <path
                d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                fill="#888"
              />
            </g>
          </g>
        </svg>
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
