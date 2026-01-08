import { useEffect, useMemo, useState } from 'react';
import { FileText, Package } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../../data/products';
import defaultProductImage from '../../assets/edible-pink-salt-fine.png';

const validCategories = new Set(['all', ...categories.map((category) => category.slug)]);

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(
    validCategories.has(initialCategory) ? initialCategory : 'all'
  );

  useEffect(() => {
    const category = searchParams.get('category') ?? 'all';
    if (validCategories.has(category) && category !== selectedCategory) {
      setSelectedCategory(category);
    }
  }, [searchParams, selectedCategory]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    const categoryName = categories.find((cat) => cat.slug === selectedCategory)?.name;
    return products.filter((product) => product.category === categoryName);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-4">Our Product Range</h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Complete catalog of Himalayan pink salt products available for wholesale and export
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-3 rounded-lg transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#3D9B93] text-white'
                : 'bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedCategory === cat.slug
                  ? 'bg-[#3D9B93] text-white'
                  : 'bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800'
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
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-5 overflow-hidden rounded-lg bg-stone-50 dark:bg-stone-800 aspect-square flex items-center justify-center">
                <img
                  src={product.image ?? defaultProductImage}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#E88B7F]/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#E88B7F]" />
                </div>
                <span className="text-xs bg-[#3D9B93]/10 text-[#3D9B93] px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl text-stone-900 dark:text-white mb-3">{product.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-sm text-stone-500 dark:text-stone-400 mb-1">Size / Detail</div>
                  <div className="text-stone-700 dark:text-stone-200">{product.size}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-500 dark:text-stone-400 mb-1">Packaging Options</div>
                  <div className="text-stone-700 dark:text-stone-200 text-sm">{product.packaging}</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to={`/products/${product.id}`}
                  className="w-full border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-200 py-3 rounded-lg hover:border-[#3D9B93] hover:text-[#3D9B93] transition-colors flex items-center justify-center gap-2"
                >
                  View Details
                </Link>
                <Link
                  to="/rfq"
                  className="w-full bg-[#3D9B93] text-white py-3 rounded-lg hover:bg-[#348780] transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800 p-12 rounded-2xl border border-stone-200 dark:border-stone-800">
          <h3 className="text-3xl text-stone-900 dark:text-white mb-4">Don't See What You Need?</h3>
          <p className="text-lg text-stone-600 dark:text-stone-300 mb-6 max-w-2xl mx-auto">
            We can source custom specifications and sizes based on your requirements. 
            Contact us to discuss your specific needs.
          </p>
          <Link
            to="/rfq"
            className="bg-[#E88B7F] text-white px-8 py-4 rounded-lg hover:bg-[#d97a6e] transition-colors inline-flex items-center gap-2"
          >
            Custom Product Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
