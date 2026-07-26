import { useLayoutEffect, useRef } from "react"

import { Box } from "@react-three/drei"
import type { Mesh } from "three"

export function AnimatedBox({
  onReady
}: {
  onReady: (box: Mesh | null) => void
}) {
  const box = useRef<Mesh>(null)

  useLayoutEffect(() => {
    if (!box.current) return

    onReady(box.current)

    return () => {
      onReady(null)
    }
  }, [onReady])

  return (
    <Box ref={box}>
      <meshBasicMaterial color="pink" wireframe />
    </Box>
  )
}
