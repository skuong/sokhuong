"use client"

import { useMemo, useRef } from "react"

import { Environment } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import {
  CuboidCollider,
  InstancedRigidBodies,
  Physics
} from "@react-three/rapier"
import * as THREE from "three"

export function SocialScene() {
  const count = 10
  const api = useRef(null)

  const sphereGeometry = useMemo(() => {
    return new THREE.SphereGeometry(1, 32, 32)
  }, [])

  const baubleMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "white",
      roughness: 0,
      envMapIntensity: 1
    })
  }, [])

  const instances = useMemo(() => {
    const rfs = THREE.MathUtils.randFloatSpread

    const initialInstances: {
      position: [number, number, number]
      rotation: [number, number, number]
      key: number
    }[] = []

    for (let i = 0; i < count; i++) {
      initialInstances.push({
        position: [rfs(20), rfs(20), rfs(20)],
        rotation: [0, 0, 0],
        key: i
      })
    }
    return initialInstances
  }, [])

  useFrame((_, delta) => {
    if (!api.current) return

    for (let i = 0; i < count; i++) {
      // @ts-expect-error Proper type is not exported
      const rigiidBody = api.current.at(i)
      if (!rigiidBody) return
      const currentPos = rigiidBody.translation()

      const force = new THREE.Vector3(currentPos.x, currentPos.y, currentPos.z)
        .normalize()
        .multiplyScalar(-40 * delta)

      rigiidBody.applyImpulse(force, true)
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <color attach="background" args={["#dfdfdf"]} />
      <spotLight
        intensity={1}
        angle={0.2}
        penumbra={1}
        position={[30, 30, 30]}
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <Physics debug>
        <InstancedRigidBodies ref={api} instances={instances} colliders="ball">
          <instancedMesh
            args={[sphereGeometry, baubleMaterial, count]}
            receiveShadow
            castShadow
          />
        </InstancedRigidBodies>

        <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
      </Physics>

      <Environment preset="dawn" />
    </>
  )
}
