import { CheckCircle2, Users, Globe, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-6">
              Who We Are
            </div>
            <h2 className="text-4xl lg:text-5xl text-stone-900 mb-6">
              Professional Trading & Export Company
            </h2>
            <div className="space-y-4 text-lg text-stone-600 leading-relaxed">
              <p>
                We are a <strong className="text-stone-900">B2B trading and export company</strong> specializing 
                in Himalayan Pink Salt products, sourced from verified manufacturers and processing 
                units in Pakistan, and supplied to international wholesale buyers.
              </p>
              <p>
                <strong className="text-stone-900">Important:</strong> We do not claim to be 
                manufacturers or mine owners. Our strength lies in our robust sourcing network, 
                quality inspection protocols, export documentation expertise, and custom packaging 
                coordination.
              </p>
              <p>
                This transparent and ethical approach has made us a trusted partner for serious 
                international importers, distributors, and private-label buyers who value honesty 
                and professional service.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-[#3D9B93]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#3D9B93]" />
                </div>
                <div>
                  <h4 className="text-stone-900 mb-1">Verified Suppliers</h4>
                  <p className="text-sm text-stone-600">Strict vetting process</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-200">
                <div className="w-12 h-12 bg-[#3D9B93]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#3D9B93]" />
                </div>
                <div>
                  <h4 className="text-stone-900 mb-1">Quality Control</h4>
                  <p className="text-sm text-stone-600">Pre-shipment inspection</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#E88B7F]/10 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#E88B7F]" />
                </div>
                <h3 className="text-2xl text-stone-900">Our Strengths</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">Strong sourcing network across Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">Comprehensive quality inspection protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">Export documentation and compliance expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">Custom packaging and private labeling services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">Transparent and ethical business practices</span>
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
