import { ShieldCheck, PackageCheck, Handshake, Truck, ClipboardCheck, Globe } from 'lucide-react';

const reasons = [
  {
    title: 'Direct Sourcing Network',
    description: 'Established supplier relationships near the Himalayan salt range for stable availability.',
    icon: Globe,
  },
  {
    title: 'Quality Assurance',
    description: 'Multi-stage inspection and documentation to keep quality consistent across batches.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible Packaging',
    description: 'Retail, bulk, and private-label options tailored to buyer requirements.',
    icon: PackageCheck,
  },
  {
    title: 'Export Compliance',
    description: 'Accurate labeling, export documentation, and regulatory checks before shipment.',
    icon: ClipboardCheck,
  },
  {
    title: 'Reliable Logistics',
    description: 'Clear timelines and shipment coordination for international delivery.',
    icon: Truck,
  },
  {
    title: 'Partner-Focused Support',
    description: 'Responsive communication and long-term relationship building.',
    icon: Handshake,
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-4">
            Why Choose Fresh Roots Pink Salt
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Built for wholesale buyers, distributors, and private-label brands that need reliable
            quality and export-ready supply.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#E88B7F]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#E88B7F]" />
                </div>
                <h3 className="text-xl text-stone-900 dark:text-white mb-2">{reason.title}</h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
