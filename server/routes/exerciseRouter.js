const express = require("express");
const User = require("../models/userSchema");
const {
  getExercise,
  getSingleExercise,
  createExercise,
} = require("../controllers/exercise");
const exerciseRouter = express.Router();

exerciseRouter.route("/").get(getExercise).post(createExercise);

exerciseRouter.route("/:id").get(getSingleExercise);

module.exports = exerciseRouter;