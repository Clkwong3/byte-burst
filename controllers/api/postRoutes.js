// Import necessary modules
const express = require("express");
const router = express.Router();
const { Post } = require("../../models"); // Import the  Post model
const withAuth = require("../../utils/auth");

// Create a new post (Private Route, requires authentication)
// http://localhost:3001/api/post
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
    console.error("Error in add post route:", error);

    // Send an error response with a 500 status and message
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update a post (Private Route, requires authentication)
// http://localhost:3001/api/post/:id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const postId = req.params.id;

    // Fetch the existing post
    const existingPost = await Post.findByPk(postId);

    // Check if the post exists and if the logged-in user is the owner
    if (!existingPost || existingPost.user_id !== req.session.user_id) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Extract data from the request body (you may customize this based on your form)
    const { title, content } = req.body;

    // Update the post with the new data
    await existingPost.update({
      title,
      content,
    });

    // Send a success response with the updated post
    res.status(200).json(existingPost);
  } catch (error) {
    console.error("Error in edit post route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete a post (Private Route, requires authentication)
// http://localhost:3001/api/post/:id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postId = req.params.id;

    // Fetch the existing post
    const existingPost = await Post.findByPk(postId);

    // Check if the post exists and if the logged-in user is the owner
    if (!existingPost || existingPost.user_id !== req.session.user_id) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Delete the post
    await existingPost.destroy();

    res.status(204).end();
  } catch (error) {
    console.error("Error in delete post route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
