import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddImageForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image) {
      toast.error("Please fill all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}gallery/image/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Image Added Successfully!");
      setMessage("Image uploaded successfully!");
      setTitle("");
      setImage(null);
      setPreview(null);
      navigate("/admindashboard");
    } catch (err) {
      console.error(err);
      toast.error("Error uploading image!");
      setMessage("Upload failed, try again!");
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
          Add New Image
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter image title..."
              required
              className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
            />
          </div>

          {/* Image Upload */}
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

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition cursor-pointer"
          >
            {loading ? "Uploading..." : "Add Image"}
          </motion.button>

          {message && (
            <p
              className={`text-center mt-4 font-semibold ${
                message.includes("failed") ? "text-red-400" : "text-green-400"
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

export default AddImageForm;
