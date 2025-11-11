import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-[9999]">
      {/* Circular Gradient Border Loader */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="relative w-20 h-20 rounded-full bg-gradient-to-r from-[#ff007f] to-[#00f5ff] p-[2px]"
      >
        <div className="w-full h-full bg-[#0a0a0a] rounded-full"></div>
      </motion.div>

      {/* Animated Progress Bar */}
      <div className="w-48 h-1 bg-[#222] mt-8 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1/2 h-full bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-[#ff007f]"
        />
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="mt-6 text-gray-300 text-sm tracking-wider"
      >
        Loding...
      </motion.p>
    </div>
  );
};

export default Loader;
