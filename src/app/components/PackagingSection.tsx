import { ImageWithFallback } from './figma/ImageWithFallback';
import { Box, Tag, Palette, Truck } from 'lucide-react';
import rawIndustrialImage from '../../assets/raw_industrial_salt.jpg';
export function PackagingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E88B7F]/10 text-[#E88B7F] px-4 py-2 rounded-full text-sm mb-6">
            Value Addition
          </div>
          <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-4">
            Packaging & Private Label Services
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Our packaging solutions are tailored to meet product type, buyer needs, and international
            shipping requirements. Bulk packaging includes polypropylene (PP) woven bags equipped with
            inner liners to ensure protection from moisture and contamination during long-distance
            transport. For retail markets, we offer stand-up pouches, zipper pouches, and consumer
            bottles that are attractive and durable. Premium packaging options include jars and grinder
            bottles for culinary applications and decorative gift boxes for décor products. We also
            provide custom printing and private-label packaging upon request to help brands present
            their products professionally in target markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#3D9B93]/10 rounded-xl flex items-center justify-center">
                  <Box className="w-7 h-7 text-[#3D9B93]" />
                </div>
                <h3 className="text-2xl text-stone-900 dark:text-white">Retail Packaging</h3>
              </div>
              <ul className="space-y-3 text-stone-600 dark:text-stone-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#3D9B93]">•</span>
                  <span>100g, 250g, 500g, 1kg retail pouches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3D9B93]">•</span>
                  <span>Stand-up pouches with resealable zippers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3D9B93]">•</span>
                  <span>Glass jars and shaker bottles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3D9B93]">•</span>
                  <span>Premium gift boxes and sets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3D9B93]">•</span>
                  <span>Custom shapes and sizes available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#E88B7F]/10 rounded-xl flex items-center justify-center">
                  <Truck className="w-7 h-7 text-[#E88B7F]" />
                </div>
                <h3 className="text-2xl text-stone-900 dark:text-white">Bulk Packaging</h3>
              </div>
              <ul className="space-y-3 text-stone-600 dark:text-stone-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#E88B7F]">•</span>
                  <span>25kg, 50kg PP woven bags</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E88B7F]">•</span>
                  <span>Palletized and shrink-wrapped loads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E88B7F]">•</span>
                  <span>Wooden crates for fragile items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E88B7F]">•</span>
                  <span>Container loading supervision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E88B7F]">•</span>
                  <span>Export-standard packaging materials</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={rawIndustrialImage}
              alt="Product Packaging"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#3D9B93] to-[#348780] rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Palette className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl mb-2">Private Label & White Label</h3>
                <p className="text-white/90">Build your brand with our support</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  What We Offer
                </h4>
                <ul className="space-y-3 text-white/90">
                  <li>→ Your brand name and logo on packaging</li>
                  <li>→ Custom label design and printing</li>
                  <li>→ Barcode and QR code integration</li>
                  <li>→ Multi-language labeling support</li>
                  <li>→ Nutritional information formatting</li>
                  <li>→ Country-specific compliance labeling</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl mb-4 flex items-center gap-2">
                  <Box className="w-5 h-5" />
                  Buyer Responsibilities
                </h4>
                <ul className="space-y-3 text-white/90">
                  <li>→ Provide brand artwork and specifications</li>
                  <li>→ Confirm label content and legal requirements</li>
                  <li>→ Approve packaging samples before production</li>
                  <li>→ Provide trademark authorization if required</li>
                  <li>→ Specify country-specific regulations</li>
                  <li>→ Minimum order quantities apply</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
              <p className="text-sm text-white/90">
                <strong className="text-white">Note:</strong> Private labeling requires advance coordination 
                and may have minimum order quantity requirements. Contact us for detailed discussion 
                about your branding needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
