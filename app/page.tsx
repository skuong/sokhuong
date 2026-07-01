import { InteractiveApplicationsSection } from "@/features/interactive-application/components/interactive-applications-section"
import { WorkTimelineScrollArea } from "@/features/work/components/work-timeline-scroll-area"

export default function HomePage() {
  return (
    <main>
      <WorkTimelineScrollArea />

      <div className="space-y-8 py-56 md:space-y-16">
        <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-9xl">
          Enhance
        </div>

        <div className="text-center text-6xl font-bold uppercase md:text-8xl lg:text-[10rem]">
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

      <InteractiveApplicationsSection />
    </main>
  )
}
