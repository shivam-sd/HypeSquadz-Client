import React from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight, FaLongArrowAltDown } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import "../Hero/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Navbar />

      <section className="relative w-full min-h-[100vh] sm:min-h-[100vh] lg:min-h-[130vh] flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] overflow-hidden pt-28 sm:pt-20 md:pt-32 lg:pt-5 pb-4">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604145559206-e3bce0040e4b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-10 lg:px-12 max-w-7xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            The Squad Behind
            <br />
            <span className="text-pink-600">Breakthrough </span>
            <span className="text-pink-600">Brand</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            <span className="md:inline text-white font-semibold">
              You create the Vision.
            </span>{" "}
            - We build the Growth Engine for you.
            <br className="sm:block" />
            <br className="lg:hidden flex" />
            <span className="text-base sm:text-lg">
              End-to-End Content, Branding, and PR System for Founders, Creators,
              and Educational Brands
            </span>
          </motion.p>

          {/* Animated Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {/* Static Button */}
            <button className="flex items-center gap-3 bg-[#ff007f] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              Idea
            </button>

            {/* Responsive Arrows */}
            <FaLongArrowAltRight className="text-orange-400 text-3xl sm:text-4xl md:text-5xl hidden md:flex" />
            <FaLongArrowAltDown className="text-orange-400 text-3xl sm:text-4xl md:hidden" />

            {/* Dynamic Text */}
            <div className="inner-heading mb-3 sm:mb-5">
              <div
                id="role"
                className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-lg"
              >
                <div className="text-wrapper">
                  <div>Strategies</div>
                  <div>Campaigns</div>
                  <div>Influence</div>
                  <div>Distribution</div>
                  <div>Trust</div>
                  <div>Brand</div>
                  <div>Growth</div>
                  <div>Content</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link to={"/work"} className="p-3 sm:p-4 rounded-lg border border-transparent hover:border-blue-500/35 text-base sm:text-lg font-bold w-full sm:w-48 bg-[#ff007f] cursor-pointer hover:bg-transparent duration-300 text-white hover:text-gray-400">
                See Our Work
              </Link>
              <Link to={"/contact"} className="p-3 sm:p-4 rounded-lg border border-blue-500/35 text-base sm:text-lg font-bold w-full sm:w-48 bg-white cursor-pointer hover:bg-black duration-300 text-[#ff007f] hover:text-white">
                Work With Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-16 left-6 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#ff007f]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-6 sm:right-10 w-36 sm:w-56 h-36 sm:h-56 bg-[#00f5ff]/30 rounded-full blur-3xl animate-pulse"></div>
      </section>
    </>
  );
};

export default Hero;
