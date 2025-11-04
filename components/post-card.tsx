import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog-data"

interface PostCardProps {
  post: BlogPost
  index?: number
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article
        className="group h-full flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-accent uppercase tracking-wider">{post.category}</span>
            <span className="text-xs text-muted-foreground">{post.readingTime}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-foreground/70 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
