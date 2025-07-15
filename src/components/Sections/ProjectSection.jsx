import {useRef} from 'react'
import { motion,useInView} from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Globe,
    Zap,
    Users,
} from "lucide-react"

import { useTheme } from '../../context/ThemeContext';
import { PROJECTS } from '../../utils/data';
import ProjectCard from '../ProjectCard';
import { containerVariant, itemVariants } from '../../utils/helper';

const ProjectSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {margin: "-100px"});// if want only once the section animation put once:true before margin

  return (
    <section
        id='work'
        ref={sectionRef}
        className={` py-24 px-6 ${
            isDarkMode ? "bg-gray-950 text-white" : "bg-gradient-to-r from-green-200 via-lime-100 to-green-200 text-gray-900"
        } relative overflow-hidden`}
    >
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
            <div 
                className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl  ${
                    isDarkMode ? "opacity-20 bg-purple-500" : "opacity-20 bg-purple-100"
                }`}
            />
            <div
                className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl  ${
                    isDarkMode ? "opacity-15 bg-orange-500" : "opacity-20 bg-purple-400"
                }`}
            />
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariant}
                    className='text-center mb-20'
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-sm uppercase tracking-widest ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                        } mb-4`}
                    >
                        Featured Work
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className='text-3xl md:text-5xl font-light mb-6'
                    >
                        Recent
                        <span className='ml-2 bg-gradient-to-r from-orange-500 to-fuchsia-500 text-transparent bg-clip-text font-medium'>  
                            Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className={` text-lg ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        } max-w-2xl mx-auto font-light`}
                    >
                        A collection of projects that showcase my expertise in building modern web applications and solving complex problems.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariant}
                    className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
                    ))}
                </motion.div>


        </div>
    </section>
    
  )
}

export default ProjectSection