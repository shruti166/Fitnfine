const mongoose = require("mongoose");

const ExcerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: 10,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  averageRating: {
    type: Number,
  },
  image: {
    type: String,
    default: "no-photo.jpg",
  },
});

module.exports = mongoose.model("Exercises", ExcerciseSchema);
