import React, { useState, useEffect } from "react";
import { FaRocket, FaLightbulb, FaUsers, FaLock, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

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
    { name: "Dr. John Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Prof. Jane Smith", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Dr. Mike Johnson", role: "Lead Developer & AI Specialist", image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Dr. Mike Johnson", role: "Lead Developer & AI Specialist", image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Sarah Lee", role: "Head of User Experience", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
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
            <p className="text-lg md:text-xl leading-relaxed">To create a global, decentralized learning ecosystem where knowledge is freely shared, verified, and rewarded, empowering individuals to reach their full potential and drive innovation in every field.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-indigo-700">Our Visionary Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300"
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 md:mb-6 object-cover shadow-md" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-indigo-600 text-base md:text-lg">{member.role}</p>
            </motion.div>
          ))}
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