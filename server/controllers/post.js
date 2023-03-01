const Posts = require("../models/PostSchema");
const asyncHandler = require("../middlewear/async")
// @desc     Get all post
// @route    GET /post/
// @access   Public 

exports.getPost = asyncHandler(async(req, res, next) => {
    
        const post = await Posts.find();
        res.status(200).json({ success: true, data: post});
   
})

// @desc     Get single Post
// @route    GET /post/:id
// @access   Public 

exports.getSinglePost = asyncHandler(async(req, res, next) => {
    
        const post = await Posts.findById(req.params.id);
        res.status(200).json({ success: true, data: post});
   
})

// @desc     Create new  Post
// @route    POST /post/create
// @access   Private

exports.createPost = asyncHandler(async(req, res, next) => {
   
        const post = await Posts.create(req.body);
        res.status(201).json({ success: true, data: post });
      
})

// @desc     Update Post
// @route    PUT /post/update/:id
// @access   Private

exports.updatePost = asyncHandler(async(req, res, next) => {
    
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({success : true, data: post})
    
    
})

// @desc     Delete Post
// @route    DELETE /post/delete/:id
// @access   Private

exports.deletePost = asyncHandler(async(req, res, next) => {
    
        const post = await Posts.findByIdAndDelete(req.params.id)
        res.status(200).json({success : true, msg: 'Post deleted'})
    
    
})

