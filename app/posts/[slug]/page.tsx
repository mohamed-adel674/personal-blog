import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Clock, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { getBlogPostBySlug, getAllBlogPostSlugs } from "@/lib/blog-data"
import { CommentSection } from "@/components/comment-section"
import type { Metadata } from "next"
import type { JSX } from "react"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: `${post.title} - Mohamed Adel`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({
    slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to posts
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden bg-muted">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Post Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">{post.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{post.title}</h1>

          <p className="text-lg text-foreground/70 mb-6">{post.excerpt}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("#")) {
              const level = paragraph.match(/^#+/)?.[0].length || 1
              const title = paragraph.replace(/^#+\s/, "")
              const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
              return (
                <HeadingTag
                  key={index}
                  className={`font-bold mt-8 mb-4 ${level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : "text-xl"}`}
                >
                  {title}
                </HeadingTag>
              )
            }
            if (paragraph.startsWith("```")) {
              return (
                <pre key={index} className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-foreground">{paragraph.replace(/```/g, "").trim()}</code>
                </pre>
              )
            }
            if (paragraph.startsWith("-")) {
              return (
                <ul key={index} className="list-disc list-inside space-y-2 mb-4">
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i} className="text-foreground/80">
                      {item.replace(/^-\s/, "")}
                    </li>
                  ))}
                </ul>
              )
            }
            if (paragraph.match(/^\d+\./)) {
              return (
                <ol key={index} className="list-decimal list-inside space-y-2 mb-4">
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i} className="text-foreground/80">
                      {item.replace(/^\d+\.\s/, "")}
                    </li>
                  ))}
                </ol>
              )
            }
            return (
              <p key={index} className="text-foreground/80 mb-4 leading-relaxed">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Tags */}
        <div className="py-8 border-t border-b border-border mb-12">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/?search=${encodeURIComponent(tag)}`}
                className="inline-block px-3 py-1 bg-secondary hover:bg-secondary/80 text-sm text-foreground rounded-full transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-secondary rounded-lg p-6 sm:p-8 mb-12">
          <h3 className="font-semibold text-foreground mb-2">About the author</h3>
          <p className="text-foreground/70">
            {post.author} is a developer and designer passionate about building beautiful, performant web experiences
            with modern technologies.
          </p>
        </div>

        {/* Comments Section */}
        <div className="border-t border-border pt-12">
          <div className="flex items-center gap-2 mb-8">
            <MessageCircle className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-foreground">Comments</h2>
          </div>
          <CommentSection postId={post.id} />
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-sm text-foreground/60">
            <p>© 2025 Mohamed Adel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
