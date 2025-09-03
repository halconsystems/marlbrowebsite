'use client';

import {
  HiBanknotes,
  HiHomeModern,
  HiBuildingOffice,
  HiTruck,
  HiGlobeAlt,
  HiAcademicCap,
} from 'react-icons/hi2';
import SectorCard from '@/components/SectorCards';

const sectors = [
  {
    icon: <HiBanknotes className='text-pink-600'/>,
    title: 'Banks & Financial Institutions',
    description:
      'Secure handling of financial assets, branch security, ATM protection, and mobile cash van escort services.',
  },
  {
    icon: <HiAcademicCap className='text-pink-600'/>,
    title: 'Educational Institutes',
    description:
      'School, college, and university security with a focus on access control, student safety, and staff protection.',
  },
  {
    icon: <HiHomeModern className='text-pink-600'/>,
    title: 'Residential Premises',
    description:
      'Guarding gated communities, apartments, and private residences to ensure safety, privacy, and peace of mind for residents.',
  },
  {
    icon: <HiBuildingOffice className='text-pink-600'/>,
    title: 'Commercial Areas',
    description:
      'Malls, plazas, offices, and industrial zones benefit from our presence through visible deterrence and access management.',
  },
  {
    icon: <HiGlobeAlt className='text-pink-600'/>,
    title: 'Multinational Firms',
    description:
      'Comprehensive protection for multinational offices, staff, and infrastructure with a focus on corporate security protocols.',
  },
  {
    icon: <HiTruck className='text-pink-600'/>,
    title: 'Mobile Vans & Cash-in-Transit',
    description:
      'Escort and secure transport of cash and valuables, ensuring safe delivery through GPS tracking and armed security.',
  },
];

export default function IndustrySectors() {
  return (
    <section className="px-6 py-12 text-center">
      <p className="text-pink-600 font-medium text-4xl mb-6">Industries We Serve</p>
      <p className="text-lg text-gray-900 mb-10 mx-auto max-w-2xl">
        We offer sector-specific security solutions designed to address the unique needs and challenges of various industries. Our wide operational footprint enables us to serve clients all over Pakistan with consistent quality and reliability.
      </p>

      {/* ✅ 2 cards in 1 row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sectors.map((sector, idx) => (
          <SectorCard
            key={idx}
            icon={sector.icon}
            title={sector.title}
            description={sector.description}
          />
        ))}
      </div>
    </section>
  );
}
