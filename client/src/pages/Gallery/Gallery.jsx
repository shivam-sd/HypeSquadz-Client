import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader"; // ✅ Import your loader

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery images from backend
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}gallery/images`
        );
        setImages(res.data?.allImages || []);
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        toast.error("Failed to load gallery images!");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // ✅ Loader while fetching
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <Loader />
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white py-16 px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Our <span className="text-[#00f5ff]">Gallery</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          A glimpse of incredible moments, campaigns, and collaborations powered by{" "}
          <span className="text-[#ff007f] font-semibold">HypeSquadz</span>.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      {images.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          No images available yet.
        </p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {images.map((img, index) => (
            <motion.div
              key={img._id || index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111]/80 border border-white/10 rounded-2xl overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </div>

              {/* Text below image */}
              <div className="p-4 text-center bg-[#1a1a1a] rounded-b-2xl">
                <h3 className="text-lg font-semibold text-white">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">#HypeSquadz</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Floating Gradients */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#ff007f]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#00f5ff]/30 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Gallery;
