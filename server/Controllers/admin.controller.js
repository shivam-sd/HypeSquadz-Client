const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminModel = require("../Models/admin.model");



const adminRegister  = async(req,res) => {
    try{
        const {email, password} = req.body;

const hashPassword = await bcrypt.hash(password, 10);

        const admin = await adminModel.create({
            email,
            password: hashPassword
        });

        const token = jwt.sign({email}, process.env.SECRET_KEY);

        res.cookie("token", token);

        res.status(200).json({message:"Admin Granted!", admin});

    }catch(err){
        // console.log("Error In Admin login", err);
        return res.status(500).json({message:"Error In Admin Register"},err);
    }
}



const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️ Check if admin exists
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found!" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    //  Create JWT Token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    //  Set token in cookie (secure)
    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      message: "Admin login successful!",
      token,
      admin: { id: admin._id, email: admin.email },
    });
  } catch (err) {
    // console.error("Error in Admin login:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {adminRegister, adminLogin};
