"use client"

import { useEffect } from "react"

import Cal, { getCalApi } from "@calcom/embed-react"

type BookACallProps = { eventSlug: "15min" | "30min" }

export function BookACall({ eventSlug }: BookACallProps) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: eventSlug })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [eventSlug])

  return (
    <Cal
      namespace={eventSlug}
      calLink={`sokhuong/${eventSlug}`}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      calOrigin="https://cal.eu"
    />
  )
}
