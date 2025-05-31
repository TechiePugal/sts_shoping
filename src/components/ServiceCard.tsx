import React from 'react';
import { Service } from '../types';
import { PenToolIcon as ToolIcon, SettingsIcon, CogIcon, GlobeIcon, FactoryIcon } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
          {getIcon(service.icon)}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Tool':
      return <ToolIcon size={24} />;
    case 'Settings':
      return <SettingsIcon size={24} />;
    case 'Cog':
      return <CogIcon size={24} />;
    case 'Globe':
      return <GlobeIcon size={24} />;
    case 'Factory':
      return <FactoryIcon size={24} />;
    default:
      return <SettingsIcon size={24} />;
  }
};

export default ServiceCard;