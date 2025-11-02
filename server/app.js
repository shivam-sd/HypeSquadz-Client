require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const DBCONNECTION = require("./DB/DB.Connection.js");
const OurWorkRouter = require("./Routes/OurWork.routes.js");
const GalleryRouter = require("./Routes/GalleryImage.route.js");
const adminRouter = require("./Routes/admin.route.js");

DBCONNECTION();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware
app.use(cors({
  origin: process.env.Client,
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

// Routes
app.get("/", (req, res) => {
  res.send("HypeSquadz");
});

app.use("/work", OurWorkRouter);
app.use("/gallery", GalleryRouter);
app.use("/admin", adminRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
