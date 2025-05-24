import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Wrench, FileStack, Truck } from 'lucide-react';
import Button from '../ui/Button';

const services = [
  {
    id: 'service1',
    icon: <Settings size={40} className="text-[#E94560]" />,
    title: 'Pattern Making & Casting',
    description: 'Expert pattern making and precision casting foundry services for textile machinery components.'
  },
  {
    id: 'service2',
    icon: <Wrench size={40} className="text-[#E94560]" />,
    title: 'Component Machining',
    description: 'High-precision machining services for textile machinery components with tight tolerances.'
  },
  {
    id: 'service3',
    icon: <FileStack size={40} className="text-[#E94560]" />,
    title: 'Semi-Assembly Services',
    description: 'Professional assembly services ensuring perfect fit and function of complex components.'
  },
  {
    id: 'service4',
    icon: <Truck size={40} className="text-[#E94560]" />,
    title: 'Global Supply Chain',
    description: 'Reliable global supply of textile machinery spare parts with on-time delivery.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0F3460]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Comprehensive Services</h2>
          <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
          <p className="text-gray-300">
            We offer a wide range of services to support the textile industry with high-quality solutions
            that enhance productivity and reduce downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center transform hover:-translate-y-1 transition-all duration-300 hover:bg-white/10"
            >
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/10 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#E94560]/10 p-8 md:p-12 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Turnkey Textile Solutions
              </h3>
              <p className="text-gray-300 mb-6">
                From concept to completion, we offer comprehensive turnkey solutions for textile mill setup and modernization. Our expertise covers every aspect of the textile manufacturing process.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-[#E94560] mr-3"></div>
                  Complete textile mill planning and setup
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-[#E94560] mr-3"></div>
                  Machinery installation and commissioning
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-[#E94560] mr-3"></div>
                  Operational training and maintenance support
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-[#E94560] mr-3"></div>
                  Ongoing technical assistance and spare parts supply
                </li>
              </ul>
              <Link to="/services">
                <Button variant="primary" size="lg">
                  Explore Turnkey Solutions
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://www.digicon.in/images/image001.jpg" 
                alt="Turnkey textile solutions" 
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-[#0F3460]/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;