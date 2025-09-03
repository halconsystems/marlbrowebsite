// app/components/HeroSection.tsx or similar
import Image from "next/image";
import fingerprint from "@/public/assets/finger.png";
import heroImage from "@/public/assets/guard.jpg"; 
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1c1c1c] text-white pt-14">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 z-10">
          <Image src='/assets/finger.png' alt="Fingerprint" className="w-24 h-24" width={100} height={100} />
          <h4 className="text-lg font-semibold">Discover The Truth</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Marlbro  <br />
            Security  <br />
            Services
          </h1>
          <p className="text-lg text-gray-300">
            Marlbro Security has built a solid reputation as one of Pakistan’s most reliable and professional security services providers. With 20 years of experience in the field, we offer unmatched expertise in safeguarding life, property, and assets.
          </p>
          <Link
            href="/AboutUs"
            > <button className="bg-gradient-to-r from-pink-500 cursor-pointer to-orange-500 px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition">
            Discover More →
          </button></Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative z-10">
          <Image
            src='/assets/guard5.jpg'
            alt="Detective"
            width={800}
            height={100}
            className="object-cover w-full h-auto rounded-md"
            priority
          />
        </div>

        {/* Gradient Overlay (left side) */}
        <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1c]/80 to-transparent z-0" />

        {/* Decorative dots (optional) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent z-0" />
      </div>
    </section>
  );
}
