import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const productCategories = [
  {
    id: 'category1',
    name: 'Housings and Frames',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/PR/DE/VZ/1000356/img-20190611-0008-500x500.jpg',
    description: 'High-precision housings and frames for textile machinery with exceptional durability and performance.'
  },
  {
    id: 'category2',
    name: 'Gears and Gearboxes',
    image: 'https://houstondynamic.com/wp-content/uploads/bb-plugin/cache/gear-box-e1523970659310-landscape-0d458d1645e9fad4d60e755c3cbd8beb-nu2r67mbcdfk.jpg',
    description: 'Precision-engineered gears and gearboxes designed for optimal performance and longevity.'
  },
  {
    id: 'category3',
    name: 'Pulleys and Rollers',
    image: 'https://image.made-in-china.com/2f0j00cQJqDteBEMpF/Textile-Machinery-Winding-Machine-Stainless-Steel-Guide-Wheels-V-U-Groove-Rail-Pulley.webp',
    description: 'High-quality pulleys and rollers that ensure smooth operation and minimal maintenance.'
  },
  {
    id: 'category4',
    name: 'Cylinder Heads',
    image: 'https://autoprotoway.com/wp-content/uploads/2022/10/components-of-a-cylinder-head.jpg',
    description: 'Premium cylinder heads manufactured with precision for consistent performance.'
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Our Premium Products</h2>
          <div className="w-20 h-1 bg-[#E94560] mx-auto mb-6"></div>
          <p className="text-gray-600">
            We manufacture and supply a wide range of high-quality textile machinery spare parts and components
            that deliver precision, adaptability, and uniformity to our global clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F3460] mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link to="/products" className="inline-flex items-center text-[#E94560] hover:text-[#0F3460] font-medium transition-colors">
                  View Details <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="primary" size="lg">
              View All Products
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;