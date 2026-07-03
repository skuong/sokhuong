import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"

import cursorTrailFragmentShader from "@/features/tech-stack/material/cursor-trail.frag.glsl?raw"
import cursorTrailVertexShader from "@/features/tech-stack/material/cursor-trail.vert.glsl?raw"

const ColorShiftMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.2, 0.0, 0.1),
    uTexture: new THREE.Texture(),
    uDisplacementTexture: new THREE.Texture(),
    uPointer: new THREE.Vector2(9999, 9999)
  },
  cursorTrailVertexShader,
  cursorTrailFragmentShader
)

declare module "@react-three/fiber" {
  interface ThreeElements {
    colorShiftMaterial: ThreeElements["shaderMaterial"] & {
      uTime?: number
      uColor?: THREE.ColorRepresentation
      uTexture?: THREE.Texture
      uDisplacementTexture?: THREE.Texture | null
      uPointer?: THREE.Vector2
    }
  }
}

export { ColorShiftMaterial }
