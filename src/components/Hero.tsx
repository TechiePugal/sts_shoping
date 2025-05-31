import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1463936/pexels-photo-1463936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Leading Manufacturer of Textile Machinery Spare Parts
            </h1>
            
            <p 
              className={`text-xl text-blue-100 mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              With over four decades of manufacturing excellence, we specialize in delivering durable and high-performance components to clients worldwide.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link 
                to="/products" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Explore Our Products
                <ChevronRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-6 md:py-0 shadow-lg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <StatItem number="40+" text="Years Experience" />
            <StatItem number="500+" text="Products" />
            <StatItem number="50+" text="Countries" />
            <StatItem number="1000+" text="Happy Clients" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatItemProps {
  number: string;
  text: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, text }) => (
  <div className="text-center py-4 border-r border-gray-200 last:border-r-0">
    <div className="text-3xl md:text-4xl font-bold text-blue-900">{number}</div>
    <div className="text-gray-600">{text}</div>
  </div>
);

export default Hero;