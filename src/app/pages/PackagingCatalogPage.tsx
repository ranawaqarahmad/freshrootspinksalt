import { Link } from 'react-router-dom';
import { packagingItems } from '../../data/packaging';

export default function PackagingCatalogPage() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-4">
            Packaging Catalog
          </div>
          <h1 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-3">Packaging Options</h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl">
            Browse retail, bulk, and private-label packaging formats for Himalayan salt products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packagingItems.map((item) => (
            <Link
              key={item.slug}
              to={`/packaging/catalog/${item.slug}`}
              className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] bg-stone-50 dark:bg-stone-800 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                  {item.category}
                </div>
                <h2 className="text-2xl text-stone-900 dark:text-white mt-3 mb-3">{item.name}</h2>
                <p className="text-stone-600 dark:text-stone-300 mb-4">{item.description}</p>
                <div className="text-sm text-[#3D9B93]">View details →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
