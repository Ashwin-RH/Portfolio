import { motion, useScroll } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className={`fixed top-22 left-3 right-3 rounded-full  z-[999] ${
        isDarkMode
        ? "h-0.5 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500"
        : "h-0.5 bg-gradient-to-r from-orange-500 via-red-400 to-pink-500"
      }`}
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgress;
