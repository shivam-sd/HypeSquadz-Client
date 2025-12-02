import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Brain, Users, Zap } from "lucide-react";

const OurPillars = () => {
  return (
    <section
      id="our-pillars"
      className="w-full bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white py-24 px-6 relative overflow-hidden"
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Pillars – HypeSquadz | Data-Driven Branding & Marketing</title>
        <meta
          name="description"
          content="Discover the core pillars of HypeSquadz — Data-Driven Creativity, Community of Creators, and Speed with Perfection. Our foundation for building powerful brands."
        />
        <meta property="og:title" content="Our Pillars – HypeSquadz" />
        <meta
          property="og:description"
          content="We use Data, Content, and Community to grow brands with creativity and precision."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Floating Glow Background */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-600/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <header>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Pillars
            </span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg md:text-xl">
            We’re not an Agency — we’re a{" "}
            <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent font-semibold">
              Movement
            </span>{" "}
            helping brands grow through{" "}
            <span className="text-pink-500 font-semibold">Data</span>,{" "}
            <span className="text-orange-400 font-semibold">Content</span>, and{" "}
            <span className="text-pink-400 font-semibold">Community</span>.
          </p>
        </header>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <article
            aria-label="Data Driven Creativity"
            className="group bg-[#111]/70 p-8 rounded-2xl border border-pink-600/20 hover:border-pink-600 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="flex justify-center mb-6">
              <Brain
                className="w-14 h-14 text-pink-600 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Data-Driven Creativity
            </h3>

            <p className="text-gray-400 text-base leading-relaxed">
              Every idea is powered by insights and analytics that spark
              meaningful creativity.
            </p>
          </article>

          {/* CARD 2 */}
          <article
            aria-label="Creator Community"
            className="group bg-[#111]/70 p-8 rounded-2xl border border-pink-600/20 hover:border-pink-500 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="flex justify-center mb-6">
              <Users
                className="w-14 h-14 text-pink-600 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Family of Creators
            </h3>

            <p className="text-gray-400 text-base leading-relaxed">
              India’s biggest creator and theme-page community powering viral
              brand stories.
            </p>
          </article>

          {/* CARD 3 */}
          <article
            aria-label="Execution Speed"
            className="group bg-[#111]/70 p-8 rounded-2xl border border-pink-600/20 hover:border-pink-500 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="flex justify-center mb-6">
              <Zap
                className="w-14 h-14 text-pink-600 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Speed with Perfection
            </h3>

            <p className="text-gray-400 text-base leading-relaxed">
              We move fast, test faster, and perfect every launch with precision
              and data.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OurPillars;
