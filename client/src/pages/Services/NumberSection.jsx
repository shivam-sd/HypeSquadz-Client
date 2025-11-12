import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  { id: 1, number: "1 B+", label: "Impressions" },
  { id: 2, number: "100+", label: "Brands Served" },
  { id: 3, number: "100M+", label: "Followers Managed" },
  { id: 4, number: "50+", label: "Creator Campaigns" },
];

const NumbersSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("numbers-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setHasAnimated(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animateNumber = (value) => {
    const [num, suffix] = value.match(/(\d+)(\D*)/).slice(1);
    const final = parseInt(num, 10);
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (hasAnimated) {
        let start = 0;
        const duration = 1500;
        const increment = Math.ceil(final / (duration / 30));
        const timer = setInterval(() => {
          start += increment;
          if (start >= final) {
            clearInterval(timer);
            setCount(final);
          } else {
            setCount(start);
          }
        }, 30);
      }
    }, [hasAnimated, final]);

    return <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#00f5ff] font-extrabold">{hasAnimated ? `${count}${suffix}` : `0${suffix}`}</span>;
  };

  return (
    <section id="numbers-section" className="w-full bg-[#0a0a0a] py-4 pb-14 px-6 sm:px-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4"><span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
          Numbers</span>&nbsp;That Speak</h2>
        <p className="text-gray-400 text-sm sm:text-xl">We don’t just promise results we deliver them at scale.</p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {statsData.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { }}
            transition={{ delay: stat.id * 0.2, duration: 0.8 }}
            className="bg-[#111]/60 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">
              {hasAnimated ? stat.number : "0+"}
            </div>
            <div className="text-gray-300 text-lg">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
