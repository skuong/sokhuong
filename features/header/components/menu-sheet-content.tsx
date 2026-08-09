import Link from "next/link"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"

import { gsap } from "@/lib/gsap"

export function MenuSheetContent() {
  useGSAP(() => {
    const links = gsap.utils.toArray<HTMLElement>(".nav-link")
    const tl = gsap.timeline()
    links.forEach((link) => {
      gsap.set(link, {
        autoAlpha: 1
      })
      const split = SplitText.create(link, {
        type: "chars",
        mask: "chars"
      })

      tl.from(
        split.chars,
        {
          y: 100,
          x: 10,
          stagger: 0.05,
          duration: 0.2,
          delay: 0.25
        },
        0
      )
    })
  }, [])

  return (
    <div className="flex h-full flex-col justify-between uppercase">
      <div>
        <div className="text-muted-foreground">khuong</div>
      </div>
      <div className="flex flex-1 items-center">
        <nav className="grid grid-cols-12 gap-8 text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl lg:text-8xl">
          <Link className="nav-link col-start-2 flex opacity-0" href={"/"}>
            Home
          </Link>
          <Link
            className="nav-link col-start-2 row-start-2 flex opacity-0"
            href={"/sketches"}
          >
            Sketches
          </Link>
          {/*<Link className="nav-link col-start-6 flex" href={"/about"}>
            About
          </Link>
          <Link
            className="nav-link col-start-6 row-start-2 flex"
            href={"/contact"}
          >
            Contact
          </Link>*/}
          {/*<Link
            className="nav-link col-start-2 row-start-3 inline whitespace-nowrap"
            href={"/case-studies"}
          >
            Case studies
          </Link>
          <Link
            className="nav-link col-start-2 row-start-4 inline whitespace-nowrap"
            href={"/open-source"}
          >
            Open source
          </Link>
          <Link
            className="nav-link col-start-2 row-start-5 flex"
            href={"/philosophy"}
          >
            Philosophy
          </Link>*/}
        </nav>
      </div>
      <div className="grid grid-cols-3 gap-8 font-mono text-muted-foreground md:grid-cols-12">
        <div className="">sokhuong.usk@gmail.com</div>
        <div className="col-span-2 -col-start-1 whitespace-nowrap md:col-start-6">
          +855 61 812 917
        </div>
        {/*<div className="-col-start-1 hidden md:flex">Lets talk</div>*/}
      </div>
    </div>
  )
}
