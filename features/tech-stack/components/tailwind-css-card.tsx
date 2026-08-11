import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { Css } from "./logos/css"

export function TailwindCssCard({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute h-104 w-80 rounded-lg border opacity-0",
        className
      )}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-background/50 backdrop-blur-lg">
        <div className="w-full p-8 text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 54 33"
            className="w-full"
          >
            <g clipPath="url(#a)">
              <path
                fill="#38bdf8"
                fillRule="evenodd"
                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h54v32.4H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Css className="absolute bottom-0 w-16 translate-y-1/2" />
      </div>
    </div>
  )
}
