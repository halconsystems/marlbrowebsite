

import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/Data/ServiceData';

const OurServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-pink-600 font-medium text-4xl mb-6">Our Services</p>
        <p className="text-lg  text-gray-900 mb-18 mx-auto max-w-2xl">
          At Marlbro Security, we deliver a wide range of professional security services, tailored to meet diverse client needs across multiple industries. Our personnel are rigorously trained, background-checked, and committed to upholding the highest standards of vigilance and integrity.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
