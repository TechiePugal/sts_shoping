import React from 'react';
import SeoHead from '../components/ui/SeoHead';
import Hero from '../components/home/Hero';
import ProductShowcase from '../components/home/ProductShowcase';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ContactSection from '../components/home/ContactSection';
import FaqSection from '../components/home/FaqSection';

const Home: React.FC = () => {
  return (
    <>
      <SeoHead 
        title="Premium Textile Machinery Spares & Services"
        description=" Group offers world-class textile machinery spares, expert maintenance, and turnkey solutions for textile industries worldwide. Trusted since 1984."
        keywords="textile machinery spares, textile machine parts, textile machinery service, turnkey textile solutions, Super Textile Services"
      />
      <Hero />
      <ProductShowcase />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Home;