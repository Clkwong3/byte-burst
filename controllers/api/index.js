// Import the necessary dependencies
const router = require("express").Router();

// Import individual route files
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

// Use userRoutes for routes under /users
// http://localhost:3001/api/users
router.use("/users", userRoutes);

// Use postRoutes for routes under /posts
// http://localhost:3001/api/posts
router.use("/posts", postRoutes);

// Export the router
module.exports = router;
