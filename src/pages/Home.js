import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaEnvelope } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center pt-24 pb-16 relative">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-600"
          >
            Hi, I'm <span className="text-lime-400">Mason Wester</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-4xl text-gray-300 mb-6 sm:mb-8"
          >
            Computer Information Systems & Business Analytics Professional
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4"
          >
            I'm a detail-oriented and analytical professional with a strong foundation in computer information systems and business analytics. Currently pursuing my Master's degree, I specialize in developing efficient, data-driven solutions and continuously expanding my technical expertise across modern development tools and frameworks.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            <motion.a
              href="/resume"
              className="bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center space-x-2 transition duration-300 hover:shadow-lg hover:shadow-lime-500/20 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <FaFileAlt />
              <span>View Resume</span>
            </motion.a>
            
            <motion.a
              href="/contact"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center space-x-2 transition duration-300 hover:shadow-lg hover:shadow-lime-500/20 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope />
              <span>Contact Me</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 