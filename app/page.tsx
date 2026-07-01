import { Draw } from "@/features/drawing/components/draw"
import { WorkTimelineScrollArea } from "@/features/work/components/work-timeline-scroll-area"

export default function HomePage() {
  return (
    <main>
      <WorkTimelineScrollArea />

      <div className="space-y-8 py-56 md:space-y-16">
        <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-9xl">
          Enhance
        </div>

        <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[10rem] xl:text-[12rem]">
          Easthetics
        </div>

        <div className="py-24">
          <div className="grid grid-cols-8 gap-8">
            <div className="col-span-5 h-210 rounded-md bg-muted/50"></div>
            <div className="col-span-3 h-210 rounded-md bg-muted/50"></div>
            <div className="col-span-8 h-screen rounded-md bg-muted/50"></div>
          </div>
        </div>
      </div>

      <div className="space-y-8 md:space-y-16">
        <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-9xl">
          Interactive
        </div>

        <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[10rem] xl:text-[12rem]">
          Applications
        </div>

        <div className="py-24">
          <div className="mx-auto aspect-video h-[calc(100dvh-10rem)]">
            <Draw />
          </div>
        </div>
      </div>
    </main>
  )
}
