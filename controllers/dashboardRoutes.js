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
    // Set is_dashboard_page to true for this route
    const is_dashboard_page = true;

    // Retrieve user details with posts associated with the logged-in user
    const userData = await User.findByPk(req.session.user_id, {
      attributes: ["user_name"],
      include: [{ model: Post }],
    });

    // Convert Sequelize instances to plain JavaScript objects
    const plainUserData = userData.Posts.map((post) =>
      post.get({ plain: true })
    );

    // Render the "dashboard" view with user's posts and user_name
    res.render("dashboard", {
      user: {
        user_id: req.session.user_id,
        user_name: userData.user_name, // Access user_name directly from userData
      },
      posts: plainUserData, // Pass the array of plain objects directly
      logged_in: req.session.logged_in, // Send information about user login status
      is_dashboard_page, // Set the is_dashboard_page property to true
    });
  } catch (error) {
    // Handle Errors: Log errors for debugging
    console.error("Error in dashboard route:", error);

    // Send an error response with a 500 status and message
    res.status(500).render("error", {
      message: "Something went wrong. Please try again later.",
      logged_in: req.session.logged_in, // Send information about user login status if needed
    });
  }
});

// Render the 'addNew' view for creating a new post
// http://localhost:3001/dashboard/new
router.get("/new", withAuth, (req, res) => {
  // Render the "addNew" page to view
  res.render("addNew", {
    logged_in: req.session.logged_in, // Pass the logged_in status to the view
  });
});

// Export the router
module.exports = router;
