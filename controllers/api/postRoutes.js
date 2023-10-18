const express = require("express");
const router = express.Router();
const { Post, User } = require("../../models"); // Import the Post and User models
const withAuth = require("../../utils/auth");

// Create a new post (Private Route, requires authentication)
// http://localhost:3001/api/posts/
router.post("/", withAuth, async (req, res) => {
  try {
    // Extract data from the request body
    const { title, content } = req.body;

    // Create a new post in the database
    const newPost = await Post.create({
      title,
      content,
      user_id: req.session.user_id,
    });

    // Send a success response with the newly created post
    res.status(201).json(newPost);
  } catch (error) {
    // Handle Errors: Log errors for debugging
    console.error("Error in post route:", error);

    // Send an error response with a 500 status and message
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Edit a post (Private Route, requires authentication)
// http://localhost:3001/api/posts/:postId
router.put("/:postId", withAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.postId;

    // Fetch the existing post
    const existingPost = await Post.findByPk(postId);

    // Check if the post exists and if the logged-in user is the owner
    if (!existingPost || existingPost.user_id !== req.session.user_id) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Update the post with the new data
    const updatedPost = await existingPost.update({
      title,
      content,
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error in put route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Export the router
module.exports = router;
