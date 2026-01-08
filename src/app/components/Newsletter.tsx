import { Mail, Gift } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728234553997-f71b87a44e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbWluZXJhbHN8ZW58MXx8fHwxNzY3MDM0MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Gift className="w-5 h-5" />
                <span>Exclusive Offer</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl mb-4">
                Get 15% Off Your First Order
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Subscribe to our newsletter and receive exclusive deals, recipes, 
                and wellness tips straight to your inbox.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Exclusive discounts and early access to new products</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Healthy recipes and cooking tips</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Wellness guides and mineral benefits</span>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl text-stone-900 mb-6">Join Our Community</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-stone-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-stone-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-rose-500 border-stone-300 rounded focus:ring-rose-400"
                    />
                    <label htmlFor="terms" className="text-sm text-stone-600">
                      I agree to receive marketing emails and understand I can unsubscribe at any time
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Subscribe & Save 15%
                  </button>
                  
                  <p className="text-xs text-stone-500 text-center">
                    Your information is safe with us. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
