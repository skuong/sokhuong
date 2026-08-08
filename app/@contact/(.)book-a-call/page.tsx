"use client"

import { useRouter } from "next/navigation"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookACall } from "@/features/contact/components/book-a-call"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function BookACallPage() {
  const router = useRouter()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog
        open
        onOpenChange={(open) => {
          if (!open) router.back()
        }}
      >
        <DialogContent
          className={
            "overflow-hidden pt-12 md:max-w-[90vw] lg:h-[90dvh] lg:max-h-[90dvh]"
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

  return (
    <Drawer
      open
      onOpenChange={(open) => {
        if (!open) router.back()
      }}
      showSwipeHandle
    >
      <DrawerContent className={"h-dvh"}>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Book a call</DrawerTitle>
        </DrawerHeader>

        <Tabs defaultValue="15min" className="overflow-hidden pt-4">
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
      </DrawerContent>
    </Drawer>
  )
}
