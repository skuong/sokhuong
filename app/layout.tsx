import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { UmamiAnalytics } from "@/features/analytics/components/umami-analytics"
import { cn } from "@/lib/utils"

import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" })

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
        geist.variable,
        notoSans.variable
      )}
    >
      <body className="overflow-x-clip">
        <ThemeProvider>{children}</ThemeProvider>
        <UmamiAnalytics />
      </body>
    </html>
  )
}
