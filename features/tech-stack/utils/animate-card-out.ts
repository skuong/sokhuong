import { gsap } from "@/lib/gsap"

export const animateCardOut = (card: Element | HTMLElement | null) => {
  return gsap.timeline().to(card, {
    x: 80,
    opacity: 0,
    ease: "power2.out",
    duration: 0.2
  })
}
