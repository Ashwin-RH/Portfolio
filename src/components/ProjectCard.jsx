import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const ProjectCard = ({ project, index, isDarkMode }) => {

   const [showOverlay, setShowOverlay] = useState(false);
   const overlayRef = useRef(null);

   // Close overlay when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowOverlay(false);
      }
    };

    if (showOverlay) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOverlay]);

  
  return (
    <motion.div
      whileHover={{
        y: -7,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-gray-400 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-fuchsia-500/40"
        } backdrop-blur-sm`}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden ">
          <img
            src={project.image}
            alt={project.title}
            onClick={() => setShowOverlay(true)}
            className="w-full h-39 md:w-[500px] md:h-[205px] object-contain text-white transition-transform duration-500 "
          />

          {/* Title Badge */}
          <div className="absolute top-6 left-4 ">
            <span 
            className={`text-sm text-white px-1 py-1 font-medium rounded-full ${
              isDarkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 "
                : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
            }`}>
              {project.title}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-12 right-4.5">
              <span className={` text-xs px-3 py-1 rounded-full font-medium ${
                isDarkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300"
                : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
              } `}
              >
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300"
                  : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
              } backdrop-blur-sm`}
            >
              {project.category}
            </span>
          </div>

           {/* Tags Badge */}
          <div className="absolute bottom-2 left-4 hidden md:flex gap-3 flex-wrap">
            {project.tags.map((tag,index) =>(
            <span 
            key={index}
            className={` text-sm px-1 py-1 rounded-xl border border-gray-600 shadow-inner font-medium ${
              isDarkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300"
              : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
            }`}
            >
              {tag}
            </span>
            ))}
          </div>

         

          {/* Desktop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex absolute inset-0 bg-black/60 backdrop-blur-sm items-center justify-center space-x-4 group-hover:flex"
          >
            
            <div className="w-60 h-30 text-white text-left pl-1 mt-3 ">
            {project.description}
            </div>
          
            <div className="w-30 h-30 mt-3 flex flex-col space-y-2">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 14, opacity: 1, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-30 h-10 bg-gradient-to-br from-violet-500/40 to-orange-500 text-white px-4 py-2 -mt-3 border-black rounded-full flex items-center space-x-2 text-sm font-medium"
            >
              <ExternalLink size={16} />
              <span>View App</span>
            </motion.a>

            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 14, opacity: 1, scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-30 h-10 mt-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium"
            >
              <FiGithub size={16} />
              <span>GitHub</span>
            </motion.a>
            </div>
          </motion.div>

          {/* Mobile Buttons below the image (not in overlay) */}
            <div className="md:hidden bg-gradient-to-br from-orange-500/50 to-fuchsia-800/50  px-4 py-3 flex flex-wrap items-center justify-between gap-2">
            
            {/* Overlay on Image Click */}
            <AnimatePresence>
              {showOverlay && (
                <motion.div
                  ref={overlayRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 rounded-lg z-10"
                >
                  <p className="text-white text-center text-sm">{project.description}</p>

                  {/* Tags Badge */}
                  <div className="absolute bottom-10 flex gap-3 flex-wrap">
                    {project.tags.map((tag,index) =>(
                    <span 
                    key={index}
                    className={` text-sm px-1 py-1 rounded-xl border border-gray-800 font-medium ${
                      isDarkMode
                      ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300"
                      : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300"
                    }`}
                    >
                      {tag}
                    </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-violet-500/40 to-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium shadow-md shadow-black/50 active:scale-95 "
            >
              <ExternalLink size={16} />
              <span>View App</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium shadow-md shadow-black/50 active:scale-95"
            >
              <FiGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
