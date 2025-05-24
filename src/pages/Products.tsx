import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/firebase';
import { ChevronRight, Search, Filter, CheckCircle } from 'lucide-react';
import SeoHead from '../components/ui/SeoHead';
import Button from '../components/ui/Button';
import { Product } from '../types';
import { Link } from 'react-router-dom';

const categoryList = [
  'All Categories',
  'Housings and Frames',
  'Gears and Gearboxes',
  'Pulleys and Rollers',
  'Cylinder Heads',
  'Brackets and Mounts',
  'Nozzles and Jets',
  'Loom Parts',
  'Other Components'
];

const Products: React.FC = () => {
  const [products, setProducts] = useState<Record<string, Product>>({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchData('products', (data) => {
      setProducts(data || {});
      setLoading(false);
    });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredProducts = Object.entries(products)
    .filter(([_, product]) => {
      // Filter by search term
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Filter by category
      if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
        return false;
      }
      
      return true;
    })
    .map(([id, product]) => ({ id, ...product }));

  return (
    <>
      <SeoHead 
        title="Textile Machinery Components & Spare Parts"
        description="Browse our extensive range of precision-engineered textile machinery spare parts including gears, housings, rollers, and more. Premium quality, global shipping."
        keywords="textile machinery parts, textile machine components, spinning machine spares, loom components, textile machinery gears"
      />
      
      {/* Hero Section */}
      <section className="relative bg-[#0F3460] py-20 md:py-28">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://www.apparelresources.com/wp-content/uploads/2017/05/italian-textile-machinery.jpg')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Premium Textile Machinery
              <span className="block text-[#E94560] mt-3">Components & Spare Parts</span>
            </h1>
            <div className="w-20 h-1 bg-[#E94560] mx-auto my-6"></div>
            <p className="text-lg text-gray-200">
              Explore our extensive range of precision-engineered textile machinery components,
              manufactured to exacting standards for optimal performance and durability.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-2xl font-bold text-[#0F3460]">Our Product Range</h2>
              
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3460] w-full sm:w-64"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                
                <Button 
                  variant="outline" 
                  size="md" 
                  className="md:hidden flex items-center justify-center"
                  onClick={toggleFilters}
                  icon={<Filter size={18} />}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} bg-white rounded-lg shadow-md p-6 h-fit`}>
              <h3 className="text-lg font-bold text-[#0F3460] mb-4">Categories</h3>
              <ul className="space-y-2">
                {categoryList.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        selectedCategory === category 
                          ? 'bg-[#0F3460]/10 text-[#0F3460] font-medium' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#0F3460] mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-[#E94560] mt-1 mr-2 shrink-0" />
                    <span className="text-sm text-gray-700">Premium quality materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-[#E94560] mt-1 mr-2 shrink-0" />
                    <span className="text-sm text-gray-700">Precision engineering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-[#E94560] mt-1 mr-2 shrink-0" />
                    <span className="text-sm text-gray-700">Global shipping available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-[#E94560] mt-1 mr-2 shrink-0" />
                    <span className="text-sm text-gray-700">Custom manufacturing</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 bg-[#0F3460] text-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">Need Custom Parts?</h3>
                <p className="text-sm text-gray-200 mb-3">
                  We can manufacture components to your exact specifications.
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="sm" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0F3460]"></div>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold text-[#0F3460] mb-2">No Products Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any products matching your search criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Categories');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.image || 'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=800'} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-[#0F3460]">{product.name}</h3>
                          <span className="text-xs bg-[#0F3460]/10 text-[#0F3460] px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                        
                        {product.features && product.features.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-[#0F3460] mb-2">Key Features:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {product.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle size={14} className="text-[#E94560] mt-1 mr-2 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                              {product.features.length > 3 && (
                                <li className="text-[#E94560] text-xs">+ {product.features.length - 3} more features</li>
                              )}
                            </ul>
                          </div>
                        )}
                        
                        <Link to="/contact" className="inline-flex items-center text-[#E94560] hover:text-[#0F3460] font-medium transition-colors">
                          Request Quote <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Featured Product Categories</h2>
            <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Explore our most popular textile machinery component categories, engineered for maximum 
              performance, durability, and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://5.imimg.com/data5/SELLER/Default/2021/1/PR/DE/VZ/1000356/img-20190611-0008-500x500.jpg"
                  alt="Housings and Frames" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0F3460]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F3460] mb-2">Housings and Frames</h3>
                <p className="text-gray-600 mb-4">
                  Precision-engineered housings and frames designed for optimal stability and durability in high-stress textile machinery environments.
                </p>
                <button 
                  className="text-[#E94560] hover:text-[#0F3460] font-medium transition-colors flex items-center"
                  onClick={() => handleCategoryChange('Housings and Frames')}
                >
                  View Products <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://houstondynamic.com/wp-content/uploads/bb-plugin/cache/gear-box-e1523970659310-landscape-0d458d1645e9fad4d60e755c3cbd8beb-nu2r67mbcdfk.jpg"
                  alt="Gears and Gearboxes" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0F3460]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F3460] mb-2">Gears and Gearboxes</h3>
                <p className="text-gray-600 mb-4">
                  High-performance gears and gearboxes manufactured with premium materials for smooth operation and extended service life.
                </p>
                <button 
                  className="text-[#E94560] hover:text-[#0F3460] font-medium transition-colors flex items-center"
                  onClick={() => handleCategoryChange('Gears and Gearboxes')}
                >
                  View Products <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://image.made-in-china.com/2f0j00cQJqDteBEMpF/Textile-Machinery-Winding-Machine-Stainless-Steel-Guide-Wheels-V-U-Groove-Rail-Pulley.webp"
                  alt="Pulleys and Rollers" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0F3460]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F3460] mb-2">Pulleys and Rollers</h3>
                <p className="text-gray-600 mb-4">
                  Precision-balanced pulleys and rollers that ensure smooth material flow and minimize vibration in textile machinery.
                </p>
                <button 
                  className="text-[#E94560] hover:text-[#0F3460] font-medium transition-colors flex items-center"
                  onClick={() => handleCategoryChange('Pulleys and Rollers')}
                >
                  View Products <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#0F3460]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Custom Textile Machine Components?
              </h2>
              <p className="text-gray-300 mb-6">
                Our engineering team can design and manufacture custom components to your exact specifications.
                With our advanced manufacturing capabilities, we can produce complex parts that perfectly match your requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#E94560] mr-3" />
                  <span className="text-white">Custom design and engineering services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#E94560] mr-3" />
                  <span className="text-white">Prototype development and testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#E94560] mr-3" />
                  <span className="text-white">Small to large production runs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-[#E94560] mr-3" />
                  <span className="text-white">Comprehensive quality assurance</span>
                </div>
              </div>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11208_2.jpg"
                alt="Custom manufacturing" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-[#0F3460]/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;