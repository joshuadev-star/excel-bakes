'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Owner } from '@/components/owner'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Menu } from '@/components/Menu'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Menu preview />
      <Owner />
      <Contact />
      <Footer />
    </main>
  )
}
