import { useState } from 'react';
import { FileText, Package } from 'lucide-react';
import { products, categories } from '../../data/products';

interface ProductsPageProps {
  onNavigate: (section: string) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === categories.find(c => c.slug === selectedCategory)?.name);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-stone-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Complete catalog of Himalayan pink salt products available for wholesale and export
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#3D9B93] text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedCategory === cat.slug
                  ? 'bg-[#3D9B93] text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#E88B7F]/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#E88B7F]" />
                </div>
                <span className="text-xs bg-[#3D9B93]/10 text-[#3D9B93] px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl text-stone-900 mb-3">{product.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-sm text-stone-500 mb-1">Size / Detail</div>
                  <div className="text-stone-700">{product.size}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-500 mb-1">Packaging Options</div>
                  <div className="text-stone-700 text-sm">{product.packaging}</div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('rfq')}
                className="w-full bg-[#3D9B93] text-white py-3 rounded-lg hover:bg-[#348780] transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Request Quote
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-stone-50 to-stone-100 p-12 rounded-2xl border border-stone-200">
          <h3 className="text-3xl text-stone-900 mb-4">Don't See What You Need?</h3>
          <p className="text-lg text-stone-600 mb-6 max-w-2xl mx-auto">
            We can source custom specifications and sizes based on your requirements. 
            Contact us to discuss your specific needs.
          </p>
          <button
            onClick={() => onNavigate('rfq')}
            className="bg-[#E88B7F] text-white px-8 py-4 rounded-lg hover:bg-[#d97a6e] transition-colors inline-flex items-center gap-2"
          >
            Custom Product Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
