"use client"

import dynamic from "next/dynamic"

import "@excalidraw/excalidraw/index.css"
import { useTheme } from "@teispace/next-themes"

const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((m) => m.Excalidraw),
  { ssr: false }
)

export function Draw() {
  const { resolvedTheme } = useTheme()
  return <Excalidraw theme={resolvedTheme === "dark" ? "dark" : "light"} />
}
