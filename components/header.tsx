'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/CartContext"

export function Header() {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const { count } = useCart()

  return (

    <header className="sticky top-0 z-50 bg-white border-b">

      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 h-16">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🎂</span>
          <span className="font-bold text-lg">
            Excel Bakes
          </span>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex gap-8">

          <Link href="/">Home</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

        </div>

        {/* Cart */}

        <div className="flex items-center gap-4">

          <Link href="/cart" className="relative">

            <ShoppingCart className="w-6 h-6" />

            {count > 0 && (

              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">

                {count}

              </span>

            )}

          </Link>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>

    </header>
  )
}