import { Hero } from "../components/Hero";
import { HomeBannerSliderSlick } from "../components/HomeBannerSliderSlick";
import { ProductCategories } from "../components/ProductCategories";
import { AboutSection } from "../components/AboutSection";
import { SourcingQuality } from "../components/SourcingQuality";
import { PackagingSection } from "../components/PackagingSection";
import { PackagingCatalogSection } from "../components/PackagingCatalogSection";

export default function HomePage() {
  return (
    <>
      <HomeBannerSliderSlick />
      <Hero />
      <AboutSection />
      <ProductCategories />
      {/* <PackagingSection /> */}
      <SourcingQuality />
      <PackagingCatalogSection />
    </>
  );
}
