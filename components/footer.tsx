import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">

          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎂</span>
              <span className="text-xl font-bold">Excel Bakes</span>
            </div>

            <p className="text-sm text-white/70 max-w-xs">
              Crafted with passion by Oninye Nwankwo. Bringing joy through artisan baked goods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#products" className="hover:text-white transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#owner" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>

            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Custom Cakes
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Catering
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Baking Classes
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Corporate Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-semibold mb-4">Follow Us</h4>

            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition">
                <Facebook className="w-6 h-6" />
              </a>

              <a href="#" className="hover:text-accent transition">
                <Instagram className="w-6 h-6" />
              </a>

              <a href="#" className="hover:text-accent transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        <Separator className="bg-white/20" />

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
          <p>
            &copy; {currentYear} Excel Bakes. All rights reserved. | Created with 💖 by Oninye Nwankwo
          </p>
        </div>

      </div>
    </footer>
  )
}