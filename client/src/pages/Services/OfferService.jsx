import React from "react";
import { motion } from "framer-motion";
import { Users, Megaphone, Video, BookOpen, BarChart2 } from "lucide-react";

const services = [
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Content Production & Distribution",
    desc: "High-Quality Content Creation And Distribution Across Social, Video & Emerging Channels.",
    gradient: "from-[#00f5ff] to-[#ff007f]",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-white" />,
    title: "Brand Campaign Strategy",
    desc: "Crafting End-To-End Brand Campaigns That Drive Visibility, Engagement & Growth.",
    gradient: "from-[#ff8bf5] to-[#00f5ff]",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Influencer Marketing",
    desc: "Partnering Creators And Brands To Leverage Authentic Influence Across Platforms.",
    gradient: "from-[#ff007f] to-[#ff8bf5]",
  },
{
  icon: <BookOpen className="w-6 h-6 text-white" />,
  title: "Theme Pages (Fan Pages)",
  desc: "India’s Largest Hub Of 1000+ Theme Pages Across Niches — Education, Finance, Motivation, And More, With A 100M+ Following.",
  gradient: "from-[#ff007f] to-[#ff8bf5]",
}


];

const OfferService = () => {
  return (
    <section className="w-full py-14 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold"
        >
          Our <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg"
        >
          We deliver end-to-end solutions for creators, brands and ventures from strategy to launch to scale.
        </motion.p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.15, duration: 0.6 }}
            className="bg-[#111]/70 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 bg-gradient-to-r from-[#ff007f] to-orange-500 shadow-lg`}>
              {svc.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 ">{svc.title}</h3>
            <p className="text-gray-400 leading-relaxed">{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OfferService;
