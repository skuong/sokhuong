import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { UmamiAnalytics } from "@/features/analytics/components/umami-analytics"
import { cn } from "@/lib/utils"

import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" })

export const metadata: Metadata = {
  title: {
    default: "Sokhuong | Creative developer",
    template: "%s | Sokhuong"
  },

  description:
    "Creative developer building responsive, interactive, accessible, and performant websites with intentional animations.",

  openGraph: {
    title: "Creative developer",
    description:
      "Creative developer building responsive, interactive, accessible, and performant websites with intentional animations.",
    url: "https://sokhuong.com",
    siteName: "Sokhuong",
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Sokhuong | Creative developer",
    description:
      "Creative developer building responsive, interactive, accessible, and performant websites with intentional animations."
  }
}

export default function RootLayout({
  contact,
  children
}: Readonly<{
  contact: React.ReactNode
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
        <ThemeProvider>
          {contact}
          {children}
        </ThemeProvider>
        <UmamiAnalytics />
        <Toaster />
      </body>
    </html>
  )
}
