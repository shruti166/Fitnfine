// @desc     Get all Excercises
// @route    GET /exercise/
// @access   Public 

exports.getExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Show All exercises'})
}

// @desc     Get single Excercises
// @route    GET /exercise/:id
// @access   Public 

exports.getSingleExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Get one exercise'})
}

// @desc     Create new  Excercise
// @route    POST /exercise/create
// @access   Private

exports.createExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Create exercises'})
}

