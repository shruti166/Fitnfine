const Exercises = require("../models/ExerciseSchema");
const asyncHandler = require('../middlewear/async')
// @desc     Get all Excercises
// @route    GET /exercise/
// @access   Public

exports.getExercise = asyncHandler(async (req, res, next) => {
  
    const exercise = await Exercises.find();
    res.status(200).json({ success: true, data: exercise });
});

// @desc     Get single Excercises
// @route    GET /exercise/:id
// @access   Public

exports.getSingleExercise = asyncHandler(async (req, res, next) => {
    const exercise = await Exercises.findById(req.params.id);

    res.status(200).json({ success: true, data: exercise });
  
});

// @desc     Create new  Excercise
// @route    POST /exercise/create
// @access   Private

exports.createExercise = asyncHandler(async (req, res, next) => {
  
    const exercise = await Exercises.create(req.body);
    res.status(201).json({ success: true, data: exercise });
  
});
