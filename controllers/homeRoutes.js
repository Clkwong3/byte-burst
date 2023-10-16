// Import required dependencies and models
const express = require("express");
const router = express.Router();

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
      // Redirect to the dashboard page
      res.redirect("/dashboard");
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

// Export the router
module.exports = router;
