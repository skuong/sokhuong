import { Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SmallContactButton() {
  function onClick() {
    toast("Contact form not implemented!", {
      action: {
        label: "Ok",
        onClick: () => console.log("Agree")
      },
      id: "Contact form not implemented!",
      position: "bottom-left"
    })
  }

  return (
    <Button
      onClick={onClick}
      type="button"
      className={cn(
        "group",
        "mt-8 flex size-16 cursor-pointer items-center justify-center",
        "bg-transparent hover:bg-rose-900",
        "rounded-none ring-1 ring-offset-2 ring-offset-background focus-visible:ring-1 focus-visible:ring-yellow-600 dark:ring-neutral-600 dark:focus-visible:ring-yellow-200"
      )}
    >
      <Plus
        strokeWidth={1}
        className="size-8 shrink-0 text-pink-600 group-hover:text-white"
      />
    </Button>
  )
}
