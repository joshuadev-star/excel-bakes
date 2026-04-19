'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Rich Chocolate Cake',
    category: 'Cakes',
    price: '₦25,500',
    image: '/cake-chocolate.jpg',
    description: 'Decadent layers of moist chocolate cake with velvety chocolate frosting',
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: 'Vanilla Dream Cake',
    category: 'Cakes',
    price: '₦17,500',
    image: '/cake-vanilla.jpg',
    description: 'Classic vanilla sponge with smooth buttercream and elegant decorations',
    rating: 4.8,
    reviews: 98
  },
  {
    id: 3,
    name: 'Strawberry Bliss',
    category: 'Cakes',
    price: '₦19,000',
    image: '/cake-strawberry.jpg',
    description: 'Fresh strawberry shortcake with whipped cream and seasonal berries',
    rating: 5.0,
    reviews: 156
  },
  {
    id: 4,
    name: 'Small chops',
    category: 'Snacks',
    price: '₦9,500',
    image: '/pastries.jpg',
    description: 'Mix of fresh croissants, Danish pastries, and delightful small treats',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 5,
    name: 'Chocolate Cake',
    category: 'Cake',
    price: '₦20,500',
    image: '/5d9b590c2abfe277d1be02b3934c39f5.jpg',
    description: 'Rich chocolate cake for every celebration',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 6,
    name: 'Sweet Meatpie',
    category: 'Snacks',
    price: '₦3,500',
    image: '/709e014bdc73a561629780c4919bd019.jpg',
    description: 'Golden baked meatpie with tasty filling',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 7,
    name: 'Samosa',
    category: 'Snacks',
    price: '₦6,700',
    image: '/sanju-m-gurung-WX-wxGHFTzA-unsplash.jpg',
    description: 'Crispy samosa filled with savory goodness',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 8,
    name: 'Spring Roll',
    category: 'Snacks',
    price: '₦5,500',
    image: '/budi-puspa-wijaya-snEe9nRTqyY-unsplash.jpg',
    description: 'Crunchy spring rolls perfect for parties',
    rating: 4.7,
    reviews: 203
  }
]

export function Products() {
  return (
    <section id="products" className="py-16 sm:py-20 md:py-32 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-accent text-primary mb-4">Our Collections</Badge>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
            Artisan Creations
          </h2>

          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            From show-stopping cakes to delightful pastries, each creation is made with premium ingredients and meticulous attention to detail.
          </p>
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden h-52 sm:h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <Badge className="absolute top-3 right-3 bg-primary text-white">
                  {product.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                
                <div>
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition">
                    {product.name}
                  </h3>

                  <p className="text-sm text-foreground/60 mt-1">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
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

                {/* Price + Button */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {product.price}
                  </span>

                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Add
                  </Button>
                </div>

              </div>
            </Card>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="text-center mt-10 md:mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
          >
            View All Products
          </Button>
        </div>

      </div>

    </section>
  )
}