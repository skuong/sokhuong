import { gsap } from "@/lib/gsap"

export function figureInAnimation(id: number) {
  return gsap.to(`[data-work-id=id-${id}] > [data-info=figure]`, {
    clipPath: "polygon(0% 0%, 100% -10%, 100% 100%, 0% 100%)"
  })
}

export function figureOutAnimation(id: number) {
  return gsap.to(`[data-work-id=id-${id}] > [data-info=figure]`, {
    clipPath: "polygon(0% 110%, 100% 100%, 100% 100%, 0% 110%)"
  })
}
