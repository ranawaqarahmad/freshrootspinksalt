import { useEffect, useMemo, useState } from 'react';
import { FileText, Package } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../../data/products';
import { imageUrls } from '../../data/imageUrls';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import { HomeCtaSection } from './HomeCtaSection';

const validCategories = new Set(['all', ...categories.map((category) => category.slug)]);
const PAGE_SIZE = 9;

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') ?? 'all';
  const initialShade = searchParams.get('shade') ?? '';
  const [selectedCategory, setSelectedCategory] = useState<string>(
    validCategories.has(initialCategory) ? initialCategory : 'all'
  );
  const [selectedShade, setSelectedShade] = useState<string>(initialShade);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category') ?? 'all';
    const shade = searchParams.get('shade') ?? '';
    if (validCategories.has(category) && category !== selectedCategory) {
      setSelectedCategory(category);
    }
    if (shade !== selectedShade) {
      setSelectedShade(shade);
    }
  }, [searchParams, selectedCategory, selectedShade]);

  const filteredProducts = useMemo(() => {
    const categoryName =
      selectedCategory === 'all'
        ? null
        : categories.find((cat) => cat.slug === selectedCategory)?.name;
    return products.filter((product) => {
      const matchesCategory = categoryName ? product.category === categoryName : true;
      const matchesShade = selectedShade ? product.shade === selectedShade : true;
      return matchesCategory && matchesShade;
    });
  }, [selectedCategory, selectedShade]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedCategory, selectedShade]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedShade('');
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
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-2"
            >
              <div className="mb-5 overflow-hidden rounded-lg bg-stone-50 dark:bg-stone-800 aspect-square flex items-center justify-center">
                  <ImageWithSkeleton
                    src={product.image ?? imageUrls.edibleFine}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    wrapperClassName="h-full w-full"
                    imgClassName="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
              </div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#E88B7F]/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#E88B7F]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#3D9B93]/10 text-[#3D9B93] px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.shade ? (
                    <span className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-3 py-1 rounded-full">
                      {product.shade} tone
                    </span>
                  ) : null}
                </div>
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

        {visibleCount < filteredProducts.length ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                window.setTimeout(() => {
                  setVisibleCount((count) =>
                    Math.min(count + PAGE_SIZE, filteredProducts.length)
                  );
                  setIsLoading(false);
                }, 300);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#E88B7F]/30 bg-[#E88B7F]/10 px-6 py-2.5 text-sm text-[#E88B7F] hover:bg-[#E88B7F]/20 transition-colors"
              aria-live="polite"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#E88B7F] border-t-transparent" />
                  Loading
                </>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        ) : null}

        <div className="mt-16">
          <HomeCtaSection />
        </div>
      </div>
    </section>
  );
}
