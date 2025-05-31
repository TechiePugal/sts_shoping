import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';
import { CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Comprehensive Textile Machinery Services | Super Textile Services';
    logEvent(analytics, 'page_view', {
      page_title: 'Services',
      page_location: window.location.href,
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative pt-20">
        <div 
          className="h-96 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3846103/pexels-photo-3846103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Our Comprehensive Services
                </h1>
                <p className="text-xl text-blue-100">
                  Explore our range of services, including pattern making, component machining, semi-assembly, global supply chain, and turnkey textile solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer a wide range of services to support the textile industry with high-quality solutions that enhance productivity and reduce downtime."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}>
                <SectionTitle 
                  title={service.title} 
                />
                <div className="space-y-4 text-gray-700">
                  <p>{service.description}</p>
                  <ServiceDetails serviceId={service.id} />
                </div>
              </div>
              <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}>
                <img 
                  src={getServiceImage(service.id)} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Textile Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our expert team is ready to help you select the right services to meet your specific requirements and enhance your productivity.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-block"
          >
            Contact Our Service Team
          </a>
        </div>
      </section>
    </>
  );
};

const getServiceImage = (serviceId: string): string => {
  const images: Record<string, string> = {
    'pattern-making': 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'component-machining': 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'assembly': 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'supply-chain': 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'turnkey': 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  };

  return images[serviceId] || 'https://images.pexels.com/photos/3846135/pexels-photo-3846135.jpeg';
};

interface ServiceDetailsProps {
  serviceId: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId }) => {
  const details: Record<string, string[]> = {
    'pattern-making': [
      'Advanced 3D pattern design and development',
      'Precision casting patterns for complex components',
      'Material optimization for cost-effective production',
      'Rapid prototyping for design validation'
    ],
    'component-machining': [
      'High-precision CNC machining with tight tolerances',
      'Multi-axis machining for complex geometries',
      'Surface finishing and treatment services',
      'Comprehensive quality control and inspection'
    ],
    'assembly': [
      'Sub-assembly and component integration',
      'Precision alignment and calibration',
      'Quality testing of assembled components',
      'Efficient packaging for safe transportation'
    ],
    'supply-chain': [
      'Global logistics and distribution network',
      'Just-in-time delivery solutions',
      'Inventory management services',
      'Export documentation and compliance handling'
    ],
    'turnkey': [
      'Complete project planning and management',
      'Custom machinery design and manufacturing',
      'Installation and commissioning services',
      'Operator training and ongoing technical support'
    ],
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
      <ul className="space-y-2">
        {details[serviceId]?.map((detail, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;