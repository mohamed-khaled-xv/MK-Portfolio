import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaFileAlt, FaYoutube, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, project, onProjectClick }) => {
  return (
    <motion.div
      variants={fadeIn(align === "left" ? "right" : "left", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-white sm:text-center md:text-left">{name}</h2>
        <h2
          className="text-xl font-thin text-white font-special sm:text-center md:text-left"
        >
          {year}
        </h2>
        
        {/* Technologies Display */}
        <div className="mt-3 mb-4 sm:text-center md:text-left">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-darkgray text-cyan rounded-md text-xs border border-cyan hover:text-successgreen hover:border-successgreen transition-all duration-500 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-2 sm:items-center md:items-start">
          <button
            onClick={() => onProjectClick(project)}
            className="text-lg flex gap-2 items-center text-lightcyan hover:text-successgreen transition-all duration-500 cursor-pointer"
          >
            View Details <BsFillArrowUpRightCircleFill size={20}/>
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-lightcyan hover:text-successgreen transition-all duration-500 cursor-pointer"
          >
            {project.buttonType === "document" ? (
              <>
                Preview Document
                <FaFileAlt size={18} />
              </>
            ) : (
              <>
                Live Demo
                <FaYoutube size={24} />
              </>
            )}
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-lightcyan hover:text-successgreen transition-all duration-500 cursor-pointer"
          >
            Source Code
            <FaGithub size={18} />
          </a>
        </div>
      </div>
      <div 
        className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-bordergray cursor-pointer"
        onClick={() => onProjectClick(project)}
      >
        <div className="w-full h-fulltransition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" loading="lazy" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
