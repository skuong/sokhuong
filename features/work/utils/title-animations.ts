import { gsap } from "@/lib/gsap"

export function titleInAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title] > span`,
      {
        yPercent: 100
      },
      {
        yPercent: 0
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title]`,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
}

export function titleBackOutAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title] > span`,
      {
        yPercent: 0
      },
      {
        yPercent: 100
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title]`,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      },
      0
    )
}

export function titleBackInAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title] > span`,
      {
        yPercent: -100
      },
      {
        yPercent: 0
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title]`,
      {
        clipPath: "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
}

export function titleOutAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title] > span`,
      {
        yPercent: 0
      },
      {
        yPercent: -100
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-title]`,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
}
