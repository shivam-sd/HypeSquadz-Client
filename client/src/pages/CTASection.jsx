import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link for navigation

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
          Got a{" "}
          <span className="text-transparent bg-clip-text bg-[#ff007f]">
            Brand
          </span>{" "}
          to Grow?
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-10">
          Let’s build something Bigger — Together. <br />
          {/* <span className="text-[#ff007f] font-medium">go viral</span> with the */}
         Your brand is our brand, and the next big thing starts here
        </p>

        {/* Button with link to Contact page */}
        <Link to="/contact">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(255,0,127,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-[#ff007f] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-[0_0_25px_-5px_rgba(255,0,127,0.5)] transition-all duration-300 cursor-pointer"
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>

      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-transparent opacity-50"></div>
    </section>
  );
};

export default CTASection;
