import React, { useState, useEffect } from "react";
import { FaRocket, FaLightbulb, FaUsers, FaLock, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

import SJO from "/photos/SJO.jpeg";
import SRK from "/photos/SRK.jpg";
import SRP from "/photos/SRP.jpg";
import SRD from "/photos/SRD.jpg";

const AboutUs = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const teamMembers = [
    { 
      name: "Mr. Spandan Swain", 
      role: "Team Leader", 
      image: <FaUserTie className="w-full h-full text-indigo-600 bg-gradient-to-r from-purple-200 to-indigo-200 p-4" />,
      isIcon: true 
    },
    { name: "Soumya jaganath ojha", role: "Backend Developer", image: SJO },
    { name: "Soumya Ranjan Khuntia", role: "Frontend Developer", image: SRK },
    { name: "Soumya Ranjan palei", role: "API Developer", image: SRP },
    { name: "Soumya Ranjan Das", role: "Ui & Ux Designer", image: SRD },
  ];

  const coreValues = [
    { icon: <FaRocket className="text-4xl md:text-5xl text-indigo-600" />, title: "Innovation", description: "Pioneering cutting-edge solutions in online education" },
    { icon: <FaLightbulb className="text-4xl md:text-5xl text-indigo-600" />, title: "Creativity", description: "Designing unique and engaging learning experiences" },
    { icon: <FaUsers className="text-4xl md:text-5xl text-indigo-600" />, title: "Community", description: "Fostering a global network of passionate learners" },
    { icon: <FaLock className="text-4xl md:text-5xl text-indigo-600" />, title: "Security", description: "Ensuring robust data protection and user privacy" },
    { icon: <FaChalkboardTeacher className="text-4xl md:text-5xl text-indigo-600" />, title: "Excellence", description: "Delivering world-class educational content" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Hero Banner Section */}
      <section className="relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center mb-6"
          >
            Revolutionizing Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-3xl"
          >
            Empowering learners worldwide through innovative technology
          </motion.p>
        </div>
      </section>

      {/* Mission and Vision Statements Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12`}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white p-6 md:p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-indigo-700">Our Mission</h2>
            <p className="text-lg md:text-xl leading-relaxed">To revolutionize online education by leveraging technology, making high-quality study materials accessible to learners worldwide, and creating a decentralized knowledge-sharing ecosystem.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-white p-6 md:p-10 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-indigo-700">Our Vision</h2>
            <p className="text-lg md:text-xl leading-relaxed">To create a global, decentralized learning ecosystem where knowledge is freely shared, verified and empowering individuals to reach their full potential and drive innovation in every field.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-indigo-700 mb-4">Our Visionary Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the brilliant minds behind our mission to revolutionize education</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative aspect-[4/5]">
                  {member.isIcon ? (
                    <div className="w-full h-full flex items-center justify-center">
                      {member.image}
                    </div>
                  ) : (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-0.5">{member.name}</h3>
                    <p className="text-indigo-300 font-medium text-xs sm:text-sm">{member.role}</p>
                  </div>
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-indigo-700">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center transform hover:shadow-xl transition duration-300"
            >
              {value.icon}
              <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-6 mb-2 md:mb-4 text-indigo-700">{value.title}</h3>
              <p className="text-base md:text-lg">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-700 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white">Join the Future of Learning</h2>
          <p className="text-xl md:text-2xl mb-8 md:mb-12 text-indigo-100">Start your journey with us today!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-700 px-8 md:px-12 py-3 md:py-5 rounded-full text-lg md:text-xl font-semibold shadow-lg hover:bg-indigo-100 transition duration-300"
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;