const galleryModel = require("../Models/Gallery.model");
const cloudinary = require("cloudinary").v2;

const GalleryImageUpload = async (req, res) => {
  try {
    const { title } = req.body;

    // Validate file
    const file = req.files?.image;
    if (!file) {
      return res.status(400).json({ message: "Please upload an image file!" });
    }

    // Validate format
    const allowedFormats = ["image/jpg", "image/jpeg", "image/webp", "image/png", "image/svg", "image/avif"];
    if (!allowedFormats.includes(file.mimetype)) {
      return res
        .status(400)
        .json({ message: "Invalid format! Only JPG, PNG, JPEG, WEBP or SVG allowed." });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "Gallery_Images",
    });

    let ImageURL = result.secure_url;

    // Save to MongoDB
    const imagecreate = await galleryModel.create({
      title,
      image: ImageURL,
    });

    res.status(201).json({
      message: "Gallery Image Uploaded Successfully!",
      imagecreate,
    });
  } catch (err) {
    // console.error("Error in Image Upload:", err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



const fetchAllImages = async (req,res) => {
    try{
        const allImages = await galleryModel.find();

        res.status(200).json({message:"all images", allImages:allImages })
    }catch(err){
        // console.log("Error in Retreving Gallery Images");
        return res.status(500).json({message:"Internal Server Error"});
    }
}



const deleteGalleryImagebyId = async (req, res) => {
  try {
    const imageId = req.params.id;

    // Check if image exists
    const existingImage = await galleryModel.findById(imageId);
    if (!existingImage) {
      return res.status(404).json({ message: "Image not found!" });
    }

    // Delete image from DB
    await galleryModel.findByIdAndDelete(imageId);

    res.status(200).json({ message: "Image Deleted Successfully!" });
  } catch (err) {
    // console.error("Error in Image Deleting:", err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports = { GalleryImageUpload, fetchAllImages, deleteGalleryImagebyId };
