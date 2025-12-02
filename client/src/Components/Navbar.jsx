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
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-xl">
      <motion.nav
        role="navigation"
        aria-label="Main Navigation"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black/40 backdrop-blur-xl border-b border-white/10 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-tight">
            <Link
              to="/"
              aria-label="HypeSquadz Home"
              className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent"
            >
              HypeSquadz
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition text-sm font-medium uppercase hover:underline duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007f]"
                >
                  {link.link}
                </Link>
              </li>
            ))}

            {/* Contact Button */}
            <li>
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 0px 25px rgba(255,0,127,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-[#ff007f] to-orange-500 text-white font-semibold px-6 py-1 rounded-full text-lg shadow-lg hover:shadow-[0_0_25px_-5px_rgba(255,0,127,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007f]"
                >
                  Contact
                </motion.button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#ff007f]"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4 text-center"
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.link}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-300 hover:text-white transition text-base font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007f]"
                  >
                    {link.link}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-white bg-gradient-to-r from-[#ff007f] to-orange-500 cursor-pointer p-2 rounded-lg block font-bold hover:scale-105 duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007f]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
};

export default Navbar;
