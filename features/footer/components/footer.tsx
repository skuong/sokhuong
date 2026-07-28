import Link from "next/link"

import { RelativeTime } from "./relative-time"
import { UskSection } from "./usk-section"

export function Footer() {
  return (
    <footer className="flex h-screen flex-col overflow-hidden p-4 lg:p-6">
      <section className="grid grid-cols-3 gap-8 font-light sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-12">
        <div className="text-muted-foreground">
          <div className="text-end md:text-start">UON</div>
          <div className="text-end md:text-start">SOKHUONG</div>
        </div>

        <div className="row-start-2 text-end text-muted-foreground md:-col-start-5 md:row-start-1 md:ml-auto">
          Navigation
        </div>
        <ul className="col-span-full col-start-2 row-start-2 flex flex-col gap-1 font-mono uppercase md:-col-start-4 md:row-start-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/work"}>Work</Link>
          </li>
          <li>
            <Link href={"/sketches"}>Sketches</Link>
          </li>
          <li>
            <Link href={"/case-studies"}>Case studies</Link>
          </li>
          <li>
            <Link href={"/open-source"}>Open source</Link>
          </li>
        </ul>

        <div className="row-start-3 text-end text-muted-foreground md:-col-start-3 md:row-start-1">
          Media
        </div>
        <ul className="col-start-2 row-start-3 flex flex-col gap-1 font-mono uppercase md:-col-start-2 md:row-start-1">
          <li>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/sokhuong-uon/"}
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://github.com/skuong"}>
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://www.boot.dev/u/skuong"}>
              Boot.dev
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://tryhackme.com/p/sokhuong"}>
              Tryhackme
            </Link>
          </li>
        </ul>
      </section>

      <UskSection />

      <section className="flex flex-col items-center gap-8 py-4 font-mono text-muted-foreground sm:flex-row">
        <div className="w-full text-start sm:w-fit">
          <RelativeTime />
        </div>

        <div className="ml-auto flex gap-4">
          <div>BUILT WITH ♡</div>
          <div className="font-mono text-muted-foreground">&copy;2026</div>
        </div>
      </section>
    </footer>
  )
}
