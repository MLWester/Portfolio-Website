import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 relative">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-600"
        >
          Contact Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 rounded-xl p-8 shadow-2xl max-w-2xl mx-auto border border-lime-500/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
          <div className="space-y-6">
            <motion.a 
              href="mailto:masonwester21@gmail.com"
              className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors border border-lime-500/10 hover:border-lime-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <FaEnvelope className="text-lime-400" size={24} />
              <span className="text-gray-300">masonwester21@gmail.com</span>
            </motion.a>
            <motion.div 
              className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors border border-lime-500/10 hover:border-lime-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <FaPhone className="text-lime-400" size={24} />
              <span className="text-gray-300">+1 (806) 418-3216</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors border border-lime-500/10 hover:border-lime-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <FaMapMarkerAlt className="text-lime-400" size={24} />
              <span className="text-gray-300">Canyon, Texas</span>
            </motion.div>
          </div>
          <div className="flex space-x-6 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/mason-wester/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-lime-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="https://github.com/MLWester"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-lime-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub size={32} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 