import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { MenuSheetContent } from "./menu-sheet-content"

export function Header() {
  return (
    <header className="flex justify-between p-4">
      <div className="font-mono font-light text-muted-foreground">KHUONG</div>
      {/*<div className="font-mono font-light text-muted-foreground">
        <Sheet>
          <SheetTrigger
            className={
              "group cursor-pointer ring-offset-2 ring-offset-accent outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
            }
          >
            <svg
              width="39"
              height="14"
              viewBox="0 0 39 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <line
                x1="-4.37114e-08"
                y1="0.5"
                x2="39"
                y2="0.499997"
                stroke="currentColor"
                className="transition-transform group-hover:translate-y-0.5"
              />
              <line
                x1="14"
                y1="13.5"
                x2="39"
                y2="13.5"
                stroke="currentColor"

                className="transition-transform group-hover:-translate-y-0.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className={"min-w-full p-4"}>
            <MenuSheetContent />
          </SheetContent>
        </Sheet>
      </div>*/}
    </header>
  )
}
