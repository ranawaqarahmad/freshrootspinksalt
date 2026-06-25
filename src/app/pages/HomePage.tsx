import { lazy, Suspense } from "react";
import { Hero } from "../components/Hero";
import { HomeBannerSliderSlick } from "../components/HomeBannerSliderSlick";

const AboutSection = lazy(() =>
  import("../components/AboutSection").then((module) => ({ default: module.AboutSection }))
);
const ProductCategories = lazy(() =>
  import("../components/ProductCategories").then((module) => ({ default: module.ProductCategories }))
);
const PackagingCatalogSection = lazy(() =>
  import("../components/PackagingCatalogSection").then((module) => ({
    default: module.PackagingCatalogSection,
  }))
);
const SourcingQuality = lazy(() =>
  import("../components/SourcingQuality").then((module) => ({ default: module.SourcingQuality }))
);
const HomeCtaSection = lazy(() =>
  import("../components/HomeCtaSection").then((module) => ({ default: module.HomeCtaSection }))
);

function HomeSectionFallback({
  minHeightClassName,
  tone = "white",
}: {
  minHeightClassName: string;
  tone?: "white" | "soft";
}) {
  return (
    <section
      className={`py-20 ${
        tone === "soft"
          ? "bg-gradient-to-br from-stone-50 to-white dark:from-stone-950 dark:to-stone-900"
          : "bg-white dark:bg-stone-950"
      }`}
      aria-hidden="true"
    >
      <div className={`max-w-7xl mx-auto px-6 ${minHeightClassName}`}>
        <div className="h-8 w-36 rounded-full bg-stone-200/80 dark:bg-stone-800 animate-pulse" />
        <div className="mt-6 h-10 w-full max-w-xl rounded-lg bg-stone-200/80 dark:bg-stone-800 animate-pulse" />
        <div className="mt-4 h-5 w-full max-w-2xl rounded bg-stone-200/70 dark:bg-stone-800/80 animate-pulse" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-48 rounded-2xl border border-stone-200 bg-stone-100/80 dark:border-stone-800 dark:bg-stone-900 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeBannerSliderSlick />
      <Hero />
      <Suspense
        fallback={<HomeSectionFallback minHeightClassName="min-h-[720px] lg:min-h-[520px]" tone="soft" />}
      >
        <AboutSection />
      </Suspense>
      <Suspense
        fallback={<HomeSectionFallback minHeightClassName="min-h-[760px] lg:min-h-[620px]" />}
      >
        <ProductCategories />
      </Suspense>
      <Suspense
        fallback={<HomeSectionFallback minHeightClassName="min-h-[720px] lg:min-h-[560px]" />}
      >
        <PackagingCatalogSection />
      </Suspense>
      <Suspense
        fallback={<HomeSectionFallback minHeightClassName="min-h-[920px] lg:min-h-[680px]" />}
      >
        <SourcingQuality />
      </Suspense>
      <Suspense fallback={<HomeSectionFallback minHeightClassName="min-h-[280px]" tone="soft" />}>
        <HomeCtaSection />
      </Suspense>
    </>
  );
}
