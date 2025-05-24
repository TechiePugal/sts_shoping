import React from 'react';
import { Award, CheckCircle, Factory, Users, Clock, Globe } from 'lucide-react';
import SeoHead from '../components/ui/SeoHead';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="About Us - Premium Textile Machinery Manufacturers"
        description="Learn about Super Textile Services's 40-year journey in textile machinery manufacturing, innovation, and global excellence. Trusted textile machine parts supplier since 1984."
        keywords="textile machinery manufacturer, textile machine parts supplier, textile engineering company, Super Textile Services history"
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#0F3460] py-20 md:py-28">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2023/3/293031274/AS/XN/IH/3927721/mechanical-machinery-spare-parts-500x500.png')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              About Super Textile Services
              <span className="block text-[#E94560] mt-3">Excellence Since 1984</span>
            </h1>
            <div className="w-20 h-1 bg-[#E94560] mx-auto my-6"></div>
            <p className="text-lg text-gray-200">
              With over four decades of expertise, we've established ourselves as India's premier
              manufacturer and exporter of precision-engineered textile machinery spare parts,
              serving clients across the globe.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-[#E94560] mb-6"></div>
              
              <p className="text-gray-700 mb-6">
                Super Textile Services was founded in 1984 with a vision to revolutionize the textile machinery industry through precision engineering and innovative manufacturing processes. What began as a small workshop in Coimbatore has grown into a global enterprise with state-of-the-art manufacturing facilities and a worldwide customer base.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our founder, Mr. Ramachandran, believed in three core principles: uncompromising quality, continuous innovation, and exceptional customer service. These principles continue to guide everything we do today as we expand our global footprint while maintaining the values that have made us successful.
              </p>
              
              <div className="flex items-center mb-8">
                <Clock size={50} className="text-[#E94560] mr-5" />
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460]">40+ Years of Excellence</h3>
                  <p className="text-gray-600">Trusted by leading textile manufacturers worldwide</p>
                </div>
              </div>
              
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Our factory floor" 
                    className="rounded-lg shadow-lg h-48 w-full object-cover"
                  />
                  <img 
                    src="https://www.thompsonprecision.co.uk/wp-content/uploads/2014/07/the-basics-of-precision-engineering-350x234.jpg"
                    alt="Precision engineering" 
                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115879800/original/628fd489bf14e0ecf429dbdb057273abbcb287cb/tutor-you-in-all-mechanical-engineering-related-problems.jpg"
                    alt="Quality inspection" 
                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                  />
                  <img 
                    src="data:image/jpeg;base64,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"
                    alt="Global shipping" 
                    className="rounded-lg shadow-lg h-48 w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#E94560] p-4 rounded-lg text-white shadow-lg z-10">
                <Globe size={28} className="mb-2" />
                <p className="font-bold">Exporting to</p>
                <p className="text-xl font-bold">50+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our approach to business is built on fundamental values that have guided us for over four decades,
              earning the trust of clients across the global textile industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#0F3460]/10 p-4 rounded-full inline-block mb-6">
                <Award size={40} className="text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-4">Uncompromising Quality</h3>
              <p className="text-gray-600">
                We maintain rigorous quality control across all stages of production, ensuring each component meets precise specifications and international standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#0F3460]/10 p-4 rounded-full inline-block mb-6">
                <Factory size={40} className="text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-4">Innovative Engineering</h3>
              <p className="text-gray-600">
                Our R&D team continuously explores new technologies and processes to enhance our products, driving efficiency and performance for our customers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#0F3460]/10 p-4 rounded-full inline-block mb-6">
                <Users size={40} className="text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-4">Customer Partnership</h3>
              <p className="text-gray-600">
                We view our clients as partners, working closely with them to understand their unique needs and develop tailored solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Manufacturing Capabilities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Our Manufacturing Capabilities</h2>
            <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our state-of-the-art facilities are equipped with the latest technology and operated by skilled technicians,
              allowing us to produce precision-engineered components that meet the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#0F3460] rounded-lg overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4E1BAQGL2fzv7IGPzg/company-background_10000/company-background_10000/0/1587352083079/precision_mechanical_engineering_llc_cover?e=2147483647&v=beta&t=221UhjI1SPjAUxO_bM25UpFjszbpMfq1NwaNf8jGmVY" 
                alt="Manufacturing facility" 
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Precision Engineering</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>CNC machining centers with micron-level precision</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>Advanced CAD/CAM technology for complex designs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>Multi-axis machining capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>High-precision gear manufacturing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#0F3460] rounded-lg overflow-hidden">
              <img 
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115879800/original/628fd489bf14e0ecf429dbdb057273abbcb287cb/tutor-you-in-all-mechanical-engineering-related-problems.jpg" 
                alt="Quality control" 
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Quality Assurance</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>ISO 9001:2015 certified production processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>Comprehensive inspection at each manufacturing stage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>Advanced measurement and testing equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <span>Rigorous final testing before shipping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4 text-center">Why Choose Super Textile Services</h2>
            <div className="w-20 h-1 bg-[#E94560] mx-auto mb-12"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-[#E94560] p-4 rounded-lg md:mt-2">
                  <Award size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-3">Global Recognition</h3>
                  <p className="text-gray-600">
                    As India's leading exporter of textile machinery spare parts, we've built a global reputation for excellence. 
                    Our components are trusted by textile manufacturers in over 50 countries across Asia, Europe, Africa, and the Americas.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-[#E94560] p-4 rounded-lg md:mt-2">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-3">Superior Quality & Durability</h3>
                  <p className="text-gray-600">
                    Our components are manufactured to exact specifications using premium materials and advanced engineering techniques.
                    This ensures exceptional performance, extended service life, and reduced maintenance needs for your machinery.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-[#E94560] p-4 rounded-lg md:mt-2">
                  <Users size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-3">Expert Technical Support</h3>
                  <p className="text-gray-600">
                    Beyond manufacturing, we provide comprehensive technical support from our team of experienced engineers.
                    We work closely with clients to solve complex challenges and optimize their production processes.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-[#E94560] p-4 rounded-lg md:mt-2">
                  <Factory size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-3">Custom Manufacturing Capabilities</h3>
                  <p className="text-gray-600">
                    We specialize in custom solutions tailored to your specific requirements. Our engineers can design and
                    manufacture components to match your exact specifications, ensuring perfect compatibility with your machinery.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;