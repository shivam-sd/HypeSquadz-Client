import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaImages, FaBriefcase, FaTrash, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [allWork, setAllWork] = useState([]);
  const [allImages, setAllimage] = useState([]);
  const navigate = useNavigate();

  //  Fetch all works
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}work/fetch`, {
          withCredentials: true,
        });
        setAllWork(res.data.AllWorks || []);
      } catch (err) {
        toast.error("Failed to fetch works");
        console.error(err);
      }
    };
    fetchWorks();
  }, []);

 const handleDelete = async (Id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}work/delete/${Id}`
      );
      toast.success("Work Deleted Successfully!");
      setAllWork((prev) => prev.filter((work) => work._id !== id));
      navigate("/admindashboard");
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };



    //  Fetch all images
  useEffect(() => {
    const fetchimages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}gallery/images`, {
          withCredentials: true,
        });
        console.log(res)
        setAllimage(res.data.allImages || []);
      } catch (err) {
        toast.error("Failed to fetch images");
        console.error(err);
      }
    };
    fetchimages();
  }, []);


  const handleImagesDelete = async(id) => {
    try{

      if(!window.confirm("Are You Sure! You Want To Delete This Image")) return;

        const del = await axios.delete(`${import.meta.env.VITE_BASE_URL}gallery/image/delete/${id}`);

        window.location.reload();
      navigate("/admindashboard");

        toast.success("Gallery Image Delete success", {
          position:"top-center"
        });

    }catch(err){
      toast.error(err.message || "Images Getting Error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white p-6 sm:p-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <div className="flex flex-wrap gap-4">
          <Link
            to={"/admin-work-create"}
            className="flex items-center gap-2 bg-gradient-to-r from-[#ff007f] to-[#ff6f61] px-6 py-3 rounded-xl shadow-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            <FaPlus /> Add More Work
          </Link>
          <Link to={"/admin-image-upload"} className="flex items-center gap-2 bg-gradient-to-r from-[#00f5ff] to-[#007bff] px-6 py-3 rounded-xl shadow-lg font-semibold hover:scale-105 transition-transform duration-300">
            <FaImages /> Add More Images
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveTab("work")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === "work"
              ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white"
              : "bg-[#1c1c1c] text-gray-400 hover:text-white"
          }`}
        >
          <FaBriefcase /> All Work
        </button>
        <button
          onClick={() => setActiveTab("images")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === "images"
              ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
              : "bg-[#1c1c1c] text-gray-400 hover:text-white"
          }`}
        >
          <FaImages /> All Images
        </button>
      </div>

      {/* Work Section */}
      {activeTab === "work" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 max-w-5xl mx-auto w-full"
        >
          {allWork.length === 0 ? (
            <p className="text-center text-gray-400">No work found</p>
          ) : (
            allWork.map((work) => (
              <div
                key={work._id}
                className="bg-[#111]/60 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="text-gray-400">Objective: {work.objective}</p>
                  <span className="text-sm text-orange-400">
                    Tags: {work.tags?.join(", ")}
                  </span>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/admin-work-update/${work._id}`}
                    className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 px-4 py-2 rounded-lg cursor-pointer transition"
                  >
                    <FaEdit /> Update
                  </Link>
                  <Link
                    to={`/admindashboard/${work._id}`}
                    onClick={() => handleDelete(work._id)}
                    className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 px-4 py-2 rounded-lg transition cursor-pointer"
                  >
                    <FaTrash /> Delete
                  </Link>
                </div>
              </div>
            ))
          )}
        </motion.div>
      )}

      {/* Images Section */}
      {activeTab === "images" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {allImages.map((img) => (
            <div
              key={img.id}
              className="bg-[#111]/60 border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img src={img.image} alt={img.title} className="w-full h-56 object-cover" />
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{img.title}</h3>
                <button onClick={() => handleImagesDelete(img._id)} className="text-red-400 hover:text-red-500 transition cursor-pointer">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;
