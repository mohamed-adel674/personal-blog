import { Navbar } from "@/components/navbar"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Mohamed Adel",
  description: "Learn more about Mohamed Adel, a developer and designer passionate about web development.",
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">About Me</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a PHP and Laravel developer passionate about building robust
            and efficient web applications. I enjoy blending programming with design to create smooth, user-friendly experiences.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">Background</h2>
          <p className="text-foreground/80 leading-relaxed">
            Over the past few years, I've worked on a variety of projects, from startup applications to full-fledged
            systems for larger companies. My journey began with curiosity
            about how things work and evolved into a passion for crafting high-performance, maintainable web applications.          </p>

          <h2 className="text-2xl font-semibold text-foreground">Skills & Expertise</h2>
          <ul className="space-y-2 text-foreground/80">
            <li>PHP & Laravel</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Responsive Design & UI/UX</li>
            <li>Performance Optimization & Security</li>
            <li>Best Practices in Web Development</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">Let's Connect</h2>
          <p className="text-foreground/80 leading-relaxed">
           I'm always open to discussing web development, new projects,
            or exchanging technical ideas. You can reach
          </p>

          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
