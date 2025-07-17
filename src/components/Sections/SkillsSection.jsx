import { useRef } from "react"

import{motion,useInView,useScroll,useTransform} from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import {SKILLS_CATEGORY, STATS, TECH_STACK} from "../../utils/data"
import { containerVariant,itemVariants } from "../../utils/helper";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isinView = useInView(sectionRef, {margin: "-100px"});

  const { scrollYProgress} = useScroll({
    target:sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0,1], [100,-100]);

  const skillBarVariants = {
    hidden: {width: 0, opacity: 0},
    visible: (level) => ({
      width: `${level}%` ,
      opacity: 1,
      transition: {
        duration:1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };
  return (
    <section
      ref={sectionRef}
      id="skills"
      className={` py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gradient-to-r from-green-200 via-lime-100 to-green-200 text-gray-900"
      } relative overflow-hidden`}
      >
        {/* Background Elements */}
        <motion.div
        style={{y}}
        className="absolute inset-0 overflow-hidden"
        >
          <div 
            className={`absolute top-35 right-1/4 w-72 h-72 rounded-full blur-3xl  ${
              isDarkMode ? "opacity-30 bg-blue-500" : "opacity-30 bg-indigo-500"
            } `}
          />
          <div 
          className={`absolute bottom-35 left-1/4 w-72 h-72 rounded-full blur-3xl ${
            isDarkMode ? "opacity-30 bg-purple-500" : "opacity-30 bg-purple-400"
          }`}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={isinView ? "visible" : "hidden"}
            variants={containerVariant}
            className="text-center mb-20"
          >
            <motion.div 
            variants={itemVariants}
            className={` text-sm uppercase tracking-wildest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Technical Expertise
          </motion.div>

          <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-light mb-6"
          >
            Skills &
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
              Technologies
            </span>
          </motion.h2>

          <motion.p
          variants={itemVariants}
          className={` text-lg ${
            isDarkMode ? "text-gray-400 " : "text-gray-600"
          } max-w-2xl mx-auto font-light`}
          >
            A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
          </motion.p>
          </motion.div>

          {/* Skills Grid */}
          {/* <motion.div 
          initial="hidden"
          animate={isinView ? "visible" : "hidden"}
          variants={containerVariant}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {SKILLS_CATEGORY.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={` p-8 rounded-2xl border ${
                  isDarkMode
                  ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                  : "bg-white/80 border-gray-200 backdrop-blur-sm"
                }`}
              > */}


                {/* Category Header */}
                {/* <div className="flex items-center mb-6">
                  <div 
                    className={` p-3 rounded-xl ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-100"
                    } mr-4`}
                  >
                    <category.icon size={24} className="text-blue-500"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">{category.title}</h3>
                    <p 
                      className={` text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </div> */}

                {/* Skills list */}
                {/* <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span 
                          className={`text-xs ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div 
                        className={`h-2 rounded-full overflow-hidden ${
                          isDarkMode ? "bg-gray-800" : "bg-gray-200"
                        }`}
                      >
                        <motion.div
                          variants={skillBarVariants}
                          initial="hidden"
                          animate={isinView ? "visible" : "hidden"}
                          custom={skill.level}
                          className={`h-full ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        </motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
           ))}
        </motion.div> */}

        {/* Additional Skills */}
        <motion.div 
          initial="hidden"
          animate={isinView ? "visible" : "hidden"}
          variants={containerVariant}
          className="mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-8"
          >
            {/* <h3 className="text-xl font-medium mb-4">Also Working with</h3> */}
          </motion.div>

          <motion.div className="flex justify-center items-center ">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate={isinView ? "visible" : "hidden"}
            className={`md:w-[50%] flex justify-center items-center  rounded-2xl shadow-2xl shadow-blue-500/10 backdrop-blur-sm ${
              isDarkMode
              ? "bg-gradient-to-br from-gray-800/50 to-gray-950/50 border border-gray-600"
              : "bg-gradient-to-br from-gray-200/50 to-gray-400/50 border-1 border-gray-200"
            }`}
          >
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 p-5 mt-3 mb-3"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={tech}
                whileHover={{y: -1, scale: 1.05}}
                className={` px-4 py-2 text-sm rounded-full border duration-300 transition-all transform-gpu will-change-transform  ${
                  isDarkMode
                  ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                  : "bg-gray-100/70 border-gray-300 text-gray-800 hover:border-gray-400"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial="hidden"
          animate={isinView ? "visible" : "hidden"}
          variants={containerVariant}
          className="mt-20 grid grid-cols-2 md:grid-cols-2 gap-8"
        >
          {STATS.map((stat,index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-light bg-gradient-to-br from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div 
              className={` text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {stat.label}
            </div>
            </motion.div>
          ))}    
          </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection