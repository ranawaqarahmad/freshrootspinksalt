import { CheckCircle2, Users, Globe, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-6">
              Who We Are
            </div>
            <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-6">
              Professional Trading & Export Company
            </h2>
            <div className="space-y-4 text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              <p>
                Fresh Roots Pink Salt is a Pakistan-based Himalayan Pink Salt export company supplying
                a comprehensive range of salt products for culinary, wellness, decorative, animal
                nutrition, and industrial applications. We work in close coordination with established
                sourcing and processing partners near the Himalayan salt range to ensure consistent
                quality, reliable availability, and export-ready products.
              </p>
              <p>
                Our role extends across product selection, quality supervision, packaging solutions,
                and international order fulfillment. By understanding the specific needs of global
                buyers, we offer flexible product options, multiple packaging formats, and customized
                supply solutions that support wholesalers, distributors, and private-label brands. Our
                approach is built on transparency, quality focus, and long-term business relationships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4 p-5 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800">
                <div className="w-12 h-12 bg-[#3D9B93]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#3D9B93]" />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white mb-1">Verified Suppliers</h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Strict vetting process</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800">
                <div className="w-12 h-12 bg-[#3D9B93]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#3D9B93]" />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white mb-1">Quality Control</h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Pre-shipment inspection</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#E88B7F]/10 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#E88B7F]" />
                </div>
                <h3 className="text-2xl text-stone-900 dark:text-white">Our Strengths</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600 dark:text-stone-300">Strong sourcing network across Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600 dark:text-stone-300">Comprehensive quality inspection protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600 dark:text-stone-300">Export documentation and compliance expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600 dark:text-stone-300">Custom packaging and private labeling services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600 dark:text-stone-300">Transparent and ethical business practices</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#3D9B93] to-[#348780] p-8 rounded-2xl text-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-2xl">Our Target Markets</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white/90">→</span>
                  <span className="text-white/90">International Importers & Distributors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90">→</span>
                  <span className="text-white/90">Wholesale Buyers & Retail Chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90">→</span>
                  <span className="text-white/90">Private Label & White Label Buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90">→</span>
                  <span className="text-white/90">Spa, Wellness & Construction Material Buyers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
