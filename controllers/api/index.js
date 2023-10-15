// Import the necessary dependencies
const router = require("express").Router();

// Import individual route files
const userRoutes = require("./userRoutes");

// Use userRoutes for routes under /users
// http://localhost:3001/api/users
router.use("/users", userRoutes);

// Export the router
module.exports = router;
