import { Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function SmallContactButton() {
  function onClick() {
    toast("Contact form not implemented!", {
      action: {
        label: "Ok",
        onClick: () => console.log("Agree")
      },
      id: "Contact form not implemented!"
    })
  }

  return (
    <Button
      onClick={onClick}
      type="button"
      className={
        "mt-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-none border"
      }
    >
      <Plus strokeWidth={1} className="size-8 shrink-0 text-pink-600" />
    </Button>
  )
}
