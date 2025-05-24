import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-[#0F3460] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+919876543210" className="flex items-center text-sm hover:text-[#E94560] transition-colors">
              <Phone size={14} className="mr-2" /> +91 98765 43210
            </a>
            <a href="mailto:inf0Servicesgroup.com" className="flex items-center text-sm hover:text-[#E94560] transition-colors">
              <Mail size={14} className="mr-2" /> info@Servicesgroup.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="flex items-center text-sm mr-6">
              <MapPin size={14} className="mr-2" /> Coimbatore, Tamil Nadu, India
            </span>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-[#0F3460]">
              Super<span className="text-[#E94560]">Textile</span>Services
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
              <NavLink to="/about" active={location.pathname === '/about'}>About Us</NavLink>
              <NavLink to="/products" active={location.pathname === '/products'}>Products</NavLink>
              <NavLink to="/services" active={location.pathname === '/services'}>Services</NavLink>
              <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#0F3460] focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'}`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === '/about'}>About Us</MobileNavLink>
            <MobileNavLink to="/products" active={location.pathname === '/products'}>Products</MobileNavLink>
            <MobileNavLink to="/services" active={location.pathname === '/services'}>Services</MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
            
            {/* Mobile contact info */}
            <div className="pt-4 border-t border-gray-200 mt-4 space-y-3">
              <a href="tel:+919876543210" className="flex items-center text-sm text-gray-600 hover:text-[#E94560]">
                <Phone size={14} className="mr-2" /> +91 98765 43210
              </a>
              <a href="mailto:info@SuperTextileServicesgroup.com" className="flex items-center text-sm text-gray-600 hover:text-[#E94560]">
                <Mail size={14} className="mr-2" /> info@servicegroup.com
              </a>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-3">
                <a href="#" className="text-gray-600 hover:text-[#E94560] transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E94560] transition-colors" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E94560] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#E94560] transition-colors" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors relative ${
        active ? 'text-[#E94560]' : 'text-[#0F3460] hover:text-[#E94560]'
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E94560] -mb-2 transform scale-x-100 transition-transform"></span>
      )}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link 
      to={to} 
      className={`py-2 font-medium transition-colors ${active ? 'text-[#E94560]' : 'text-[#0F3460] hover:text-[#E94560]'}`}
    >
      {children}
    </Link>
  );
};

export default Header;