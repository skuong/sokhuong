import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"

const ColorShiftMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.2, 0.0, 0.1),
    uTexture: new THREE.Texture(),
    uDisplacementTexture: new THREE.Texture(),
    uPointer: new THREE.Vector2(9999, 9999)
  },
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /*glsl*/ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec2 uPointer;
  uniform sampler2D uTexture;
  uniform sampler2D uDisplacementTexture;
  varying vec2 vUv;
  void main() {
    vec4 texColor = texture2D(uTexture, vUv);
    vec4 displacementColor = texture2D(uDisplacementTexture, vUv);
    gl_FragColor.rgba = vec4(texColor.rgb, 1.0 - displacementColor.r * 2.0 + 0.2);
  }
  `
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
