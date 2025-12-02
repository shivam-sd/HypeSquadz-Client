import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Data
const coreValues = [
  { title: "Data-Driven Creativity", desc: "Every Campaign is Backed By Analytics And Insights." },
  { title: "Creator First", desc: "We Build Partnerships, Not Just Transactions." },
  { title: "Speed & Scale", desc: "We Move Fast, Test Faster And Deliver At Scale." },
  { title: "Transparency & Trust", desc: "Clear Reporting And Aligned Goals." },
];

const milestones = [
  { year: "2022", label: "Founded HypeSquadz" },
  { year: "2023", label: "500+ Creators Onboarded" },
  { year: "2024", label: "10M+ Followers Managed" },
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
    <main className="w-full bg-[#0a0a0a] text-white overflow-hidden">

      {/* SEO HEAD TAGS */}
      <Helmet>
        <title>About HypeSquadz — Digital Agency, Branding & Web Development</title>
        <meta
          name="description"
          content="Learn about HypeSquadz — a top-tier digital agency offering web development, branding, influencer marketing, and growth-focused digital strategies."
        />
        <meta name="keywords" content="HypeSquadz, about hypesquadz, digital marketing company, branding agency, web development agency, influencer marketing" />

        <meta property="og:title" content="About HypeSquadz — Creative Digital Agency" />
        <meta property="og:description" content="We build brands with next-gen websites, apps & high-converting marketing." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO SECTION */}
      <header
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1573164574393-cb89e39749b4?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              HypeSquadz
            </span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Creativity meets Strategy, Speed meets Scale.
          </p>
        </motion.div>
      </header>

      {/* STATS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Our Impact</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { label: "Impressions", value: "1B+ Views" },
            { label: "Brands Collaborated", value: "100+" },
            { label: "Followers Managed", value: "100M+" },
            { label: "Campaigns Delivered", value: "50+" },
          ].map((stat, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.1 }}
              className="transition-transform duration-300"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 bg-[#111]/70">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {coreValues.map((v, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111]/50 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_20px_#ff007f80] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative">
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
              <article className="bg-[#111] p-6 rounded-2xl shadow-md border border-white/10 w-1/2 hover:shadow-[0_0_25px_#ff007f80] transition-all duration-300">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
                  {m.year}
                </h3>
                <p className="text-gray-300">{m.label}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 bg-[#111]/70">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
            FOUNDERS
          </span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto">
          {team.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111]/50 border border-white/10 rounded-2xl p-8 text-center hover:shadow-[0_0_25px_#ff007f80] transition-all duration-300"
            >
              <figure>
                <img
                  src={t.photo}
                  alt={`${t.name} — Founder of HypeSquadz`}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 ring-4 ring-[#ff007f]/40"
                />
              </figure>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
                {t.name}
              </h3>
              <p className="text-gray-400 mt-2">{t.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
