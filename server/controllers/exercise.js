const Exercises = require("../models/ExerciseSchema");

// @desc     Get all Excercises
// @route    GET /exercise/
// @access   Public

exports.getExercise = async (req, res, next) => {
    try {
        const exercise = await Exercises.find();
        res.status(200).json({ success: true, data: exercise });
    } catch(err) {
        res.status(400).json({success: false})
    }
  
};

// @desc     Get single Excercises
// @route    GET /exercise/:id
// @access   Public

exports.getSingleExercise = async (req, res, next) => {
    try {
        const exercise = await Exercises.findById(req.params.id);
        
        res.status(200).json({ success: true, data: exercise });
    } catch (err) {
        res.status(400).json({success: false, msg: "Bad request"})
    }
    
};

// @desc     Create new  Excercise
// @route    POST /exercise/create
// @access   Private

exports.createExercise = async (req, res, next) => {
  try {
    const exercise = await Exercises.create(req.body);
    res.status(201).json({ success: true, data: exercise });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: "duplicate data"})
  }
};
