import { MoveRight } from "lucide-react"

export function MenuSection() {
  return (
    <section className="py-32">
      <ul className="space-y-px font-extralight *:px-4 *:py-8 *:uppercase *:lg:px-8 *:lg:py-8 *:xl:text-[11rem]">
        <li className="group m:text-8xl flex w-full items-center justify-between text-5xl sm:text-7xl md:text-9xl dark:bg-white dark:text-black">
          <div>Work</div>
          <MoveRight className="hidden scale-200 group-hover:block" />
        </li>
        <li className="flex items-center text-5xl sm:text-7xl md:text-9xl dark:bg-white dark:text-black">
          Sketches
        </li>
        <li className="flex items-center text-5xl sm:text-7xl md:text-9xl dark:bg-white dark:text-black">
          Case studies
        </li>
        <li className="flex items-center text-5xl sm:text-7xl md:text-9xl dark:bg-white dark:text-black">
          Phylosophy
        </li>
        <li className="flex items-center text-5xl sm:text-7xl md:text-9xl dark:bg-white dark:text-black">
          Open source
        </li>
      </ul>
    </section>
  )
}
