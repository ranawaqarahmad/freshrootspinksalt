import { Mail, Phone, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-stone-950 z-50 shadow-sm">
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
      <div className="bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link className="flex items-center gap-3 cursor-pointer" to="/">
              <img 
                src={logo}
                alt="Fresh Roots Salt & Minerals" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  `transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#3D9B93] border-[#3D9B93]'
                  : 'text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#3D9B93] border-[#3D9B93]'
                  : 'text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#3D9B93] border-[#3D9B93]'
                  : 'text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]'
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/sourcing"
                className={({ isActive }) =>
                  `transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#3D9B93] border-[#3D9B93]'
                  : 'text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]'
                  }`
                }
              >
                Sourcing & Quality
              </NavLink>
              <NavLink
                to="/packaging"
                className={({ isActive }) =>
                  `transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#3D9B93] border-[#3D9B93]'
                  : 'text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]'
                  }`
                }
              >
                Packaging
              </NavLink>
              <NavLink
                to="/export"
                className={({ isActive }) =>
                  `transition-colors pb-1 border-b-2 ${
                    isActive
                      ? 'text-[#3D9B93] border-[#3D9B93]'
                  : 'text-stone-700 dark:text-stone-200 border-transparent hover:text-[#3D9B93] dark:hover:text-[#3D9B93]'
                  }`
                }
              >
                Export & Compliance
              </NavLink>
            </nav>
            
            {/* CTA + Theme */}
            <Link
              to="/rfq"
              className="hidden lg:block bg-[#E88B7F] text-white px-6 py-2.5 rounded-lg hover:bg-[#d97a6e] transition-colors"
            >
              Request Quote
            </Link>
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-200 hover:text-[#3D9B93] hover:border-[#3D9B93] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-700 dark:text-stone-200" />
              ) : (
                <Menu className="w-6 h-6 text-stone-700 dark:text-stone-200" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <NavLink
              end
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Products
            </NavLink>
            <NavLink
              to="/sourcing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Sourcing & Quality
            </NavLink>
            <NavLink
              to="/packaging"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Packaging
            </NavLink>
            <NavLink
              to="/export"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-[#3D9B93] transition-colors"
            >
              Export & Compliance
            </NavLink>
            <NavLink
              to="/rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#E88B7F] text-white px-6 py-3 rounded-lg hover:bg-[#d97a6e] transition-colors text-center"
            >
              Request Quote
            </NavLink>
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="flex items-center justify-center gap-2 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-200 px-6 py-3 rounded-lg hover:border-[#3D9B93] hover:text-[#3D9B93] transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
