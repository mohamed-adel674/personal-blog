"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { blogPosts } from "@/lib/blog-data"
import { Edit, Trash2, Plus, Eye } from "lucide-react"
import AdminGuard from "@/components/AdminGuard" // ✅ استدعاء AdminGuard

export default function AdminDashboard() {
  const [posts, setPosts] = useState(blogPosts)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id))
    setDeleteConfirm(null)
  }

  return (
    <AdminGuard> {/* ✅ غلاف الصفحة بـ AdminGuard */}
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-foreground/60">Manage your blog posts</p>
            </div>
            <Link
              href="/admin/posts/new"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              New Post
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-1">Total Posts</p>
              <p className="text-3xl font-bold text-foreground">{posts.length}</p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-1">Categories</p>
              <p className="text-3xl font-bold text-foreground">{new Set(posts.map((p) => p.category)).size}</p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-1">Total Tags</p>
              <p className="text-3xl font-bold text-foreground">{new Set(posts.flatMap((p) => p.tags)).size}</p>
            </div>
          </div>

          {/* Posts Table */}
          <div className="bg-secondary rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Title</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-foreground line-clamp-1">{post.title}</p>
                          <p className="text-xs text-muted-foreground">{post.slug}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">{post.category}</td>
                      <td className="px-6 py-4 text-sm text-foreground/70">{post.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/posts/${post.slug}`}
                            className="p-2 hover:bg-secondary/50 rounded transition-colors"
                            title="View"
                          >
                            <Eye className="w-4 h-4 text-foreground/70" />
                          </Link>
                          <Link
                            href={`/admin/posts/${post.id}`}
                            className="p-2 hover:bg-secondary/50 rounded transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4 text-foreground/70" />
                          </Link>
                          <div className="relative group">
                            <button
                              onClick={() => setDeleteConfirm(post.id)}
                              className="p-2 hover:bg-secondary/50 rounded transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </button>

                            {deleteConfirm === post.id && (
                              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg z-50 p-3 w-48">
                                <p className="text-sm text-foreground mb-3">Are you sure you want to delete this post?</p>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleDelete(post.id)}
                                    className="flex-1 px-2 py-1 bg-destructive text-destructive-foreground rounded text-xs font-medium hover:opacity-90"
                                  >
                                    Delete
                                  </button>
                                  <button
                                    onClick={() => setDeleteConfirm(null)}
                                    className="flex-1 px-2 py-1 bg-secondary hover:bg-secondary/80 text-foreground rounded text-xs font-medium"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60 mb-4">No posts yet</p>
              <Link
                href="/admin/posts/new"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Create your first post
              </Link>
            </div>
          )}
        </div>
      </div>
    </AdminGuard>
  )
}
