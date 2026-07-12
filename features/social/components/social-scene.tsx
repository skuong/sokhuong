"use client"

import { useRef } from "react"

import { Environment } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

import { BootDevScene } from "./boot-dev-scene"
import { GithubScene } from "./github-scene"
import { TryhackmeScene } from "./tryhackme-scene"

export function SocialScene() {
  const group = useRef<THREE.Group>(null)

  useFrame(({ pointer }) => {
    if (group.current) {
      group.current.rotation.y = -pointer.x * 0.2
      group.current.rotation.x = pointer.y * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={1}
        angle={0.2}
        penumbra={1}
        position={[30, 30, 30]}
        shadow-mapSize={[512, 512]}
      />
      <Environment preset="dawn" />

      <group ref={group}>
        <GithubScene />
        <TryhackmeScene />
        <BootDevScene />
      </group>
    </>
  )
}
