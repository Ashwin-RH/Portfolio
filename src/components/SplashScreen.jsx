import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // Show for 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Gradient Elements */}
          <motion.div
            className="absolute w-60 h-60 rounded-full bg-indigo-500  blur-3xl top-5 -left-1 opacity-5 pointer-events-none"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute w-60 h-60 rounded-full bg-purple-500  blur-3xl bottom-10 -right-1 opacity-5 pointer-events-none"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Splash Logo */}
          <motion.img
            src="/favicon.png"
            alt="Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1,ease:"easeInOut" }}
            className="w-24 h-24 rounded-full shadow-md shadow-violet-500 animate-pulse"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
