import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, ClipboardCheck, Package, CheckCircle2 } from 'lucide-react';
import spaWellnessImage from '../../assets/spa_and_wellness.jpg';
export function SourcingQuality() {
  const processes = [
    {
      icon: Search,
      title: "Supplier Selection",
      description: "Rigorous vetting of manufacturers and processing units based on facility standards, certifications, and production capabilities."
    },
    {
      icon: ClipboardCheck,
      title: "Quality Inspection",
      description: "On-site inspection of raw materials, processing methods, hygiene standards, and finished product quality before sourcing."
    },
    {
      icon: Package,
      title: "Packaging Supervision",
      description: "Oversight of packaging quality, labeling accuracy, and compliance with international packaging standards."
    },
    {
      icon: CheckCircle2,
      title: "Pre-Shipment Checks",
      description: "Final quality verification, documentation review, and compliance confirmation before shipment to ensure buyer satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3D9B93]/10 text-[#3D9B93] px-4 py-2 rounded-full text-sm mb-6">
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-4">
            Sourcing & Quality Control
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Fresh Roots Pink Salt adheres to a structured sourcing and quality supervision model. All
            products undergo inspection at multiple stages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div
                key={index}
                className="relative bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3D9B93] to-[#348780] rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-sm text-[#3D9B93] mb-2">Step {index + 1}</div>
                  <h3 className="text-xl text-stone-900 dark:text-white mb-3">{process.title}</h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{process.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={spaWellnessImage}
              alt="Quality Control"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl text-stone-900 dark:text-white mb-6">Why Our Process Matters</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E88B7F] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg text-stone-900 dark:text-white mb-2">Consistency</h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    Our supplier vetting ensures consistent quality across all orders, 
                    regardless of batch or season.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E88B7F] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg text-stone-900 dark:text-white mb-2">Transparency</h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    We provide complete transparency about sourcing locations, processing 
                    methods, and quality metrics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E88B7F] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg text-stone-900 dark:text-white mb-2">Risk Mitigation</h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    Pre-shipment verification minimizes the risk of quality issues, 
                    delays, or compliance problems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#E88B7F] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg text-stone-900 dark:text-white mb-2">Buyer Confidence</h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    Our systematic approach gives international buyers confidence in 
                    product quality and delivery reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
