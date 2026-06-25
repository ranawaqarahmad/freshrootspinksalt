import { lazy, Suspense } from "react";
import { HomeBannerSliderSlick } from "../components/HomeBannerSliderSlick";

const Hero = lazy(() =>
  import("../components/Hero").then((module) => ({ default: module.Hero }))
);
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

export default function HomePage() {
  return (
    <>
      <HomeBannerSliderSlick />
      <Suspense fallback={null}>
        <Hero />
        <AboutSection />
        <ProductCategories />
        <PackagingCatalogSection />
        <SourcingQuality />
        <HomeCtaSection />
      </Suspense>
    </>
  );
}
