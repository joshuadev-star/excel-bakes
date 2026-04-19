import { Badge } from '@/components/ui/badge'

export function Owner() {
  return (
    <section id="owner" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-white to-secondary/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Image */}
          <div className="relative h-80 sm:h-96 md:h-[450px] order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl"></div>

            <img
              src="/IMG-20240818-WA0014.jpg"
              alt="Oninye Nwankwo, owner of Excel Bakes"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 md:order-2 text-center md:text-left">

            <Badge className="bg-accent text-primary w-fit mx-auto md:mx-0">
              About the Creator
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Meet ONYINYECHUKWU GIFT NWANKWO
            </h2>

            {/* Features */}
            <div className="space-y-4">

              <div className="flex items-start gap-3 justify-center md:justify-start">
                <span className="text-primary text-2xl">✨</span>
                <div>
                  <p className="font-semibold text-foreground">Master's Degree in Baking</p>
                  <p className="text-sm text-foreground/60">
                    Advanced culinary education and professional expertise
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center md:justify-start">
                <span className="text-primary text-2xl">🎂</span>
                <div>
                  <p className="font-semibold text-foreground">Passionate Pastry Chef</p>
                  <p className="text-sm text-foreground/60">
                    Dedicated to creating artisan baked goods
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center md:justify-start">
                <span className="text-primary text-2xl">💝</span>
                <div>
                  <p className="font-semibold text-foreground">Love for Baking</p>
                  <p className="text-sm text-foreground/60">
                    Every creation is made with heart and precision
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center md:justify-start">
                <span className="text-primary text-2xl">🌟</span>
                <div>
                  <p className="font-semibold text-foreground">Community Focused</p>
                  <p className="text-sm text-foreground/60">
                    Building joy through delicious treats for everyone
                  </p>
                </div>
              </div>

            </div>

            {/* Story */}
            <div className="pt-6 border-t border-accent text-left">
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                At just 26 years old, Oninye brings fresh innovation to traditional baking.
                With a master's degree in baking and years of hands-on experience,
                she has crafted Excel Bakes as a haven for quality pastries and custom cakes.
                Every product reflects her commitment to excellence and her genuine passion
                for making people smile through delicious, beautifully crafted treats.
              </p>

              <p className="text-foreground/70 leading-relaxed mt-4 text-sm sm:text-base">
                Excel Bakes isn’t just a bakery—it’s a celebration of her talent,
                creativity, and dedication to bringing happiness to every customer
                through the universal language of great food.
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}