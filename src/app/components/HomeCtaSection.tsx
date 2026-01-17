import { Link } from 'react-router-dom';

export function HomeCtaSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xl">
          <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[#3D9B93]/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[#E88B7F]/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center p-10 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-6">
                Start an Export Conversation
              </div>
              <h2 className="text-3xl md:text-4xl text-stone-900 dark:text-white mb-4">
                Work With Fresh Roots Pink Salt
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-8">
                We welcome importers, distributors, wholesalers, and private label brands to connect with
                us for detailed product catalogs, pricing, MOQ options, and customized supply solutions.
                Whether you are sourcing edible salt, wellness grinds, decorative items, or industrial
                grades, Fresh Roots Pink Salt is positioned to support your business with quality,
                transparency, and reliability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/rfq"
                  className="inline-flex items-center justify-center bg-[#E88B7F] text-white px-8 py-3 rounded-lg hover:bg-[#d97a6e] transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200 px-8 py-3 rounded-lg hover:border-[#3D9B93] hover:text-[#3D9B93] transition-colors"
                >
                  View Products
                </Link>
              </div>
            </div>

            <div className="bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-4">
                What you receive
              </div>
              <ul className="space-y-3 text-stone-700 dark:text-stone-200">
                <li>• Category-wise product catalog</li>
                <li>• MOQ guidance and price ranges</li>
                <li>• Packaging & private label options</li>
                <li>• Export documentation support</li>
              </ul>
              <div className="mt-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 px-4 py-3 text-sm text-stone-600 dark:text-stone-300">
                Typical response time: 24 business hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
