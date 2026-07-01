import Script from "next/script"

export const UmamiAnalytics = () => {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

  if (!websiteId) return null

  return (
    <Script
      async
      src={`/api/umami/script`}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  )
}
