import React from "react";
import { motion } from "framer-motion";

const brands = [
  { id: 1, name: "Physics Wallah" , logo:"https://play-lh.googleusercontent.com/x5_bJXO_-4zH95U6-GSmZPHWX7iFe1JPmfGe26kV2fVrZS5Ebi7L_VFIOopAQ3XBDg=w240-h480-rw" },
  { id: 2, name: "Careerwill" , logo:"https://play-lh.googleusercontent.com/kEa-ftsB33wVBeS3EDFZHlDN3FMKTEJ8KgBDz39WspreIt7QD07Hy4SAbUPDWXl1Li96" },
  { id: 3, name: "Nishant Jindal" , logo:"https://nocache-appxdb.classx.co.in/subject/2024-01-16-0.5069151552230504.jpg" },
  { id: 4, name: "Scaler School of Technology" , logo:"https://static.theprint.in/wp-content/uploads/2023/12/ANI-20231207111532.jpg" },
  { id: 5, name: "Biomentors" , logo:"https://play-lh.googleusercontent.com/EzxfPxlzCoKR3qcX0chSgokYeTbaR_S8sx9Rn6ybC63sFtNrZjUGNIyYxEPqRDPyopE" },
  { id: 6, name: "Mirai School of Technology" , logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvkx1pSmfRx2MR50QpsGnWs7yL9OTUxidZg&s" },
];

const TrustedBy = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-center overflow-hidden">
      {/* Floating gradient glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#ff007f]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#00f5ff]/20 rounded-full blur-3xl animate-pulse" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Trusted By The <span className="bg-gradient-to-r from-[#ff007f] to-orange-500 bg-clip-text text-transparent">Best</span>
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl">
          Partnered with India’s Fastest-Growing Education and Creator Brands.
        </p>
      </motion.div>

      {/* Brand grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="group bg-[#111]/60 border border-white/70 hover:border-[#ff007f]/40 rounded-2xl p-8 backdrop-blur-xl 
                       transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px_-5px_rgba(255,0,127,0.4)] flex items-center justify-start gap-5"
          >
            <img src={brand.logo} alt="Logo" className="w-16 rounded-2xl" />            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 group-hover:text-white transition">
              {brand.name}
            </h3>
            {/* <div className="mt-20 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#ff007f] to-[#00f5ff] transition-all duration-500" /> */}
          </motion.div>
        ))}
      </div>

     
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff007f] via-[#00f5ff] to-transparent opacity-50"></div>
    </section>
  );
};

export default TrustedBy;
