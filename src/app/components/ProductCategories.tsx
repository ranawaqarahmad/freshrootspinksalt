import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

interface ProductCategoriesProps {
  onNavigate: (section: string) => void;
}

export function ProductCategories({ onNavigate }: ProductCategoriesProps) {
  const categoryImages: { [key: string]: string } = {
    "edible-salt": "https://images.unsplash.com/photo-1606791450998-d3859ac80814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGNvb2tpbmd8ZW58MXx8fHwxNzY3MDM0MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "animal-lick": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBmYXJtfGVufDF8fHx8MTc2NzAzMjg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "tiles-bricks": "https://images.unsplash.com/photo-1685788233350-ad3527bfca25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2FsdCUyMHJvY2tzfGVufDF8fHx8MTc2NzAzMjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "spa-wellness": "https://images.unsplash.com/photo-1591020330942-e9c3bce82096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNhbHR8ZW58MXx8fHwxNzY3MDM0MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "decor-crafts": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWx0JTIwbGFtcHxlbnwxfHx8fDE3NjcwMzI4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "accessories": "https://images.unsplash.com/photo-1558394299-f2e6198506a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWx0JTIwZ3JpbmRlciUyMHBlcHBlcnxlbnwxfHx8fDE3NjcwMzQwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "raw-industrial": "https://images.unsplash.com/photo-1767534605038-10253ed0fcc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FsdCUyMG1pbmluZ3xlbnwxfHx8fDE3Njc4NTQ1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-stone-900 mb-4">Product Categories</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive range of Himalayan pink salt products for various commercial applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="group relative overflow-hidden rounded-xl bg-stone-50 hover:shadow-xl transition-all duration-500 cursor-pointer border border-stone-200"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={categoryImages[category.slug]}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl mb-2">{category.name}</h3>
                <p className="text-white/90 text-sm mb-3">{category.description}</p>
                <div className="flex items-center text-sm group-hover:text-[#E88B7F] transition-colors">
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('products')}
            className="bg-[#3D9B93] text-white px-8 py-4 rounded-lg hover:bg-[#348780] transition-colors inline-flex items-center gap-2"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
