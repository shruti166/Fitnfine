const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Posts", PostSchema);
