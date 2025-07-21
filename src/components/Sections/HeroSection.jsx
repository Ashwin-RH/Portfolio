import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    ArrowDown,
    Mail,
    Download
} from "lucide-react";
import {FiGithub, FiLinkedin} from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

import PROFILE_PIC from "../../assets/images/profile_pic.jpg";
import { containerVariant , itemVariants } from "../../utils/helper";
import TypewriterText from "../../context/TypewriterText";

const HeroSection = () => {
    const { isDarkMode } = useTheme();

    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0,500], [0,-100]);

    const scrollToSection = (sectionId) => {
        const element =  document.getElementById(sectionId);
        if(element) {
            element.scrollIntoView({behavior:"smooth"});
        }
    };

    const textVariants = {
        hidden : {y:20, opacity:0 },
        visible: {
            y:0,
            opacity:1,
            transition: {
                duration:0.6,
                ease:"easeOut",
            },
        },
    };

    const imageVariants = {
        hidden : {x:50, opacity:0 },
        visible: {
            x:0,
            opacity:1,
            transition: {
                duration:0.6,
                ease: "easeOut",
                delay:0.5,
            },
        },
    }
  return (
    <div 
    className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gradient-to-r from-green-200 via-lime-100 to-green-200 text-gray-900"
    }`}
    >
        {/* Hero Section */}
        <motion.section
            id="home"
            style={{y:heroY}}
            className="min-h-screen flex items-center justify-center relative px-6 pt-10"
        >
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1,1.1,1],
                        rotate:[0,180,360],
                    }}
                    transition={{
                        duration:20,
                        repeat: Infinity,
                        ease:"linear",
                    }}
                    className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl  ${
                        isDarkMode ? "opacity-10 bg-blue-500" : " opacity-20 bg-blue-400"
                    }`}
                    />
                    <motion.div
                        animate={{
                            scale: [1.1, 1, 1.1],
                            rotate: [360, 100, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className={`absolute bottom-20 left-20 w-48 rounded-full blur-3xl opacity-10 ${
                            isDarkMode ? "bg-purple-500" : "bg-purple-400"
                        }`}
                        />
                        </div>

                        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
                            {/* Mobile Layout-Centered */}
                            <div className="block lg:hidden">
                                <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariant}
                                className="text-center"
                                >
                                
                                   <motion.a
                                    href="/Ashwin_haragi Resume.pdf"
                                    download
                                    aria-label="Download Resume"
                                    title="Download Resume"
                                    whileTap={{ scale: 0.95 }}
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut"
                                    }}
                                    className={`absolute top-28 right-10 z-50 p-2 rounded-full flex items-center justify-center ${
                                        isDarkMode
                                        ? "bg-gradient-to-br from-gray-800/40 to-gray-900 text-orange-500 border border-indigo-400/40"
                                        : "bg-gray-200/50 text-gray-600 border border-gray-400 hover:text-gray-900 hover:bg-gray-200 hover:border"
                                    }`}
                                    >
                                    <Download size={22} />
                                    
                                    </motion.a>
                                    <span className="absolute top-38 right-9 w-12 flex items-center justify-center text-sm font-semibold" >Resume</span>

                                    
                                    {/* Profile Image - Mobile */}
                                    <motion.div variants={imageVariants} className="mb-8">
                                        <div className="w-32 h-32 mx-auto relative">
                                            {/* Decorative ring */}
                                            <motion.div
                                                animate={{rotate: 360}}
                                                transition={{
                                                    duration:20,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                                            />
                                            <motion.div
                                            whileHover={{scale: 1.05}}
                                            transition={{duration:1}}
                                            className={`w-full h-32 rounded-2xl overflow-hidden border-4 z-10 relative active:scale-105 duration-300 ${
                                                isDarkMode ? "border-gray-800" : "border-gray-300"
                                            } shadow-2xl`}
                                            >
                                                <img
                                                    src={PROFILE_PIC}
                                                    alt="Profile Pic 😊"
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                            
                                            </div>
                                            </motion.div>

                                            {/* Content-Mobile */}
                                            {/* <motion.div
                                                variants={textVariants}
                                                className={`text-sm text-center uppercase tracking-widest mt-7 ${
                                                    isDarkMode ? "text-gray-500" : "text-gray-600"
                                                } mb-4`}
                                                >
                                                    Full Stack Developer
                                                </motion.div> */}

                                                <motion.div
                                                    variants={itemVariants}
                                                    className="bg-gradient-to-br from-gray-500 to-sky-100 bg-clip-text text-transparent text-2xl font-semibold text-center mb-2 "
                                                    >
                                                        Hi, I'm 
                                                        <span className="font-bold text-4xl bg-gradient-to-l from-violet-200 to-red-200 bg-clip-text text-transparent"> Ashwin</span> 
                                                    </motion.div>

                                                <motion.h1
                                                    variants={itemVariants}
                                                    className="text-3xl md:text-5xl text-center font-light mb-6 leading-tight"
                                                >
                                                    <span
                                                        className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                                                    >
                                                        Building Digital
                                                    </span>
                                                    <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent font-medium ml-2">
                                                        experiences
                                                    </span>
                                                    <br/>
                                                    <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                                                        that matter
                                                    </span>
                                                </motion.h1>

                                                {/* <motion.p
                                                    variants={itemVariants}
                                                    className={`text-base text-center md:text-lg ${
                                                        isDarkMode ? "text-gray-400" : "text-gray-600"
                                                    } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
                                                >
                                                    I craft beautiful, funtional web applications and modern technologies and thoughtful use experiences.
                                                </motion.p> */}

                                                <motion.div
                                                variants={itemVariants}
                                                className={` text-sm text-center mb-5 ${
                                                    isDarkMode ? "text-white" : "text-gray-600"
                                                }`}
                                                >
                                                    <TypewriterText />
                                                </motion.div>
                                                
                                                


                                                {/* CTA buttons-mobile */}
                                                <motion.div 
                                                    variants={itemVariants}
                                                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 "
                                                >
                                                    <motion.button
                                                        whileHover={{y: -2}}
                                                        whileTap={{scale: 0.95}}
                                                        onClick={() => scrollToSection("work")}
                                                        className={` ${
                                                            isDarkMode
                                                            ? "bg-gradient-to-br from-violet-500/40 to-orange-500  text-white px-8 py-3 rounded-full text-sm hover:shadow-sm hover:shadow-violet-500/40 uppercase tracking-wider font-medium duration-300 transition-all  cursor-pointer"
                                                            : "bg-gradient-to-br from-violet-500/70 to-orange-500  text-white px-8 py-3 rounded-full text-sm hover:shadow-md hover:shadow-violet-500/40 uppercase tracking-wider font-medium duration-300 transition-all  cursor-pointer"
                                                        }`}
                                                    >
                                                        View Work
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{y:-2}}
                                                        whileTap={{scale: 0.98}}
                                                        onClick={() => scrollToSection("contact")}
                                                        className={`border ${
                                                            isDarkMode
                                                            ? "border-gray-700 hover:border-gray-600 text-gray-300"
                                                            : "border-gray-300 hover:border-gray-400 text-gray-700"
                                                        } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer`}
                                                    >
                                                        Get in Touch
                                                    </motion.button>
                                                </motion.div>

                                                {/* Social links - Mobile */}
                                                <motion.div
                                                    variants={itemVariants}
                                                    className="flex justify-center space-x-6 mb-8"
                                                >
                                                    {[
                                                        {icon: FiGithub,href:"https://github.com/Ashwin-RH",target:"_blank"},
                                                        {icon: FiLinkedin,href:"https://linkedin.com/in/ashwin-rh-aa263b217",target:"_blank"},
                                                        {icon: Mail,href:"mailto:ashwinharagi@gmail.com"}
                                                    ].map((social,index)=> (
                                                        <motion.a
                                                            key={index}
                                                            href={social.href}
                                                            target={social.target || "_self"}
                                                            rel={social.target === "blank" ? "noopener noreferrer" : undefined}
                                                            whileHover={{y: -3, scale: 1.1}}
                                                            className={` p-3  rounded-full transition-colors ${
                                                                isDarkMode
                                                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200" 
                                                            }`}
                                                        >
                                                            <social.icon size={20}/>
                                                        </motion.a>
                                                    ))}
                                                </motion.div>

                                                {/* Tech stack - mobile */}
                                                <motion.div
                                                    variants={itemVariants}
                                                    className="flex flex-wrap justify-center mt-7 space-x-2 text-xs uppercase tracking-widest "
                                                >
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        React
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                                    >
                                                        .
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        Node.js
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                                    >
                                                        .
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        JavaScript
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                                    >
                                                        .
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        MongoDB
                                                    </span>
                                                </motion.div>
                                    </motion.div>
                            </div>

                            {/* Desktop layout - Split */}
                            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg-items-center">
                                {/* Left Column - Content */}
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={containerVariant}
                                    className="text-left"
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        className="text-gray-400 text-left text-3xl font-semibold text-center mb-2 "
                                        >
                                            Hi, I'm 
                                            <span className="font-bold text-4xl bg-gradient-to-r from-gray-500 to-sky-100 bg-clip-text text-transparent"> Ashwin</span> 
                                        </motion.div>
                                    {/* <motion.div
                                        variants={textVariants}
                                        className={`text-sm uppercase tracking-widest ${
                                            isDarkMode ? "text-gray-500" : "text-gray-600"
                                        } mb-6`}
                                    >
                                        Full Stack Developer
                                    </motion.div> */}
                                    

                                    <motion.h1  
                                        variants={itemVariants}
                                        className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
                                    >
                                        <span
                                        className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                                        >
                                            Building digital
                                        </span>
                                        <br />
                                        <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent font-medium">experiences</span>
                                        <br />
                                        <span className={isDarkMode ? "text-white" : "text-gary-900"}>
                                            that matter
                                        </span>
                                    </motion.h1>

                                    <motion.p
                                        variants={itemVariants}
                                        className={`text-xl ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        } mb-12 font-light leading-realxed max-w-lg`}
                                    >
                                        I craft beautiful, funtional web applications and modern technologies and thoughtful use experiences.
                                    </motion.p>

                                    {/* CTA buttons - desktop */}
                                    <motion.div 
                                        variants={itemVariants}
                                        className="flex gap-6 mb-8"
                                    >
                                        <motion.button
                                            whileHover={{scale:1.03}}
                                            transition={{duration:0.3}}
                                            whileTap={{scale:0.98}}
                                            onClick={() => scrollToSection("work")}
                                            className={` text-white px-8 py-3 rounded-full text-sm hover:shadow-violet-500/40 uppercase tracking-wider font-medium duration-300 transition-all transform-gpu will-change-transform cursor-pointer ${
                                                isDarkMode
                                                ? "bg-gradient-to-br from-violet-500/40 to-orange-500 hover:shadow-sm "
                                                : "bg-gradient-to-br from-violet-500/70 to-orange-500 hover:shadow-md "
                                            }`}
                                        >
                                            View Work
                                        </motion.button>
                                        <motion.button
                                            whileHover={{y:-2}}
                                            whileTap={{scale:0.98}}
                                            onClick={() => scrollToSection("contact")}
                                            className={`border ${
                                                isDarkMode
                                                ? "border-gray-700 hover:border-gray-600 text-gray-300"
                                                : "border-gray-400 hover:border-gray-400 text-gray-700"
                                            } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer`}
                                            >
                                                Get in Touch
                                            </motion.button>
                                            <motion.a
                                            href="/Ashwin_haragi Resume.pdf"
                                            download
                                            aria-label="Download Resume"
                                            title="Download Resume"
                                            whileTap={{ scale: 0.95 }}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className={`px-8 py-4 rounded-full flex items-center justify-center gap-2 border transition-all duration-300 will-change-transform ${
                                                isDarkMode
                                                ? "bg-gray-950/50 border-indigo-500 hover:border-blue-400 hover:shadow-lg shadow-indigo-500/10"
                                                : "bg-gray-200/50 border-gray-400 hover:text-gray-900 hover:bg-gray-200"
                                            }`}
                                            >
                                            <Download size={22} className={` ${
                                                isDarkMode
                                                ? "text-orange-500" : "text-gray-600"
                                            }`} />
                                            <span className={`text-sm uppercase tracking-widest font-medium ${
                                                isDarkMode ? "text-white" : "text-gray-600"
                                            }`}>
                                                Download CV
                                            </span>
                                            </motion.a>

                                    </motion.div>

                                    {/* Social links - Desktop */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="flex space-x-6 mb-12"
                                    >
                                        {[
                                            {icon: FiGithub,href:"https://github.com/Ashwin-RH",target:"_blank"},
                                            {icon: FiLinkedin,href:"https://linkedin.com/in/ashwin-rh-aa263b217",target:"_blank"},
                                            {icon: Mail,href:"https://mail.google.com/mail/?view=cm&fs=1&to=ashwinharagi@gmail.com",target:"_blank"}
                                        ].map((social,index)=> (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target={social.target || "_self"}
                                                rel={social.target === "blank" ? "noopener noreferrer" : undefined}
                                                whileHover={{y: -3, scale: 1.1}}
                                                className={`p-3 rounded-full transition-colors ${
                                                    isDarkMode
                                                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200" 
                                                }`}
                                            >
                                                <social.icon size={20}/>
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* Right Column - Content */}
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={imageVariants}
                                    className="flex justify-center lg:justify-end"
                                >
                                    <div className="relative">
                                        {/* Tech Stack - Desktop */}
                                        <motion.div
                                                    variants={itemVariants}
                                                    className="flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-28"
                                                >
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        React
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                                    >
                                                        .
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        Node.js
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                                    >
                                                        .
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        JavaScript
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                                                    >
                                                        .
                                                    </span>
                                                    <span
                                                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                                                    >
                                                        MongoDB
                                                    </span>
                                                </motion.div>
                                                
                                                {/* Decorative elements */}
                                                <div className="relative w-80 h-96">
                                                <motion.div
                                                    animate={{rotate: 360}}
                                                    transition={{
                                                        duration:20,
                                                        repeat:Infinity,
                                                        ease: "linear"
                                                    }}
                                                    className="absolute -inset-4 rounded-3xl border border-blue-500/20 z-0"
                                                />
                                                <motion.div
                                                    animate={{rotate:-360}}
                                                    transition={{
                                                        duration:30,
                                                        repeat:Infinity,
                                                        ease: "linear"
                                                    }}
                                                    className="absolute -inset-8 rounded-3xl border border-purple-500/10 z-0"
                                                />
                                                <motion.div
                                                    whileHover={{scale:1.02}}
                                                    className={` relative w-full h-full rounded-3xl overflow-hidden border-4 z-10 duration-500 transition-all transform-gpu will-change-transform  ${
                                                        isDarkMode ? "border-gray-800" : "border-gray-300"
                                                    } shadow-2xl`}
                                                >
                                                    <img
                                                        src={PROFILE_PIC}
                                                        alt="Profile Pic 😊"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.div>    
                                                </div>  
                                                      
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        

                        {/* Scroll Indicator */}
                        <motion.div
                            animate={{y: [0, 8, 0] }}
                            transition={{duration: 2,repeat: Infinity}}
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        >
                            <ArrowDown
                            size={20}
                            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
                            />
                        </motion.div>
        </motion.section>
        </div>
  )
}

export default HeroSection