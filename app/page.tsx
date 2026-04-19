'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Owner } from '@/components/owner'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Owner />
      <Contact />
      <Footer />
    </main>
  )
}
