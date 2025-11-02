import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

const AddWorkForm = () => {


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    objective: "",
    outcome: "",
    tags: "",
    deliverables: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      data.append("image", image);

      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}work/create`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Work Created!", {
        position:"top-center"
      });
      setMessage(" Work created successfully!");
      setFormData({
        title: "",
        summary: "",
        objective: "",
        outcome: "",
        tags: "",
        deliverables: "",
      });
      setImage(null);
      setPreview(null);
      navigate("/admindashboard")
    } catch (err) {
      console.error(err);
      toast.error(err.message, {
        position:"bottom-left"
      });
      setMessage("Error while creating work!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-[#161616] p-8 rounded-2xl shadow-lg border border-gray-800"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Add New Work
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Summary</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Objective</label>
              <textarea
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                rows="2"
                className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Outcome</label>
              <textarea
                name="outcome"
                value={formData.outcome}
                onChange={handleChange}
                rows="2"
                className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g. YouTube, Instagram"
                className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Deliverables (comma separated)
              </label>
              <input
                type="text"
                name="deliverables"
                value={formData.deliverables}
                onChange={handleChange}
                placeholder="e.g. Reels, Shorts"
                className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-gray-300 bg-[#1f1f1f] border border-gray-700 p-2 rounded-lg"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 rounded-lg w-full object-cover max-h-64"
              />
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition cursor-pointer"
          >
            {loading ? "Uploading..." : "Post Work"}
          </motion.button>

          {message && (
            <p
              className={`text-center mt-4 font-semibold ${
                message.includes("Error") ? "text-red-400" : "text-green-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default AddWorkForm;
