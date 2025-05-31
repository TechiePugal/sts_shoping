import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Super Textile Services | Get in Touch';
    logEvent(analytics, 'page_view', {
      page_title: 'Contact',
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
            backgroundImage: 'url(https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Get In Touch
                </h1>
                <p className="text-xl text-blue-100">
                  Have questions about our products or services? Our team of experts is ready to assist you with any inquiries you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Contact Information" 
                subtitle="Reach out to us for inquiries, support, or custom requirements."
              />
              
              <div className="mt-10 space-y-8">
                <ContactItem 
                  icon={<Phone size={24} />} 
                  title="Phone Number" 
                  details={["+91 98765 43210"]}
                  description="Monday to Saturday, 9:00 AM - 6:00 PM (IST)"
                />
                
                <ContactItem 
                  icon={<Mail size={24} />} 
                  title="Email Address" 
                  details={["info@SuperTextileServicesgroup.com"]}
                  description="We'll respond to your inquiry within 24 hours"
                  isLink
                  href="mailto:info@SuperTextileServicesgroup.com"
                />
                
                <ContactItem 
                  icon={<MapPin size={24} />} 
                  title="Office Location" 
                  details={[
                    "123 Industrial Area,",
                    "Coimbatore, Tamil Nadu,",
                    "India - 641008"
                  ]}
                  description="Our headquarters and manufacturing facility"
                />
                
                <ContactItem 
                  icon={<Clock size={24} />} 
                  title="Business Hours" 
                  details={[
                    "Monday - Saturday: 9:00 AM - 6:00 PM",
                    "Sunday: Closed"
                  ]}
                  description="Indian Standard Time (IST)"
                />
                
                <ContactItem 
                  icon={<Globe size={24} />} 
                  title="International Inquiries" 
                  details={[
                    "Email: exports@SuperTextileServicesgroup.com",
                    "Phone: +91 98765 43211"
                  ]}
                  description="Dedicated support for global clients"
                />
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Send Us a Message" 
                subtitle="Fill out the form below and we'll get back to you shortly."
              />
              
              <div className="mt-10 bg-white p-8 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Location" 
            subtitle="Visit our manufacturing facility and headquarters in Coimbatore, India."
            center
          />
          
          <div className="mt-10 rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
            <div className="h-full w-full bg-gray-300 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Super Textile Services</h3>
                <p className="text-gray-600">
                  123 Industrial Area, Coimbatore, Tamil Nadu, India - 641008
                </p>
                <a 
                  href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our products, services, and processes."
            center
          />
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid gap-6">
              <FAQItem 
                question="What information should I provide when requesting a quote?"
                answer="When requesting a quote, please provide details about the specific product or component you're interested in, including specifications, quantity requirements, and your timeline. The more information you provide, the more accurate our quote will be."
              />
              
              <FAQItem 
                question="Do you offer customized textile machinery components?"
                answer="Yes, we specialize in designing and manufacturing custom textile machinery components based on your specific requirements. Our engineering team can work with you to develop solutions tailored to your unique needs."
              />
              
              <FAQItem 
                question="What are your shipping and delivery timelines?"
                answer="Our standard delivery timeline is 2-4 weeks for stock items and 4-6 weeks for custom orders, depending on complexity and quantity. We ship globally and can provide expedited shipping options for urgent requirements."
              />
              
              <FAQItem 
                question="Do you provide technical support for your products?"
                answer="Yes, we offer comprehensive technical support for all our products. Our team of experts is available to assist with installation guidance, troubleshooting, and maintenance advice to ensure optimal performance of our components."
              />
              
              <FAQItem 
                question="What quality standards do your products meet?"
                answer="All our products are manufactured according to ISO 9001:2015 quality standards. We maintain rigorous quality control processes throughout production to ensure that every component meets the highest standards of precision, durability, and performance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageSquare size={48} className="mx-auto text-blue-300 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Discuss Your Requirements</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is ready to help you find the perfect solution for your textile machinery needs. Contact us today to start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210" 
                className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Call Us Now
              </a>
              <a 
                href="mailto:info@SuperTextileServicesgroup.com" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  description?: string;
  isLink?: boolean;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ 
  icon, 
  title, 
  details, 
  description,
  isLink = false,
  href
}) => (
  <div className="flex">
    <div className="text-blue-600 mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-1 mb-1">
        {details.map((detail, index) => (
          <div key={index}>
            {isLink ? (
              <a 
                href={href} 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {detail}
              </a>
            ) : (
              <span className="text-gray-700">{detail}</span>
            )}
          </div>
        ))}
      </div>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <h3 className="text-xl font-bold text-gray-900 mb-3">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </div>
);

export default ContactPage;