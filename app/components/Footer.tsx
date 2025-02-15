// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';  // Ensure you import Link from react-router-dom

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Follow Us Section (Left side with logo at top and bottom) */}
          <div className="w-full md:w-1/4 mb-6">
            <div className="flex flex-col items-center">
              {/* Company Logo (Top) */}
              <div className="order-1 md:order-2">
                <Link
                  className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                  to="#"
                >
                  {/* Visible Company Logo */}
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"  // Increased the size for visibility
                    height="48" // Increased the size for visibility
                    viewBox="0 0 24 24"
                    fill="currentColor" // This makes sure the icon fills with current color
                  >
                    <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                  </svg>
                  MMH
                </Link>
              </div>

              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  {/* Social Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.5 17h-3v-6h3v6zm-1.5-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-7.5 7h-3v-9h3v9zm-1.5-10c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm9 10h-3v-6h3v6zm-1.5-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  {/* Another Social Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15h-1.5v-4.5h-3v4.5h-1.5v-9h1.5v5h3v-5h1.5v9zm-5-7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  {/* Another Social Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M9 7h6v10h-6zm0-2c-.553 0-1 .447-1 1v12c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-12c0-.553-.447-1-1-1h-6z"/>
                  </svg>
                </a>
              </div>

              {/* Company Logo (Bottom) */}
              <div className="order-1 md:order-2 mt-4">
                <Link
                  className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                  to="#"
                >
                  {/* Visible Company Logo (Bottom) */}
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"  // Increased size
                    height="48" // Increased size
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                  </svg>
                  MMH
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section (Middle) */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Shop</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section (Right side) */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li><a href="mailto:info@example.com" className="hover:text-gray-400">info@example.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-gray-400">+1 234 567 89</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
