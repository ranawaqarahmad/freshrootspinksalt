import { Mail, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/logo.png';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#3D9B93] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:info@freshroots.com" className="flex items-center gap-2 hover:text-white/90 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">info@freshroots.com</span>
              </a>
              <a href="tel:+92" className="flex items-center gap-2 hover:text-white/90 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+92 XXX XXXXXXX</span>
              </a>
            </div>
            <div className="text-sm">
              B2B Exporters | Pakistan
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <img 
                src={logo}
                alt="Fresh Roots Salt & Minerals" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => onNavigate('home')}
                className={`transition-colors pb-1 border-b-2 ${
                  activeSection === 'home'
                    ? 'text-[#3D9B93] border-[#3D9B93]'
                    : 'text-stone-700 border-transparent hover:text-[#3D9B93]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('about')}
                className={`transition-colors pb-1 border-b-2 ${
                  activeSection === 'about'
                    ? 'text-[#3D9B93] border-[#3D9B93]'
                    : 'text-stone-700 border-transparent hover:text-[#3D9B93]'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate('products')}
                className={`transition-colors pb-1 border-b-2 ${
                  activeSection === 'products'
                    ? 'text-[#3D9B93] border-[#3D9B93]'
                    : 'text-stone-700 border-transparent hover:text-[#3D9B93]'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => onNavigate('sourcing')}
                className={`transition-colors pb-1 border-b-2 ${
                  activeSection === 'sourcing'
                    ? 'text-[#3D9B93] border-[#3D9B93]'
                    : 'text-stone-700 border-transparent hover:text-[#3D9B93]'
                }`}
              >
                Sourcing & Quality
              </button>
              <button
                onClick={() => onNavigate('packaging')}
                className={`transition-colors pb-1 border-b-2 ${
                  activeSection === 'packaging'
                    ? 'text-[#3D9B93] border-[#3D9B93]'
                    : 'text-stone-700 border-transparent hover:text-[#3D9B93]'
                }`}
              >
                Packaging
              </button>
              <button
                onClick={() => onNavigate('export')}
                className={`transition-colors pb-1 border-b-2 ${
                  activeSection === 'export'
                    ? 'text-[#3D9B93] border-[#3D9B93]'
                    : 'text-stone-700 border-transparent hover:text-[#3D9B93]'
                }`}
              >
                Export & Compliance
              </button>
            </nav>
            
            {/* CTA Button */}
            <button
              onClick={() => onNavigate('rfq')}
              className="hidden lg:block bg-[#E88B7F] text-white px-6 py-2.5 rounded-lg hover:bg-[#d97a6e] transition-colors"
            >
              Request Quote
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-stone-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-700" />
              ) : (
                <Menu className="w-6 h-6 text-stone-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-stone-700 hover:text-[#3D9B93] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-stone-700 hover:text-[#3D9B93] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-stone-700 hover:text-[#3D9B93] transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => { onNavigate('sourcing'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-stone-700 hover:text-[#3D9B93] transition-colors"
            >
              Sourcing & Quality
            </button>
            <button
              onClick={() => { onNavigate('packaging'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-stone-700 hover:text-[#3D9B93] transition-colors"
            >
              Packaging
            </button>
            <button
              onClick={() => { onNavigate('export'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-stone-700 hover:text-[#3D9B93] transition-colors"
            >
              Export & Compliance
            </button>
            <button
              onClick={() => { onNavigate('rfq'); setMobileMenuOpen(false); }}
              className="bg-[#E88B7F] text-white px-6 py-3 rounded-lg hover:bg-[#d97a6e] transition-colors text-center"
            >
              Request Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
