import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Home Chef',
    rating: 5,
    text: 'This pink salt has completely transformed my cooking! The flavor is incredible and I love knowing I\'m adding essential minerals to every meal. Absolutely the best salt I\'ve ever used.',
    avatar: '👩‍🍳'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Wellness Enthusiast',
    rating: 5,
    text: 'I use these bath salts weekly and they\'re amazing for relaxation. The quality is exceptional and you can really feel the difference compared to regular bath salts.',
    avatar: '🧘‍♂️'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Restaurant Owner',
    rating: 5,
    text: 'We\'ve been using Pure Pink Salt in our restaurant for 6 months now. Our customers love it and it\'s become a signature element of our dishes. The coarse crystals are perfect!',
    avatar: '👩‍💼'
  },
  {
    id: 4,
    name: 'David Martinez',
    role: 'Fitness Coach',
    rating: 5,
    text: 'As a fitness coach, I recommend this salt to all my clients. The mineral content is fantastic for hydration and recovery. It\'s a small change that makes a big difference.',
    avatar: '💪'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
            Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">What Our Customers Say</h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made the switch to premium pink salt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-rose-300 mb-4" strokeWidth={1.5} />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              
              <p className="text-stone-200 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-6 border-t border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-stone-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl text-rose-400 mb-2">10K+</div>
            <div className="text-stone-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-rose-400 mb-2">4.9★</div>
            <div className="text-stone-300">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-rose-400 mb-2">100%</div>
            <div className="text-stone-300">Natural & Pure</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-rose-400 mb-2">24/7</div>
            <div className="text-stone-300">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
