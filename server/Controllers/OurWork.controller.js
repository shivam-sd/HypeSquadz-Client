const workModel = require("../Models/Our.Work.Schema.js");
const cloudinary = require("cloudinary").v2;

const OurWorkController = async (req, res) => {
  try {
    const { title, summary, tags, objective, outcome, deliverables } = req.body;
    const file = req.files?.image;

    // Validate required fields
    if (!title || !summary || !objective || !outcome) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    //  Parse tags & deliverables (comma-separated input)
    const parsedTags = tags
      ? tags.split(",").map((tag) => tag.trim())
      : [];
    const parsedDeliverables = deliverables
      ? deliverables.split(",").map((d) => d.trim())
      : [];

    let imageUrl = "";

    //  Upload image if provided
    if (file) {
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp", "image/avif"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({
          error: "Invalid file format. Only PNG, JPG, and WEBP are allowed.",
        });
      }

      const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "our_work",
      });
      imageUrl = result.secure_url;
      // console.log("Image uploaded to Cloudinary:", imageUrl);
    }

    //  Create new Work document
    const newWork = await workModel.create({
      title,
      summary,
      tags: parsedTags,
      deliverables: parsedDeliverables,
      image: imageUrl,
      outcome,
      objective,
    });

    res.status(201).json({
      success: true,
      message: "Work added successfully!",
      work: newWork,
    });
  } catch (err) {
    // console.error("Error in Our Work Create:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error while adding work.",
    });
  }
};


const fetchAllWork = async(req,res) => {
    try{
        const AllWork = await workModel.find().sort({createdAt:-1});
        res.status(200).json({message:"All Works", AllWorks:AllWork});
    }catch(err){
        // console.log("Error In Fetching Work");
        return res.status(500).json({error:"Internal Server error"});
    }
}


const workFetchById = async(req,res) => {
    try{
        const id = req.params.id;
        const work = await workModel.findById(id);

        if(!work){
            return res.status(404).json({message:"Does't Exist"});
        }

        res.status(200).json({work:work});

    }catch(err){
        // console.log("Error In Fetch Work Details");
        return res.status(500).json({message:"Error In Fetch Work Details"});
    }
}



const updateWork = async (req, res) => {
  try {
    const workId = req.params.id;
    const updatedData = req.body;

    const existWork = await workModel.findById(workId);
    if (!existWork) {
      return res.status(404).json({ message: "Work doesn't exist!" });
    }

    const file = req.files?.image;
    if (file) {
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({
          error: "Invalid file format. Only PNG, JPG, or WEBP are allowed.",
        });
      }

      const uploadResponse = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "our_work",
      });

      updatedData.image = uploadResponse.secure_url;
    }

    const updatedWork = await workModel.findByIdAndUpdate(workId, updatedData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "Work updated successfully",
      work: updatedWork,
    });
  } catch (err) {
    // console.error("Error in Work Update:", err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const workDeletebyId = async (req, res) => {
  try {
    const workId = req.params.id;

    const delWork = await workModel.findByIdAndDelete(workId);

    if (!delWork) {
      return res.status(404).json({ message: "Work not found!" });
    }

    res.status(200).json({ message: "Deleted Successfully!", delWork });
  } catch (err) {
    // console.error("Error in Deleting Work:", err.message);
    return res.status(500).json({ message: "Error in Deleting Work" });
  }
};





module.exports = { OurWorkController, fetchAllWork, workFetchById, updateWork, workDeletebyId};
