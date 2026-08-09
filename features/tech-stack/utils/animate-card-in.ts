import { gsap } from "@/lib/gsap"

export const animateCardIn = (cards: (Element | null)[], index: number) => {
  if (index === 0) {
    gsap.fromTo(
      cards[0],
      {
        yPercent: 50,
        xPercent: 0,
        rotationZ: 0
      },
      {
        yPercent: 0,
        xPercent: 0,
        rotationZ: 0,
        ease: "elastic.out(1,0.4)",
        duration: 0.5,
        onStart: () => {
          gsap.set(cards[0], {
            opacity: 1
          })
        }
      }
    )
  }

  if (index === 1) {
    gsap.fromTo(
      cards[index],
      {
        yPercent: 10,
        xPercent: 50,
        rotationZ: 0
      },
      {
        yPercent: 0,
        xPercent: 30,
        rotationZ: 2.5,
        ease: "elastic.out(1,0.4)",
        duration: 0.5,
        onStart: () => {
          gsap.set(cards[index], {
            opacity: 1
          })
        }
      }
    )

    gsap.fromTo(
      cards[0],
      {
        yPercent: 0,
        xPercent: 0,
        rotationZ: 0
      },
      {
        yPercent: -0,
        xPercent: -30,
        rotationZ: -5,
        ease: "elastic.out(1,0.4)",
        duration: 0.5
      }
    )
  }

  if (index === 2) {
    gsap.fromTo(
      cards[2],
      {
        yPercent: 10,
        xPercent: 70,
        rotationZ: 0
      },
      {
        yPercent: 2.5,
        xPercent: 60,
        rotationZ: 5,
        ease: "elastic.out(1,0.4)",
        duration: 0.5,
        onStart: () => {
          gsap.set(cards[2], {
            opacity: 1
          })
        }
      }
    )

    gsap.fromTo(
      cards[1],
      {
        yPercent: 0,
        xPercent: 30,
        rotationZ: 2.5
      },
      {
        yPercent: 0,
        xPercent: 0,
        rotationZ: 0,
        ease: "elastic.out(1,0.4)",
        duration: 0.5
      }
    )

    gsap.fromTo(
      cards[0],
      {
        yPercent: 0,
        xPercent: -30,
        rotationZ: -5
      },
      {
        yPercent: 2.5,
        xPercent: -60,
        rotationZ: -5,
        ease: "elastic.out(1,0.4)",
        duration: 0.5
      }
    )
  }
}
