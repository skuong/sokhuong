import Link from "next/link"

import { UskSection } from "./usk-section"

export function Footer() {
  return (
    <footer className="flex h-screen max-w-420 flex-col overflow-hidden pt-12 2xl:pl-44">
      <section className="grid grid-cols-3 gap-8 px-4 font-light sm:grid-cols-5 sm:px-6 lg:grid-cols-6 lg:px-0 xl:grid-cols-8">
        <div className="text-muted-foreground">
          <div className="text-end md:text-start">Uon</div>
          <div className="text-end md:text-start">Sokhuong</div>
        </div>

        <div className="row-start-2 text-end md:-col-start-5 md:row-start-1 md:ml-auto">
          Navigation
        </div>
        <ul className="col-span-full col-start-2 row-start-2 flex flex-col gap-1 md:-col-start-4 md:row-start-1">
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

        <div className="row-start-3 text-end md:-col-start-3 md:row-start-1">
          Media
        </div>
        <ul className="col-start-2 row-start-3 flex flex-col gap-1 md:-col-start-2 md:row-start-1">
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

      <section className="flex h-10 items-center lg:h-16">
        <div className="ml-auto font-mono text-muted-foreground lg:text-3xl">
          2026
        </div>
      </section>
    </footer>
  )
}
