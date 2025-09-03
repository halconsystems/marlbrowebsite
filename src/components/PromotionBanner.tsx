'use client';

import Image from 'next/image';
import Link from 'next/link';

const PromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 ">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-white text-center md:text-left mt-8 md:mt-0 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Get Professional <br /> security service.
          </h1>
          <Link
            href="/Contact"
            className="inline-block mt-6 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-md text-sm font-medium"
          >
            Contact With Us
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2 h-96 md:h-[420px]">
          <Image
            src="/assets/security.png"
            alt="Security Professional"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
