import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Wrench, FileStack, Truck, Clock, CheckCircle, Users, Globe } from 'lucide-react';
import SeoHead from '../components/ui/SeoHead';
import Button from '../components/ui/Button';

const servicesDetails = [
  {
    id: 'service1',
    icon: <Settings size={40} className="text-[#E94560]" />,
    title: 'Pattern Making & Casting',
    description: 'We provide expert pattern making and precision casting foundry services for textile machinery components with a focus on dimensional accuracy and surface finish.',
    features: [
      'Wooden, plastic, and metal pattern making',
      'Sand casting for complex geometries',
      'Investment casting for high-precision parts',
      'Die casting for high-volume production',
      'Heat treatment and surface finishing'
    ]
  },
  {
    id: 'service2',
    icon: <Wrench size={40} className="text-[#E94560]" />,
    title: 'Component Machining',
    description: 'Our high-precision machining services ensure textile machinery components meet exact specifications with tight tolerances for optimal performance.',
    features: [
      'CNC milling and turning',
      'Multi-axis machining capabilities',
      'Precision gear cutting and grinding',
      'Thread cutting and internal/external grinding',
      '3D coordinate measuring for quality control'
    ]
  },
  {
    id: 'service3',
    icon: <FileStack size={40} className="text-[#E94560]" />,
    title: 'Semi-Assembly Services',
    description: 'We offer professional assembly services to ensure perfect fit and function of complex components, reducing your production time and costs.',
    features: [
      'Pre-assembly and component testing',
      'Subassembly preparation and verification',
      'Bearing and bushings press-fitting',
      'Alignment and balancing services',
      'Assembly documentation and quality verification'
    ]
  },
  {
    id: 'service4',
    icon: <Truck size={40} className="text-[#E94560]" />,
    title: 'Global Supply Chain',
    description: 'Our reliable global supply chain ensures on-time delivery of textile machinery spare parts to manufacturing facilities worldwide.',
    features: [
      'Inventory management solutions',
      'Just-in-time delivery options',
      'International shipping and logistics',
      'Export documentation handling',
      'Custom clearance assistance'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Textile Machinery Services & Solutions"
        description="Comprehensive textile machinery services including maintenance, component manufacturing, supply chain management, and turnkey textile mill solutions."
        keywords="textile machinery services, textile machine maintenance, textile machinery components, turnkey textile solutions"
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#0F3460] py-20 md:py-28">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Comprehensive Textile 
              <span className="block text-[#E94560] mt-3">Machinery Services</span>
            </h1>
            <div className="w-20 h-1 bg-[#E94560] mx-auto my-6"></div>
            <p className="text-lg text-gray-200">
              From precision component manufacturing to turnkey mill solutions, our comprehensive 
              services are designed to optimize your textile operations and maximize productivity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Our Comprehensive Services</h2>
            <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
            <p className="text-gray-600">
              We offer a wide range of services to support the textile industry with high-quality solutions
              that enhance productivity and reduce downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesDetails.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="p-8">
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-[#0F3460]/10 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={18} className="text-[#E94560] mt-0.5 mr-2 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Engineering & Design Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0F3460] mb-4">
                Engineering & Design Services
              </h2>
              <div className="w-20 h-1 bg-[#E94560] mb-6"></div>
              
              <p className="text-gray-700 mb-6">
                Our engineering team provides comprehensive design and development services for textile machinery components and systems. With decades of industry experience and advanced CAD/CAM capabilities, we can help you optimize your machinery for enhanced performance and efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#E94560]/10 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle size={20} className="text-[#E94560]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F3460] mb-1">Component Design & Optimization</h3>
                    <p className="text-gray-600 text-sm">Engineering analysis and design of components for optimal performance and durability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E94560]/10 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle size={20} className="text-[#E94560]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F3460] mb-1">Reverse Engineering</h3>
                    <p className="text-gray-600 text-sm">Precise reproduction of components with enhanced features and improved materials.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E94560]/10 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle size={20} className="text-[#E94560]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F3460] mb-1">3D Modeling & Prototyping</h3>
                    <p className="text-gray-600 text-sm">Visualization and testing of designs before full-scale production.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E94560]/10 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle size={20} className="text-[#E94560]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F3460] mb-1">Technical Documentation</h3>
                    <p className="text-gray-600 text-sm">Comprehensive documentation including drawings, specifications, and assembly guides.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Consult Our Engineers
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11208_2.jpg" 
                alt="Engineering and design services" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 translate-x-4 translate-y-4 bg-[#E94560]/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Turnkey Solutions Section */}
      <section className="py-16 md:py-24 bg-[#0F3460]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Turnkey Textile Solutions</h2>
            <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
            <p className="text-gray-300">
              From concept to completion, we offer comprehensive turnkey solutions for textile mill setup and modernization. 
              Our expertise covers every aspect of the textile manufacturing process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <Clock size={30} className="text-[#E94560]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Project Planning</h3>
              <p className="text-gray-300">Comprehensive planning including feasibility studies, process design, and detailed project timelines.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <Settings size={30} className="text-[#E94560]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Equipment Installation</h3>
              <p className="text-gray-300">Professional installation of all machinery and systems with rigorous testing and quality verification.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <Users size={30} className="text-[#E94560]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Staff Training</h3>
              <p className="text-gray-300">Comprehensive training programs for operators and maintenance staff to ensure optimal performance.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="col-span-3">
                <h3 className="text-2xl font-bold text-white mb-4">Our Turnkey Process</h3>
                
                <div className="space-y-6 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E94560] flex items-center justify-center font-bold text-white text-lg">1</div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Initial Consultation & Requirements Analysis</h4>
                      <p className="text-gray-300 text-sm mt-1">We work closely with you to understand your specific needs and production goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E94560] flex items-center justify-center font-bold text-white text-lg">2</div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Concept Design & Planning</h4>
                      <p className="text-gray-300 text-sm mt-1">Detailed planning for layout, equipment selection, and process flow optimization.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E94560] flex items-center justify-center font-bold text-white text-lg">3</div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Equipment Procurement & Customization</h4>
                      <p className="text-gray-300 text-sm mt-1">Sourcing and customizing the right machinery for your specific requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E94560] flex items-center justify-center font-bold text-white text-lg">4</div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Installation & Implementation</h4>
                      <p className="text-gray-300 text-sm mt-1">Professional installation and configuration of all systems with minimal disruption.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E94560] flex items-center justify-center font-bold text-white text-lg">5</div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">Training, Handover & Ongoing Support</h4>
                      <p className="text-gray-300 text-sm mt-1">Comprehensive training for your team and continued technical support after project completion.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
              
              <div className="col-span-2">
                <img 
                  src="https://www.digicon.in/images/image001.jpg" 
                  alt="Turnkey textile solutions" 
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Service Network */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Global service network" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 right-0 bg-[#0F3460] text-white p-6 rounded-tl-lg transform translate-y-1/4 translate-x-1/4 shadow-xl">
                  <Globe size={40} className="text-[#E94560] mb-3" />
                  <p className="text-xl font-bold">Serving</p>
                  <p className="text-2xl font-bold">50+ Countries</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#0F3460] mb-4">
                Global Service Network
              </h2>
              <div className="w-20 h-1 bg-[#E94560] mb-6"></div>
              
              <p className="text-gray-700 mb-6">
                With our extensive global network, we provide prompt service and support to clients worldwide. Our team of skilled technicians and engineers are strategically located to ensure quick response times and minimize production downtime.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0F3460]">24/7 Technical Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock assistance via phone, email, and remote diagnostics.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0F3460]">On-Site Service</h3>
                    <p className="text-gray-600 text-sm">Rapid deployment of service technicians to your facility when needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0F3460]">Preventive Maintenance Programs</h3>
                    <p className="text-gray-600 text-sm">Scheduled maintenance to prevent issues before they impact production.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#0F3460]">Spare Parts Distribution</h3>
                    <p className="text-gray-600 text-sm">Global logistics network ensuring fast delivery of spare parts.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Service Department
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-[#0F3460] rounded-lg p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Textile Operations?</h2>
              <p className="text-gray-300 mb-8">
                Whether you need spare parts, maintenance services, or a complete turnkey solution, our team is ready to help you enhance productivity and reduce operational costs.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;