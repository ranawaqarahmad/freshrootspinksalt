import { Link, useParams } from 'react-router-dom';
import { packagingItems } from '../../data/packaging';

export default function PackagingDetailPage() {
  const { slug } = useParams();
  const item = packagingItems.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 text-center">
            <h1 className="text-2xl text-stone-900 dark:text-white mb-2">Packaging item not found</h1>
            <p className="text-stone-600 dark:text-stone-300 mb-6">
              The packaging item you are looking for does not exist.
            </p>
            <Link
              to="/packaging"
              className="inline-flex items-center justify-center bg-[#3D9B93] text-white px-6 py-3 rounded-lg hover:bg-[#348780] transition-colors"
            >
              Back to Packaging
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/packaging" className="text-sm text-stone-500 dark:text-stone-400">
          ← Back to Packaging
        </Link>
        <div className="mt-6 mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            {item.category}
          </div>
          <h1 className="text-4xl text-stone-900 dark:text-white mt-3">{item.name}</h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 mt-4">{item.description}</p>
        </div>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white dark:bg-stone-950">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
              <h2 className="text-lg text-stone-900 dark:text-white mb-4">Quick Specs</h2>
              <div className="space-y-3 text-stone-600 dark:text-stone-300">
                <div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">Weight / Range</div>
                  <div>{item.range}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">Material / Detail</div>
                  <div>{item.material}</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
              <h2 className="text-lg text-stone-900 dark:text-white mb-4">Highlights</h2>
              <ul className="space-y-2 text-stone-600 dark:text-stone-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
            <Link
              to="/rfq"
              className="inline-flex items-center justify-center bg-[#E88B7F] text-white px-6 py-3 rounded-lg hover:bg-[#d97a6e] transition-colors"
            >
              Request Packaging Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
