"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon, Menu, X, Settings, LogIn, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)

    // التحقق من الثيم
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }

    // التحقق من حالة الأدمن
    const adminToken = localStorage.getItem("adminToken")
    if (adminToken === "authenticated") setIsAdmin(true)
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    if (newDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminEmail")
    setIsAdmin(false)
    router.push("/")
  }

  if (!mounted) return null

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border transition-smooth">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-semibold text-lg text-foreground hover:text-primary transition-smooth">
            Mohamed Adel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-smooth"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side (theme + admin) */}
          <div className="flex items-center gap-4">
            {/* ✅ لو الأدمن داخل */}
            {isAdmin ? (
              <>
                <button
                  onClick={() => router.push("/admin")}
                  className="p-2 hover:bg-secondary rounded-lg transition-smooth flex items-center gap-1"
                  title="Admin Dashboard"
                >
                  <Settings className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm">Dashboard</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-smooth flex items-center gap-1"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm">Logout</span>
                </button>
              </>
            ) : (
              /* 🚪 لو مش داخل */
              <button
                onClick={() => router.push("/admin/login")}
                className="p-2 hover:bg-secondary rounded-lg transition-smooth flex items-center gap-1"
              >
                <LogIn className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">Login</span>
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary rounded-lg transition-smooth"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 transition-smooth" /> : <Moon className="w-5 h-5 transition-smooth" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-secondary rounded transition-smooth"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
