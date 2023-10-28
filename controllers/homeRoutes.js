// Import required dependencies and models
const express = require("express");
const router = express.Router();

// Import Sequelize models for User and Post
const { User, Post, Comment } = require("../models");

// Route handler to display the user registration form
// http://localhost:3001/register
router.get("/register", async (req, res) => {
  try {
    // Render the registration form
    res.render("register");
  } catch (error) {
    // Handle any errors that occur during rendering
    console.error("Error in register route:", error); // Log errors for debugging
    // Send an error response with a 500 status and message
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route handler to display user login form
// http://localhost:3001/login
router.get("/login", async (req, res) => {
  try {
    // Check if the user is logged in
    if (req.session.logged_in) {
      // Render a message indicating the user is already logged in
      res.render("homepage");
    } else {
      // Render the login form
      res.render("login");
    }
  } catch (error) {
    // Handle any errors that occur during rendering
    console.error("Error in login route:", error); // Log errors for debugging
    // Send an error response with a 500 status and message
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route handler to display the homepage
// http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    // Set is_homepage to true for this route
    const is_homepage = true;

    // Retrieve all posts with associated comments and users
    const allPostsData = await Post.findAll({
      include: [{ model: User }],
      attributes: { exclude: ["password"] }, // Exclude the password attribute
      order: [["createdAt", "DESC"]], // Order by the 'createdAt' column in descending order
    });

    // Convert Sequelize instances to plain JavaScript objects
    const plainPostsData = allPostsData.map((post) =>
      post.get({ plain: true })
    );

    // Create an array of promises to count comments for each post
    const commentCountPromises = plainPostsData.map(async (post) => {
      // Count the comments for each post
      const commentCount = await Comment.count({
        where: { post_id: post.id },
      });
      // Assign the comment count to the post object
      post.commentCount = commentCount;
    });

    // Wait for all comment counts to be calculated
    await Promise.all(commentCountPromises);

    // Render the "homepage" view with plain post data
    res.render("homepage", {
      posts: plainPostsData, // Send the plain posts data to the view
      logged_in: req.session.logged_in, // Send information about user login status
      is_homepage, // Set the is_homepage property to true
    });
  } catch (error) {
    // Handle Errors: Log errors for debugging
    console.error("Error in homepage route:", error);

    // Send an error response with a 500 status and message
    res.status(500).render("error", {
      message: "Something went wrong. Please try again later.",
      logged_in: req.session.logged_in, // Send information about user login status if needed
    });
  }
});

// Export the router
module.exports = router;
