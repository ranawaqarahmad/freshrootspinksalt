import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Cooking Salt',
    description: 'Premium culinary grade',
    products: '12 Products',
    image: 'https://images.unsplash.com/photo-1606791450998-d3859ac80814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGNvb2tpbmd8ZW58MXx8fHwxNzY3MDM0MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Bath & Wellness',
    description: 'Therapeutic spa salts',
    products: '8 Products',
    image: 'https://images.unsplash.com/photo-1591020330942-e9c3bce82096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNhbHR8ZW58MXx8fHwxNzY3MDM0MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Salt Blocks',
    description: 'Grilling & serving',
    products: '6 Products',
    image: 'https://images.unsplash.com/photo-1685788233350-ad3527bfca25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2FsdCUyMHJvY2tzfGVufDF8fHx8MTc2NzAzMjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 4,
    name: 'Gift Sets',
    description: 'Curated collections',
    products: '10 Products',
    image: 'https://images.unsplash.com/photo-1611480367081-03e93cccefd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGNyeXN0YWx8ZW58MXx8fHwxNzY3MDMyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-teal-500 to-cyan-500'
  }
];

export function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-stone-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium pink salt products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-stone-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <h3 className="text-2xl mb-1">{category.name}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">{category.products}</span>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
