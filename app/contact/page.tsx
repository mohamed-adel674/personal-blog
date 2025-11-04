import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Mohamed Adel",
  description: "Get in touch with Mohamed Adel for inquiries, collaborations, or just to say hello.",
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
        <p className="text-lg text-foreground/70 mb-12">
          Have a question or want to collaborate? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:madelelmorshdy@gmail.com" className="text-primary hover:underline">
                madelelmorshdy@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/mohamed-adel674" className="text-foreground/60 hover:text-primary transition-colors">
                    GitHub →
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/in/mohamed-adel674" className="text-foreground/60 hover:text-primary transition-smooth">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://web.facebook.com/mohamed.morshdy.14" className="text-foreground/60 hover:text-primary transition-colors">
                    Facebook →
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/__mohamed.adel__" className="text-foreground/60 hover:text-primary transition-colors">
                    Instagram →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-6 sm:p-8">
            <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
