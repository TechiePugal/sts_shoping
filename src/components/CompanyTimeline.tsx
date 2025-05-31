import React, { useState } from 'react';

const timelineEvents = [
  {
    year: 1984,
    title: 'Company Founded',
    description: 'Super Textile Services was established in Coimbatore as a small workshop specializing in textile machinery components.'
  },
  {
    year: 1992,
    title: 'First International Export',
    description: 'Expanded operations and began exporting textile machinery spare parts to neighboring countries.'
  },
  {
    year: 2000,
    title: 'ISO Certification',
    description: 'Received ISO 9001:2000 certification for quality management systems, marking a significant milestone in our quality assurance journey.'
  },
  {
    year: 2008,
    title: 'Facility Expansion',
    description: 'Invested in a state-of-the-art manufacturing facility with advanced CNC machines and quality control equipment.'
  },
  {
    year: 2015,
    title: 'Global Recognition',
    description: 'Recognized as a premier exporter of textile machinery spare parts with presence in over 40 countries.'
  },
  {
    year: 2023,
    title: 'Digital Transformation',
    description: 'Implemented Industry 4.0 technologies and launched a comprehensive digital platform to better serve global clients.'
  }
];

const CompanyTimeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState(timelineEvents[timelineEvents.length - 1].year);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Four decades of excellence, innovation, and growth in the textile machinery industry.
            </p>
          </div>

          {/* Timeline Years Navigation */}
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-4"></div>
            <div className="flex justify-between relative">
              {timelineEvents.map((event) => (
                <div 
                  key={event.year} 
                  className="relative z-10"
                  onClick={() => setActiveEvent(event.year)}
                >
                  <div 
                    className={`h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${
                      activeEvent === event.year ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                  ></div>
                  <div 
                    className={`absolute top-10 left-1/2 -translate-x-1/2 text-sm font-semibold transition-colors duration-300 ${
                      activeEvent === event.year ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {event.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          {timelineEvents.map((event) => (
            <div 
              key={event.year}
              className={`transition-opacity duration-500 ${
                activeEvent === event.year ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 text-xl font-bold px-4 py-2 rounded mr-4">
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTimeline;