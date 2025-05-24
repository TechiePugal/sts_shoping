import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Users, Globe, Award } from 'lucide-react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Textile machinery manufacturing" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#E94560]/10 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
            <div className="absolute bottom-0 right-0 bg-[#0F3460] text-white p-4 md:p-6 rounded-tl-lg z-20 transform translate-y-1/4">
              <p className="text-xl md:text-2xl font-bold">Since 1984</p>
              <p className="text-sm md:text-base mt-1">40+ Years of Excellence</p>
            </div>
          </div>
          
          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4">
              About Super Textile Services
            </h2>
            <div className="w-20 h-1 bg-[#E94560] mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              Super Textile Services is the top exporter of premium quality textile machine spares, textile machine components, spinning machinery spare parts and textile machine accessories in India.
            </p>
            
            <p className="text-gray-700 mb-6">
              As the leading manufacturers and suppliers of precision-engineered textile machinery spare parts in Coimbatore, Tamil Nadu, we stay up-to-date with the relevant standards in the industry and ensure that our products meet these standards to provide reliable and high-quality solutions to our customers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-[#E94560] mt-1 shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-[#0F3460]">Premium Quality</h3>
                  <p className="text-gray-600 text-sm">ISO-certified manufacturing processes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TrendingUp size={20} className="text-[#E94560] mt-1 shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-[#0F3460]">Innovation</h3>
                  <p className="text-gray-600 text-sm">Cutting-edge technology and processes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users size={20} className="text-[#E94560] mt-1 shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-[#0F3460]">Expert Team</h3>
                  <p className="text-gray-600 text-sm">Skilled engineers and technicians</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe size={20} className="text-[#E94560] mt-1 shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-[#0F3460]">Global Reach</h3>
                  <p className="text-gray-600 text-sm">Exports to over 50 countries</p>
                </div>
              </div>
            </div>
            
            <Link to="/about">
              <Button variant="primary" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;