import React from 'react';
import { FaRocket, FaSearch, FaUsers, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: "url('/bookshell.jpg')"}}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8 animate-fade-in-down">Welcome to Our Website</h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-10 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up">Discover amazing features and services that will revolutionize your experience</p>
        <Link 
          to="/signup" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full flex items-center transition duration-300 transform hover:scale-105 hover:shadow-xl"
          aria-label="Get Started"
        >
          <span className="mr-3 text-lg sm:text-xl md:text-2xl">Get Started</span>
          <FaRocket className="text-xl sm:text-2xl md:text-3xl" aria-hidden="true" />
        </Link>
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full max-w-7xl">
          <FeatureCard icon={FaSearch} title="Explore" description="Discover new content tailored just for you" />
          <FeatureCard icon={FaUsers} title="Connect" description="Join a community of like-minded individuals" />
          <FeatureCard icon={FaChartLine} title="Grow" description="Track your progress and achieve your goals" />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 sm:p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <Icon className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-blue-400" />
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-300">{description}</p>
  </div>
);

export default Home;