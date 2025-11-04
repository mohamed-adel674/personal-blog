"use client"

import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AdminGuardProps {
  children: ReactNode
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (token !== "authenticated") {
      router.push("/admin/login")
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return null
  return <>{children}</>
}
