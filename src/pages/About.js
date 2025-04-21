import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
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
          About Me
        </motion.h1>
        {/* Rest of your About page content */}
      </div>
    </div>
  );
};

export default About; 