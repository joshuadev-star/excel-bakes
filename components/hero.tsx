import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Freshly Baked 
              <span className="block text-primary">Happiness</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-lg">
              Welcome to Excel Bakes, where passion meets perfection. Every cake, pastry, and treat is crafted with love and the finest ingredients to bring joy to your special moments.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
                Browse Products
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl"></div>
            <img 
              src="/cake-chocolate.jpg" 
              alt="Featured chocolate cake" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
    </section>
  )
}
