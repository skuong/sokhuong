import { Box, Html } from "@react-three/drei"

import { Draw } from "@/features/drawing/components/draw"

export function TabletScene({ theme }: { theme: string }) {
  return (
    <Box>
      <Html center>
        <div className="mx-auto aspect-video w-[calc(100vw-20rem)]">
          <Draw theme={theme} />
        </div>
      </Html>
    </Box>
  )
}
