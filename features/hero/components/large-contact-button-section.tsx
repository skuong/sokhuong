import { Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Cursor } from "@/components/ui/custom-cursor"
import { cn } from "@/lib/utils"

export function LargeContactButtonSection() {
  function onClick() {
    toast("Contact form not implemented!", {
      action: {
        label: "Ok",
        onClick: () => console.log("Agree")
      },
      id: "Contact form not implemented!",
      position: "top-right"
    })
  }

  return (
    <div
      className={cn(
        "group absolute right-0 z-50 hidden h-[calc(100vh-18rem)] w-4/12 md:flex",
        "bg-[repeating-linear-gradient(-45deg,var(--color-neutral-200)_0,var(--color-neutral-200)_1px,transparent_1px,transparent_10px)]",
        "dark:bg-[repeating-linear-gradient(-45deg,var(--color-neutral-800)_0,var(--color-neutral-800)_1px,transparent_1px,transparent_10px)]"
      )}
    >
      <Cursor
        name="Work together"
        className="m-auto flex"
        cursorColor="white"
        svgClassName="size-14"
      >
        <Button
          className={cn(
            "group z-10 flex size-56 rounded-none bg-rose-800 ring-offset-accent hover:bg-rose-800",
            "ring-offset-2 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:outline-none dark:ring-yellow-200"
          )}
          onClick={onClick}
        >
          <Plus
            strokeLinecap="round"
            className="m-auto size-24 rounded-full stroke-[0.5px] text-rose-300"
          />
        </Button>
      </Cursor>

      <div className="absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 border border-r border-b border-rose-800 bg-black transition-transform duration-200 group-hover:-translate-x-5/12 group-hover:-translate-y-5/12"></div>
    </div>
  )
}
