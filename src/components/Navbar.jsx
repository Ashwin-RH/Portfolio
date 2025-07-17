import React from 'react'
import { useState } from 'react'
import {
    motion,
    useScroll,
    AnimatePresence,
} from "framer-motion";
import { SiOpenproject } from "react-icons/si";
import {
    Code2,
    Sun,
    Moon,
    Menu,
    X,
} from "lucide-react";
import {useTheme} from "../context/ThemeContext"


const Navbar = () => {
    const { scrollYProgress } = useScroll();

    const { isDarkMode,toggleDarkMode} = useTheme();
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element){
            element.scrollIntoView({ behavior: "smooth" })
            setIsMenuOpen(false);
        }
    };

    

  return (
        <motion.nav
        style={{opacity:1}}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-4 rounded-2xl w-[330px]  md:w-[80rem]   ${
            isDarkMode ? "bg-gray-950/50 shadow-xl shadow-blue-500/10" : "bg-gray-900/10"
        } backdrop-blur-xs border-2 ${
            isDarkMode ? "border-gray-700" : "border-gray-800/50"
        } `}
        >
            {/* Scroll Progress Border */}
            <motion.div
                className={`fixed -bottom-0.5 left-[50%] md:left-[50.1%] -translate-x-1/2 z-50 h-[2px] origin-left rounded-full md:w-[78rem] w-[305px]  ${
                isDarkMode
                    ? "bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500"
                    : "bg-gradient-to-r from-orange-500 via-pink-400 to-red-500"
                }`}
                style={{
                // width: "100%",
                scaleX: scrollYProgress, // animate width
                transformOrigin: "0%",   // start from left
                }}
            />
            <div className='max-w-7xl mx-auto w-full flex justify-between items-center'>
            {/* Brand + name (visible on all screens) */}
            <div className='flex items-center space-x-2'>
                <SiOpenproject size={24} className='text-orange-500 ' />
                <span
                className={`text-xl font-semibold  duration-300 transition-all ${
                    isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                >
                Ashwin
                </span>
                <span className='bg-gradient-to-br from-orange-500  to-fuchsia-500 bg-clip-text text-transparent text-xl font-bold'>
                    Portfolio
                </span>
                

                

            </div>

            {/* Right side: theme toggle + menu (mobile) OR nav links + toggle (desktop) */}
            <div className='flex items-center space-x-4'>
                {/* Desktop nav */}
                <div className='hidden md:flex items-center space-x-8'>
                {["Home","Skills", "Work", "About", "Contact"].map((item) => (
                    <motion.button
                    key={item}
                    whileHover={{ y: -2 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                        isDarkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    >
                    {item}
                    </motion.button>
                ))}
                </div>

                {/* Dark/light toggle */}
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
                className={`p-2 rounded-full duration-400 transition-all  transform-gpu will-change-transform cursor-pointer ${
                    isDarkMode
                    ? "text-orange-400 bg-gray-900 border border-transparent hover:text-orange-400/70 hover:bg-gray-800"
                    : "text-gray-600 bg-gray-200/50 border border-gray-400 hover:text-gray-900 hover:bg-gray-200 hover:border"
                }`}
                >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>

                {/* Mobile menu toggle */}
                <div className='md:hidden'>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 rounded-full duration-400 transition-all transform-gpu will-change-transform cursor-pointer ${
                    isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
                </div>
            </div>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y:-20 }}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-20}}
                        className={`md:hidden mt-4 p-4 rounded-lg ${
                            isDarkMode ? "bg-gray-900" : "bg-white"
                        } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
                        >
                            {["Home","Skills","Work","About","Contact"].map((item) => (
                                <motion.button
                                key={item}
                                whileHover={{x: 5}}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                                    isDarkMode
                                        ? "text-gray-400 hover:text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
  )};


export default Navbar;