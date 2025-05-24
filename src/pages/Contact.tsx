import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, Globe } from 'lucide-react';
import SeoHead from '../components/ui/SeoHead';
import Button from '../components/ui/Button';
import { addData } from '../utils/firebase';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await addData('contacts', {
        ...formData,
        timestamp: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead 
        title="Contact Us - Textile Machinery Experts"
        description="Connect with Super Textile Services's textile machinery experts. Inquire about our spare parts, services, or request a consultation for your specific needs."
        keywords="contact textile machinery manufacturer, textile spare parts inquiry, textile services contact"
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
              Get In Touch
              <span className="block text-[#E94560] mt-3">We're Here To Help</span>
            </h1>
            <div className="w-20 h-1 bg-[#E94560] mx-auto my-6"></div>
            <p className="text-lg text-gray-200">
              Have questions about our products or services? Need technical support?
              Our team of experts is ready to assist you with any inquiries you may have.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F3460]/10 mb-6">
                <Phone size={28} className="text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Our customer support team is available to help during business hours.</p>
              <a href="tel:+919876543210" className="text-[#E94560] font-semibold text-lg hover:text-[#0F3460] transition-colors">
                +91 98765 43210
              </a>
              <p className="text-gray-500 mt-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F3460]/10 mb-6">
                <Mail size={28} className="text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
              <a href="mailto:info@servicegroup.com" className="text-[#E94560] font-semibold text-lg hover:text-[#0F3460] transition-colors">
                info@servicegroup.com
              </a>
              <p className="text-gray-500 mt-2">For general inquiries</p>
              <a href="mailto:sales@servicegroup.com" className="text-[#E94560] font-semibold text-lg hover:text-[#0F3460] transition-colors block mt-3">
                sales@servicegroup.com
              </a>
              <p className="text-gray-500 mt-2">For sales inquiries</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F3460]/10 mb-6">
                <MapPin size={28} className="text-[#0F3460]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F3460] mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Visit our headquarters to see our manufacturing facility in action.</p>
              <p className="text-[#0F3460] font-semibold">
                123 Industrial Area, <br />
                Coimbatore, Tamil Nadu, <br />
                India - 641008
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#E94560] hover:text-[#0F3460] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#0F3460] mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F3460] mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your message has been successfully sent. We will contact you soon!</p>
                  <Button 
                    variant="primary" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="inquiry" className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Inquiry</option>
                      <option value="service">Service Request</option>
                      <option value="quote">Request for Quote</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460]/50 focus:border-[#0F3460]"
                      placeholder="Tell us about your requirements or questions"
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <span className="animate-spin mr-2">⟳</span> : <Send size={18} />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Map and Hours */}
<div className="space-y-8">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.866153580972!2d76.9841977!3d11.0486604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590073e1cd03%3A0xe209a99ef3c72493!2sSudharsan%20heavy%20engineering%20industry!5e0!3m2!1sen!2sin!4v1747820866670!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
    {/* <div className="text-center p-8"> */}
      <a 
        href="https://maps.google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        // className="inline-block mt-4 text-[#E94560] hover:text-[#0F3460] transition-colors"
      >
      </a>
    {/* </div> */}
  </div>
{/* </div> */}

              

              
              <div className="bg-[#0F3460] p-8 rounded-lg shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">International Inquiries</h3>
                <p className="text-gray-300 mb-6">
                  For international customers, we offer specialized support to address your specific requirements and handle export logistics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-semibold">Global Export Team</h4>
                      <p className="text-gray-300 text-sm">exports@servicegroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="text-[#E94560] mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-semibold">International Helpline</h4>
                      <p className="text-gray-300 text-sm">+91 98765 43211</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-[#0F3460] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our products, services, and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-[#0F3460] mb-3">What are your payment terms?</h3>
                <p className="text-gray-600">
                  We accept various payment methods including bank transfers, letters of credit, and secure online payments. Specific terms are discussed during the quotation process depending on order size and shipping location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-[#0F3460] mb-3">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship to over 50 countries worldwide. We handle all export documentation and can arrange shipping via air freight or sea freight depending on your requirements and timeline.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-[#0F3460] mb-3">What is the lead time for orders?</h3>
                <p className="text-gray-600">
                  Lead times vary depending on the products ordered and quantities. Standard items typically ship within 1-2 weeks, while custom components may take 3-4 weeks. Large orders may require additional production time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-[#0F3460] mb-3">Can you manufacture custom parts?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in custom manufacturing. Our engineering team can work from your drawings or specifications, or help design components to meet your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#0F3460] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Discuss Your Requirements?</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you need standard components, custom parts, or complete solutions, our team is ready to help you find the perfect solution for your textile machinery needs.
            </p>
            <Button variant="primary" size="lg">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;