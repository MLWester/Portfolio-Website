import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaDownload, FaEye, FaFileAlt, FaPlay } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

const projects = [
  {
    title: "Hospital Data Management System",
    description: "Designed and implemented a centralized SQL database to manage hospital operations, featuring structured patient records, staff scheduling, and medical inventory for streamlined access. Optimized data retrieval with indexing and efficient query structures while ensuring relational integrity through normalization and consistent schema design.",
    technologies: ["SQL", "Entity Relationship Modeling", "Query Optimization", "Database Design"],
    image: "/images/3rd Nominal Form.png",
    viewProject: "/Hospital-DB-Project.pdf",
    downloadProject: "/Hospital-DB-Project.pdf",
    isPDF: true
  },
  {
    title: "Choose Your Own Adventure Game",
    description: "Collaboratively developed a text-based console game using C# and object-oriented principles. Designed game logic, character creation, and combat systems with multilingual support. Implemented Agile practices and version control in GitHub to manage tasks and features, with comprehensive unit testing and documentation.",
    technologies: ["C# (.Net 9)", "Object-Oriented Programming", "Unit Testing", "GitHub", "Agile Development"],
    image: "/images/CYOA Class Diagram.png",
    github: "https://github.com/MLWester/Create-Your-Own-Adventure-Game",
    demo: null
  },
  {
    title: "FitPro Gym Management System",
    description: "Built a web-based gym membership platform with admin and user-facing tools. Designed and implemented a relational SQL database for memberships, payments, and attendance tracking. Developed interfaces with CRUD operations, search, sort, and pagination features, integrating data validation and role-based security.",
    technologies: ["C#", "Razor Pages", "SQL", "Entity Framework Core", "Bootstrap"],
    image: "/images/fitpro 5.png",
    github: "https://github.com/MLWester/FitPro-Gym-Membership-Manager",
    demo: "/FitPro-Demo-Vid.mp4"
  },
  {
    title: "Sim Racing Telemetry Visualizer",
    description: "Developed a full-stack telemetry analysis tool for sim racing using React and FastAPI. Parses iRacing CSV telemetry data (throttle, brake, tire temps, lap times) and visualizes driver inputs with interactive charts, sector/lap comparisons, stint summaries, and tire wear simulation.",
    technologies: ["React", "FastAPI", "TailwindCSS", "Recharts", "Python", "CSV Parsing"],
    image: "/images/SpeedAnalysis.png",
    github: "https://github.com/MLWester/RaceLens",
    demo: "https://bright-maamoul-e3e9ab.netlify.app/"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowVideoModal(false);
  };

  const openVideoModal = (project) => {
    setSelectedProject(project);
    setShowVideoModal(true);
  };

  const nextImage = () => {
    if (selectedProject && Array.isArray(selectedProject.screenshots)) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedProject.screenshots.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && Array.isArray(selectedProject.screenshots)) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length
      );
    }
  };

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
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-lime-500/20 hover:border-lime-500/40 transition-colors"
            >
              <div className="relative h-48 bg-gray-900">
                {project.isPDF ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-lime-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-lime-500/10 text-lime-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.isPDF ? (
                    <>
                      <motion.a
                        href={project.viewProject}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaEye size={20} />
                        <span>View Project</span>
                      </motion.a>
                      <motion.a
                        href={project.downloadProject}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaDownload size={20} />
                        <span>Download</span>
                      </motion.a>
                    </>
                  ) : (
                    <>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaGithub size={20} />
                        <span>GitHub</span>
                      </motion.a>
                      {project.demo && (
                        project.demo.endsWith('.mp4') ? (
                          <motion.button
                            onClick={() => openVideoModal(project)}
                            className="flex items-center gap-2 px-4 py-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <FaPlay size={20} />
                            <span>Watch Demo</span>
                          </motion.button>
                        ) : (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <FaExternalLinkAlt size={20} />
                            <span>Live Demo</span>
                          </motion.a>
                        )
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for screenshots */}
      {selectedProject && Array.isArray(selectedProject.screenshots) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-xl p-6 max-w-4xl w-full mx-4 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title} Screenshots</h3>
              <motion.button
                onClick={closeModal}
                className="text-white hover:text-lime-400 transition-colors p-2 rounded-full hover:bg-gray-700"
                whileHover={{ scale: 1.1 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </div>
            
            <div className="relative">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={selectedProject.screenshots[currentImageIndex]}
                alt={`Screenshot ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <motion.button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaChevronLeft size={24} />
              </motion.button>
              <motion.button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaChevronRight size={24} />
              </motion.button>
            </div>
            
            <div className="mt-6 text-center text-white text-lg">
              Image {currentImageIndex + 1} of {selectedProject.screenshots.length}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {showVideoModal && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-xl p-6 max-w-4xl w-full mx-4 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title} Demo</h3>
              <motion.button
                onClick={closeModal}
                className="text-white hover:text-lime-400 transition-colors p-2 rounded-full hover:bg-gray-700"
                whileHover={{ scale: 1.1 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </div>
            
            <div className="relative">
              <video
                src={selectedProject.demo}
                controls
                className="w-full rounded-lg shadow-xl"
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects; 