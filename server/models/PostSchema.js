const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },  
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Posts", PostSchema);
