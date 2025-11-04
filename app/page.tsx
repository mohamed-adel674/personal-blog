"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { PostCard } from "@/components/post-card"
import { SearchBar } from "@/components/search-bar"
import { blogPosts } from "@/lib/blog-data"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    let posts = blogPosts

    if (selectedCategory) {
      posts = posts.filter((post) => post.category === selectedCategory)
    }

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
      )
    }

    return posts
  }, [selectedCategory, searchQuery])

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 transition-smooth">Mohamed Adel</h1>
              <p className="text-lg text-foreground/70">
                Developer, designer, and digital explorer sharing thoughts on web development, design, and technology.
              </p>
            </div>
            <div className="max-w-md">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {selectedCategory ? `${selectedCategory} Articles` : "Latest Articles"}
          </h2>
          <p className="text-foreground/60">
            {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"} found
          </p>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground/60">No posts found. Try adjusting your filters.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="transition-smooth">
              <h3 className="font-semibold text-foreground mb-4">About</h3>
              <p className="text-sm text-foreground/60">
                Building beautiful, performant web experiences with modern technologies.
              </p>
            </div>
            <div className="transition-smooth">
              <h3 className="font-semibold text-foreground mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-smooth">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-smooth">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-smooth">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="transition-smooth">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                {categories.slice(0, 3).map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="text-foreground/60 hover:text-primary transition-smooth"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
            <p>© 2025 Mohamed Adel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
