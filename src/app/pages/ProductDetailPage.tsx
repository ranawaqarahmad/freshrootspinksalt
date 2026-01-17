import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { packagingItems } from '../../data/packaging';
import defaultProductImage from '../../assets/edible-pink-salt-fine.jpg';
import { Package, ShoppingBag, Star, Truck } from 'lucide-react';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <div className="pt-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 text-center">
            <h1 className="text-2xl text-stone-900 dark:text-white mb-2">Product not found</h1>
            <p className="text-stone-600 dark:text-stone-300 mb-6">
              The product you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-[#3D9B93] text-white px-6 py-3 rounded-lg hover:bg-[#348780] transition-colors"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const gallery = product.images?.length ? product.images : [product.image ?? defaultProductImage];
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const relatedPackaging = packagingItems.filter((item) => item.appliesTo.includes(product.category));


  return (
    <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-4">
            {product.category}
          </div>
          <h1 className="text-4xl sm:text-5xl text-stone-900 dark:text-white">{product.name}</h1>
          <p className="text-stone-600 dark:text-stone-300 mt-3 max-w-3xl">
            Export-ready Himalayan pink salt with flexible packaging and reliable supply support.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="space-y-6">
            <div>
              <div className="relative aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-white dark:bg-stone-950">
                <Link
                  to="/products"
                  className="absolute left-4 top-4 z-10 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/90 text-stone-700 hover:text-[#3D9B93] hover:border-[#3D9B93] transition-colors h-10 w-10 shadow-sm"
                  aria-label="Back to Products"
                >
                  <span aria-hidden="true">←</span>
                </Link>
                <img
                  src={activeImage}
                  alt={product.name}
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              {gallery.length > 1 ? (
                <div className="mt-4 flex gap-3">
                  {gallery.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`h-16 w-16 rounded-xl border ${activeImage === image
                        ? 'border-[#3D9B93]'
                        : 'border-stone-200 dark:border-stone-800'
                        } bg-white dark:bg-stone-950 overflow-hidden`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-stone-950 rounded-2xl p-6 ring-1 ring-stone-200/70 dark:ring-stone-800">
              <h2 className="text-lg text-stone-900 dark:text-white mb-4">Quick Specs</h2>
              <div className="grid gap-4 text-stone-700 dark:text-stone-200">
                <div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">Size / Detail</div>
                  <div className="mt-1">{product.size}</div>
                </div>
                <div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">Packaging Options</div>
                  <div className="mt-1">{product.packaging}</div>
                </div>
                {product.shade ? (
                  <div>
                    <div className="text-sm text-stone-500 dark:text-stone-400">Salt Shade</div>
                    <div className="mt-1 capitalize">{product.shade}</div>
                  </div>
                ) : null}
              </div>
            </div>

            {product.description ? (
              <div className="bg-stone-50 dark:bg-stone-900 rounded-2xl p-6">
                <h2 className="text-lg text-stone-900 dark:text-white mb-4">Product Overview</h2>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ) : null}

            {/* <div className="bg-stone-50 dark:bg-stone-900 rounded-2xl p-6">
              <h2 className="text-lg text-stone-900 dark:text-white mb-4">Packaging Formats</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Bulk', icon: Package },
                  { label: 'Retail', icon: ShoppingBag },
                  { label: 'Premium', icon: Star },
                  { label: 'Export', icon: Truck },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-950 px-3 py-3"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[#E88B7F]/15 text-[#E88B7F] flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-stone-700 dark:text-stone-200">{label}</div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="bg-[#E88B7F]/10 rounded-2xl p-6 ring-1 ring-[#E88B7F]/20">
              <h2 className="text-lg text-stone-900 dark:text-white mb-4">Request a Quote</h2>
              <p className="text-stone-600 dark:text-stone-300 mb-6">
                Share your quantity, packaging preferences, and destination to receive a tailored quote.
              </p>
              <Link
                to="/rfq"
                className="inline-flex items-center justify-center bg-[#E88B7F] text-white px-6 py-3 rounded-lg hover:bg-[#d97a6e] transition-colors"
              >
                Start RFQ
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-4">
                Packaging Options
              </div>
              <h2 className="text-3xl text-stone-900 dark:text-white mb-2">
                Related Packaging for This Product
              </h2>
              <p className="text-stone-600 dark:text-stone-300 max-w-2xl">
                Choose from export-ready bulk, retail, and premium packaging formats. We will align
                packaging based on your market and compliance needs.
              </p>
            </div>
            <Link
              to="/packaging"
              className="inline-flex items-center justify-center rounded-lg border border-stone-200 dark:border-stone-800 px-5 py-2.5 text-sm text-stone-700 dark:text-stone-200 hover:border-[#3D9B93] hover:text-[#3D9B93] transition-colors"
            >
              View Full Packaging Catalog
            </Link>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
            {(relatedPackaging.length ? relatedPackaging : packagingItems).slice(0, 4).map((item) => (
              <Link
                key={item.slug}
                to={`/packaging/catalog/${item.slug}`}
                className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-stone-50 dark:bg-stone-800 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                    {item.category}
                  </div>
                  <h3 className="text-lg text-stone-900 dark:text-white mt-2 mb-2">{item.name}</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 mb-3">{item.description}</p>
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    {item.range}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
