"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const handleNavigate = () => {
  const companyName = "MarlBoro Security";
  const encodedCompanyName = encodeURIComponent(companyName);
  window.location.href = `https://www.guardsos.com/login?company=${encodedCompanyName}`;
};


  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* <img
            src="https://img.freepik.com/premium-vector/simple-black-white-color-security-escort-logo_639175-1555.jpg?ga=GA1.1.437055642.1699790829&semt=ais_items_boosted&w=740"
            alt="logo"
            className="h-10 w-auto"
          /> */}
          <Image
            src="/assets/logo.jpg"
            alt="Security Professional"
            width={40}
            height={40}
            // className="object-contain"
            priority
          />
          <span className="text-2xl font-semibold text-gray-800">
            Marlbro Security
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/">
            <span className="text-base text-gray-800 hover:text-pink-600 font-medium">
              Home
            </span>
          </Link>
          <Link href="/AboutUs">
            <span className="text-base text-gray-800 hover:text-pink-600 font-medium">
              About Us
            </span>
          </Link>
          <Link href="/OurService">
            <span className="text-base text-gray-800 hover:text-pink-600 font-medium">
              Services
            </span>
          </Link>
          <Link href="/Industries">
            <span className="text-base text-gray-800 hover:text-pink-600 font-medium">
              Industries We Serve
            </span>
          </Link>
          <Link href="/Contact">
            <span className="text-base text-gray-800 hover:text-pink-600 font-medium">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Phone and Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-pink-600 font-semibold text-base">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h12M9 3v2m6 4v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1m-6 0h6"
              />
            </svg>
            <span>0321-5814774</span>
          </div>
          <button onClick={handleNavigate}>
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-md text-base cursor-pointer font-semibold hover:opacity-90 transition">
              Log In →
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiOutlineX className="h-6 w-6" />
          ) : (
            <HiOutlineMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pt-4 pb-6 space-y-3 shadow-md">
          <Link href="/">
            <span className="block text-base text-gray-800 hover:text-pink-600 font-medium">
              Home
            </span>
          </Link>
          <Link href="/AboutUs">
            <span className="block text-base text-gray-800 hover:text-pink-600 font-medium">
              About Us
            </span>
          </Link>
          <Link href="/OurService">
            <span className="block text-base text-gray-800 hover:text-pink-600 font-medium">
              Services
            </span>
          </Link>
          <Link href="/Industries">
            <span className="block text-base text-gray-800 hover:text-pink-600 font-medium">
              Industries We Serve
            </span>
          </Link>
          <Link href="/Contact">
            <span className="block text-base text-gray-800 hover:text-pink-600 font-medium">
              Contact Us
            </span>
          </Link>
          <div className="pt-2 text-pink-600 font-semibold text-base flex items-center space-x-2">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h12M9 3v2m6 4v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1m-6 0h6"
              />
            </svg>
            <p>0321-5814774</p>
          </div>
          <button onClick={handleNavigate}>
            <span className="inline-block cursor-pointer mt-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-md text-base font-semibold hover:opacity-90 transition">
              Log In →
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}
