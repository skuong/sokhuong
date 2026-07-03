"use client"

import { RefObject, useEffect, useMemo, useRef, useState } from "react"

import { extend, useFrame, useThree } from "@react-three/fiber"
import { toCanvas } from "html-to-image"
import * as THREE from "three"

import { ColorShiftMaterial } from "@/features/tech-stack/material/cursor-trail-material"

extend({ ColorShiftMaterial })

export function TechStackFluidGrid({
  htmlElementRef
}: {
  htmlElementRef: RefObject<HTMLDivElement | null>
}) {
  const gl = useThree((state) => state.gl)
  const size = useThree((state) => state.size)
  const plane = useRef<THREE.Mesh | null>(null)

  const materialRef = useRef<typeof ColorShiftMaterial>(null)

  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
  const pixelRatio = Math.min(window.devicePixelRatio * 2, 4)

  const domToCanvas = useMemo(() => {
    const domToCanvas = async () => {
      if (htmlElementRef.current) {
        const element = htmlElementRef.current
        const canvas = await toCanvas(element, {
          pixelRatio: pixelRatio
        })
        setCanvas(canvas)
      }
    }

    return domToCanvas
  }, [htmlElementRef, pixelRatio])

  const texture = useMemo(() => {
    return new THREE.CanvasTexture(canvas)
  }, [canvas])

  const previousWidth = useRef(size.width)
  const previousHeight = useRef(size.height)

  const resizeTimerId = useRef<NodeJS.Timeout>(undefined)

  useFrame(() => {
    if (materialRef.current) {
      // @ts-expect-error TODO: TS doesn't understand this
      materialRef.current.uTime += 0.05
    }

    const dw = Math.abs(size.width - previousWidth.current)
    const dh = Math.abs(size.height - previousHeight.current)

    if (dw >= 1 || dh >= 1) {
      previousWidth.current = size.width
      previousHeight.current = size.height
      clearTimeout(resizeTimerId.current)
      resizeTimerId.current = setTimeout(() => domToCanvas(), 300)
    }
  })

  useEffect(() => {
    domToCanvas()
  }, [domToCanvas])

  if (!canvas) return null
  return (
    <mesh ref={plane}>
      <colorShiftMaterial ref={materialRef} uTexture={texture} />
      <planeGeometry
        args={[canvas.width / pixelRatio, canvas.height / pixelRatio, 10]}
      />
    </mesh>
  )
}
