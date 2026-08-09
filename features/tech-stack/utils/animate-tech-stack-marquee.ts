import { gsap } from "@/lib/gsap"

export const animateTechStackMarqueeIn = (
  marquee: gsap.TweenTarget,
  fromDirection: "top" | "bottom"
) => {
  if (fromDirection === "top") {
    gsap.fromTo(
      marquee,
      {
        opacity: 0,
        yPercent: -50
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.2,
        ease: "elastic.out(1,0.4)"
      }
    )
  } else {
    gsap.fromTo(
      marquee,
      {
        opacity: 0,
        yPercent: 50
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.2,
        ease: "elastic.out(1,0.4)"
      }
    )
  }
}

export const animateTechStackMarqueeOut = (
  marquee: gsap.TweenTarget,
  toDirection: "top" | "bottom"
) => {
  if (toDirection === "top") {
    gsap.fromTo(
      marquee,
      {
        opacity: 1,
        yPercent: 0
      },
      {
        opacity: 0,
        yPercent: -50,
        duration: 0.2,
        ease: "power2.out"
      }
    )
  } else {
    gsap.fromTo(
      marquee,
      {
        opacity: 1,
        yPercent: 0
      },
      {
        opacity: 0,
        yPercent: 50,
        duration: 0.2,
        ease: "power2.out"
      }
    )
  }
}
