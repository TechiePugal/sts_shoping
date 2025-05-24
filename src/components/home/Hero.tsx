import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import BackgroundSlider from './BackgroundSlider';

const imageList: string[] = [
  'https://www.legrom.de/wp-content/uploads/2017/03/1280px-OE-Actionbild-Spulapparat.png',
  'https://tiimg.tistatic.com/fp/1/005/822/weaving-textile-machinery-parts-602.jpg',
  'https://m.textilesparesparts.com/photo/pc32873251-rieter_bt923_open_end_spinning_spare_parts_roller_complete_for_textile_machiney.jpg'
];

const Hero: React.FC = () => {
  return (
    <section className="relative ">
<div className="absolute inset-0 z-0">
  <BackgroundSlider images={imageList} />
  <div className="absolute inset-0 bg-black/70"></div>  {/* 20% black */}
</div>


      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fadeIn">
            Premium Textile Machinery Spares
            <span className="block text-[#E94560] mt-2">
              Precision Engineering Excellence
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 md:pr-8 animate-fadeInDelay">
            Super Textile Services is India's top exporter of high-quality textile machine spares,
            components, and accessories with over 40 years of manufacturing excellence and global
            presence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeInDelayLong">
            <Link to="/products">
              <Button variant="primary" size="lg">
                Explore Products
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </Link>

            <Link to="/contact">
              <button className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-medium transition">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '40+', label: 'Years Experience' },
              { value: '500+', label: 'Products' },
              { value: '50+', label: 'Countries Served' },
              { value: '1000+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
