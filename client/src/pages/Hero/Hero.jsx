import React from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight, FaLongArrowAltDown } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import "../Hero/Hero.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>HypeSquadz – Web Development & Branding Agency</title>
        <meta
          name="description"
          content="HypeSquadz offers web design, app development, branding and SEO services to build your brand."
        />
        <meta property="og:title" content="HypeSquadz – Creative Digital Agency" />
        <meta
          property="og:description"
          content="We build brands with next-gen websites, apps, and marketing."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="HypeSquadz, digital agency, branding, marketing, SEO, web development" />
      </Helmet>

      <Navbar />

      <section
        className="relative w-full min-h-[100vh] sm:min-h-[100vh] lg:min-h-[130vh] 
        flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] 
        overflow-hidden pt-28 sm:pt-20 md:pt-32 lg:pt-5 pb-4"
        aria-label="Hero Section"
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604145559206-e3bce0040e4b?auto=format&fit=crop&w=1600&q=80')] 
          bg-cover bg-center opacity-20"
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>

        <div className="relative z-10 text-center px-4 md:px-10 lg:px-12 max-w-7xl mx-auto">
          {/* H1 → SEO Important */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            The Squad Behind
            <br />
            <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Breakthrough 
            </span>{" "}
            <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Brand
            </span>
          </motion.h1>

          {/* Description / Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            <span className="md:inline text-white font-semibold">
              You create the Vision.
            </span>{" "}
            - We build the Growth Engine for you.
            <br />
            <span className="text-base sm:text-lg">
              End-to-End Content, Branding, and PR System for Founders, Creators,
              and Educational Brands.
            </span>
          </motion.p>

          {/* Animated Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              className="flex items-center gap-3 bg-gradient-to-r from-[#ff007f] to-orange-500 
              text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg 
              hover:scale-105 transition-transform duration-300"
            >
              Idea
            </button>

            {/* Arrows */}
            <FaLongArrowAltRight className="text-orange-400 text-3xl sm:text-4xl md:text-5xl hidden md:flex" />
            <FaLongArrowAltDown className="text-orange-400 text-3xl sm:text-4xl md:hidden" />

            {/* Animated Text */}
            <div className="inner-heading mb-3 sm:mb-5">
              <div
                className="text-lg sm:text-xl md:text-2xl font-bold text-transparent 
                bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-lg"
                aria-label="Dynamic Keywords"
              >
                <div className="text-wrapper bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
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
              <Link
                to="/work"
                className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-[#ff007f] to-orange-500 
                text-white font-bold w-full sm:w-48 hover:scale-105 transition"
              >
                See Our Work
              </Link>

              <Link
                to="/contact"
                className="p-3 sm:p-4 rounded-lg border border-blue-500/35 
                bg-transparent text-white font-bold w-full sm:w-48 hover:bg-white hover:text-black transition"
              >
                Work With Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Lights */}
        <div className="absolute top-16 left-6 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#ff007f]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-6 sm:right-10 w-36 sm:w-56 h-36 bg-[#00f5ff]/30 rounded-full blur-3xl animate-pulse"></div>
      </section>
    </>
  );
};

export default Hero;
