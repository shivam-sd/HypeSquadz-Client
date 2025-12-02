import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CTASection = () => {
  return (
    <section
      className="relative w-full py-28 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-center overflow-hidden"
      aria-labelledby="cta-heading"
    >

      {/* SEO META TAGS */}
      <Helmet>
        <title>Grow Your Brand | HypeSquadz Digital Marketing & Branding</title>
        <meta
          name="description"
          content="Ready to scale your brand? HypeSquadz helps businesses with branding, website development, influencer marketing, and high-performance digital campaigns."
        />
        <meta property="og:title" content="Grow Your Brand with HypeSquadz" />
        <meta
          property="og:description"
          content="Let’s build something bigger—together. Contact us for brand marketing, campaigns and growth solutions."
        />
        <meta name="keywords" content="brand growth, digital marketing, influencer campaigns, hypeSquadz, branding agency" />
      </Helmet>

      {/* Background decorative elements */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-[#ff007f]/20 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-[#00f5ff]/20 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      ></div>

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center"
      >
        <header>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Got a{" "}
            <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Brand
            </span>{" "}
            to Grow?
          </h2>
        </header>

        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-10">
          Let’s build something bigger—together. <br />
          Your brand is our brand, and the next big thing starts here.
        </p>

        {/* CTA Button (SEO accessible) */}
        <Link to="/contact" aria-label="Contact HypeSquadz Team">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(255,0,127,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-[#ff007f] to-orange-500 
                       text-white font-semibold px-10 py-4 rounded-full 
                       text-lg shadow-lg hover:shadow-[0_0_25px_-5px_rgba(255,0,127,0.5)] 
                       transition-all duration-300 cursor-pointer focus:outline-none 
                       focus:ring-4 focus:ring-pink-400/40"
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-transparent opacity-50"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default CTASection;
