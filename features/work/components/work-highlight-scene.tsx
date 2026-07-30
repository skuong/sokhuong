import { View } from "@react-three/drei"
import type { Mesh } from "three"

import { AnimatedBox } from "./animated-box"

export function WorkHighlightScene({
  onBoxReady
}: {
  onBoxReady: (box: Mesh | null) => void
}) {
  return (
    <View className="h-full w-full">
      <color attach="background" args={["black"]} />
      <AnimatedBox onReady={onBoxReady} />
    </View>
  )
}
