import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: "url('/bookshell.jpg')"}}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-4">Welcome to Our Website</h1>
        <p className="text-base sm:text-xl md:text-2xl text-center mb-8">Discover amazing features and services</p>
        <Link 
          to="/signup" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-full flex items-center transition duration-300"
          aria-label="Get Started"
        >
          <span className="mr-2 md:text-xl">Get Started</span>
          <FaRocket className="text-xl md:text-2xl" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

export default Home;