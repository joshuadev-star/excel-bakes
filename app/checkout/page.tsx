'use client'

import { useCart } from "@/components/CartContext"
import { Button } from "@/components/ui/button"

export default function CheckoutPage() {

  const { cart, total } = useCart()

  const sendToWhatsapp = () => {

    let message = "Hello Excel Bakes, I want to order:%0A%0A"

    cart.forEach(item => {
      message += `${item.name} x${item.qty} - ₦${item.price}%0A`
    })

    message += `%0ATotal: ₦${total}`

    const url =
      `https://wa.me/2349069053454?text=${message}`

    window.open(url, "_blank")
  }

  return (

    <div className="max-w-4xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold mb-10">
        Checkout
      </h1>

      {cart.map(item => (

        <div
          key={item.id}
          className="flex justify-between py-4"
        >

          <span>
            {item.name} x{item.qty}
          </span>

          <span>
            ₦{item.price * item.qty}
          </span>

        </div>

      ))}

      <div className="mt-6 text-xl font-bold">

        Total: ₦{total.toLocaleString()}

      </div>

      <Button
        className="mt-8 w-full"
        onClick={sendToWhatsapp}
      >
        Place Order
      </Button>

    </div>
  )
}