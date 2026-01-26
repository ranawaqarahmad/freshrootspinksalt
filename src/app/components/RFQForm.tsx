import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { categories } from '../../data/products';

export function RFQForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    category: '',
    productDetails: '',
    quantity: '',
    packaging: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatusMessage('Thank you for your quote request. We will contact you within 24 hours.');
      setCaptchaToken(null);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        category: '',
        productDetails: '',
        quantity: '',
        packaging: '',
        additionalInfo: ''
      });
    } catch (error) {
      setStatusMessage('Sorry, something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-white dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E88B7F]/10 text-[#E88B7F] px-4 py-2 rounded-full text-sm mb-6">
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-5xl text-stone-900 dark:text-white mb-4">Request for Quotation (RFQ)</h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Fill out the form below with your requirements and our export team will 
            respond with a detailed quotation within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#3D9B93] to-[#348780] p-8 rounded-2xl text-white">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Email</div>
                    <a href="mailto:info@freshrootspinksalt.com" className="text-white hover:text-white/90">
                      info@freshrootspinksalt.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Phone</div>
                    <a href="tel:+92" className="text-white hover:text-white/90">
                      +92 XXX XXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Address</div>
                    <div className="text-white">
                      [Your Address]<br />
                      Pakistan
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E88B7F]/10 border border-[#E88B7F]/20 p-8 rounded-2xl">
              <h4 className="text-xl text-stone-900 dark:text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-stone-600 dark:text-stone-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-4">
                Pakistan Standard Time (PKT - GMT+5)
              </p>
            </div>

            <div className="bg-stone-100 dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
              <p className="text-sm text-stone-700 dark:text-stone-300">
                <strong>Note:</strong> For urgent inquiries, please contact us directly 
                via phone or WhatsApp. We typically respond to RFQs within 24 business hours.
              </p>
            </div>
          </div>

          {/* RFQ Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                    placeholder="+1 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Country / Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                    placeholder="Destination country"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Product Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                  Product Details *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.productDetails}
                  onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                  placeholder="Specify product names, sizes, grain types, etc."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Quantity Required *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                    placeholder="e.g., 5000 kg, 1 container"
                  />
                </div>

                <div>
                  <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                    Packaging Preference
                  </label>
                  <select
                    value={formData.packaging}
                    onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                  >
                    <option value="">Select packaging</option>
                    <option value="retail">Retail Packaging</option>
                    <option value="bulk">Bulk Packaging</option>
                    <option value="private-label">Private Label</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D9B93] focus:border-transparent"
                  placeholder="Target price, preferred shipping terms, certification requirements, delivery timeline, etc."
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                  Verification
                </label>
                <HCaptcha
                  sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY || ''}
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken(null)}
                  theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E88B7F] text-white px-8 py-4 rounded-lg hover:bg-[#d97a6e] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70"
                disabled={isSubmitting || !captchaToken}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Submitting...' : 'Submit RFQ'}
              </button>

              {statusMessage ? (
                <p className="text-sm text-stone-600 dark:text-stone-300 text-center mt-4">
                  {statusMessage}
                </p>
              ) : null}

              <p className="text-sm text-stone-500 dark:text-stone-400 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
