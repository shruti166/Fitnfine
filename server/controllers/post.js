const Posts = require("../models/PostSchema");

// @desc     Get all post
// @route    GET /post/
// @access   Public 

exports.getPost = async(req, res, next) => {
    try {
        const post = await Posts.find();
        res.status(200).json({ success: true, data: post});
    } catch(err) {
        res.status(400).json({success: false})
    }
}

// @desc     Get single Post
// @route    GET /post/:id
// @access   Public 

exports.getSinglePost = async(req, res, next) => {
    try {
        const post = await Posts.findById(req.params.id);
        res.status(200).json({ success: true, data: post});
    } catch(err) {
        res.status(400).json({success: false})
    }
}

// @desc     Create new  Post
// @route    POST /post/create
// @access   Private

exports.createPost = async(req, res, next) => {
    try {
        const post = await Posts.create(req.body);
        res.status(201).json({ success: true, data: post });
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, msg: "duplicate data"})
      }
}

// @desc     Update Post
// @route    PUT /post/update/:id
// @access   Private

exports.updatePost = async(req, res, next) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({success : true, data: post})
    } catch(err) {
        console.log(err);
        res.status(400).json({ success: false, msg: "duplicate data"})
    }
    
}

// @desc     Delete Post
// @route    DELETE /post/delete/:id
// @access   Private

exports.deletePost = async(req, res, next) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id)
        res.status(200).json({success : true, msg: 'Post deleted'})
    } catch(err) {
        console.log(err);
        res.status(400).json({ success: false, msg: "failed operation"})
    }
    
}

