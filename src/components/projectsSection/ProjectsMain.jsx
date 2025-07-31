import { useState, useEffect, useRef } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaFileAlt, FaYoutube } from "react-icons/fa";

const projects = [
  {
    name: "AI Assisted Holy Quran Mobile App",
    year: "2025",
    align: "right",
    image: "/images/Project-1/Project-1.jpg",
    screenshots: [
      "/images/Project-1/Project-1.jpg",
      "/images/Project-1/home-1.jpeg",
      "/images/Project-1/Mushaf-1.jpeg",
      "/images/Project-1/azkar-1.jpeg",
      "/images/Project-1/azkar-2.jpeg",
      "/images/Project-1/azkar-3.jpeg",
      "/images/Project-1/azkar-4.jpeg",
      "/images/Project-1/bookmarks-1.jpeg",
      "/images/Project-1/boomarks-2.jpeg",
      "/images/Project-1/login-1.jpeg",
      "/images/Project-1/login-2.jpeg",
      "/images/Project-1/qiblah-1.jpeg",
      "/images/Project-1/qiblah-2.jpeg",
      "/images/Project-1/qiblah-3.jpeg",
      "/images/Project-1/quiz-1.jpeg",
      "/images/Project-1/quiz-2.jpeg",
      "/images/Project-1/quiz-3.jpeg"
    ],
    link: "https://www.youtube.com/shorts/Qakl_oXfRgM", // Add your YouTube demo link here
    githubLink: "https://github.com/Karim-308/jawwed-mobile", // Add your GitHub repo link here
    buttonType: "demo",
    description: "Graduation project - A cross-platform Quran app with Mushaf reading, advanced bookmarking, and audio recitation. Features AI-powered speech recognition for feedback on memorization and pronunciation.",
    technologies: ["React Native", "Redux", "Google OAuth", "SQLite", "REST API", "Jest"],
    features: [
      "Built a cross-platform Quran app with Mushaf reading, advanced bookmarking, and audio recitation",
      "Added AI-powered speech recognition for feedback on memorization and pronunciation",
      "Supported secure login, dark/light mode, offline storage, and dynamic content via REST APIs"
    ],
  },
  {
    name: "Movie Discovery Mobile App",
    year: "2025",
    align: "left",
    image: "/images/Project-2/Project-2.jpg",
    screenshots: [
      "/images/Project-2/Project-2.jpg",
      "/images/Project-2/1.jpeg",
      "/images/Project-2/2.jpeg",
      "/images/Project-2/3.jpeg",
      "/images/Project-2/4.jpeg",
      "/images/Project-2/5.jpeg",
      "/images/Project-2/6.jpeg",
      "/images/Project-2/7.jpeg",
      "/images/Project-2/8.jpeg"
    ],
    link: "https://www.youtube.com/shorts/OA6SAqSB3pM", // Add your YouTube demo link here
    githubLink: "https://github.com/mohamed-khaled-xv/SceneStack", // Add your GitHub repo link here
    buttonType: "demo",
    description: "A comprehensive movie discovery app with smooth navigation, offline lists, and user authentication. Integrated with TMDB API to show movies, cast, and detailed information.",
    technologies: ["React Native", "Expo","Redux Toolkit", "TypeScript", "Firebase", "SQLite","Nativewind", "Axios", "TMDB API"],
    features: [
      "Created a movie app with smooth navigation, offline lists, and user authentication",
      "Integrated TMDB API to show movies, cast, and details; used Firebase for user data",
      "Enabled persistent watchlists and favorites using local storage"
    ],
  },
  {
    name: "Student Grades Management System",
    year: "2024",
    align: "right",
    image: "/images/Project-3/Project-2.png",
    screenshots: [
      "/images/Project-3/1.jpeg",
      "/images/Project-3/2.jpeg",
    ],
    link: "https://drive.google.com/file/d/1I3JjiWXFuXkj8HXIkNDOMPVnVZPPNZx6/view?usp=sharing",
    githubLink: "https://github.com/ShoroukHegazy15/student_grades_testing", // Add your GitHub repo link here
    buttonType: "document",
    description: "A Java desktop application for managing and validating student grades and subjects. The project includes robust input validation, automated grade/GPA calculation, and generates output reports. Emphasis was placed on comprehensive software testing, achieving full unit, integration, and black box/white box test coverage.",
    technologies: ["Java", "JUnit", "Desktop Application", "Software Testing"],
    features: [
      "Contributed as a software tester for a desktop application that manages student grades, focusing on both unit and integration testing to ensure reliability and robustness",
      "Designed and implemented unit tests for core modules (Student, Subject, FileHandler, OutputFileHandler) and developed integration tests to verify seamless interaction between file handling and grade processing components"
    ],
  },
  {
    name: "Gobblet Board Game with AI Player",
    year: "2024",
    align: "left",
    image: "/images/Project-4/Project-4.jpg",
    screenshots: [
      "/images/Project-4/Project-4.jpg",
      "/images/Project-4/1.png",
      "/images/Project-4/2.png",
      "/images/Project-4/3.png",
      "/images/Project-4/4.png",
      "/images/Project-4/5.png"
    ],
    link: "https://www.youtube.com/watch?v=fIVzeX9LMyg", // Add your YouTube demo link here
    githubLink: "https://github.com/mostsfamahmoud/Gobblet-AI-Player", // Add your GitHub repo link here
    buttonType: "demo",
    description: "An interactive GUI implementation of the Gobblet board game featuring a visually dynamic 4x4 board, animated piece stacking, and real-time status updates with AI player capabilities.",
    technologies: ["Python", "Tkinter", "AI"],
    features: [
      "Designed and implemented an interactive GUI for the Gobblet board game using Python's tkinter, featuring a visually dynamic 4x4 board, animated piece stacking, and real-time status updates",
      "Developed intuitive menu navigation, mode selection (Human vs AI, AI vs AI, Human vs Human), and seamless integration with game logic and AI to ensure an engaging and user-friendly experience"
    ],
  },
];

const ProjectsMain = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);
  const thumbnailScrollRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Auto-scroll thumbnails when screenshot changes
  useEffect(() => {
    if (thumbnailScrollRef.current && selectedProject) {
      const thumbnailWidth = 96; // Width of each thumbnail (w-24 = 96px)
      const gap = 12; // Gap between thumbnails (gap-3 = 12px)
      const scrollPosition = selectedScreenshot * (thumbnailWidth + gap);
      
      thumbnailScrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [selectedScreenshot, selectedProject]);

  // Preload critical images when project modal opens
  useEffect(() => {
    if (selectedProject) {
      // Preload the first few screenshots for faster navigation
      selectedProject.screenshots.slice(0, 3).forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [selectedProject]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setSelectedScreenshot(0); // Reset to first screenshot
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedScreenshot(0);
  };

  const nextScreenshot = () => {
    if (selectedProject && selectedScreenshot < selectedProject.screenshots.length - 1) {
      setSelectedScreenshot(selectedScreenshot + 1);
    }
  };

  const prevScreenshot = () => {
    if (selectedScreenshot > 0) {
      setSelectedScreenshot(selectedScreenshot - 1);
    }
  };

  return (
    <motion.div 
      id="projects" 
      className="max-w-[1200px] mx-auto px-4"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <SingleProject
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
                project={project}
                onProjectClick={openProjectModal}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-2 sm:p-2 bg-black bg-opacity-50"
          onClick={closeProjectModal}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-darkgray rounded-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-lightcyan custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-2 right-2 text-white hover:text-cyan transition-colors z-10 p-2"
              >
                <FaTimes size={20} className="sm:text-2xl" />
              </button>
              
              <div className="p-3 sm:p-6">
                {/* Main Screenshot Display */}
                <div className="mb-4 sm:mb-6 relative p-2 sm:p-4 bg-gray-800 rounded-xl">
                  {/* Mobile Layout: Buttons beside screenshot */}
                  <div className="sm:hidden flex items-center gap-2">
                    {/* Left Arrow - Mobile */}
                    <button
                      onClick={prevScreenshot}
                      disabled={selectedScreenshot === 0}
                      className={`px-1 py-1 rounded-lg transition-all duration-200 shadow-lg flex-shrink-0 ${
                        selectedScreenshot === 0 
                          ? 'bg-darkgray opacity-30 cursor-not-allowed' 
                          : 'bg-lightblue opacity-80 hover:opacity-60 active:opacity-100 active:bg-primaryblue hover:bg-lightblue'
                      }`}
                    >
                      <FaChevronLeft className="text-white text-sm opacity-100" />
                    </button>

                    {/* Screenshot Container - Mobile */}
                    <div className="flex-1 relative">
                      {/* Blurred Background - Mobile */}
                      <div 
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        style={{
                          backgroundImage: `url(${selectedProject.screenshots[selectedScreenshot]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: 'blur(20px)',
                          transform: 'scale(1.1)',
                          zIndex: 1
                        }}
                      ></div>
                      
                      {/* Dark overlay - Mobile */}
                      <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg z-10"></div>
                      
                      <img 
                        src={selectedProject.screenshots[selectedScreenshot]} 
                        alt={`${selectedProject.name} screenshot ${selectedScreenshot + 1}`}
                        className="relative w-full max-h-[50vh] object-contain rounded-lg z-20"
                        loading="eager"
                      />
                    </div>

                    {/* Right Arrow - Mobile */}
                    <button
                      onClick={nextScreenshot}
                      disabled={selectedScreenshot === selectedProject.screenshots.length - 1}
                      className={`px-1 py-1 rounded-lg transition-all duration-200 shadow-lg flex-shrink-0 ${
                        selectedScreenshot === selectedProject.screenshots.length - 1
                          ? 'bg-darkgray opacity-30 cursor-not-allowed' 
                          : 'bg-lightblue opacity-80 hover:opacity-60 active:opacity-100 active:bg-primaryblue hover:bg-lightblue'
                      }`}
                    >
                      <FaChevronRight className="text-white text-sm opacity-100" />
                    </button>
                  </div>

                  {/* Desktop Layout: Buttons overlapping screenshot */}
                  <div className="hidden sm:block relative">
                    {/* Blurred Background - Desktop */}
                    <div 
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${selectedProject.screenshots[selectedScreenshot]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(20px)',
                        transform: 'scale(1.1)',
                        zIndex: 1
                      }}
                    ></div>
                    
                    {/* Dark overlay - Desktop */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg z-10"></div>
                    
                    <img 
                      src={selectedProject.screenshots[selectedScreenshot]} 
                      alt={`${selectedProject.name} screenshot ${selectedScreenshot + 1}`}
                      className="relative w-full max-h-[70vh] object-contain rounded-lg z-20"
                      loading="eager"
                    />
                    
                    {/* Navigation Arrows - Desktop Only */}
                    {selectedProject.screenshots.length > 1 && (
                      <>
                        {/* Left Arrow - Desktop */}
                        <button
                          onClick={prevScreenshot}
                          disabled={selectedScreenshot === 0}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 px-2 py-2 rounded-lg transition-all duration-200 z-20 shadow-lg ${
                            selectedScreenshot === 0 
                              ? 'bg-darkgray opacity-30 cursor-not-allowed' 
                              : 'bg-lightblue opacity-70 hover:opacity-60 active:opacity-100 active:bg-primaryblue hover:bg-lightblue'
                          }`}
                        >
                          <FaChevronLeft className="text-white text-lg opacity-100" />
                        </button>
                        
                        {/* Right Arrow - Desktop */}
                        <button
                          onClick={nextScreenshot}
                          disabled={selectedScreenshot === selectedProject.screenshots.length - 1}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 px-2 py-2 rounded-lg transition-all duration-200 z-20 shadow-lg ${
                            selectedScreenshot === selectedProject.screenshots.length - 1
                              ? 'bg-darkgray opacity-30 cursor-not-allowed' 
                              : 'bg-lightblue opacity-70 hover:opacity-60 active:opacity-100 active:bg-primaryblue hover:bg-lightblue'
                          }`}
                        >
                          <FaChevronRight className="text-white text-lg opacity-100" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Screenshot Thumbnails */}
                <div className="mb-4 sm:mb-6">
                  <div 
                    ref={thumbnailScrollRef}
                    className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 custom-scrollbar"
                  >
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${selectedProject.name} thumbnail ${index + 1}`}
                        className={`h-12 w-16 sm:h-16 sm:w-24 object-cover rounded cursor-pointer border-2 transition-all flex-shrink-0 ${
                          selectedScreenshot === index 
                            ? 'border-cyan opacity-100' 
                            : 'border-bordergray opacity-70 hover:opacity-100'
                        }`}
                        onClick={() => setSelectedScreenshot(index)}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-3xl font-bold text-white">{selectedProject.name}</h2>
                    <span className="text-base sm:text-lg text-white font-special">{selectedProject.year}</span>
                  </div>
                  
                  <p className="text-white text-sm sm:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 sm:px-3 sm:py-1 bg-primaryblue text-white rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan mb-2">Key Features</h3>
                    <ul className="space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-white flex items-start text-sm sm:text-base">
                          <span className="w-2 h-2 bg-lightcyan rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-2 border border-cyan text-cyan rounded-lg hover:bg-cyan hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {selectedProject.buttonType === "document" ? (
                        <>
                          Preview Document
                          <FaFileAlt size={16} className="sm:text-lg" />
                        </>
                      ) : (
                        <>
                          Live Demo
                          <FaYoutube size={16} className="sm:text-lg" />
                        </>
                      )}
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-2 border border-cyan text-cyan rounded-lg hover:bg-cyan hover:text-white transition-colors text-sm sm:text-base"
                    >
                      Source Code
                      <FaGithub size={16} className="sm:text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsMain;
