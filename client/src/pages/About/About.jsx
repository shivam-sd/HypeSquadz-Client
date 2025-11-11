import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Trophy, Rocket } from "lucide-react";

const coreValues = [ { title: "Data-Driven Creativity", desc: "Every Campaign is Backed By Analytics And Insights." }, { title: "Creator First", desc: "We Build Partnerships, Not Just Transactions." }, { title: "Speed & Scale", desc: "We Move Fast, Test Faster And Deliver At Scale." }, { title: "Transparency & Trust", desc: "Clear Reporting And Aligned Goals." }, ];

const milestones = [
  { year: "2022", label: "Founded HypeSquadz", icon: <Rocket className="w-6 h-6 text-[#ff007f]" /> },
  { year: "2023", label: "500+ Creators Onboarded", icon: <Users className="w-6 h-6 text-[#ff007f]" /> },
  { year: "2024", label: "10M+ Followers Managed", icon: <Trophy className="w-6 h-6 text-[#ff007f]" /> },
];

const team = [
  {
    name: "Ankush Mehra",
    desc: "A content strategist mastering virality, brand trust, and community growth. Helped brands convert attention into lasting impact.",
    photo: "https://hypesquadzbusinessdeck.my.canva.site/hypesquadzbusinessdeck/_assets/media/aa322676ae570b799ca9e89531f3f46e.png",
  },
  {
    name: "Krishna Rai",
    desc: "A serial entrepreneur scaling digital and consumer brands to multi-million-dollar revenues with data-driven storytelling.",
    photo: "https://hypesquadzbusinessdeck.my.canva.site/hypesquadzbusinessdeck/_assets/media/4c94d3f68af755d0c156bc5f79536ada.png",
  },
];

const About = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1573164574393-cb89e39749b4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            About <span className="text-[#ff007f]">HypeSquadz</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Consistent Colour throughout the website for HypeSquadz
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: "Impressions", value: "1B+ Views" },
              { label: "Brands Collaborated", value: "100+" },
              { label: "Followers Managed", value: "100M+" },
              { label: "Campaigns Delivered", value: "50+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="transition-transform duration-300"
              >
                <h3 className="text-3xl font-bold text-[#ff007f]">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="py-20 px-6 bg-[#111]/70">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto cursor-pointer">
          {coreValues.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111]/50 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_20px_#ff007f80] transition-all duration-300"
            >
              {/* <div className="flex justify-center mb-4">
                <Sparkles className="text-[#ff007f] w-6 h-6" />
              </div> */}
              <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">
          Our Journey So Far
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ff007f] to-orange-500"></div>
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`flex items-center gap-6 mb-12 ${
                i % 2 === 0 ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="bg-[#111] p-6 rounded-2xl shadow-md border border-white/10 w-1/2 hover:shadow-[0_0_25px_#ff007f80] transition-all duration-300">
                {/* <div className="flex items-center justify-center">{m.icon}</div> */}
                <h3 className="text-[#ff007f] text-xl font-bold">{m.year}</h3>
                <p className="text-gray-300">{m.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="py-20 px-6 bg-[#111]/70">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          Meet Our <span className="text-pink-600">FOUNDERS</span>
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto cursor-pointer">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111]/50 border border-white/10 rounded-2xl p-8 text-center hover:shadow-[0_0_25px_#ff007f80] transition-all duration-300"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 ring-4 ring-[#ff007f]/40"
              />
              <h3 className="text-xl font-semibold text-[#ff007f]">{t.name}</h3>
              <p className="text-gray-400 mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
