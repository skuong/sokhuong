import { Geist, Geist_Mono } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { UmamiAnalytics } from "@/features/analytics/components/umami-analytics"
import { NameInPhoneticSymbolsSvg } from "@/features/art/components/name-in-phonetic-symbols-svg"
import { PhoneticNameWithHoverCard } from "@/features/art/components/phonetic-name-with-hover-card"
import { cn } from "@/lib/utils"

import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <header className="container mx-auto pt-16 pb-8">
            <PhoneticNameWithHoverCard />
          </header>

          {children}
        </ThemeProvider>
        <UmamiAnalytics />
      </body>
    </html>
  )
}
