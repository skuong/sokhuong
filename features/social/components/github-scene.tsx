import { useState } from "react"

import { Box, useCursor, useTexture } from "@react-three/drei"

export function GithubScene() {
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  const texture = useTexture("/github-light-256px.jpg", (texture) => {
    texture.center.set(0.5, 0.5)
    texture.rotation = -Math.PI / 4
    texture.needsUpdate = true
  })

  return (
    <Box
      rotation={[0, 0, Math.PI / 4]}
      onClick={() => {
        window.open("https://github.com/skuong", "blank")
      }}
      onPointerEnter={() => {
        setHovered(true)
      }}
      onPointerLeave={() => {
        setHovered(false)
      }}
    >
      <meshStandardMaterial map={texture} roughness={0} metalness={0.05} />
    </Box>
  )
}
