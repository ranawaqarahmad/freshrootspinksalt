import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Fine Ground Pink Salt',
    category: 'Cooking',
    description: 'Perfect for everyday cooking and baking',
    weight: '500g',
    price: 12.99,
    rating: 4.9,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1598187063081-02e97620b226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGJvd2x8ZW58MXx8fHwxNzY3MDMyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Coarse Pink Salt Crystals',
    category: 'Premium',
    description: 'Ideal for grinders and finishing touches',
    weight: '1kg',
    price: 18.99,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1611480367081-03e93cccefd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMGNyeXN0YWx8ZW58MXx8fHwxNzY3MDMyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Pink Salt Blocks',
    category: 'Cooking',
    description: 'For grilling, serving, and salt therapy',
    weight: '2kg',
    price: 34.99,
    rating: 5.0,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1685788233350-ad3527bfca25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2FsdCUyMHJvY2tzfGVufDF8fHx8MTc2NzAzMjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Top Rated'
  },
  {
    id: 4,
    name: 'Pink Salt Gift Set',
    category: 'Gift',
    description: 'Premium assortment in elegant packaging',
    weight: 'Variety',
    price: 45.99,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1633730427321-f49ab5067971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwaGltYWxheWFuJTIwc2FsdHxlbnwxfHx8fDE3NjcwMzI4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Gift'
  },
  {
    id: 5,
    name: 'Bath Salt Crystals',
    category: 'Wellness',
    description: 'Therapeutic grade for relaxing baths',
    weight: '750g',
    price: 16.99,
    rating: 4.7,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1591020330942-e9c3bce82096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNhbHR8ZW58MXx8fHwxNzY3MDM0MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Wellness'
  },
  {
    id: 6,
    name: 'Gourmet Pink Salt',
    category: 'Premium',
    description: 'Premium selection for gourmet cooking',
    weight: '250g',
    price: 9.99,
    rating: 4.8,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1759209402969-be3ea5027356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHByZXBhcmF0aW9ufGVufDF8fHx8MTc2NzAzNDA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'New'
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl text-stone-900 mb-4">Featured Products</h2>
            <p className="text-xl text-stone-600">Our most popular and highest-rated products</p>
          </div>
          <button className="hidden md:block px-6 py-3 border-2 border-stone-200 rounded-lg hover:border-rose-300 transition-colors text-stone-700">
            View All Products
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-stone-50">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                    {product.badge}
                  </span>
                </div>
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-rose-50 transition-colors">
                    <Heart className="w-5 h-5 text-stone-600" strokeWidth={1.5} />
                  </button>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-end">
                  <button className="w-full bg-white text-stone-900 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-rose-50 transition-colors">
                    <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                    Quick Add
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-rose-500 bg-rose-50 px-2 py-1 rounded">{product.category}</span>
                  <span className="text-xs text-stone-500">{product.weight}</span>
                </div>
                
                <h3 className="text-xl text-stone-900 mb-2 group-hover:text-rose-500 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-stone-600 mb-4 line-clamp-2">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-stone-300'
                        }`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-stone-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price & Button */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <div>
                    <span className="text-2xl text-stone-900">${product.price}</span>
                  </div>
                  <button className="text-rose-500 hover:text-rose-600 transition-colors flex items-center gap-1">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
