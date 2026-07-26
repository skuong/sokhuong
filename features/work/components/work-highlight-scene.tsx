import { View } from "@react-three/drei"
import type { Mesh } from "three"

import { AnimatedBox } from "./animated-box"

export function WorkHighlightScene({
  onBoxReady
}: {
  onBoxReady: (box: Mesh | null) => void
}) {
  return (
    <View className="h-full w-full" index={-2}>
      <color attach="background" args={["#ffffff"]} />
      <AnimatedBox onReady={onBoxReady} />
    </View>
  )
}
