import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Adel - Blog",
  description: "Thoughts on web development, design, and technology",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.mohamedadel.com",
    siteName: "Mohamed Adel Blog",
    title: "Mohamed Adel - Blog",
    description: "Thoughts on web development, design, and technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Adel - Blog",
    description: "Thoughts on web development, design, and technology",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
