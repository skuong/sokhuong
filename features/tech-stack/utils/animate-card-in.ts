import { gsap } from "@/lib/gsap"

export const animateCardIn = (card: Element | HTMLElement | null) => {
  return gsap.fromTo(
    card,
    {
      y: 50,
      x: 0
    },
    {
      y: 0,
      x: 0,
      ease: "elastic.out(1,0.4)",
      duration: 0.5,
      onStart: () => {
        gsap.set(card, {
          opacity: 1
        })
      }
    }
  )
}
