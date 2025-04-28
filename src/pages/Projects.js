import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaDownload, FaEye, FaFileAlt, FaPlay } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

const projects = [
  {
    title: "FitPro Gym Membership Manager",
    description: "A full-featured ASP.NET Core web application designed to manage gym memberships. It includes functionality for adding, updating, and deleting members and plans, searching and sorting records, and enforcing validation and data integrity. Built using Razor Pages, EF Core, and Bootstrap for a clean, responsive UI.",
    image: "/images/fitpro 5.png",
    video: "/FitPro-Demo-Vid.mp4",
    technologies: ["ASP.NET Core", "Razor Pages", "Entity Framework Core", "Bootstrap", "SQL Server"],
    github: "https://github.com/MLWester/FitPro-Gym-Membership-Manager",
    demo: "#"
  },
  {
    title: "RaceLens – Sim Racing Telemetry Visualizer",
    description: "A modern full-stack web app built with React, TailwindCSS, and FastAPI to analyze iRacing telemetry data. Features include multi-lap comparison, tire wear simulation, driver input consistency, and interactive charts for speed, brake, throttle, and gear changes. Optimized for performance and real-time racing insights.",
    image: "/images/SpeedAnalysis.png",
    technologies: ["React", "FastAPI", "TailwindCSS", "Recharts", "Python", "Data Analysis"],
    github: "https://github.com/MLWester/RaceLens",
    demo: "https://bright-maamoul-e3e9ab.netlify.app/"
  },
  {
    title: "Hospital Database Management System",
    description: "A comprehensive SQL-based database solution designed for BSA Urgent Care to improve healthcare data management. The system supports patient registration, billing, medical records, and staff coordination (Doctors, Nurses, and Administration). It emphasizes data integrity, interoperability, and cybersecurity, with normalized tables, entity relationships, and business rules to support efficient, secure operations and HIPAA compliance.",
    image: "/images/3rd Nominal Form.png",
    technologies: ["SQL Server", "Database Design", "Healthcare Systems", "Data Security", "HIPAA Compliance"],
    isPDF: true,
    viewProject: "/Hospital-DB-Project.pdf",
    downloadProject: "/Hospital-DB-Project.pdf"
  },
  {
    title: "Choose Your Own Adventure (CYOA) Game",
    description: "A C# console-based text adventure game where players create characters, choose races and weapons, and face off against a dragon. Developed using object-oriented principles and a multilingual message system (English, French, Spanish), the game includes combat logic, stat-based gameplay, and unit-tested components.",
    image: "/images/CYOA Class Diagram.png",
    screenshots: [
      "/images/CYOA Class Diagram.png",
      "/images/CYOA Attack Diagram.png",
      "/images/CYOA Create Charcter Activity Diagram.png",
      "/images/CYOA End Game Diagram.png",
      "/images/CYOA Sequence Diagram.png",
      "/images/CYOA Start Diagram.png"
    ],
    technologies: ["C#", "Object-Oriented Programming", "Unit Testing", "Multilingual Support"],
    github: "https://github.com/MLWester/Create-Your-Own-Adventure-Game",
    demo: "#"
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-[#0A0F0A] via-[#050806] to-[#030503] rounded-xl overflow-hidden shadow-xl cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-lime-500/10 text-lime-400 rounded-full text-sm border border-lime-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.isPDF ? (
            <>
              <a
                href={project.viewProject}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:from-purple-600 hover:to-blue-600 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                View PDF
              </a>
              <a
                href={project.downloadProject}
                download
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white hover:from-green-600 hover:to-teal-600 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                Download PDF
              </a>
            </>
          ) : project.video ? (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:from-purple-600 hover:to-blue-600 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(project);
                }}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white hover:from-green-600 hover:to-teal-600 transition-all"
              >
                Watch Demo
              </button>
            </>
          ) : project.screenshots ? (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:from-purple-600 hover:to-blue-600 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(project);
                }}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white hover:from-green-600 hover:to-teal-600 transition-all"
              >
                View Screenshots
              </button>
            </>
          ) : (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:from-purple-600 hover:to-blue-600 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white hover:from-green-600 hover:to-teal-600 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.screenshots.length
      );
    }
  };

  const prevImage = () => {
    if (project.screenshots) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + project.screenshots.length) % project.screenshots.length
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#0A0F0A] via-[#050806] to-[#030503] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {project.video ? (
            <div className="mb-4">
              <video 
                controls 
                className="w-full rounded-lg"
                poster={project.image}
                autoPlay
                playsInline
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : project.screenshots ? (
            <div className="relative mb-4">
              <img
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full rounded-lg"
              />
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? 'bg-lime-400' : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg mb-4 object-cover"
            />
          )}

          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-lime-500/10 text-lime-400 rounded-full text-sm border border-lime-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.isPDF ? (
              <>
                <a
                  href={project.viewProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                  View PDF
                </a>
                <a
                  href={project.downloadProject}
                  download
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white hover:from-green-600 hover:to-teal-600 transition-all"
                >
                  Download PDF
                </a>
              </>
            ) : (
              <>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                  View on GitHub
                </a>
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg text-white hover:from-green-600 hover:to-teal-600 transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    if (project.video) {
      setShowVideoModal(true);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowVideoModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f0a] via-[#050806] to-[#030503] py-16 relative">
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
            <ProjectCard
              key={index}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal for screenshots */}
      {selectedProject && Array.isArray(selectedProject.screenshots) && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}

      {/* Video Modal */}
      {showVideoModal && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Projects; 