import { Link, useParams } from 'react-router-dom';
import { products } from '../../data/products';

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

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-stone-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-sm text-[#3D9B93] font-semibold">{product.category}</div>
            <h1 className="text-4xl text-stone-900 dark:text-white mt-2">{product.name}</h1>
          </div>
          <Link
            to="/products"
            className="text-stone-600 dark:text-stone-300 hover:text-[#3D9B93] transition-colors"
          >
            Back to Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
            <h2 className="text-lg text-stone-900 dark:text-white mb-4">Product Details</h2>
            <div className="space-y-4 text-stone-700 dark:text-stone-200">
              <div>
                <div className="text-sm text-stone-500 dark:text-stone-400">Size / Detail</div>
                <div>{product.size}</div>
              </div>
              <div>
                <div className="text-sm text-stone-500 dark:text-stone-400">Packaging Options</div>
                <div>{product.packaging}</div>
              </div>
              {product.description ? (
                <div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">Description</div>
                  <div>{product.description}</div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm">
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
    </div>
  );
}
