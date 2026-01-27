import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { imageUrls } from "../../data/imageUrls";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

const slides = [
  {
    title: "Your Trusted Partner for Himalayan Pink Salt Exports",
    subtitle: "B2B Trading & Export Company • Pakistan",
    description:
      "We source premium Himalayan pink salt through verified processing partners and deliver export-ready supply with full transparency.",
    image: imageUrls.banner1,
  },
  {
    title: "Responsible Sourcing, Reliable Supply",
    subtitle: "Verified Manufacturers • Quality Supervision",
    description:
      "Our team manages product selection, inspection, and packaging oversight to ensure consistent quality for global buyers.",
    image: imageUrls.banner2,
  },
  {
    title: "Complete Product Range for Global Buyers",
    subtitle: "Edible • Wellness • Decor • Industrial",
    description:
      "From culinary grades to salt tiles and animal lick blocks, we supply tailored solutions for wholesale and private-label brands.",
    image: imageUrls.banner3,
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
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    pauseOnHover: true,
    arrows: false,
  } as const;

  return (
    <section className="pt-32 sm:pt-36 lg:pt-40 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 dark:border-stone-800">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <div key={slide.title} className="relative">
                <div className="relative h-[360px] max-[380px]:h-[420px] sm:h-[420px] lg:h-[480px]">
                  <div className="absolute inset-0">
                    <ImageWithSkeleton
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                      decoding="async"
                      wrapperClassName="w-full h-full"
                      imgClassName="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                  </div>
                  <div className="relative h-full flex items-center px-6 sm:px-12 lg:px-16">
                    <div className="max-w-2xl space-y-4 sm:space-y-6 text-white max-[380px]:space-y-3">
                      <div className="inline-flex items-center gap-2 bg-[#3D9B93]/20 backdrop-blur-sm border border-[#3D9B93]/30 px-4 py-2 rounded-full text-sm max-[380px]:text-[13px]">
                        {slide.subtitle}
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-[380px]:text-[26px]">
                        {slide.title}
                      </h2>
                      <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-[380px]:text-base">
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
