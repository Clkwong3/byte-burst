// Import the necessary dependencies and route handlers
const router = require("express").Router();
const apiRoutes = require("./api"); // Import API routes
const homeRoutes = require("./homeRoutes"); // Import homepage routes
const dashboardRoutes = require("./dashboardRoutes") // Import dashboard routes 

// Define the routes and their handlers
// Use the apiRoutes for handling API-related routes
// http://localhost:3001/api/
router.use("/api", apiRoutes);

// Use the homeRoutes for handling routes at the root level
// http://localhost:3001/
router.use("/", homeRoutes);

// Use the dashboardRoute for handling routes under /dashboard
// http://localhost:3001/dashboard/
router.use("/dashboard", dashboardRoutes);

// Export the router
module.exports = router;
