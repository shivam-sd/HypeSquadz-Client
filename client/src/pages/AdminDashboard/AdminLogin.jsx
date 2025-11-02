import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}admin/login`,
        formData,
        {
          withCredentials: true,
        }
      );

      toast.success("Login Successful!", {
        position:"top-center"
      });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admindashboard");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#161616]/90 p-8 rounded-2xl shadow-lg border border-gray-800"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your admin email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-[#1f1f1f] text-white rounded-lg border border-gray-700 focus:border-orange-400 outline-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition cursor-pointer"
          >
            {loading ? "Verifying..." : "Login"}
          </motion.button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} HypeSquadz | Admin Access Only
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
