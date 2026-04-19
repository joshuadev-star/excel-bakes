import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-accent">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">🎂</div>
          <span className="text-xl font-bold text-foreground">Excel Bakes</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm text-foreground hover:text-primary transition">
            Products
          </a>
          <a href="#owner" className="text-sm text-foreground hover:text-primary transition">
            About
          </a>
          <a href="#contact" className="text-sm text-foreground hover:text-primary transition">
            Contact
          </a>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-white">
          Order Now
        </Button>
      </nav>
    </header>
  )
}
