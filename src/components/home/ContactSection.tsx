import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../ui/Button';
import { addData } from '../../utils/firebase';
import { ContactForm } from '../../types';

const ContactSection: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
          <p className="text-gray-600">
            Have questions about our products or services? Fill out the form below, and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
                <h3 className="text-xl font-bold text-[#0F3460] mb-6">Send Us a Message</h3>
                
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]/50 focus:border-[#E94560]"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]/50 focus:border-[#E94560]"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]/50 focus:border-[#E94560]"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]/50 focus:border-[#E94560]"
                      placeholder="Your company name (optional)"
                    />
                  </div>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94560]/50 focus:border-[#E94560]"
                    placeholder="Tell us about your requirements"
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
          
          {/* Contact Info */}
          <div>
            <div className="bg-[#0F3460] p-8 rounded-lg shadow-lg text-white mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#E94560] p-3 rounded-lg mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-300">123 Industrial Area, Coimbatore, Tamil Nadu, India - 641008</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E94560] p-3 rounded-lg mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E94560] p-3 rounded-lg mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-300">info@SuperTextileServices.com</p>
                    <p className="text-gray-300">sales@SuperTextileServices.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#0F3460] mb-6">Business Hours</h3>
              
              <ul className="space-y-3">
                <li className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Saturday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;