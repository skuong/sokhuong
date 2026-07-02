import { useRef } from "react"

import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"

import { GolangLogo } from "./golang-logo"
import { GsapLogo } from "./gsap-logo"
import { MotionLogo } from "./motion-logo"
import { ReactJsLogo } from "./react-js-logo"
import { RustLogo } from "./rust-logo"
import { TailwindCssLogo } from "./tailwindcss-logo"
import { ThreeJsLogo } from "./three-js-logo"
import { TypeScriptLogo } from "./type-script-logo"
import { VueJsLogo } from "./vue-js-logo"

export function TechStackSection() {
  const header1 = useRef(null)
  const header2 = useRef(null)

  useGSAP(() => {
    gsap.from(header1.current, {
      scrollTrigger: {
        trigger: header1.current,
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: 300
    })

    gsap.from(header2.current, {
      scrollTrigger: {
        trigger: header2.current,
        start: "top bottom",
        end: "bottom 40%",
        scrub: true
      },
      x: -300
    })
  }, [])

  return (
    <section>
      <h2 className="flex flex-col">
        <span
          ref={header1}
          className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        >
          Modern
        </span>
        <span
          ref={header2}
          className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[9rem] xl:text-[10rem]"
        >
          Stacks
        </span>
      </h2>

      <div className="mt-36 grid grid-cols-6 px-24">
        <div className="col-span-2 flex aspect-square items-center justify-center p-8">
          <ReactJsLogo />
        </div>
        <div className="col-span-2 aspect-square border text-black/30">
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
    </section>
  )
}
