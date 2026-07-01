"use client"

import { Excalidraw } from "@excalidraw/excalidraw"
import "@excalidraw/excalidraw/index.css"
import { useTheme } from "@teispace/next-themes"

export function Draw() {
  const { resolvedTheme } = useTheme()
  return <Excalidraw theme={resolvedTheme === "dark" ? "dark" : "light"} />
}
