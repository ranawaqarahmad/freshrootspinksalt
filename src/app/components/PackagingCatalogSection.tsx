import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { packagingItems } from '../../data/packaging';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface PackagingCatalogSectionProps {
  columns?: 2 | 3 | 4;
  showAll?: boolean;
  enableLoadMore?: boolean;
  pageSize?: number;
}

export function PackagingCatalogSection({
  columns = 4,
  showAll = false,
  enableLoadMore = false,
  pageSize = 8,
}: PackagingCatalogSectionProps) {
  const [visibleCount, setVisibleCount] = useState(
    showAll ? packagingItems.length : Math.min(pageSize, packagingItems.length)
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showAll) {
      setVisibleCount(packagingItems.length);
      return;
    }
    setVisibleCount(Math.min(pageSize, packagingItems.length));
  }, [showAll, pageSize]);

  const gridClass =
    columns === 3
      ? 'grid md:grid-cols-2 lg:grid-cols-3'
      : columns === 2
        ? 'grid md:grid-cols-2'
        : 'grid md:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="py-20 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-4">
              Packaging Catalog
            </div>
            <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-3">
              Explore Our Packaging Options
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl">
              Retail pouches, jars, grinder bottles, bulk bags, and private label kits designed for
              export compliance and market-ready presentation.
            </p>
          </div>
          <Link
            to="/packaging"
            className={`bg-[#3D9B93] text-white px-6 py-3 rounded-lg hover:bg-[#348780] transition-colors ${
              columns === 3 || showAll || enableLoadMore ? 'hidden' : ''
            }`}
          >
            View Full Catalog
          </Link>
        </div>

        <div className={`${gridClass} gap-6`}>
          {(showAll
            ? packagingItems
            : enableLoadMore
              ? packagingItems.slice(0, visibleCount)
              : columns >= 4
                ? packagingItems.slice(0, 4)
                : packagingItems
          ).map((item) => (
            <Link
              key={item.slug}
              to={`/packaging/catalog/${item.slug}`}
              className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
            >
              <div className="aspect-[4/3] bg-stone-50 dark:bg-stone-800 overflow-hidden">
                <ImageWithSkeleton
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  wrapperClassName="h-full w-full"
                  imgClassName="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                  {item.category}
                </div>
                <h3 className="text-lg text-stone-900 dark:text-white mt-2 mb-2">{item.name}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-300">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {enableLoadMore && visibleCount < packagingItems.length ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                window.setTimeout(() => {
                  setVisibleCount((count) =>
                    Math.min(count + pageSize, packagingItems.length)
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
      </div>
    </section>
  );
}
