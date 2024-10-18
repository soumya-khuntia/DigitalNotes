import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-800/70 backdrop-blur-md shadow-lg'
        : 'bg-gray-800'
    }`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white font-bold text-xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Link to="/">DigiNotes</Link>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4 px-4 sm:px-6 md:px-8 lg:px-12 gap-4">
          <Link to="/" className={`text-white font-bold hover:text-gray-300 hidden md:inline ${location.pathname === '/' ? 'text-blue-400' : ''}`}>Home</Link>
          <Link to="/about" className={`text-white font-bold hover:text-gray-300 hidden md:inline ${location.pathname === '/about' ? 'text-blue-400' : ''}`}>About</Link>
          <Link to="/contact" className={`text-white font-bold hover:text-gray-300 hidden md:inline ${location.pathname === '/contact' ? 'text-blue-400' : ''}`}>Contact</Link>
          {isSignedIn ? (
            <Link to="/dashboard" className="text-white font-bold hover:text-gray-300 bg-green-600 px-4 py-2 rounded-md hidden md:inline">Dashboard</Link>
          ) : (
            <Link to="/signin" className="text-white font-bold hover:text-gray-300 bg-blue-600 px-4 py-2 rounded-md hidden md:inline">Signin</Link>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div 
        className={`md:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={`text-white block hover:bg-gray-700 px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-gray-700' : ''}`}>Home</Link>
          <Link to="/about" className={`text-white block hover:bg-gray-700 px-3 py-2 rounded-md ${location.pathname === '/about' ? 'bg-gray-700' : ''}`}>About</Link>
          <Link to="/contact" className={`text-white block hover:bg-gray-700 px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'bg-gray-700' : ''}`}>Contact</Link>
          {isSignedIn ? (
            <Link to="/dashboard" className={`text-white block hover:bg-gray-700 px-3 py-2 rounded-md ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}>Dashboard</Link>
          ) : (
            <Link to="/signin" className={`text-white block hover:bg-gray-700 px-3 py-2 rounded-md ${location.pathname === '/signin' ? 'bg-gray-700' : ''}`}>Signin</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;