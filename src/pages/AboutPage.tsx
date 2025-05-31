import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import CompanyTimeline from '../components/CompanyTimeline';
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';
import { Award, Users, Lightbulb, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Super Textile Services | Textile Machinery Experts Since 1984';
    logEvent(analytics, 'page_view', {
      page_title: 'About',
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
            backgroundImage: 'url(https://images.pexels.com/photos/3862134/pexels-photo-3862134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Our Legacy in Textile Machinery Manufacturing
                </h1>
                <p className="text-xl text-blue-100">
                  Discover our journey as a leading textile machinery spare parts manufacturer, committed to quality, innovation, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Who We Are" 
                subtitle="A trusted partner in the textile industry for over four decades."
              />
              <div className="space-y-6 text-gray-700">
                <p>
                  Founded in 1984 in Coimbatore, Tamil Nadu, Super Textile Services has grown from a small workshop to a global enterprise. Our journey began with a simple mission: to provide high-quality textile machinery components that enhance performance and productivity.
                </p>
                <p>
                  Today, we stand as one of India's premier manufacturers and exporters of textile machinery spare parts, serving clients in over 50 countries worldwide. Our state-of-the-art manufacturing facility, equipped with advanced CNC machines and precision tools, enables us to deliver components that meet the highest standards of quality and performance.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to excellence, continuous innovation, and customer satisfaction. We believe in building long-term relationships with our clients by understanding their unique requirements and delivering solutions that exceed their expectations.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3846107/pexels-photo-3846107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Manufacturing Facility" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide our operations and define our culture."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ValueCard 
              icon={<Award size={40} />}
              title="Quality Assurance"
              description="We maintain ISO-certified manufacturing processes and rigorous quality control at every stage of production."
            />
            <ValueCard 
              icon={<Lightbulb size={40} />}
              title="Innovation"
              description="We continuously invest in cutting-edge technology and processes to stay ahead of industry trends."
            />
            <ValueCard 
              icon={<Users size={40} />}
              title="Expert Team"
              description="Our skilled engineers and technicians bring decades of experience and expertise to every project."
            />
            <ValueCard 
              icon={<Globe size={40} />}
              title="Global Reach"
              description="We export to over 50 countries, providing local support through our global distribution network."
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <CompanyTimeline />

      {/* Mission and Vision */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To deliver high-quality textile machinery components that enhance performance, productivity, and profitability for our clients, while maintaining the highest standards of quality, innovation, and customer service.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To be the global leader in textile machinery spare parts manufacturing, recognized for our quality, innovation, and commitment to customer satisfaction, while contributing to the advancement of the textile industry worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the experts who drive our vision and guide our operations."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TeamMember 
              name="Rajesh Kumar"
              position="Founder & CEO"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TeamMember 
              name="Priya Sharma"
              position="Chief Technology Officer"
              image="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TeamMember 
              name="Vijay Menon"
              position="Head of Global Operations"
              image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group">
    <div className="h-80 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-blue-600">{position}</p>
    </div>
  </div>
);

export default AboutPage;