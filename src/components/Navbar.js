import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-sm border-b border-lime-500/20 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-lime-400 text-xl font-bold">
              MW
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-1 sm:space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-lime-400 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/skills"
                className="text-gray-300 hover:text-lime-400 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-lime-400 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className="text-gray-300 hover:text-lime-400 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-lime-400 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://github.com/MLWester/Portfolio-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-lime-400 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                aria-label="View portfolio source on GitHub"
              >
                <FaGithub className="inline-block" />
                <span className="hidden sm:inline">View Portfolio Source Code
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-lime-400 focus:outline-none p-2"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden bg-black/95 border-t border-lime-500/20 overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://github.com/MLWester/Portfolio-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-lime-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="View portfolio source on GitHub"
          >
            <span className="inline-flex items-center gap-2"><FaGithub /> View Source</span>
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 