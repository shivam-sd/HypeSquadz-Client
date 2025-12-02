import React from "react";
import { motion } from "framer-motion";
import { Users, Megaphone, Video, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet";

const services = [
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Content Production & Distribution",
    desc: "High-Quality content creation and distribution across social media, video platforms, and emerging channels.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-white" />,
    title: "Brand Campaign Strategy",
    desc: "End-to-end brand campaign planning that delivers visibility, engagement, and measurable growth.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Influencer Marketing",
    desc: "Authentic influencer collaborations that boost brand trust and audience reach across platforms.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Theme Pages (Fan Pages)",
    desc: "We manage India's largest network of 1000+ niche theme pages across categories with 100M+ cumulative followers.",
  },
];

const OfferService = () => {
  return (
    <section
      id="services"
      className="w-full py-14 bg-[#0a0a0a] text-white"
      aria-labelledby="services-heading"
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>Our Services | HypeSquadz — Digital Agency for Creators & Brands</title>

        <meta
          name="description"
          content="Explore HypeSquadz services: content creation, influencer marketing, brand campaign strategy, and theme-page distribution for creators & brands."
        />

        <meta property="og:title" content="HypeSquadz Services" />
        <meta
          property="og:description"
          content="From content production to influencer marketing — we help brands grow with data-driven content & strategy."
        />
        <meta property="og:type" content="website" />

        {/* Schema Markup for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HypeSquadz Digital Services",
            "provider": {
              "@type": "Organization",
              "name": "HypeSquadz",
            },
            "serviceType": services.map((s) => s.title),
            "description":
              "HypeSquadz provides content creation, influencer marketing, brand strategy, and theme-page promotion.",
          })}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg"
        >
          We provide complete growth solutions — strategy, execution, scaling, and brand building for creators & startups.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, idx) => (
          <motion.article
            key={idx}
            aria-label={svc.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.15, duration: 0.6 }}
            className="bg-[#111]/70 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
          >
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 bg-gradient-to-r from-[#ff007f] to-orange-500 shadow-lg"
              aria-hidden="true"
            >
              {svc.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">{svc.title}</h3>
            <p className="text-gray-400 leading-relaxed">{svc.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default OfferService;
