import Image from "next/image"
import { useRef, useState } from "react"

import { useGSAP } from "@gsap/react"
import { Mesh } from "three"

import { gsap } from "@/lib/gsap"

import { WorkHighlightScene } from "./work-highlight-scene"

export function WorkSection() {
  const workSection = useRef<HTMLDivElement | null>(null)
  const [box, setBox] = useState<Mesh | null>(null)

  useGSAP(
    () => {
      if (!workSection.current || !box) return

      gsap.set(".curtain", {
        autoAlpha: 1
      })

      gsap.fromTo(
        ".curtain",
        { scaleY: 0 },
        {
          scaleY: gsap.utils.wrap([5.2, 8, 6, 10, 5.5]),
          transformOrigin: "center bottom",
          scrollTrigger: {
            trigger: workSection.current,
            start: "top bottom",
            scrub: true
          }
        }
      )

      gsap.to(box.rotation, {
        x: 20,
        scrollTrigger: {
          trigger: workSection.current,
          start: "top bottom",
          end: "+=3500 -20%",
          scrub: true
        }
      })

      gsap.fromTo(
        "#go-float",
        {
          y: 600,
          x: () => window.innerWidth * 0.4,
          scale: 4
        },
        {
          x: () => window.innerWidth * 0.4,
          y: -200,
          scale: 1,
          transformOrigin: "100% 50%",
          scrollTrigger: {
            trigger: workSection.current,
            scrub: 0.5,
            start: "top 150%"
            // markers: true
          },
          ease: "slow(0.5,0.7,false)"
        }
      )

      gsap.fromTo(
        "#go-float-2",
        {
          y: 800,
          x: () => window.innerWidth * 0.65,
          scale: 3
        },
        {
          x: () => window.innerWidth * 0.55,
          y: -400,
          scale: 0.25,
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: workSection.current,
            scrub: 0.5
            // markers: true
          },
          ease: "slow(0.5,0.7,false)"
        }
      )

      gsap.fromTo(
        "#go-float-3",
        {
          y: 1000,
          x: () => window.innerWidth * 0.32,
          scale: 3
        },
        {
          x: () => window.innerWidth * 0.38,
          y: -200,
          scale: 0.25,
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: workSection.current,
            scrub: 0.5
          },
          ease: "slow(0.5,0.7,false)"
        }
      )

      gsap.fromTo(
        "#go-float-4",
        {
          y: 900,
          x: () => window.innerWidth * 0.6,
          scale: 5
        },
        {
          x: () => window.innerWidth * 0.5,
          y: -100,
          scale: 2,
          transformOrigin: "0% 50%",
          scrollTrigger: {
            trigger: workSection.current,
            scrub: 0.5
            // markers: true
          },
          ease: "slow(0.5,0.7,false)"
        }
      )

      gsap.fromTo(
        "#go-float-5",
        {
          y: 1700,
          x: () => window.innerWidth * 0.35,
          scale: 6
        },
        {
          x: () => window.innerWidth * 0.37,
          y: -50,
          scale: 1,
          transformOrigin: "100% 50%",
          scrollTrigger: {
            trigger: workSection.current,
            scrub: 0.5
            // markers: true
          },
          ease: "slow(0.5,0.7,false)"
        }
      )
      gsap.fromTo(
        "#go-float-6",
        {
          y: 900,
          x: () => window.innerWidth * 0.39,
          scale: 4
        },
        {
          x: () => window.innerWidth * 0.39,
          y: -100,
          scale: 1,
          transformOrigin: "100% 50%",
          scrollTrigger: {
            trigger: "#go-float-6",
            end: "+=1000",
            scrub: 0.5
          },
          ease: "slow(0.5,0.7,false)"
        }
      )
      gsap.fromTo(
        "#go-float-7",
        {
          y: 900,
          x: () => window.innerWidth * 0.6,
          scale: 4
        },
        {
          x: () => window.innerWidth * 0.55,
          y: -100,
          scale: 1,
          transformOrigin: "0% 50%",
          scrollTrigger: {
            trigger: "#go-float-7",
            end: "+=1000",
            scrub: 0.5
          },
          ease: "slow(0.5,0.7,false)"
        }
      )

      gsap.fromTo(
        "#go-float-8",
        {
          y: 800,
          x: () => window.innerWidth * 0.5,
          scale: 3
        },
        {
          x: () => window.innerWidth * 0.45,
          y: -150,
          scale: 1,
          transformOrigin: "0% 50%",
          scrollTrigger: {
            trigger: "#go-float-8",
            end: "+=1100",
            scrub: 0.5
          },
          ease: "slow(0.5,0.7,false)"
        }
      )
      gsap.fromTo(
        "#go-float-9",
        {
          y: 1000,
          x: () => window.innerWidth * 0.6,
          scale: 4
        },
        {
          x: () => window.innerWidth * 0.5,
          y: -200,
          scale: 1.5,
          transformOrigin: "0% 50%",
          scrollTrigger: {
            trigger: "#go-float-9",
            end: "+=1100",
            scrub: 0.5
          },
          ease: "slow(0.5,0.7,false)"
        }
      )

      gsap.fromTo(
        "#go-float-10",
        {
          y: 1250,
          x: () => window.innerWidth * 0.36,
          scale: 4
        },
        {
          x: () => window.innerWidth * 0.37,
          y: -200,
          scale: 1.5,
          transformOrigin: "100% 50%",
          scrollTrigger: {
            trigger: "#go-float-10",
            end: "+=1100",
            scrub: 0.5
          },
          ease: "slow(0.5,0.7,false)"
        }
      )

      gsap.fromTo(
        "#go-float-11",
        {
          y: 1300,
          x: () => window.innerWidth * 0.5,
          scale: 3
        },
        {
          x: () => window.innerWidth * 0.5,
          y: -100,
          scale: 1,
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: "#go-float-11",
            end: "+=1300",
            scrub: 0.5
          }
        }
      )

      const tl = gsap.timeline({
        id: "work-section",
        scrollTrigger: {
          trigger: workSection.current,
          start: "top top",
          end: "+=900",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          refreshPriority: 10
        }
      })

      tl.fromTo(
        ".bottom-curtain",
        { scaleY: 0 },
        {
          scaleY: gsap.utils.wrap([3.2, 6, 4, 8, 3]),
          transformOrigin: "center bottom",
          ease: "none"
        },
        2
      )
    },
    {
      dependencies: [box],
      revertOnUpdate: true
    }
  )

  return (
    <section ref={workSection} className="relative text-black">
      <div className="absolute top-0 flex h-px w-full bg-pink-600">
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black opacity-0" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black opacity-0" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black opacity-0" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black opacity-0" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-black opacity-0" />
        </div>
      </div>

      <div
        id="go-float"
        className="highlight absolute h-24 w-36 -translate-x-1/2 -translate-y-1/2 bg-green-800 object-cover"
      >
        <Image
          src={"/small-house-3d-modeling.png"}
          alt="small house"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div
        id="go-float-2"
        className="highlight absolute h-32 w-44 -translate-x-1/2 -translate-y-1/2 bg-blue-300"
      >
        <Image
          src={"/modern-cabin-house-by-Quadusk.png"}
          alt="Modern cabin"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div
        id="go-float-3"
        className="highlight absolute h-32 w-44 -translate-x-1/2 -translate-y-1/2 bg-rose-300"
      >
        <Image
          src={"/small-house-and-its-environment-outside-3d-modeling.png"}
          alt="small house and its environment (3D modeling)"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div
        id="go-float-4"
        className="highlight absolute aspect-379/219 w-32 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/rhac-org-home-page-on-desktop.png"}
          alt="rhac website"
          fill
          loading="lazy"
          quality={90}
          className="object-cover"
        />
      </div>

      <div
        id="go-float-5"
        className="highlight absolute aspect-379/219 w-32 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/villa.png"}
          alt="Villa in 360 tour"
          fill
          className="object-cover"

          loading="lazy"
        />
      </div>

      <div
        id="go-float-6"
        className="highlight absolute aspect-379/219 w-28 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/equirectangular-to-cubemap-open-source-app.png"}
          alt="equirectangular-to-cubemap open source app"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div
        id="go-float-7"
        className="highlight absolute aspect-106/83 w-24 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/TUX-Global-Institute-desktop-screen.png"}
          alt="TUX Global Institute website on desktop screen"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div
        id="go-float-8"
        className="highlight absolute aspect-91/162 w-10 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/rhac-org-home-page-mobile-screen.png"}
          alt="rhac org home page mobile screen"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div
        id="go-float-9"
        className="highlight absolute aspect-404/297 w-20 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/Tiptap-image-picker-for-rhac-org-dashboard.png"}
          alt="Tiptap image picker for RHAC org dashboard"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div
        id="go-float-10"
        className="highlight absolute aspect-205/363 w-14 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/TUX-Global-Institute-website-on-mobile-screen.png"}
          alt="TUX Global Institute website on mobile screen size"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div
        id="go-float-11"
        className="highlight absolute aspect-video w-32 -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <Image
          src={"/contour-map.png"}
          alt="Contour map"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div>
        <div className="h-screen">
          <WorkHighlightScene onBoxReady={setBox} />
        </div>
      </div>

      <div className="absolute bottom-0 flex h-px w-full">
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-background" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-background" />
        </div>
        <div className="relative h-px w-1/3 lg:w-1/5">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-background" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-background" />
        </div>
        <div className="relative hidden h-px w-1/5 lg:block">
          <div className="bottom-curtain absolute right-0 bottom-0 left-0 h-32 origin-bottom bg-background" />
        </div>
      </div>
    </section>
  )
}
