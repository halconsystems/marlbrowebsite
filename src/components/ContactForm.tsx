'use client';

import Image from 'next/image';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Optional: Add form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Image Section */}
        <div className="relative w-full h-[400px] lg:h-auto">
          <Image
            src="/assets/guard5.jpg" // shortened here
            alt="Contact background"
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-2xl lg:text-3xl font-bold">Get in Touch</h2>
          </div> */}
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 cursor-pointer to-orange-500 px-6 py-3 rounded-md font-semibold text-white hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
