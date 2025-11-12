import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { name: "Instagram", icon: <FaInstagram />, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "#" },
    { name: "Twitter", icon: <FaTwitter />, link: "#" },
    { name: "YouTube", icon: <FaYoutube />, link: "#" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#000] text-gray-300 py-14 overflow-hidden">
      {/* Floating background glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#ff007f]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#00f5ff]/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
      >
        {/* Logo / Name */}
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent mb-4">
          HypeSquadz
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
          Where Data meets Creativity and Hype turns into Impact.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-white text-lg transition-all duration-300 flex items-center gap-2"
            >
              <span className="text-xl">{social.icon}</span>
              <span className="hidden sm:inline text-sm">{social.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Divider line */}
        <div className="w-3/4 max-w-md h-[1px] bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-transparent opacity-40 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent font-medium">HypeSquadz</span>. All rights reserved.
        </p>
      </motion.div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-transparent opacity-60"></div>
    </footer>
  );
};

export default Footer;
