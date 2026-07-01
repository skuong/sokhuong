"use client"

import dynamic from "next/dynamic"

import "@excalidraw/excalidraw/index.css"

const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((m) => m.Excalidraw),
  { ssr: false }
)

export function Draw({ theme }: { theme: string }) {
  return <Excalidraw theme={theme === "dark" ? "dark" : "light"} />
}
