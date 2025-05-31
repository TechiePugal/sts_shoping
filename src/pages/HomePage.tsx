import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import GlobalPresence from '../components/GlobalPresence';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { services } from '../data/services';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Premium Textile Machinery Spare Parts Manufacturer in Coimbatore, India';
    logEvent(analytics, 'page_view', {
      page_title: 'Home',
      page_location: window.location.href,
    });
  }, []);

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="About Super Textile Services" 
                subtitle="A legacy of excellence in textile machinery manufacturing since 1984."
              />
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">
                  Founded in 1984 in Coimbatore, Tamil Nadu, Super Textile Services has grown from a small workshop to a global enterprise. Our commitment to uncompromising quality, continuous innovation, and exceptional customer service has positioned us as a trusted partner in the textile industry.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FeatureItem text="ISO-certified manufacturing" />
                  <FeatureItem text="Cutting-edge technology" />
                  <FeatureItem text="Expert engineering team" />
                  <FeatureItem text="Global export network" />
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              >
                Learn more about our journey
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3862131/pexels-photo-3862131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Textile Machinery Manufacturing" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-3xl font-bold mb-1">40+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Premium Products" 
            subtitle="Explore our wide range of high-quality textile machinery components designed for precision, durability, and performance."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-flex items-center"
            >
              View All Products
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer comprehensive solutions to support the textile industry with high-quality services that enhance productivity."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-flex items-center"
            >
              Explore All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <GlobalPresence />

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Textile Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with our team of experts to discuss your specific requirements and discover how our premium components can enhance your machinery performance.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="flex items-center">
    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0" />
    <span className="text-gray-700">{text}</span>
  </div>
);

export default HomePage;