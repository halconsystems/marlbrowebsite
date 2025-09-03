// components/AboutUs.tsx
'use client';

import Image from 'next/image';


export default function About() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <div className="w-full h-auto">
            <Image
              src='/assets/guard1.jpg'
              alt="Main investigator"
              className="rounded-lg shadow-lg"
              width={500}
              height={600}
              priority
            />
          </div>
          {/* Small Overlay Image */}
          {/* <div className="absolute bottom-[-30px] left-[-30px] hidden sm:block bg-white shadow-xl p-2 rounded-md">
            <Image
              src={''}
              alt="Small image"
              className="rounded"
              width={200}
              height={150}
            />
          </div> */}
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-6 bg-pink-600"></div>
            <h3 className="text-pink-600 font-semibold text-sm">About Us</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Established Private Security Experts You Can Trust
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Established over two decades ago, <strong>Marlbro Security</strong> has built a solid
            reputation as one of Pakistan’s most reliable and professional security services
            providers. With 20 years of experience in the field, we offer unmatched expertise in
            safeguarding life, property, and assets.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are fully registered and legally recognized, operating with a clear mission: to
            deliver security solutions that instill confidence and peace of mind. Our teams are
            trained to the highest standards, combining vigilance, discipline, and professionalism
            to meet the diverse needs of our clients.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether it’s a residential complex or a corporate office, our approach is rooted in
            trust, transparency, and a commitment to excellence. Over the years, we have proudly
            partnered with institutions, businesses, and communities across Pakistan to provide
            tailor-made security services that ensure round-the-clock protection.
          </p>

          {/* Feature Grid */}
          <div className="bg-gray-50 p-6 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm shadow">
            <div className="flex items-center space-x-2">
              <span className="text-pink-600">✔</span>
              <span>Trained Professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-600">✔</span>
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-600">✔</span>
              <span>Legal & Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-600">✔</span>
              <span>Over 20 Years of Experience</span>
            </div>
          </div>

          {/* <button className="mt-6 bg-gradient-to-r from-pink-600 to-orange-400 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition">
            Contact Us
          </button> */}
        </div>
      </div>
    </section>
  );
}
