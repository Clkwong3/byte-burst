// Import the necessary dependencies and route handlers
const router = require("express").Router();
const apiRoutes = require("./api"); // Import API routes
const homeRoutes = require("./homeRoutes.js"); // Import home page routes

// Define the routes and their handlers
// Use the apiRoutes for handling API-related routes
// http://localhost:3001/api/
router.use("/api", apiRoutes);

// Use the homeRoutes for handling routes at the root level
// http://localhost:3001/
router.use("/", homeRoutes);

// Export the router
module.exports = router;
