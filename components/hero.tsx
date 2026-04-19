import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-white py-16 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Text Section */}
          <div className="space-y-6 text-center md:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Freshly Baked 
              <span className="block text-primary">Happiness</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/70 max-w-lg mx-auto md:mx-0">
              Welcome to Excel Bakes, where passion meets perfection. Every cake, pastry, and treat is crafted with love and the finest ingredients to bring joy to your special moments.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-5 text-base w-full sm:w-auto">
                Browse Products
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-6 py-5 text-base w-full sm:w-auto"
              >
                Learn More
              </Button>

            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-72 sm:h-80 md:h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl"></div>

            <img
              src="/cake-chocolate.jpg"
              alt="Featured chocolate cake"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>

        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full -ml-40 -mb-40 blur-3xl"></div>
    </section>
  )
}