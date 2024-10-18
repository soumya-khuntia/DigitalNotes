import React, { useState, useEffect } from "react";
import { FaRocket, FaLightbulb, FaUsers, FaLock } from "react-icons/fa";
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
    { name: "John Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Jane Smith", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Mike Johnson", role: "Lead Developer", image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
  ];

  const coreValues = [
    { icon: <FaRocket className="text-4xl text-indigo-500" />, title: "Innovation", description: "Pushing boundaries in online education" },
    { icon: <FaLightbulb className="text-4xl text-indigo-500" />, title: "Creativity", description: "Fostering unique learning experiences" },
    { icon: <FaUsers className="text-4xl text-indigo-500" />, title: "Community", description: "Building a supportive network of learners" },
    { icon: <FaLock className="text-4xl text-indigo-500" />, title: "Security", description: "Ensuring data protection and privacy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800">
      {/* Hero Banner Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Empowering Education with Us</h1>
        </div>
      </section>

      {/* Mission and Vision Statements Section */}
      <section className="container mx-auto px-4 py-16">
        <div className={`flex ${isLargeScreen ? 'flex-row' : 'flex-col'} gap-8`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">Our Mission</h2>
            <p className="text-lg">To revolutionize online education by leveraging Web3 technology, making high-quality study materials accessible to learners worldwide.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">Our Vision</h2>
            <p className="text-lg">To create a decentralized learning ecosystem where knowledge is freely shared, verified, and rewarded, empowering individuals to reach their full potential.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-indigo-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-4 bg-indigo-100 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-600">Join the Future of Learning</h2>
        <p className="text-xl mb-8">Experience the power of Web3 in education. Start your journey with us today!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Get Started Now
        </motion.button>
      </section>
    </div>
  );
};

export default AboutUs;