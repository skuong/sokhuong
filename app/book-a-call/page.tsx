import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookACall } from "@/features/contact/components/book-a-call"

export default function BookACallPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Tabs
        defaultValue="15min"
        className="h-[80vh] min-h-[80vh] w-full overflow-hidden"
      >
        <div className="flex w-full justify-center px-8">
          <TabsList className={"w-1/2"}>
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
    </div>
  )
}
