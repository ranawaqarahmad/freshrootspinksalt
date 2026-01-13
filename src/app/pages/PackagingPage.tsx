import { PackagingSection } from '../components/PackagingSection';
import { PackagingCatalogSection } from '../components/PackagingCatalogSection';

export default function PackagingPage() {
  return (
    <div className="pt-32">
      <PackagingSection />
      <PackagingCatalogSection columns={4} />
    </div>
  );
}
