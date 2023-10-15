// Import required dependencies and models
const express = require("express");
const router = express.Router();

// Route handler to display the user registration form
// http://localhost:3001/register
router.get("/register", async (req, res) => {
  try {
    // Render the registration form
    res.render("register");
  } catch (err) {
    // Handle any errors that occur during rendering
    console.error(err); // Log errors for debugging
    // Send an error response with a 500 status and message
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Export the router
module.exports = router;
