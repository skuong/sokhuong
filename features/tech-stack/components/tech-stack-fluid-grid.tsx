"use client"

import { RefObject, useEffect, useState } from "react"

import { useThree } from "@react-three/fiber"
import { toCanvas } from "html-to-image"
import * as THREE from "three"

export function TechStackFluidGrid({
  htmlElementRef
}: {
  htmlElementRef: RefObject<HTMLDivElement | null>
}) {
  const gl = useThree((state) => state.gl)
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
  const pixelRatio = Math.min(window.devicePixelRatio * 2, 4)

  useEffect(() => {
    const domToCanvas = async () => {
      if (htmlElementRef.current) {
        const element = htmlElementRef.current
        const canvas = await toCanvas(element, {
          pixelRatio: pixelRatio
        })
        setCanvas(canvas)
      }
    }
    domToCanvas()
    console.log("canvas")
  }, [htmlElementRef, pixelRatio])

  if (!canvas) return null
  return (
    <mesh>
      <meshBasicMaterial transparent>
        <canvasTexture
          args={[canvas]}
          attach="map"
          colorSpace={gl.outputColorSpace}
          minFilter={THREE.LinearMipMapLinearFilter}
          magFilter={THREE.LinearFilter}
          generateMipmaps
        />
      </meshBasicMaterial>
      <planeGeometry
        args={[canvas.width / pixelRatio, canvas.height / pixelRatio, 10]}
      />
    </mesh>
  )
}
