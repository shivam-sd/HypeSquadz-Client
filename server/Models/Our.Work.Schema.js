const  mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    summary: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    objective: {
      type: String,
      trim: true,
    },

    outcome: {
      type: String,
      trim: true,
    },

    deliverables: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);


const workModel = mongoose.model("Our Work", workSchema);

module.exports = workModel;
