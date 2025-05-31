import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(products.map(product => product.category)))];

  useEffect(() => {
    document.title = 'Textile Machinery Spare Parts | High-Quality Components';
    logEvent(analytics, 'page_view', {
      page_title: 'Products',
      page_location: window.location.href,
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative pt-20">
        <div 
          className="h-96 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1034631/pexels-photo-1034631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Our Premium Textile Machinery Components
                </h1>
                <p className="text-xl text-blue-100">
                  Browse our extensive range of textile machinery spare parts, including housings, gears, pulleys, and more, designed for optimal performance and durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Products" 
            subtitle="We offer a wide array of high-quality textile machinery spare parts and components that deliver precision, adaptability, and uniformity to our global clients."
            center
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 m-2 rounded-full transition-colors duration-200 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3846135/pexels-photo-3846135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Quality Assurance" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <SectionTitle 
                title="Our Quality Assurance" 
                subtitle="We maintain the highest standards of quality in every product we manufacture."
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  At Super Textile Services, quality is not just a goal—it's our foundation. Our comprehensive quality assurance system ensures that every component we produce meets the most stringent standards of precision, durability, and performance.
                </p>
                <p>
                  Our ISO-certified manufacturing processes involve multiple quality checks throughout the production journey, from raw material inspection to final product testing. Our state-of-the-art testing equipment ensures dimensional accuracy, material integrity, and functional performance of every component.
                </p>
                <p>
                  We continuously invest in advanced quality control technologies and train our quality assurance team to stay ahead of industry standards. This unwavering commitment to quality has earned us the trust of textile manufacturers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Components?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We specialize in designing and manufacturing custom textile machinery components tailored to your specific requirements. Contact our engineering team to discuss your unique needs.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-block"
          >
            Request Custom Solution
          </a>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;