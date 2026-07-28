"use client"

import { useEffect, useState } from "react"

import { intlFormat } from "date-fns"

const PHNOM_PENH_TIME_ZONE = "Asia/Phnom_Penh"
const PHNOM_PENH_OFFSET = 7 * 60
const MINUTE_IN_MS = 60_000

function getNextMinuteDelay(date: Date) {
  return MINUTE_IN_MS - (date.getSeconds() * 1000 + date.getMilliseconds())
}

export function RelativeTime() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    let timeout: number

    function updateNow() {
      const date = new Date()

      setNow(date)
      timeout = window.setTimeout(updateNow, getNextMinuteDelay(date))
    }

    updateNow()

    return () => window.clearTimeout(timeout)
  }, [])

  if (!now) return null

  const phnomPenhTime = intlFormat(
    now,
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: PHNOM_PENH_TIME_ZONE
    },
    {
      locale: "en-GB"
    }
  )

  const userOffset = -now.getTimezoneOffset()
  const diffHours = (PHNOM_PENH_OFFSET - userOffset) / 60

  const relative =
    diffHours === 0
      ? "SAME TIME"
      : diffHours > 0
        ? `${diffHours}H AHEAD`
        : `${Math.abs(diffHours)}H BEHIND`

  return (
    <div>
      <p>
        PHNOM PENH {phnomPenhTime} GMT+7 ({relative})
      </p>
    </div>
  )
}
