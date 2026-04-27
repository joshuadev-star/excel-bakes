'use client'

import { useCart } from "@/components/CartContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CartPage() {

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    total
  } = useCart()

  return (

    <div className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-10">
        Your Cart
      </h1>

      {cart.map(item => (

        <div
          key={item.id}
          className="flex justify-between items-center border-b py-6"
        >

          <div>

            <h2 className="font-semibold">
              {item.name}
            </h2>

            <p>
              ₦{item.price.toLocaleString()}
            </p>

          </div>

          <div className="flex gap-3 items-center">

            <Button
              size="sm"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </Button>

            {item.qty}

            <Button
              size="sm"
              onClick={() => increaseQty(item.id)}
            >
              +
            </Button>

            <Button
              variant="destructive"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>

          </div>

        </div>

      ))}

      <div className="mt-10 flex justify-between">

        <h2 className="text-xl font-bold">
          Total: ₦{total.toLocaleString()}
        </h2>

        <Button asChild>

          <Link href="/checkout">
            Checkout
          </Link>

        </Button>

      </div>

    </div>
  )
}