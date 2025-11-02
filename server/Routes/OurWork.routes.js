const express = require("express");
const router = express.Router();
const {OurWorkController, fetchAllWork, updateWork, workFetchById, workDeletebyId} = require("../Controllers/OurWork.controller.js");


router.post("/create", OurWorkController);
router.get("/fetch", fetchAllWork);
router.get("/fetch/:id", workFetchById);
router.put("/update/:id", updateWork);
router.delete("/delete/:id", workDeletebyId);




module.exports = router;