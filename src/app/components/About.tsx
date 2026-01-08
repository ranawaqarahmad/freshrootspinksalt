import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mountain, Award, Users } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl mb-6 text-stone-800 dark:text-white">Our Story</h2>
            <p className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
              For over a decade, we've been committed to bringing you the finest Himalayan pink salt, 
              sourced directly from the ancient salt mines in the Khewra region of Pakistan.
            </p>
            <p className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
              Our salt is hand-mined and minimally processed to preserve its natural mineral composition 
              and beautiful pink hue, ensuring you receive a product that is as close to nature as possible.
            </p>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              We believe in sustainable practices, fair trade, and delivering exceptional quality 
              that enhances both your culinary experiences and overall wellness.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685788233350-ad3527bfca25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2FsdCUyMHJvY2tzfGVufDF8fHx8MTc2NzAzMjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Salt Mining"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="w-8 h-8 text-rose-400" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-stone-800 dark:text-white">Pure Source</h3>
            <p className="text-stone-600 dark:text-stone-300">
              Harvested from pristine Himalayan salt deposits, formed over 250 million years ago.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-rose-400" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-stone-800 dark:text-white">Premium Quality</h3>
            <p className="text-stone-600 dark:text-stone-300">
              Rigorous quality control ensures every batch meets our exceptional standards.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-rose-400" strokeWidth={1.5} />
            </div>
            <h3 className="mb-3 text-stone-800 dark:text-white">Customer First</h3>
            <p className="text-stone-600 dark:text-stone-300">
              Dedicated to providing outstanding service and products you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
