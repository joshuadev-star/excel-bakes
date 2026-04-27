'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

/* Product type */

export type Product = {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  rating: number
  reviews: number
}

/* Cart Item */

export type CartItem = Product & {
  qty: number
}

/* Context Type */

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  total: number
  count: number
}

/* Context */

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {

  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {

    setCart(prev => {

      const exist = prev.find(p => p.id === product.id)

      if (exist) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  const increaseQty = (id: number) => {
    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p
      )
    )
  }

  const decreaseQty = (id: number) => {
    setCart(prev =>
      prev.map(p =>
        p.id === id && p.qty > 1
          ? { ...p, qty: p.qty - 1 }
          : p
      )
    )
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )

  const count = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        total,
        count
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return context
}