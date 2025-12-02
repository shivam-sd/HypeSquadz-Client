import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const statsData = [
  { id: 1, number: "1 B+", label: "Impressions" },
  { id: 2, number: "100+", label: "Brands Served" },
  { id: 3, number: "100M+", label: "Followers Managed" },
  { id: 4, number: "50+", label: "Creator Campaigns" },
];

const NumbersSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  /// Detect Scroll to Trigger Animation
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("numbers-section");
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.8) setHasAnimated(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* SEO Optimized Helmet */}
      <Helmet>
        <title>HypeSquadz — Performance Stats & Achievements</title>
        <meta
          name="description"
          content="Explore HypeSquadz’ performance numbers: impressions, brands served, followers managed, and successful creator campaigns."
        />
        <meta property="og:title" content="HypeSquadz — Numbers That Speak" />
        <meta
          property="og:description"
          content="Our achievements include 1B+ impressions, 100M+ followers managed, and 100+ brand collaborations."
        />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HypeSquadz",
            description:
              "A digital marketing and creative agency delivering high-scale brand growth.",
            metrics: statsData.map((item) => ({
              "@type": "PropertyValue",
              name: item.label,
              value: item.number,
            })),
          })}
        </script>
      </Helmet>

      {/* Main Section */}
      <section
        id="numbers-section"
        role="region"
        aria-labelledby="numbers-heading"
        className="w-full bg-[#0a0a0a] py-4 pb-14 px-6 sm:px-12 text-center"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2
            id="numbers-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              Numbers
            </span>{" "}
            That Speak
          </h2>

          <p className="text-gray-400 text-sm sm:text-xl">
            Real results delivered at scale — powered by strategy, creativity,
            and data.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {statsData.map((stat) => (
            <motion.article
              key={stat.id}
              itemScope
              itemType="https://schema.org/PropertyValue"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: stat.id * 0.2, duration: 0.8 }}
              className="bg-[#111]/60 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div
                itemProp="value"
                className="text-4xl sm:text-5xl md:text-6xl mb-2 bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent"
              >
                {hasAnimated ? stat.number : "0+"}
              </div>

              <h3
                itemProp="name"
                className="text-gray-300 text-lg font-medium"
              >
                {stat.label}
              </h3>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default NumbersSection;
