import React from 'react'
import { motion } from "framer-motion";
import { Workflow, Users2, Rocket } from "lucide-react";
import OfferService from './OfferService';
import OurPillars from './OurPillers';


const Services = () => {


  const approach = [
  {
    icon: <Workflow className="w-8 h-8 text-white" />,
    title: "Data-Driven Creativity",
    desc: "Every Campaign Backed By Analytics And Insights That Fuel Creative Decisions.",
    gradient: "from-[#ff007f] to-[#ff8bf5]",
  },
  {
    icon: <Users2 className="w-8 h-8 text-white" />,
    title: "Creator Pods",
    desc: "We Build And Manage Communities Of Creators Who Amplify Your Brand Message.",
    gradient: "from-[#ff8bf5] to-[#00f5ff]",
  },
  {
    icon: <Rocket className="w-8 h-8 text-white" />,
    title: "Speed Over Perfection",
    desc: "In The Fast-Paced World Of Digital, We Ship Fast, Test Faster, And Optimize Constantly.",
    gradient: "from-[#00f5ff] to-[#ff007f]",
  },
];


  return (
    <div>

<section className="relative w-full py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white overflow-hidden">
      {/* subtle glow background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff007f]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f5ff]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          The Squad Behind Your <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">Hype</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
        >
      You create the Vision. We build the Growth Engine for you.
End-to-End Content, Branding, and PR System for Founders, Creators, and Educational Brands
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {approach.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="bg-[#111]/70 border border-yellow-200/40 rounded-2xl p-8 backdrop-blur-xl hover:-translate-y-2 hover:border-[#ff007f]/40 transition-all duration-300 cursor-pointer text-left"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r from-[#ff007f] to-orange-500 flex items-center justify-center mb-6 shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

<OurPillars />
<OfferService />

    </section>
    </div>
  )
}

export default Services
