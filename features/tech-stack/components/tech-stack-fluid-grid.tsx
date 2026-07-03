"use client"

import { RefObject, useEffect, useMemo, useRef, useState } from "react"

import { extend, useFrame, useThree } from "@react-three/fiber"
import { ThreeEvent } from "@react-three/fiber"
import { toCanvas } from "html-to-image"
import * as THREE from "three"

import { ColorShiftMaterial } from "@/features/tech-stack/material/cursor-trail-material"

extend({ ColorShiftMaterial })

export function TechStackFluidGrid({
  htmlElementRef,
  canvas2DRef
}: {
  htmlElementRef: RefObject<HTMLDivElement | null>
  canvas2DRef: RefObject<HTMLCanvasElement | null>
}) {
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

  const displacementTextureRef = useRef<THREE.Texture | null>(null)

  const glowImage = useMemo(() => {
    const glowImage = new Image()

    glowImage.src = "/displacement/glow.png"
    return glowImage
  }, [])

  useEffect(() => {
    domToCanvas()
  }, [domToCanvas])

  const canvas2DContext = useRef<CanvasRenderingContext2D | null>(null)

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

    if (canvas2DContext.current) {
      canvas2DContext.current.globalCompositeOperation = "source-over"
      canvas2DContext.current.globalAlpha = 0.02
      canvas2DContext.current.fillRect(
        0,
        0,
        canvas2DRef.current?.width ?? 0,
        canvas2DRef.current?.height ?? 0
      )
    }

    if (displacementTextureRef.current) {
      displacementTextureRef.current.needsUpdate = true
    }
  })

  useEffect(() => {
    if (canvas2DRef.current && !!canvas?.height && !!canvas.width) {
      canvas2DRef.current.width = canvas.width / 10
      canvas2DRef.current.height = canvas.height / 10
      displacementTextureRef.current = new THREE.CanvasTexture(
        canvas2DRef.current
      )
      materialRef.current.uDisplacementTexture = displacementTextureRef.current

      const context = canvas2DRef.current.getContext("2d")
      if (context) {
        if (!canvas2DContext.current) {
          canvas2DContext.current = context
        }

        context.globalCompositeOperation = "lighten"
        context.fillRect(0, 0, canvas.width / 10, canvas.height / 10)
      }
    }
  }, [domToCanvas, canvas2DRef, canvas?.width, canvas?.height])

  const onPointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv && canvas2DRef.current) {
      const pointerX = event.uv.x * canvas2DRef.current.width
      const pointerY = (1 - event.uv.y) * canvas2DRef.current.height

      if (canvas2DContext.current) {
        const glowSize = canvas2DRef.current.width * 0.1

        canvas2DContext.current.globalCompositeOperation = "lighten"
        canvas2DContext.current.globalAlpha = 1
        canvas2DContext.current.drawImage(
          glowImage,
          pointerX - glowSize / 2,
          pointerY - glowSize / 2,
          glowSize,
          glowSize
        )
      }
    }
  }

  if (!canvas) return null
  return (
    <mesh ref={plane} onPointerMove={onPointerMove}>
      <colorShiftMaterial ref={materialRef} uTexture={texture} />
      <planeGeometry
        args={[canvas.width / pixelRatio, canvas.height / pixelRatio, 10]}
      />
    </mesh>
  )
}
