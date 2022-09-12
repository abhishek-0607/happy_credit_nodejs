const express = require("express");

const router = express.Router();

const Post = require("../models/post");

const Comment = require("../models/comment");

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).send(post);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("comments");
    return res.send({ posts });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});
// get post by id;
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("comments")
      .lean()
      .exec();
    return res.status(200).send(post);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});
// post a comment

router.post("/:id/comment", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    console.log(comment);
    //   const post = await Post.findById(req.params.id)

    //   const savedPost = post.comments.push(comments);
    const newPost = await Post.findByIdAndUpdate(req.params.id, {
      $push: {
        comments: [comment],
      },
    });

    return res.status(201).send(newPost);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});

module.exports = router;
