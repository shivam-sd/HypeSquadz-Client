import React from "react";
import { Brain, Users, Zap } from "lucide-react";

const OurPillars = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Pillars</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg md:text-xl">
          We’re not an Agency. We’re a Movement Helping Brands through{" "}
          <span className="text-pink-400 font-semibold">Data</span>,{" "}
          <span className="text-pink-400 font-semibold">Content</span>, and{" "}
          <span className="text-pink-400 font-semibold">Community</span>.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {/* Card 1 */}
          <div className="group bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:shadow-[0_0_25px_-5px_rgba(236,72,153,0.5)] transition-all duration-300 ">
            <div className="flex justify-center mb-6">
              <Brain className="w-14 h-14 text-pink-400 group-hover:scale-110 transition-transform duration-300 " />
            </div>
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Data Driven Creativity
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Our Every Movement is Backed by Analysis and Insights that Fuel Creative Decisions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:shadow-[0_0_25px_-5px_rgba(236,72,153,0.5)] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Users className="w-14 h-14 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Family of Creators
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              We have India’s Biggest Theme Page and Personal Brand Creators Family fuelling our Clients.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-pink-500 hover:shadow-[0_0_25px_-5px_rgba(236,72,153,0.5)] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Zap className="w-14 h-14 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Speed with Perfection
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              In the Fast-Paced World of Digital Media, we ship Fast, Test Faster, and Optimize for Perfection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPillars;
