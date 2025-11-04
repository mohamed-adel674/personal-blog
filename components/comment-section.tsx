"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

interface Comment {
  id: string
  author: string
  email: string
  text: string
  date: string
  avatar?: string
}

interface CommentSectionProps {
  postId: string
}

export function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "John Doe",
      email: "john@example.com",
      text: "Great article! Really helpful insights on React Server Components.",
      date: new Date(Date.now() - 86400000).toLocaleDateString(),
    },
    {
      id: "2",
      author: "Jane Smith",
      email: "jane@example.com",
      text: "Thanks for explaining this so clearly. I was confused about this topic.",
      date: new Date(Date.now() - 3600000).toLocaleDateString(),
    },
  ])
  const [author, setAuthor] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!author.trim() || !email.trim() || !text.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newComment: Comment = {
      id: String(comments.length + 1),
      author,
      email,
      text,
      date: new Date().toLocaleDateString(),
    }

    setComments([newComment, ...comments])
    setAuthor("")
    setEmail("")
    setText("")
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-8">
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Leave a comment</h3>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          <textarea
            placeholder="Your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            rows={4}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Posting..." : "Post Comment"}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-foreground/60 text-center py-8">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-secondary rounded-lg p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-foreground">{comment.author}</p>
                  <p className="text-sm text-muted-foreground">{comment.date}</p>
                </div>
              </div>
              <p className="text-foreground/80">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
