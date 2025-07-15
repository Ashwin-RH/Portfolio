import React from 'react';
import { motion } from 'framer-motion';


const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center border-2 justify-center bg-gray-800 z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <motion.img
        src="/favicon.png"
        alt="Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-24 h-24 rounded-full shadow-md shadow-white animate-pulse"
      />
    </motion.div>
  );
};

export default SplashScreen;
