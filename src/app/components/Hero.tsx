import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import edibleSaltImage from '../../assets/edible_and_culinary_salt.jpg';

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-stone-50 to-white dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#3D9B93]/10 border border-[#3D9B93]/20 px-4 py-2 rounded-full">
              <span className="text-sm text-[#3D9B93]">
                B2B Trading & Export Company
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl text-stone-900 dark:text-white leading-tight">
                B2B Exporters of
                <span className="block text-[#3D9B93] mt-2">
                  Himalayan Pink Salt
                </span>
                <span className="block text-stone-700 dark:text-stone-300 text-3xl lg:text-4xl mt-2">
                  from Pakistan
                </span>
              </h1>
              
              <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">
                Fresh Roots Pink Salt is a Pakistan-based Himalayan Pink Salt trading company
                specializing in sourcing and supplying premium-quality pink salt products to
                international B2B buyers. We work closely with verified manufacturers and
                processing units located near the Himalayan salt range to ensure consistent
                quality, ethical sourcing, and export-ready supply. Our role as a trader allows
                us to offer flexibility, multiple product ranges, customized packaging, and
                reliable delivery solutions while maintaining full transparency in our business
                operations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/rfq"
                className="group bg-[#E88B7F] text-white px-8 py-4 rounded-lg hover:bg-[#d97a6e] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products"
                className="bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 px-8 py-4 rounded-lg border-2 border-stone-200 dark:border-stone-700 hover:border-[#3D9B93] transition-colors"
              >
                View Products
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-900 dark:text-stone-100 font-medium">Verified Sourcing</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">From trusted manufacturers</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-900 dark:text-stone-100 font-medium">Export Ready</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">Full documentation support</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-900 dark:text-stone-100 font-medium">Quality Inspection</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">Pre-shipment checks</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#3D9B93] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-900 dark:text-stone-100 font-medium">Custom Packaging</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">Private label available</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={edibleSaltImage}
                alt="Himalayan Mountains"
                className="w-full h-[600px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /> */}
            </div>
            
            {/* Floating info card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-900 p-6 rounded-xl shadow-xl border border-stone-100 dark:border-stone-800 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#3D9B93]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏔️</span>
                </div>
                <div>
                  <div className="text-stone-900 dark:text-stone-100 font-semibold">Sourced from Pakistan</div>
                  <div className="text-sm text-stone-600 dark:text-stone-400">Himalayan Salt Mines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
