// Import required dependencies and models
const express = require("express");
const router = express.Router();

// Import Sequelize model for User and Post
const { User, Post } = require("../models");

// Importing withAuth middleware
const withAuth = require("../utils/auth");

// Dashboard route accessible to authenticated users only
// http://localhost:3001/dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    // Retrieve user details with posts associated with the logged-in user
    const userData = await User.findByPk(req.session.user_id, {
      attributes: ["user_name"],
      include: [{ model: Post }],
    });

    // Convert Sequelize instances to plain JavaScript objects
    const plainUserData = userData.get();

    // Render the "dashboard" view with user's posts and user_name
    res.render("dashboard", {
      user: {
        user_id: req.session.user_id,
        user_name: plainUserData.user_name,
      },
      posts: plainUserData.Posts,
      logged_in: req.session.logged_in, // Send information about user login status
    });
  } catch (error) {
    // Handle Errors: Log errors for debugging
    console.error("Error in dashboard route:", error);

    // Send an error response with a 500 status and message
    res.status(500).render("error", {
      message: "Internal Server Error",
      logged_in: req.session.logged_in, // Send information about user login status if needed
    });
  }
});

// Export the router
module.exports = router;
