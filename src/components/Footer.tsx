import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Super Textile Services</h3>
            <p className="mb-4 text-blue-100">
              Delivering high-quality textile machinery spare parts and solutions since 1984.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/products" label="Products" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services#pattern-making" label="Pattern Making & Casting" />
              <FooterLink to="/services#component-machining" label="Component Machining" />
              <FooterLink to="/services#assembly" label="Semi-Assembly Services" />
              <FooterLink to="/services#supply-chain" label="Global Supply Chain" />
              <FooterLink to="/services#turnkey" label="Turnkey Textile Solutions" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <ContactItem 
                icon={<Phone size={18} />} 
                text="+91 98765 43210" 
              />
              <ContactItem 
                icon={<Mail size={18} />} 
                text="info@SuperTextileServicesgroup.com" 
                isLink 
                href="mailto:info@SuperTextileServicesgroup.com" 
              />
              <ContactItem 
                icon={<MapPin size={18} />} 
                text="123 Industrial Area, Coimbatore, Tamil Nadu, India - 641008" 
              />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Super Textile Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="text-blue-200 hover:text-white transition-colors duration-200"
    >
      {label}
    </Link>
  </li>
);

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  isLink?: boolean;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, isLink = false, href }) => (
  <div className="flex items-start">
    <div className="text-blue-300 mt-1 mr-2">{icon}</div>
    {isLink ? (
      <a href={href} className="text-blue-200 hover:text-white transition-colors duration-200">
        {text}
      </a>
    ) : (
      <span className="text-blue-200">{text}</span>
    )}
  </div>
);

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a 
    href="#" 
    className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Footer;