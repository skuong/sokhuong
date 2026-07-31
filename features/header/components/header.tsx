import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { MenuSheetContent } from "./menu-sheet-content"

export function Header() {
  return (
    <header className="flex justify-between p-4">
      <div className="font-mono font-light text-muted-foreground">KHUONG</div>
      <div className="font-mono font-light text-muted-foreground">
        <Sheet>
          <SheetTrigger>MENU</SheetTrigger>
          <SheetContent className={"min-w-full bg-black/90 p-4"}>
            <MenuSheetContent />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
