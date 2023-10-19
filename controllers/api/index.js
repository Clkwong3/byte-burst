// Import the necessary dependencies
const router = require("express").Router();

// Import individual route files
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

// Use userRoutes for routes under /user
// http://localhost:3001/user
router.use("/user", userRoutes);

// Use postRoutes for routes under /post
// http://localhost:3001/post
router.use("/post", postRoutes);

// Use commentRoutes for routes under /comment
// http://localhost:3001/comment
router.use("/comment", commentRoutes);

// Export the router
module.exports = router;
