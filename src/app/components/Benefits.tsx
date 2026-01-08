import { Heart, Droplet, Zap, Shield, Sparkles, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: Heart,
    title: 'Mineral Rich',
    description: 'Contains 84 trace minerals including calcium, magnesium, potassium, and iron'
  },
  {
    icon: Droplet,
    title: 'Balanced Hydration',
    description: 'Helps maintain optimal fluid balance and supports cellular hydration'
  },
  {
    icon: Zap,
    title: 'Natural Energy',
    description: 'Essential minerals support metabolism and natural energy production'
  },
  {
    icon: Shield,
    title: 'Immune Support',
    description: 'Natural antimicrobial properties help strengthen immunity'
  },
  {
    icon: Sparkles,
    title: 'Detoxification',
    description: 'Aids in removing toxins and promoting overall body cleansing'
  },
  {
    icon: Leaf,
    title: 'Pure & Natural',
    description: 'Unrefined, unprocessed, and free from additives or chemicals'
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-rose-50 dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm mb-6">
              Health Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-6">
              Why Choose Himalayan Pink Salt?
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
              Unlike regular table salt, Himalayan pink salt is completely natural and 
              contains a wealth of minerals that support your overall health and wellness.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white dark:bg-stone-900 p-5 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white mb-1">No Artificial Additives</h4>
                  <p className="text-stone-600 dark:text-stone-300">100% pure with zero chemicals or processing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white dark:bg-stone-900 p-5 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white mb-1">Ancient Purity</h4>
                  <p className="text-stone-600 dark:text-stone-300">Formed over 250 million years ago</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1503097325940-ae094fdb97ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwY29va2luZyUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2NzAzNDA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthy Ingredients"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-stone-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
