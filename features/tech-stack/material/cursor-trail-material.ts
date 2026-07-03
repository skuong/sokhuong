import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"

const ColorShiftMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uColor: new THREE.Color(0.2, 0.0, 0.1)
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
  uniform sampler2D uTexture;
  varying vec2 vUv;
  void main() {
    vec4 texColor = texture2D(uTexture, vUv);
    vec3 shift = 0.5 + 0.3 * sin(vUv.yxx + uTime) + uColor;
    gl_FragColor.rgba = vec4(texColor.rgb + shift * 0.1, texColor.a);
  }
  `
)

declare module "@react-three/fiber" {
  interface ThreeElements {
    colorShiftMaterial: ThreeElements["shaderMaterial"] & {
      uTime?: number
      uColor?: THREE.ColorRepresentation
      uTexture?: THREE.Texture
    }
  }
}

export { ColorShiftMaterial }
