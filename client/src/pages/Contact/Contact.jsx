import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaUserAlt,
  FaRegBuilding,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double submit

    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_CONTACTACCESSKEY
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀", {
          position: "top-center",
        });
        form.reset();
      } else {
        toast.error(data.message || "Something went wrong", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Network error! Please try again", {
        position: "top-left",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>HypeSquadz – Web Development & Branding Agency</title>
        <meta
          name="description"
          content="HypeSquadz offers web design, app development, branding and SEO services."
        />
        <meta
          property="og:title"
          content="HypeSquadz – Creative Digital Agency"
        />
        <meta
          property="og:description"
          content="We build brands with next-gen websites, apps, and marketing."
        />
      </Helmet>

      <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-white overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#ff007f]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#00f5ff]/20 rounded-full blur-3xl animate-pulse" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-[#ff007f]">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Got a campaign idea or want to scale your brand? Drop us a message.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto bg-[#111]/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-10 shadow-[0_0_40px_-10px_rgba(255,0,127,0.3)]"
        >
          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Name */}
            <Input
              icon={<FaUserAlt />}
              placeholder="Your Name"
              name="name"
              required
            />

            {/* Email */}
            <Input
              icon={<FaEnvelope />}
              placeholder="Your Email"
              name="email"
              type="email"
              required
            />

            {/* Company */}
            <Input
              icon={<FaRegBuilding />}
              placeholder="Brand / Company"
              name="company"
            />

            {/* Message */}
            <div className="border border-white/10 rounded-2xl focus-within:border-[#00f5ff] p-4">
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Tell us about your project..."
                className="w-full bg-transparent resize-none focus:outline-none text-gray-200 placeholder-gray-500"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="flex items-center justify-center gap-3 bg-[#ff007f] py-4 rounded-full font-semibold shadow-lg disabled:opacity-70"
            >
              {loading ? (
                <HashLoader size={22} color="#fff" />
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;

/* Reusable Input */
const Input = ({ icon, ...props }) => (
  <div className="flex items-center gap-3 border-b border-white/10 pb-3 focus-within:border-[#ff007f]">
    <span className="text-[#ff007f]">{icon}</span>
    <input
      {...props}
      className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500"
    />
  </div>
);
