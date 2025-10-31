import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative w-full py-28 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-center overflow-hidden">
      {/* Floating background glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff007f]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00f5ff]/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Got a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#00f5ff]">Brand</span> to Grow?
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Let’s collaborate to make your next campaign <span className="text-[#ff007f] font-medium">go viral</span> with strategy, content, and creativity.
        </p>

        {/* Button with gradient hover and glow */}
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 25px rgba(255,0,127,0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-[#ff007f] to-[#00f5ff] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-[0_0_25px_-5px_rgba(255,0,127,0.5)] transition-all duration-300"
        >
          Book a Call
        </motion.button>
      </motion.div>

      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-transparent opacity-50"></div>
    </section>
  );
};

export default CTASection;
