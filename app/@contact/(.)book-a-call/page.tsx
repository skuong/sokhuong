"use client"

import { useRouter } from "next/navigation"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookACall } from "@/features/contact/components/book-a-call"

export default function BookACallPage() {
  const router = useRouter()

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) router.back()
      }}
    >
      <DialogContent
        className={
          "overflow-hidden pt-12 md:h-[80dvh] md:max-h-[90dvh] md:max-w-[80vw]"
        }
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Let's talk</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="15min" className="overflow-hidden">
          <div className="flex w-full justify-center px-8">
            <TabsList className={"md:w-1/2"}>
              <TabsTrigger value="15min">15 minutes</TabsTrigger>
              <TabsTrigger value="30min">30 minutes</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent keepMounted value="15min" className={"w-full"}>
            <BookACall eventSlug="15min" />
          </TabsContent>
          <TabsContent keepMounted value="30min">
            <BookACall eventSlug="30min" />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
