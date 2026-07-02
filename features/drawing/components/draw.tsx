"use client"

import dynamic from "next/dynamic"

import "@excalidraw/excalidraw/index.css"

const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((m) => m.Excalidraw),
  { ssr: false }
)

const MainMenu = dynamic(() =>
  import("@excalidraw/excalidraw").then((m) => m.MainMenu)
)

const DefaultSidebar = dynamic(() =>
  import("@excalidraw/excalidraw").then((m) => m.DefaultSidebar)
)

export function Draw({ theme }: { theme: string }) {
  return (
    <Excalidraw theme={theme === "dark" ? "dark" : "light"} aiEnabled={false}>
      <MainMenu></MainMenu>
      <DefaultSidebar></DefaultSidebar>
    </Excalidraw>
  )
}
