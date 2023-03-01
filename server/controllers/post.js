// @desc     Get all post
// @route    GET /post/
// @access   Public 

exports.getExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Show All posts'})
}

// @desc     Get single Post
// @route    GET /post/:id
// @access   Public 

exports.getExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Show post'})
}

// @desc     Create new  Post
// @route    POST /post/create
// @access   Private

exports.createExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Create new post'})
}

// @desc     Update Post
// @route    PUT /post/update/:id
// @access   Private

exports.createExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Update your post'})
}

// @desc     Delete Post
// @route    DELETE /post/delete/:id
// @access   Private

exports.createExercise = (req, res, next) => {
    res.status(200).json({success : true, msg: 'Delete your post'})
}

