"use client"

import { useState } from "react"
import { Button } from '@/components/ui/button'
import Link from "next/link"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-accent">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">🎂</div>
          <span className="text-xl font-bold text-foreground">Excel Bakes</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm text-foreground hover:text-primary transition">
            Home
          </a>
          <a href="/product" className="text-sm text-foreground hover:text-primary transition">
            Products
          </a>
          <a href="/about" className="text-sm text-foreground hover:text-primary transition">
            About
          </a>
          <a href="/contact" className="text-sm text-foreground hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/product">
              Order Now
            </Link>
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="/product" className="block text-sm text-foreground hover:text-primary">
            Products
          </a>
          <a href="/about" className="block text-sm text-foreground hover:text-primary">
            About
          </a>
          <a href="/contact" className="block text-sm text-foreground hover:text-primary">
            Contact
          </a>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            <Link href="/product">
              Order Now
            </Link>
            
          </Button>
        </div>
      )}
    </header>
  )
}