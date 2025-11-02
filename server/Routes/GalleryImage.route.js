const express = require("express");
const router = express.Router();
const { GalleryImageUpload, deleteGalleryImagebyId, fetchAllImages } = require("../Controllers/galleryImage.controller");



router.post("/image/upload", GalleryImageUpload);
router.get("/images/", fetchAllImages);
router.delete("/image/delete/:id", deleteGalleryImagebyId);



module.exports = router;