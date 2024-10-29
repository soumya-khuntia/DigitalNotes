import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-lg'
        : 'bg-gradient-to-r from-blue-600 to-purple-600'
    }`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className={`font-extrabold text-2xl px-4 sm:px-6 md:px-8 lg:px-12 hover:scale-105 transition-transform duration-300 ${
          isScrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : 'text-white'
        }`}>
          <Link to="/">DigiNotes</Link>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-6 px-4 sm:px-6 md:px-8 lg:px-12 gap-4">
          <Link to="/" className={`font-bold hover:${ isScrolled ? 'text-blue-500' : 'text-blue-500' } hidden md:inline transition-colors duration-300 ${
            location.pathname === '/' 
              ? ( isScrolled ? 'text-blue-600' : 'text-blue-300' ) 
              : isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Home</Link>
          <Link to="/about" className={`font-bold hover:${ isScrolled ? 'text-blue-500' : 'text-blue-500' } hidden md:inline transition-colors duration-300 ${
            location.pathname === '/about' 
              ? ( isScrolled ? 'text-blue-600' : 'text-blue-300' ) 
              : isScrolled ? 'text-gray-700' : 'text-white'
          }`}>About</Link>
          <Link to="/contact" className={`font-bold hover:${ isScrolled ? 'text-blue-500' : 'text-blue-500' } hidden md:inline transition-colors duration-300 ${
            location.pathname === '/contact' 
              ? ( isScrolled ? 'text-blue-600' : 'text-blue-300' ) 
              : isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Contact</Link>
          {isSignedIn ? (
            <Link to="/dashboard" className={`font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 hidden md:inline ${
              isScrolled ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-blue-600'
            }`}>Dashboard</Link>
          ) : (
            <Link to="/signin" className={`font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 hidden md:inline ${
              isScrolled ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-blue-600'
            }`}>Sign In</Link>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hover:text-blue-600 focus:outline-none md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-lg">
          <Link to="/" className={`block px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${location.pathname === '/' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Home</Link>
          <Link to="/about" className={`block px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${location.pathname === '/about' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>About</Link>
          <Link to="/contact" className={`block px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${location.pathname === '/contact' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Contact</Link>
          {isSignedIn ? (
            <Link to="/dashboard" className={`block px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${location.pathname === '/dashboard' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Dashboard</Link>
          ) : (
            <Link to="/signin" className={`block px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 ${location.pathname === '/signin' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;