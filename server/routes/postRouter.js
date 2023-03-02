const express = require("express");
const Post = require("../models/PostSchema");
const {
  getPost,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  uploadPost,
} = require("../controllers/post");
const postRouter = express.Router();

postRouter.route("/").get(getPost).post(createPost);

postRouter.route("/:id").get(getSinglePost).put(updatePost).delete(deletePost);

postRouter.route('/:id/photo').put(uploadPost);

module.exports = postRouter