import React, { useState, useEffect } from 'react';

const GlobalPresence: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const regions = [
    { name: 'Asia', countries: 'India, China, Japan, Thailand, Vietnam, Bangladesh', percentage: 40 },
    { name: 'Europe', countries: 'Germany, Italy, UK, France, Spain, Turkey', percentage: 25 },
    { name: 'Americas', countries: 'USA, Canada, Brazil, Mexico, Argentina', percentage: 20 },
    { name: 'Africa & Middle East', countries: 'Egypt, South Africa, UAE, Morocco, Tunisia', percentage: 15 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % regions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [regions.length]);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-lg text-gray-600">
              Exporting premium textile machinery components to over 50 countries across the globe.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-wrap">
              {regions.map((region, index) => (
                <div 
                  key={region.name}
                  className={`cursor-pointer px-6 py-4 text-center border-b-2 transition-colors duration-300 ${
                    activeIndex === index 
                      ? 'border-blue-600 text-blue-700 bg-blue-50' 
                      : 'border-transparent text-gray-600 hover:text-blue-600'
                  }`}
                  style={{ flex: '1 1 auto', minWidth: '150px' }}
                  onClick={() => setActiveIndex(index)}
                >
                  {region.name}
                </div>
              ))}
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {regions[activeIndex].name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Key markets: {regions[activeIndex].countries}
                  </p>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${regions[activeIndex].percentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    {regions[activeIndex].percentage}% of our exports
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-blue-100 rounded-lg p-4 text-center">
                    <div className="text-5xl font-bold text-blue-700 mb-2">
                      {regions[activeIndex].percentage}%
                    </div>
                    <div className="text-blue-800">
                      Market Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;