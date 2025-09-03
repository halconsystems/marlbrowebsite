
import React from 'react';
import { Service } from '@/Data/ServiceData'; 
import Image from 'next/image';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
      {service.image && (
  <div className="w-full h-64 relative">
    <Image
      src={service.image}
      alt={service.title}
      layout="fill"
      // objectFit="cover"
      quality={100} 
      priority 
    />
  </div>
)}

      <div className="p-6">
        {service.tag && (
          <span className="inline-block bg-red-100 text-red-600 px-3 py-1 text-sm font-semibold rounded-full mb-4">
            {service.tag}
          </span>
        )}

        <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>

        {/* <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Read More
        </button> */}
      </div>
    </div>
  );
};

export default ServiceCard;
