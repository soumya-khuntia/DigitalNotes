import React from 'react';
import { FaRocket, FaSearch, FaUsers, FaChartLine, FaShieldAlt, FaClock, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Current Home Content */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bookshell.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-24 lg:py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8 animate-fade-in-down">Welcome to Diginotes</h1>
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
            <FeatureCard icon={FaChartLine} title="Grow" description="Expand your knowledge with us" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">What We Provide</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Diginotes is your go-to platform for high-quality, organized PDF notes tailored for BTech students! Access a wide range of notes across various subjects, carefully curated to help you study and succeed. Easily preview, download, and bookmark PDFs to personalize your learning experience, all in one place.
          </p>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaShieldAlt className="text-5xl md:text-6xl text-indigo-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-gray-600 text-lg">Secure Access</div>
          </div>
          <div className="p-6 hover:bg-purple-50 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaClock className="text-5xl md:text-6xl text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 text-lg">System Monitoring</div>
          </div>
          <div className="p-6 hover:bg-blue-50 rounded-xl transition-all duration-300 transform hover:scale-105">
            <FaServer className="text-5xl md:text-6xl text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 text-lg">Uptime Guaranteed</div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <FAQItem
              question="What is this website about?"
              answer="This website provides a platform for users to access curated content, connect with others, and grow their knowledge in various subjects."
            />
            <FAQItem
              question="How can I sign up?"
              answer="You can sign up by clicking the 'Get Started' button on the homepage or navigating to the Sign-Up page."
            />
            <FAQItem
              question="Is there a community feature?"
              answer="Yes, you can join our community to connect with like-minded individuals and share insights."
            />
          </div>
        </div>
      </section>
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

const FAQItem = ({ question, answer }) => (
  <div className="border-b border-gray-300 pb-4">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{question}</h3>
    <p className="text-gray-600 mt-2">{answer}</p>
  </div>
);

export default Home;