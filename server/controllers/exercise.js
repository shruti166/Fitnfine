const Exercises = require("../models/ExerciseSchema");
const asyncHandler = require('../middlewear/async')
// @desc     Get all Excercises
// @route    GET /exercise/
// @access   Public

exports.getExercise = asyncHandler(async (req, res, next) => {
  
    const exercise = await Exercises.find();
    res.status(200).json({ success: true, data: exercise });
});

// Pagination

const page = parseInt(req.query.page, 10) || 1;
const limit = parseInt(req.query.limit, 10) || 1;
const startIndex = (page - 1)*limit;
const endIndex = page*limit;
const total = await Exercises.countDocuments();

query = query.skip(startIndex).limit(limit);

// Excecuting query
const exercise = await query;

//Paginantion result 

const pagination = {};

if(endIndex < total) {
    pagination.next = {
        page: page + 1,
        limit
    }
}

if(startIndex > 0) {
    pagination.prev = {
        page: page - 1,
        limit
    }
}




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
