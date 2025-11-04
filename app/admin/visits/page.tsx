"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import AdminGuard from "@/components/AdminGuard"

interface Visit {
  id: number
  page: string
  ip: string
  userAgent: string
  timestamp: string
}

export default function VisitsPage() {
  const [visits, setVisits] = useState<Visit[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const visitsPerPage = 20

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const res = await fetch("/api/visits")
        const data = await res.json()
        data.sort((a: Visit, b: Visit) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        setVisits(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchVisits()
  }, [])

  const totalPages = Math.ceil(visits.length / visitsPerPage)
  const displayedVisits = visits.slice(
    (currentPage - 1) * visitsPerPage,
    currentPage * visitsPerPage
  )

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <AdminGuard>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold mb-6">All Visits</h1>

          {displayedVisits.length === 0 ? (
            <p className="text-foreground/60">No visits recorded yet.</p>
          ) : (
            <div className="overflow-x-auto bg-secondary rounded-lg p-4">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-foreground">#</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-foreground">Page</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-foreground">IP</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-foreground">User Agent</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-foreground">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedVisits.map((v) => (
                    <tr key={v.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="px-4 py-2 text-sm text-foreground">{v.id}</td>
                      <td className="px-4 py-2 text-sm text-foreground">{v.page}</td>
                      <td className="px-4 py-2 text-sm text-foreground">{v.ip}</td>
                      <td className="px-4 py-2 text-sm text-foreground/70">{v.userAgent}</td>
                      <td className="px-4 py-2 text-sm text-foreground/70">{v.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Previous
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminGuard>
  )
}
