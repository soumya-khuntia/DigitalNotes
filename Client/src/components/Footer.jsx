  import React from 'react';
  import { FaHeart } from "react-icons/fa";

  const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 text-base">
              <span className="font-medium">Crafted with</span>
              <FaHeart className="text-red-500 animate-pulse w-5 h-5" />
              <span className="font-medium">by</span>
              <span className="text-yellow-400 animate-twinkle font-medium">shining 5stars</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
          .animate-twinkle {
            animation: twinkle 2s ease-in-out infinite;
          }
        `}</style>
      </footer>
    );
  };

  export default Footer;