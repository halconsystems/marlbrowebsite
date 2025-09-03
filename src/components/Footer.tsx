'use client';

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-24 px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
                        src="/assets/logo.jpg"
                        alt="Security Professional"
                        width={40}
                        height={40}
                        // className="object-contain"
                        priority
                      />
            {/* <img src={logo} alt="logo" className="h-10 w-auto" /> */}
            <h2 className="text-xl font-semibold">Marlbro Security</h2>
          </div>
          <p className="text-sm text-gray-300">
           Marlbro Security has built a solid reputation as one of Pakistan’s most reliable and professional security services providers. With 20 years of experience in the field, we offer unmatched expertise in safeguarding life, property, and assets.
          </p>
          {/* <p className="text-sm text-gray-300 mt-4">
            Nisl viverra massa imperdiet. Dui mattis quis congue fames.
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/AboutUs">About Us</Link></li>
            <li><Link href="/OurService">Services</Link></li>
            <li><a href="#">Case</a></li>
            <li><Link href='/Contact'>Contact Us</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          {/* <p className="text-sm text-gray-300 mb-4">Tincidunt neque pretium lectus donec risus.</p> */}
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-pink-500 size-6" />
              <span>Karachi Office: 1st and 2nd Floor, Plot # 54-C, Main Khayaban e Ittehad, DHA Phase 6, Karachi
Ph: 021-37120581</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-pink-500 size-5" />
              <span>Lahore Office: T-84, First Floor, Commercial Area, Phase II, DHA, Lahore
Ph: 042-3570749</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-pink-500" />
              <span>info@marlbrosecueity.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-pink-500" />
              <span>0321-5814774</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© 2024 Marlbro Security. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
