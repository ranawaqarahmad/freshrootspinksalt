import { Hero } from '../components/Hero';
import { ProductCategories } from '../components/ProductCategories';
import { AboutSection } from '../components/AboutSection';
import { SourcingQuality } from '../components/SourcingQuality';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductCategories />
      <SourcingQuality />
    </>
  );
}
