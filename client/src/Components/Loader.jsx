import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl z-20">
      {/* Circular Gradient Loader */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 p-[2px]"
      >
        <div className="w-full h-full bg-[#0a0a0a] rounded-full"></div>
      </motion.div>

      {/* Small progress line */}
      <div className="w-32 h-1 bg-[#222] mt-5 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1/2 h-full bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-500"
        />
      </div>

      <p className="mt-4 text-sm text-pink-300">Loading...</p>
    </div>
  );
};

export default Loader;
