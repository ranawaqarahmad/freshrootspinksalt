import { FileText, Globe, Ship, CheckCircle2 } from 'lucide-react';

export function ExportCompliance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-6">
            Export Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl text-stone-900 mb-4">Export & Compliance</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive export support and compliance assistance to ensure smooth 
            international transactions and customs clearance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-[#3D9B93]/10 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-[#3D9B93]" />
            </div>
            <h3 className="text-xl text-stone-900 mb-3">Export Documentation</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Commercial Invoice</li>
              <li>• Packing List</li>
              <li>• Certificate of Origin</li>
              <li>• Bill of Lading / Airway Bill</li>
              <li>• Phytosanitary Certificate</li>
            </ul>
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-[#E88B7F]/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-[#E88B7F]" />
            </div>
            <h3 className="text-xl text-stone-900 mb-3">HS Code Support</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Product classification</li>
              <li>• Duty calculation assistance</li>
              <li>• Country-specific codes</li>
              <li>• Tariff information</li>
              <li>• Trade agreement guidance</li>
            </ul>
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-[#3D9B93]/10 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-7 h-7 text-[#3D9B93]" />
            </div>
            <h3 className="text-xl text-stone-900 mb-3">Quality Certificates</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• Food Safety Certificates</li>
              <li>• Lab Test Reports</li>
              <li>• Heavy Metal Analysis</li>
              <li>• Microbiology Reports</li>
              <li>• Halal Certification (if req.)</li>
            </ul>
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-[#E88B7F]/10 rounded-xl flex items-center justify-center mb-6">
              <Ship className="w-7 h-7 text-[#E88B7F]" />
            </div>
            <h3 className="text-xl text-stone-900 mb-3">Shipping Terms</h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li>• FOB (Free on Board)</li>
              <li>• CFR (Cost and Freight)</li>
              <li>• CIF (Cost, Insurance, Freight)</li>
              <li>• EXW (Ex Works)</li>
              <li>• Custom arrangements</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-10 rounded-2xl text-white">
            <h3 className="text-3xl mb-6">Country-Specific Compliance</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Different countries have different import regulations for food products. 
              We help navigate these requirements to ensure smooth customs clearance.
            </p>
            
            <div className="space-y-4">
              <div className="p-5 bg-white/10 rounded-xl border border-white/20">
                <h4 className="text-lg mb-2">USA & Canada</h4>
                <p className="text-sm text-white/80">FDA registration, nutritional labeling, country of origin marking</p>
              </div>
              
              <div className="p-5 bg-white/10 rounded-xl border border-white/20">
                <h4 className="text-lg mb-2">European Union</h4>
                <p className="text-sm text-white/80">EU food safety standards, REACH compliance, labeling regulations</p>
              </div>
              
              <div className="p-5 bg-white/10 rounded-xl border border-white/20">
                <h4 className="text-lg mb-2">Middle East</h4>
                <p className="text-sm text-white/80">Halal certification, SASO/GSO standards, Arabic labeling</p>
              </div>
              
              <div className="p-5 bg-white/10 rounded-xl border border-white/20">
                <h4 className="text-lg mb-2">Asia Pacific</h4>
                <p className="text-sm text-white/80">Country-specific food import licenses, quarantine requirements</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#E88B7F]/10 border border-[#E88B7F]/20 p-10 rounded-2xl mb-6">
              <h3 className="text-3xl text-stone-900 mb-6">Our Export Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E88B7F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="text-lg text-stone-900 mb-1">RFQ Submission</h4>
                    <p className="text-stone-600">Buyer submits detailed quotation request</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E88B7F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="text-lg text-stone-900 mb-1">Quote & Samples</h4>
                    <p className="text-stone-600">We provide pricing and product samples</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E88B7F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="text-lg text-stone-900 mb-1">Contract Agreement</h4>
                    <p className="text-stone-600">Terms, specifications, and payment agreed</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E88B7F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">4</div>
                  <div>
                    <h4 className="text-lg text-stone-900 mb-1">Production & QC</h4>
                    <p className="text-stone-600">Order fulfillment with quality checks</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E88B7F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">5</div>
                  <div>
                    <h4 className="text-lg text-stone-900 mb-1">Documentation</h4>
                    <p className="text-stone-600">All export documents prepared</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E88B7F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">6</div>
                  <div>
                    <h4 className="text-lg text-stone-900 mb-1">Shipment</h4>
                    <p className="text-stone-600">Cargo dispatched with tracking details</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-[#3D9B93] p-8 rounded-2xl text-white">
              <h4 className="text-2xl mb-4">Payment Terms</h4>
              <p className="text-white/90 mb-4">
                We offer flexible payment terms based on order value and buyer relationship:
              </p>
              <ul className="space-y-2 text-white/90">
                <li>• Letter of Credit (L/C)</li>
                <li>• Telegraphic Transfer (T/T)</li>
                <li>• 30% advance, 70% before shipment</li>
                <li>• Other terms negotiable for established buyers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
