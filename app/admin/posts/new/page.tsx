"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { blogPosts } from "@/lib/blog-data"
import { ArrowLeft, Save, ImageIcon, X } from "lucide-react"

export default function NewPost() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [imagePreview, setImagePreview] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      const dataUrl = reader.result as string
      setImagePreview(dataUrl)
      setImageUrl(`/images/${file.name}`)
      console.log("[v0] Image uploaded:", file.name)
    }
    reader.readAsDataURL(file)
  }

  const clearImage = () => {
    setImagePreview("")
    setImageUrl("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log("[v0] New post created:", { title, slug, excerpt, content, category, tags, image: imageUrl })
    setIsSubmitting(false)
    router.push("/admin")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Create New Post</h1>
            </div>
          </div>
          <button
            form="post-form"
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            <Save className="w-4 h-4" />
            {isSubmitting ? "Saving..." : "Save Post"}
          </button>
        </div>

        {/* Form */}
        <form id="post-form" onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-secondary rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Post Details</h2>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Slug</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tags (comma separated)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Excerpt</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                rows={3}
                required
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-secondary rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Content</h2>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm resize-vertical"
              rows={15}
              placeholder="Write your post content here. Use markdown formatting."
              required
            />

            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-2">Markdown Support:</p>
              <ul className="space-y-1 text-xs">
                <li>
                  Use <code className="bg-background px-1 rounded"># Heading</code> for headings
                </li>
                <li>
                  Use <code className="bg-background px-1 rounded">- List item</code> for lists
                </li>
                <li>Use triple backticks for code blocks</li>
              </ul>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-secondary rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="w-5 h-5" />
              <h2 className="text-lg font-semibold text-foreground">Featured Image</h2>
            </div>

            {imagePreview ? (
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden h-48 bg-background">
                  <Image src={imagePreview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                </div>
                <button
                  type="button"
                  onClick={clearImage}
                  className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <X className="w-4 h-4" />
                  Remove Image
                </button>
              </div>
            ) : (
              <label className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer block">
                <p className="text-foreground/60 text-sm">Click to upload or drag and drop</p>
                <p className="text-muted-foreground text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}

            <div className="text-xs text-muted-foreground">
              <p>Image URL: {imageUrl || "No image selected"}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
