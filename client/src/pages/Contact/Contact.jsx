import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUserAlt, FaRegBuilding, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#ff007f]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#00f5ff]/20 rounded-full blur-3xl animate-pulse" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#00f5ff]">Connect</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Got a campaign idea or want to scale your brand? Drop us a message and let’s make it happen.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto bg-[#111]/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-10 shadow-[0_0_40px_-10px_rgba(255,0,127,0.3)]"
      >
        <form className="grid gap-6">
          {/* Name */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-3 focus-within:border-[#ff007f] transition-all">
            <FaUserAlt className="text-[#ff007f]" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-3 focus-within:border-[#00f5ff] transition-all">
            <FaEnvelope className="text-[#00f5ff]" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500"
              required
            />
          </div>

          {/* Brand Name */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-3 focus-within:border-[#ff007f] transition-all">
            <FaRegBuilding className="text-[#ff007f]" />
            <input
              type="text"
              placeholder="Brand / Company"
              className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500"
            />
          </div>

          {/* Message */}
          <div className="border border-white/10 rounded-2xl focus-within:border-[#00f5ff] transition-all p-4">
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500 resize-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,0,127,0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff007f] to-[#00f5ff] text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-[0_0_30px_-5px_rgba(255,0,127,0.6)] transition-all duration-300 cursor-pointer"
          >
            <FaPaperPlane className="text-lg"/>
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-transparent opacity-50"></div>
    </section>
  );
};

export default Contact;
