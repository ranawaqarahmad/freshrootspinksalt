import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logo}
              alt="Fresh Roots Salt & Minerals" 
              className="h-20 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-stone-400 mb-6 leading-relaxed">
              Professional B2B trading and export company specializing in Himalayan pink salt 
              products from Pakistan.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-[#3D9B93] transition-colors">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-[#3D9B93] transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-[#3D9B93] transition-colors">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-[#3D9B93] transition-colors">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/sourcing" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Sourcing & Quality
                </Link>
              </li>
              <li>
                <Link to="/rfq" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/packaging" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Custom Packaging
                </Link>
              </li>
              <li>
                <Link to="/packaging" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Private Labeling
                </Link>
              </li>
              <li>
                <Link to="/export" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Export Documentation
                </Link>
              </li>
              <li>
                <Link to="/export" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Compliance Support
                </Link>
              </li>
              <li>
                <Link to="/sourcing" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                  Quality Inspection
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E88B7F] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <a href="mailto:info@freshroots.com" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                    info@freshroots.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E88B7F] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <a href="tel:+92" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                    +92 XXX XXXXXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E88B7F] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="text-stone-400">
                    [Your Address]<br />
                    Pakistan
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              &copy; 2025 Fresh Roots Salt & Minerals. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-stone-400 hover:text-[#3D9B93] transition-colors">
                Export Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
