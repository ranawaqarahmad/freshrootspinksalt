import { Target, Eye } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-6">
            Our Mission & Vision
          </div>
          <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-4">
            Purpose That Guides Every Shipment
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            We focus on long-term partnerships, reliable sourcing, and consistent quality across
            every order.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#E88B7F]/10 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-[#E88B7F]" />
              </div>
              <h3 className="text-2xl text-stone-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              To deliver premium Himalayan Pink Salt with dependable quality, transparent sourcing,
              and export-ready packaging that helps our partners grow with confidence.
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#3D9B93]/10 rounded-xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-[#3D9B93]" />
              </div>
              <h3 className="text-2xl text-stone-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              To be the most trusted global partner for Himalayan Pink Salt by setting new standards
              in quality consistency, supply reliability, and customer care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
