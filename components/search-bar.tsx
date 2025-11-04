"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { searchBlogPosts } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-data"
import Link from "next/link"

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<BlogPost[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchBlogPosts(query)
      setResults(filtered)
      setIsOpen(true)
      onSearch?.(query)
    } else {
      setResults([])
      setIsOpen(false)
      onSearch?.("")
    }
  }, [query, onSearch])

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              onClick={() => {
                setQuery("")
                setIsOpen(false)
              }}
              className="block px-4 py-3 hover:bg-secondary border-b border-border last:border-b-0 transition-colors"
            >
              <p className="font-medium text-foreground line-clamp-1">{post.title}</p>
              <p className="text-xs text-muted-foreground line-clamp-1">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg z-50 p-4 text-center text-muted-foreground">
          No posts found
        </div>
      )}
    </div>
  )
}
