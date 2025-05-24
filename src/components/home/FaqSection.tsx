import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 'faq1',
    question: 'What types of textile machinery spare parts do you manufacture?',
    answer: 'We manufacture a wide range of textile machinery spare parts including housings and frames, gears and gearboxes, pulleys and rollers, cylinder heads, brackets and mounts, nozzles and jets, loom parts, bobbin holders, tensioning devices, guides and rails, beams and frames, air tubes and ducts, shafts and spindles, and levers and actuators.'
  },
  {
    id: 'faq2',
    question: 'Do you ship your products internationally?',
    answer: 'Yes, Super Textile Services is a global exporter of textile machinery spare parts. We ship our products to over 50 countries worldwide and have established a strong international presence in the textile industry.'
  },
  {
    id: 'faq3',
    question: 'What quality standards do your products adhere to?',
    answer: 'Our products adhere to strict international quality standards. We are ISO certified and maintain rigorous quality control processes throughout our manufacturing. Each component undergoes multiple inspection stages to ensure precision, durability, and performance.'
  },
  {
    id: 'faq4',
    question: 'Can you manufacture custom textile machinery components?',
    answer: 'Yes, we specialize in both standard and custom textile machinery components. Our team of skilled engineers and technicians can design and manufacture components according to your specific requirements and technical specifications.'
  },
  {
    id: 'faq5',
    question: 'What is the lead time for orders?',
    answer: 'Lead times vary depending on the type and quantity of components ordered. Standard parts are typically available within 1-2 weeks, while custom components may take 3-4 weeks. For large orders or complex custom projects, we provide specific timelines during the quotation process.'
  }
];

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
          <p className="text-gray-600">
            Find answers to common questions about our products, services, and processes. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center bg-gray-50 p-4 md:p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaq === faq.id}
              >
                <h3 className="font-semibold text-[#0F3460] text-lg">{faq.question}</h3>
                {openFaq === faq.id ? (
                  <ChevronUp size={20} className="text-[#E94560] shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-[#E94560] shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="p-4 md:p-6 bg-white text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;