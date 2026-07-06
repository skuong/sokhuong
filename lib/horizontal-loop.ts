import { gsap } from "@/lib/gsap"

type HorizontalLoopConfig = {
  repeat?: number
  paused?: boolean
  speed?: number
  reversed?: boolean
  paddingRight?: number | string
  snap?: number | false
}

type HorizontalLoopTimeline = gsap.core.Timeline & {
  next: (vars?: gsap.TweenVars) => gsap.core.Tween
  previous: (vars?: gsap.TweenVars) => gsap.core.Tween
  current: () => number
  toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween
  times: number[]
}

export function horizontalLoop(
  items: gsap.DOMTarget,
  config: HorizontalLoopConfig = {}
): HorizontalLoopTimeline {
  const elements = gsap.utils.toArray<HTMLElement>(items)

  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100)
    }
  }) as HorizontalLoopTimeline

  const length = elements.length
  const startX = elements[0].offsetLeft
  const times: number[] = []
  const widths: number[] = []
  const xPercents: number[] = []

  let curIndex = 0

  const pixelsPerSecond = (config.speed ?? 1) * 100

  const snap =
    config.snap === false
      ? (value: number) => value
      : gsap.utils.snap(config.snap ?? 1)

  gsap.set(elements, {
    xPercent: (index, element) => {
      const el = element as HTMLElement

      const width = (widths[index] = parseFloat(
        gsap.getProperty(el, "width", "px") as string
      ))

      xPercents[index] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / width) * 100 +
          Number(gsap.getProperty(el, "xPercent"))
      )

      return xPercents[index]
    }
  })

  gsap.set(elements, { x: 0 })

  const last = elements[length - 1]

  const totalWidth =
    last.offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    last.offsetWidth * Number(gsap.getProperty(last, "scaleX")) +
    (parseFloat(String(config.paddingRight ?? 0)) || 0)

  for (let i = 0; i < length; i++) {
    const item = elements[i]

    const curX = (xPercents[i] / 100) * widths[i]

    const distanceToStart = item.offsetLeft + curX - startX

    const distanceToLoop =
      distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"))

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          )
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false
        },
        distanceToLoop / pixelsPerSecond
      )
      .add(`label${i}`, distanceToStart / pixelsPerSecond)

    times[i] = distanceToStart / pixelsPerSecond
  }

  function toIndex(index: number, vars: gsap.TweenVars = {}): gsap.core.Tween {
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length
    }

    const newIndex = gsap.utils.wrap(0, length, index)
    let time = times[newIndex]

    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = {
        time: gsap.utils.wrap(0, tl.duration())
      }

      time += tl.duration() * (index > curIndex ? 1 : -1)
    }

    curIndex = newIndex
    vars.overwrite = true

    return tl.tweenTo(time, vars)
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars)
  tl.previous = (vars) => toIndex(curIndex - 1, vars)
  tl.current = () => curIndex
  tl.toIndex = (index, vars) => toIndex(index, vars)
  tl.times = times

  tl.progress(1, true).progress(0, true)

  if (config.reversed) {
    tl.vars.onReverseComplete?.()
    tl.reverse()
  }

  return tl
}
