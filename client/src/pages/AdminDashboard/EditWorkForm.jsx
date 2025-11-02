import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const EditWorkForm = () => {
  const { id } = useParams(); // Work ID from URL
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

  //  Fetch existing work data
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}work/fetch/${id}`);
        // console.log(res)
        const work = res.data.work;

        setFormData({
          title: work.title,
          summary: work.summary,
          objective: work.objective,
          outcome: work.outcome,
          tags: work.tags?.join(", ") || "",
          deliverables: work.deliverables?.join(", ") || "",
        });
        setPreview(work.image);
      } catch (err) {
        toast.error("Failed to load work details", { position: "top-center" });
      }
    };

    fetchWork();
  }, [id]);

  //  Handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  //  Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (image) data.append("image", image);

      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}work/update/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Work Updated Successfully!", { position: "top-center" });
      setTimeout(() => navigate("/admindashboard"), 1500);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update work", { position: "bottom-left" });
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
          Edit Work
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
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

          {/* Summary */}
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

          {/* Objective & Outcome */}
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

          {/* Tags & Deliverables */}
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

          {/* Image Upload */}
          <div>
            <label className="block text-gray-300 mb-2">Upload New Image (optional)</label>
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

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition cursor-pointer"
          >
            {loading ? "Updating..." : "Update Work"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EditWorkForm;
