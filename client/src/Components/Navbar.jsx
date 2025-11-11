import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { link: "Home", path: "/" },
    { link: "Work", path: "/work" },
    { link: "About", path: "/about" },
    { link: "Services", path: "/services" },
    { link: "Gallery", path: "/gallery" },
    // { link: "Contact", path: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-white">
          <Link to={'/'}><span className="text-[#ff007f]">HypeSquadz</span></Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <>
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-300 hover:text-white transition text-sm font-medium uppercase hover:underline duration-300"
              >
              {link.link}
              
            </Link>
              </>
          ))}

          <Link to={'/contact'}><motion.button whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(255,0,127,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className=" bg-[#ff007f] text-white font-semibold px-6 py-1 rounded-full text-lg shadow-lg hover:shadow-[0_0_25px_-5px_rgba(255,0,127,0.5)] transition-all duration-300 cursor-pointer">
            Contact
            </motion.button></Link>

          {/* <button className="ml-4 bg-gradient-to-r from-[#ff007f] to-[#00f5ff] text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Join Us
          </button> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4 text-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.link}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition text-base font-medium hover:underline"
            >
              {link.link}
            </Link>
          ))}

                  <Link to={'/contact'} className="text-lg text-white bg-orange-500 cursor-pointer p-1 rounded-lg flex items-center justify-center font-bold hover:scale-105 duration-300">Contact</Link>

          {/* <button className="w-full bg-gradient-to-r from-[#ff007f] to-[#00f5ff] text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Join Us
          </button> */}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
