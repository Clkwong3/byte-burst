// Import the necessary modules and setting up an Express router
const express = require("express");
const router = express.Router();

// Import the User model from the models directory
const { User } = require("../../models");

// Handling POST requests to the "/register" endpoint
router.post("/register", async (req, res) => {
  // Log a message to indicate that the registration route is being accessed
  console.log("Entering the registration route");
  console.log(User);

  try {
    // Creating a new user using the data from the request body
    let newUser = await User.create(req.body);

    // Save information about the user's session
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.registered_user_name = newUser.user_name;
      req.session.logged_in = true;
    });

    // Log a message to indicate that the registration is a success
    console.log("Registration successful. Redirecting to /dashboard");

    // Sending a successful response to the client with user details and a redirect path
    res.status(201).json({
      message: "Registration successful",
      user: {
        user_id: newUser.id,
        registered_user_name: newUser.user_name,
      },
      redirect: "/dashboard",
    });
  } catch (error) {
    // Handling errors that occur during user registration
    console.error("Unhandled error in registration route:", error);

    // Sending an error response to the client
    res
      .status(400)
      .json({ message: "Unable to register. Please try again.", error });
  }
});

// Export the router
module.exports = router;
