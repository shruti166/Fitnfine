const Exercises = require("../models/ExerciseSchema");
const asyncHandler = require("../middlewear/async");
// @desc     Get all Excercises
// @route    GET /exercise/
// @access   Public

exports.getExercise = asyncHandler(async (req, res, next) => {
  let query;

  let queryStr = JSON.stringify(req.query);

  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  console.log(queryStr);

  query = Exercises.find(JSON.parse(queryStr));

  // Pagination

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1)*limit;
  const endIndex = page*limit;
  const total = await Exercises.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // Excecuting query
  const exercise = await query;

  //Paginantion result

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({ success: true, pagination, data: exercise });
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
