import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F3460] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Super  <span className="text-[#E94560]">Textile</span>Services</h3>
            <p className="mb-4 text-gray-300">
              Leading manufacturers and suppliers of precision-engineered textile machinery spare parts in Coimbatore, Tamil Nadu since 1984.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#E94560] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Housings and Frames
                </Link>
              </li>
              <li>
                <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Gears and Gearboxes
                </Link>
              </li>
              <li>
                <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Pulleys and Rollers
                </Link>
              </li>
              <li>
                <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Cylinder Heads
                </Link>
              </li>
              <li>
                <Link to="/products" className="inline-flex items-center text-gray-300 hover:text-[#E94560] transition-colors">
                  <ArrowRight size={14} className="mr-2" /> Brackets and Mounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 shrink-0" />
                <span className="text-gray-300">123 Industrial Area, Coimbatore, Tamil Nadu, India - 641008</span>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-3 shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#E94560] transition-colors">+91 98765 43210</a>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-3 shrink-0" />
                <a href="mailto:info@Super Textile Services.com" className="text-gray-300 hover:text-[#E94560] transition-colors">info@SuperTextileServicesgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0a2647] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Super Textile Services. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#E94560] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#E94560] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;