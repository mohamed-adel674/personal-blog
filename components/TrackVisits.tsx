"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function TrackVisits() {
  const pathname = usePathname()

  useEffect(() => {
    fetch("/api/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pathname }),
    }).catch((err) => console.error("Visit tracking error:", err))
  }, [pathname])

  return null
}
