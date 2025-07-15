import { containerVariant, itemVariants } from "../../utils/helper";
import { useTheme } from "../../context/ThemeContext";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-100px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 pb-35 px-5 md:px-24 ${
        isDarkMode
          ? "bg-gray-950/50"
          : "bg-gradient-to-r from-green-200 via-lime-100 to-green-200"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-30 left-30 w-70 h-70 rounded-3xl rotate-135 blur-3xl ${
            isDarkMode ? "bg-indigo-700 opacity-20" : "bg-pink-500 opacity-20"
          }`}
        />
        <div
          className={`absolute bottom-20 right-25 w-60 h-60 rounded-3xl rotate-135 blur-3xl ${
            isDarkMode ? "bg-indigo-500 opacity-20" : "bg-indigo-500 opacity-20"
          }`}
        />
        <div
          className={`absolute top-10 -left-35 w-60 h-1 rounded ${
            isDarkMode ? "bg-white opacity-80" : "bg-black "
          }`}
        />
        <div
          className={`absolute bottom-10 -right-35 w-60 h-1 rounded ${
            isDarkMode ? "bg-white opacity-80" : "bg-black"
          }`}
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-sm uppercase mb-4  text-gray-500"
          >
            About Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className={`text-3xl md:text-5xl font-light ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Who
            <span className={`font-medium bg-clip-text text-transparent pl-2 ${
              isDarkMode ? "bg-gradient-to-r from-indigo-200 to-pink-500" : "bg-gradient-to-r from-indigo-400 to-pink-500"
            }`} 
            >
              I Am
            </span>
          </motion.h2>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariant}
          >
            <motion.div
              variants={itemVariants}
          // transition={{ duration: 0.8, ease: "easeOut" }}
            className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gray-800/50 text-white border-gray-700 shadow-md shadow-blue-500/20 backdrop-blur-sm"
                : "bg-gradient-to-br from-gray-200/50 to-gray-400/20 border-gray-200 backdrop-blur-sm"
            } `}
          >
            <p className="leading-relaxed text-justify px-4 mb-4 mt-4">
              I'm
              <span className="pl-1 text-orange-500 font-bold">Ashwin Haragi</span>, a full-stack web
              developer with a strong foundation in the
              <span className="pl-1 text-orange-500">
                MERN stack (MongoDB, Express, React, Node.js)
              </span>{" "}
              and a consistent problem solver on
              <span className="text-orange-500"> LeetCode.</span> I enjoy building clean, responsive
              web applications with strong focus on both frontend design and backend logic.
            </p>
            <p className="leading-relaxed text-justify px-4 mb-4">
              I'm currently enhancing my skills in Data Structures and Algorithms, while exploring
              advanced features like authentication, API integration, and performance optimization. My
              goal is to become internship-ready and contribute to impactful full-stack projects.
            </p>
          </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default AboutSection;
