  import React from 'react';
  import { FaFacebook } from "react-icons/fa";
  import { FaSquareXTwitter } from "react-icons/fa6";
  import { FaInstagramSquare } from "react-icons/fa";

  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Logo and Name */}
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <img src="/path/to/logo.png" alt="Logo" className="h-12 mb-2" />
              <h3 className="text-xl font-bold">Digital Notes</h3>
            </div>

            {/* Navigation Menu */}
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li className="mb-2">
                  <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
                </li>
                <li className="mb-2">
                  <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="w-full sm:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaSquareXTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
