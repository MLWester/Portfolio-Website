import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = '/images/Wester_Resume_2025.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Wester_Resume_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F0A] via-[#050806] to-[#030503] py-16 relative">
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
          My Resume
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12"
        >
          <motion.button
            onClick={handleDownload}
            className="bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition duration-300 hover:shadow-lg hover:shadow-lime-500/20"
            whileHover={{ scale: 1.05 }}
          >
            <FaDownload />
            <span>Download PDF</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-lime-500/20"
        >
          <iframe
            src="/images/Wester_Resume_2025.pdf"
            className="w-full h-[800px]"
            title="Resume PDF"
            onError={(e) => {
              e.target.style.display = 'none';
              const errorDiv = document.createElement('div');
              errorDiv.className = 'p-8 text-center text-gray-300';
              errorDiv.innerHTML = 'Unable to load resume. Please use the download button above.';
              e.target.parentNode.appendChild(errorDiv);
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 