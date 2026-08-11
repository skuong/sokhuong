import { gsap } from "@/lib/gsap"

export function descriptionInAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line`,
      {
        yPercent: 100
      },
      {
        yPercent: 0
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line-wrapper`,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
}

export function descriptionOutAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line`,
      {
        yPercent: 0
      },
      {
        yPercent: -100
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line-wrapper`,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
}

export function descriptionBackInAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line`,
      {
        yPercent: -100
      },
      {
        yPercent: 0
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line-wrapper`,
      {
        clipPath: "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
}

export function descriptionBackOutAnimation(id: number) {
  return gsap
    .timeline({ paused: true })
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line`,
      {
        yPercent: 0
      },
      {
        yPercent: 100
      }
    )
    .fromTo(
      `[data-work-id=id-${id}]  [data-info=project-description] .line-wrapper`,
      {
        clipPath: "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
}
