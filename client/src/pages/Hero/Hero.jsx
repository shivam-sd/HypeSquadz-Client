import React from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import Navbar from "../../Components/Navbar";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <>
      <div>
        <Navbar />
        <section className="relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
          {/* Background overlay gradient */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604145559206-e3bce0040e4b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 sm:px-12 max-w-full mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight"
            >
              We Build Hype
              <span className="text-[#ff007f]"> That Converts</span><span className="text-4xl">.</span>
              <br />
              Boost <span className="text-[#00f5ff]">Engagement</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 mt-6 text-lg sm:text-xl"
            >
              <p className="hidden lg:flex md:flex">
                <span className="text-bold text-white">
                  HypeSquadz is your creative powerhouse &nbsp;
                </span>{" "}
                - connecting brands and influencers to make marketing feel
                authentic and exciting.
                <br />
              </p>
              <span className="text-lg">
                {" "}
                The growth engine behind 500M+ impressions for India's top
                edtech and creator brands.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 flex justify-center items-center"
            >
              <button className="flex items-center gap-3 bg-gradient-to-b from-pink-400 to-orange-300 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                Idea
              </button>
              <FaLongArrowAltRight className="text-orange-400 w-14 text-4xl" />
              {/* animation text change dynamically */}
              <div class="inner-heading mb-5">
                <span
                  id="role"
                  class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-lg"
                >
                  <div class="text-wrapper">
                    <div>Strategies</div>
                    <div>Campaigns</div>
                    <div>Influence</div>
                  </div>
                </span>
              </div>
            </motion.div>

            <div className="text-center max-w-full flex items-center justify-center mt-10 p-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="grid grid-cols-2 gap-4"
              >
                <button className="p-3 rounded-lg hover:border-1 hover:border-blue-500/35 lg:text-xl md:text-xl text-lg w-full bg-orange-500 cursor-pointer hover:bg-transparent duration-300 text-white font-bold hover:text-gray-400">
                  See Our Work
                </button>
                <button className="p-3 rounded-lg border-1 border-blue-500/35 lg:text-xl md:text-xl text-lg w-full bg-white cursor-pointer hover:bg-orange-500 duration-300 text-orange-500 font-bold hover:text-white">
                  Work With Us
                </button>
              </motion.div>
            </div>
          </div>

          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#ff007f]/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#00f5ff]/30 rounded-full blur-3xl animate-pulse"></div>
        </section>
      </div>
    </>
  );
};

export default Hero;
