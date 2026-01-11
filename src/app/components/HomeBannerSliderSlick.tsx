import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import edibleSaltImage from '../../assets/edible-pink-salt-fine.jpg';
import animalLickImage from '../../assets/animal-lick-pink-salt.jpg';
import tilesBricksImage from '../../assets/tiles-bricks.jpg';

const slides = [
  {
    title: 'Premium Himalayan Pink Salt',
    subtitle: 'B2B Trading & Export Excellence',
    description: 'Your trusted partner for wholesale Himalayan salt products worldwide.',
    image: "https://images.unsplash.com/photo-1673158190416-014a4ef78f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBzYWx0JTIwY3J5c3RhbHN8ZW58MXx8fHwxNzY4MTU4Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: 'Direct from Pakistan',
    subtitle: 'Authentic Himalayan Salt Sourcing',
    description: 'Verified sourcing from trusted manufacturers with quality assurance.',
    image: "https://images.unsplash.com/photo-1715338385730-2329158cf659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWx0JTIwbWluaW5nJTIwcGFraXN0YW58ZW58MXx8fHwxNzY4MTU4Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: '25+ Product Varieties',
    subtitle: '7 Product Categories Available',
    description: 'From edible salt to decorative items — a complete range for your business.',
    image: "https://images.unsplash.com/photo-1730397188704-0e6c9670b1b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc2FsdCUyMHByb2R1Y3RzfGVufDF8fHx8MTc2ODE1ODM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function HomeBannerSliderSlick() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    pauseOnHover: true,
    arrows: false,
  } as const;

  return (
    <section className="pt-38 pb-6 bg-gradient-to-br from-stone-50 to-white dark:from-stone-950 dark:to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 dark:border-stone-800">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <div key={slide.title} className="relative">
                <div className="relative h-[360px] sm:h-[420px] lg:h-[460px]">
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                  </div>
                  <div className="relative h-full flex items-center px-8 sm:px-12 lg:px-16">
                    <div className="max-w-2xl space-y-4 sm:space-y-6 text-white">
                      <div className="inline-flex items-center gap-2 bg-[#3D9B93]/20 backdrop-blur-sm border border-[#3D9B93]/30 px-4 py-2 rounded-full text-sm">
                        {slide.subtitle}
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-4 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-4 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
