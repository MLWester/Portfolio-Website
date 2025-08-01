import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLanguage } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <FaLanguage className="text-lime-400" size={24} />,
      items: ['C#', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Node.js']
    },
    {
      category: 'Frameworks & Libraries',
      icon: <FaCode className="text-lime-400" size={24} />,
      items: ['.NET Core', 'ASP.NET Core', 'React', 'Razor Pages', 'Bootstrap', 'Entity Framework Core', 'TailwindCSS', 'FastAPI', 'Recharts']
    },
    {
      category: 'Databases & Analytics',
      icon: <FaDatabase className="text-lime-400" size={24} />,
      items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'RapidMiner', 'R', 'Data Visualization', 'Data Mining', 'Probability & Statistics']
    },
    {
      category: 'Tools & Practices',
      icon: <FaTools className="text-lime-400" size={24} />,
      items: ['Git', 'GitHub', 'VS Code', 'Windows', 'Linux', 'API Integration', 'Agile', 'Scrum', 'TDD', 'Version Control', 'UML', 'Testing', 'Technical Documentation', 'Cloud Computing', 'Cybersecurity Fundamentals', 'Team Leadership', 'Project Management']
    }
  ];

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
          My Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-lime-500/20"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                {skill.icon}
                <h2 className="text-xl sm:text-2xl font-bold text-white">{skill.category}</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-lime-500/10 text-lime-400 rounded-full text-xs sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 