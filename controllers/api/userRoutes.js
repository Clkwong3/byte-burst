// Import the necessary modules and setting up an Express router
const express = require("express");
const router = express.Router();

// Import the User model from the models directory
const { User } = require("../../models");

// Route to handle user registration at the "/register" endpoint (POST request)
// http://localhost:3001/api/users/register
router.post("/register", async (req, res) => {
  // Log a message to indicate that the registration route is being accessed
  console.log("Entering the registration route");

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
      message: "User registered successfully.",
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

// Route to handle user login at the "/login" endpoint (POST request)
// http://localhost:3001/api/users/register
router.post("/login", async (req, res) => {
  // Log that the login route is being accessed
  console.log("Entering the login route");

  try {
    // Extract email and password from the request body
    const { email, password } = req.body;
    // Log received login data for debugging
    console.log("Received login data: ", email, password);

    // Find user by email and validate the provided password
    const foundUser = await User.findOne({ where: { email: email } });
    const validPassword = await foundUser.checkPassword(password);

    // Check if the user exists and the password is valid
    if (foundUser && validPassword) {
      // Save user details in the session for future authentication
      req.session.save(() => {
        req.session.user_id = foundUser.id;
        req.session.user_name = foundUser.user_name;
        req.session.logged_in = true;

        // Send a success response with a message
        res.status(200).json({ message: "Login successful" });
      });
    } else {
      // Log the authentication failure
      console.log("Authentication failed");
      // Send an error response with a relevant message
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    // Log any unexpected errors during login and send a server error response
    console.error("Unhandled error in login route:", error);
    res
      .status(500)
      .json({ message: "Unable to login. Please try again.", error });
  }
});

// Route to handle user logout at the "/logout" endpoint (DELETE request)
// http://localhost:3001/api/users/logout
router.delete("/logout", (req, res) => {
  // Logs the user out by removing the session information
  req.session.destroy(() => {
    res.status(204).end(); // Respond with a 204 (No Content) status
  });
});

// Export the router
module.exports = router;
