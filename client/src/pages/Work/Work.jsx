import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

const Work = () => {
  const [selected, setSelected] = useState(null);
  const [allWork, setAllWork] = useState([]);
  const [loader, setLoader] = useState(true); // ✅ initially true

  useEffect(() => {
    const fetchAllWork = async () => {
      try {
        setLoader(true);
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}work/fetch`);
        const data = res.data?.AllWorks || [];
        setAllWork(data);
      } catch (err) {
        console.error("Error in fetching All Work:", err);
        toast.error(err.message || "Internal Server Error");
      } finally {
        setLoader(false); // ✅ stop loading after fetch
      }
    };

    fetchAllWork();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white py-20 px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Our <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Discover our most successful influencer collaborations and brand
          campaigns that shaped real impact.
        </p>
      </motion.div>

      {/* Loader or Work Cards */}
      {loader ? (
        <div className="text-center text-xl bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent font-bold w-full flex items-center justify-center">
          LOADING...
        </div>
      ) : (
        <motion.div
          layout
          className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-0"
        >
          {allWork.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No work available yet.
            </p>
          ) : (
            allWork.map((work) => (
              <motion.div
                key={work._id}
                whileHover={{ y: -8 }}
                className="relative bg-[#111]/70 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 group hover:border-[#ff007f]/40 cursor-pointer"
                onClick={() => setSelected(work)}
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {work.tags?.[0] && (
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#ff007f] to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-bold">
                      {work.tags[0]}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {work.summary}
                  </p>

                  {/* Outcome */}
                  {work.outcome && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-300">
                        <span className="font-semibold text-white">Outcome:</span>{" "}
                        {work.outcome}
                      </p>
                    </div>
                  )}

                  {/* Deliverables */}
                  {work.deliverables && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-300 font-semibold">
                        Deliverables:
                      </p>
                      <ul className="text-gray-400 text-sm list-disc list-inside mt-1 space-y-1">
                        {work.deliverables.slice(0, 3).map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  {work.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {work.tags.map((t, i) => (
                        <span
                          key={i}
                          className="bg-white/5 text-gray-300 text-xs px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-tr from-[#ff007f] via-transparent to-[#00f5ff]" />
              </motion.div>
            ))
          )}
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#111]/90 border border-white/10 rounded-2xl max-w-4xl w-full overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={selected.heroImage || selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-3">{selected.title}</h3>
                  <p className="text-gray-300 mb-4">{selected.summary}</p>
                  <div className="space-y-3 text-sm">
                    {selected.objective && (
                      <div>
                        <span className="font-semibold text-white">
                          Objective:{" "}
                        </span>
                        <span className="text-gray-400">
                          {selected.objective}
                        </span>
                      </div>
                    )}
                    {selected.outcome && (
                      <div>
                        <span className="font-semibold text-white">
                          Outcome:{" "}
                        </span>
                        <span className="text-gray-400">
                          {selected.outcome}
                        </span>
                      </div>
                    )}
                    {selected.deliverables && (
                      <div>
                        <span className="font-semibold text-white">
                          Deliverables:{" "}
                        </span>
                        <span className="text-gray-400">
                          {selected.deliverables.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
