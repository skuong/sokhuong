import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { View } from "@react-three/drei"
import { useTheme } from "@teispace/next-themes"

import { TabletScene } from "@/features/interactive-application/components/tablet-scene"
import { gsap } from "@/lib/gsap"

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
        <div className="col-span-2 aspect-square border bg-muted">A</div>
        <div className="col-span-2 aspect-square border bg-muted">A</div>
        <div className="col-span-2 aspect-square border bg-muted">A</div>

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
