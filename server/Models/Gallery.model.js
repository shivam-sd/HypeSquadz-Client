const mongoose = require("mongoose");


const gallerySchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
    }
});


const galleryModel = mongoose.model("Gallery", gallerySchema);

module.exports =  galleryModel;