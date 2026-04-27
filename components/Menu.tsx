'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Star } from 'lucide-react'
import { Product, useCart } from "@/components/CartContext"

const menus: Product[] = [
  {
    id: 1,
    name: 'Rich Chocolate Cake',
    category: 'Cakes',
    price: 25500,
    image: '/cake-chocolate.jpg',
    description: 'Decadent layers of moist chocolate cake with velvety frosting',
    rating: 4.9,
    reviews: 1
  },
  {
    id: 2,
    name: 'Vanilla Dream Cake',
    category: 'Cakes',
    price: 17500,
    image: '/cake-vanilla.jpg',
    description: 'Classic vanilla sponge with smooth buttercream',
    rating: 4.8,
    reviews: 2
  },
  {
    id: 3,
    name: 'Strawberry Bliss',
    category: 'Cakes',
    price: 19000,
    image: '/cake-strawberry.jpg',
    description: 'Fresh strawberry shortcake with whipped cream',
    rating: 5,
    reviews: 3
  },
  {
    id: 4,
    name: 'Small Chops',
    category: 'Snacks',
    price: 9500,
    image: '/pastries.jpg',
    description: 'Mix of croissants, pastries and treats',
    rating: 4.7,
    reviews: 4
  },
  {
    id: 5,
    name: 'Chocolate Cake',
    category: 'Cakes',
    price: 20500,
    image: '/5d9b590c2abfe277d1be02b3934c39f5.jpg',
    description: 'Rich chocolate cake for every celebration',
    rating: 4.7,
    reviews: 5
  },
  {
    id: 6,
    name: 'Sweet Meatpie',
    category: 'Snacks',
    price: 3500,
    image: '/709e014bdc73a561629780c4919bd019.jpg',
    description: 'Golden baked meatpie with tasty filling',
    rating: 4.7,
    reviews: 6
  },
  {
    id: 7,
    name: 'Samosa',
    category: 'Snacks',
    price: 6700,
    image: '/sanju-m-gurung-WX-wxGHFTzA-unsplash.jpg',
    description: 'Crispy samosa filled with savory goodness',
    rating: 4.7,
    reviews: 7
  },
  {
    id: 8,
    name: 'Spring Roll',
    category: 'Snacks',
    price: 5500,
    image: '/budi-puspa-wijaya-snEe9nRTqyY-unsplash.jpg',
    description: 'Crunchy spring rolls perfect for parties',
    rating: 4.7,
    reviews: 8
  }
]

const categories = ['All', 'Cakes', 'Snacks']

export function Menu({ preview = false }) {

  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const { addToCart } = useCart()

  const filtered = menus.filter((p) => {
    const matchCategory = category === 'All' || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  const displayedProducts = preview ? filtered.slice(0, 4) : filtered

  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}

        <div className="text-center mb-12">

          <Badge className="bg-accent text-primary mb-4">
            Our Products
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Freshly Baked Delights
          </h2>

          <p className="text-foreground/60 max-w-2xl mx-auto">
            Premium cakes and snacks crafted with love and the finest ingredients.
          </p>

        </div>


        {/* Filters */}

        {!preview && (

          <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">

            <Input
              placeholder="Search Menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />

            <div className="flex gap-2 flex-wrap">

              {categories.map((cat) => (

                <Button
                  key={cat}
                  variant={category === cat ? 'default' : 'outline'}
                  onClick={() => setCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>

              ))}

            </div>

          </div>

        )}


        {/* Product Grid */}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          <AnimatePresence>

            {displayedProducts.map((product) => (

              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >

                <Card className="group overflow-hidden hover:shadow-xl transition">

                  <div className="relative h-52 overflow-hidden">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />

                    <Badge className="absolute top-3 right-3 bg-primary text-white">
                      {product.category}
                    </Badge>

                  </div>

                  <div className="p-5 space-y-3">

                    <h3 className="font-semibold text-lg group-hover:text-primary transition">
                      {product.name}
                    </h3>

                    <p className="text-sm text-foreground/60">
                      {product.description}
                    </p>

                    {/* rating */}

                    <div className="flex items-center gap-1">

                      {Array.from({ length: 5 }).map((_, i) => (

                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />

                      ))}

                      <span className="text-xs text-foreground/60 ml-2">
                        ({product.reviews})
                      </span>

                    </div>

                    {/* price */}

                    <div className="flex justify-between items-center pt-2 border-t">

                      <span className="text-xl font-bold text-primary">
                        ₦{product.price.toLocaleString()}
                      </span>

                      <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>

                    </div>

                  </div>

                </Card>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>


        {/* View all */}

        {preview && (

          <div className="text-center mt-12">

            <a href="/Menu">

              <Button size="lg">
                View All Menu
              </Button>

            </a>

          </div>

        )}

      </div>

    </section>
  )
}