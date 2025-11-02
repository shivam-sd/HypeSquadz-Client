import React from "react";
import { motion } from "framer-motion";

const coreValues = [
  { title: "Data-Driven Creativity", desc: "Every campaign is backed by analytics and insights." },
  { title: "Creator First", desc: "We build partnerships, not just transactions." },
  { title: "Speed & Scale", desc: "We move fast, test faster and deliver at scale." },
  { title: "Transparency & Trust", desc: "Clear reporting and aligned goals." },
];

const milestones = [
  { year: "2022", label: "Founded HypeSquadz" },
  { year: "2023", label: "500+ creators onboarded" },
  { year: "2024", label: "10M+ followers managed" },
];

const team = [
  { name: "Ankush Mehra", desc: "A content strategist and entrepreneur known for mastering virality, brand trust, and community building. Helped  many Brands by hacking platforms and turning attention into growth", photo: "https://hypesquadzbusinessdeck.my.canva.site/hypesquadzbusinessdeck/_assets/media/aa322676ae570b799ca9e89531f3f46e.png" },
  { name: "Krishna Rai", desc: "A serial entrepreneur with a background in digital marketing and a passion for storytelling. Previously scaled edtech and consumer brands to multi‑million‑dollar revenues. Believes in data‑driven creativity and building communities", photo: "https://hypesquadzbusinessdeck.my.canva.site/hypesquadzbusinessdeck/_assets/media/4c94d3f68af755d0c156bc5f79536ada.png" },
];

const About = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white">
      {/* Hero */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1573164574393-cb89e39749b4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8 }}
          className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            About <span className="text-[#ff007f]">HypeSquadz</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">Building hype that converts, one campaign at a time.</p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8 }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div><h3 className="text-3xl font-bold text-[#ff007f]">500M+</h3><p className="text-gray-400">Impressions</p></div>
            <div><h3 className="text-3xl font-bold text-[#00f5ff]">100+</h3><p className="text-gray-400">Brands Collaborated</p></div>
            <div><h3 className="text-3xl font-bold text-[#ff007f]">10M+</h3><p className="text-gray-400">Followers Managed</p></div>
            <div><h3 className="text-3xl font-bold text-[#00f5ff]">50+</h3><p className="text-gray-400">Campaigns Delivered</p></div>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="py-20 px-6 bg-[#111]/70">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">Our Core Values</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {coreValues.map((v, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:i*0.2, duration:0.6 }}
              className="bg-[#111]/50 border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">Milestones</h2>
        <ul className="max-w-4xl mx-auto space-y-12">
          {milestones.map((m,i) => (
            <motion.li key={i} initial={{ opacity:0, x:-30 }} animate={{ opacity:1,x:0 }} transition={{ delay:i*0.3, duration:0.6 }}
              className="flex items-start gap-6">
              <div className="text-2xl font-bold text-[#00f5ff] w-20">{m.year}</div>
              <div className="text-gray-300">{m.label}</div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Team */}
      <div className="py-20 px-6 bg-[#111]/70">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">Meet Our Founders</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {team.map((t,i) => (
            <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:i*0.2, duration:0.6 }}
              className="bg-[#111]/50 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-3 hover:shadow-lg transition-transform duration-300">
              <img src={t.photo} alt={t.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-gray-400">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA
      // <div className="py-16 text-center">
      //   <motion.button whileHover={{ scale:1.05 }} className="bg-gradient-to-r from-[#ff007f] to-[#00f5ff] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition duration-300">
      //     Join the Squad
      //   </motion.button>
      // </div> */}
    </section>
  );
};

export default About;
