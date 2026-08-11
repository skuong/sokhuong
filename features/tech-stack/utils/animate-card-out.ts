import { gsap } from "@/lib/gsap"

export const animateCardOut = (cards: (Element | null)[], index: number) => {
  if (index === 2) {
    gsap
      .timeline()
      .fromTo(
        cards[2],
        {
          xPercent: 60
        },
        {
          xPercent: 90,
          ease: "expo.out",
          duration: 0.2
        }
      )
      .to(
        cards[2],
        {
          opacity: 0,
          duration: 0.1
        },
        "<"
      )

    gsap.fromTo(
      cards[1],
      {
        yPercent: 0,
        xPercent: 0,
        rotationZ: 0
      },
      {
        yPercent: 0,
        xPercent: 30,
        rotationZ: 2.5,
        ease: "expo.out",
        duration: 0.5
      }
    )

    gsap.fromTo(
      cards[0],
      {
        yPercent: 2.5,
        xPercent: -60,
        rotationZ: -5
      },
      {
        yPercent: 0,
        xPercent: -30,
        rotationZ: -5,
        ease: "expo.out",
        duration: 0.5
      }
    )
  }

  if (index === 1) {
    gsap
      .timeline()
      .fromTo(
        cards[1],
        {
          xPercent: 30
        },
        {
          xPercent: 80,
          ease: "expo.out",
          duration: 0.5,
          opacity: 0
        }
      )
      .to(
        cards[1],
        {
          opacity: 0,
          duration: 0.1
        },
        "<"
      )

    gsap.fromTo(
      cards[0],
      {
        yPercent: -0,
        xPercent: -30,
        rotationZ: -5
      },
      {
        yPercent: 0,
        xPercent: 0,
        rotationZ: 0,
        ease: "expo.out",
        duration: 0.5
      }
    )
  }

  if (index === 0) {
    gsap.fromTo(
      cards[0],
      {
        yPercent: 0,
        xPercent: 0,
        rotationZ: 0
      },
      {
        yPercent: 50,
        xPercent: 0,
        rotationZ: 0,
        ease: "expo.out",
        duration: 0.5,
        opacity: 0
      }
    )
  }
}
