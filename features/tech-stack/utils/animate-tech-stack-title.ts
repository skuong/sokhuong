import { gsap } from "@/lib/gsap"

export const animateTechStackTitle = (chars: Element[]) => {
  return gsap.to(chars, {
    xPercent: (index) => {
      if (index === 0) {
        return -50
      }
      if (index === 1) {
        return -90
      }
      if (index === 2) {
        return -0
      }
      if (index === 3) {
        return -0
      }
      if (index === 4) {
        return -90
      }
      if (index === 5) {
        return -0
      }
      if (index === 6) {
        return 50
      }
      if (index === 7) {
        return 50
      }
      if (index === 8) {
        return 50
      }
      return 50
    },

    yPercent: (index) => {
      if (index === 0) {
        return 70
      }
      if (index === 1) {
        return -50
      }
      if (index === 2) {
        return 0
      }
      if (index === 3) {
        return 70
      }
      if (index === 4) {
        return -110
      }
      if (index === 5) {
        return 65
      }
      if (index === 6) {
        return -10
      }
      if (index === 7) {
        return 90
      }
      if (index === 8) {
        return -5
      }
      return 50
    },
    rotationZ: (index) => {
      if (index === 0) {
        return -25
      }
      if (index === 1) {
        return 0
      }
      if (index === 2) {
        return 0
      }
      if (index === 3) {
        return 10
      }
      if (index === 4) {
        return 0
      }
      if (index === 5) {
        return 5
      }
      if (index === 6) {
        return -20
      }
      if (index === 7) {
        return 0
      }
      if (index === 8) {
        return -10
      }
      return 10
    },
    ease: "power3.out",
    duration: 0.2,
    paused: true
  })
}
