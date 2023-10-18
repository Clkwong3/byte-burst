// Import the necessary dependencies
const router = require("express").Router();

// Import individual route files
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

// Use userRoutes for routes under /user
// http://localhost:3001/api/user
router.use("/user", userRoutes);

// Use postRoutes for routes under /post
// http://localhost:3001/api/post
router.use("/post", postRoutes);

// Export the router
module.exports = router;
