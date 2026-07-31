import { View } from "@react-three/drei"
import { useTheme } from "@teispace/next-themes"
import type { Mesh } from "three"

import { AnimatedBox } from "./animated-box"

export function WorkHighlightScene({
  onBoxReady
}: {
  onBoxReady: (box: Mesh | null) => void
}) {
  const { resolvedTheme } = useTheme()
  return (
    <View className="h-full w-full">
      <color
        attach="background"
        args={[resolvedTheme === "dark" ? "#ffffff" : "#000000"]}
      />
      <AnimatedBox onReady={onBoxReady} />
    </View>
  )
}
