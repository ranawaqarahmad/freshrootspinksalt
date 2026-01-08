import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { AboutSection } from './components/AboutSection';
import { SourcingQuality } from './components/SourcingQuality';
import { PackagingSection } from './components/PackagingSection';
import { ExportCompliance } from './components/ExportCompliance';
import { RFQForm } from './components/RFQForm';
import { ProductsPage } from './components/ProductsPage';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        {activeSection === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <AboutSection />
            <ProductCategories onNavigate={handleNavigate} />
            <SourcingQuality />
          </>
        )}
        
        {activeSection === 'about' && (
          <div className="pt-32">
            <AboutSection />
            <SourcingQuality />
          </div>
        )}
        
        {activeSection === 'products' && (
          <div className="pt-32">
            <ProductsPage onNavigate={handleNavigate} />
          </div>
        )}
        
        {activeSection === 'sourcing' && (
          <div className="pt-32">
            <SourcingQuality />
          </div>
        )}
        
        {activeSection === 'packaging' && (
          <div className="pt-32">
            <PackagingSection />
          </div>
        )}
        
        {activeSection === 'export' && (
          <div className="pt-32">
            <ExportCompliance />
          </div>
        )}
        
        {activeSection === 'rfq' && (
          <div className="pt-32">
            <RFQForm />
          </div>
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
