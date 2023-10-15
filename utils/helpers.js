// Importing the user model module
const userModel = require("../models/user");

// Exporting a set of functions as a module
module.exports = {
  // Get a user by ID using Sequelize
  getUserById: async (user_id) => {
    try {
      // Use Sequelize to find the user by ID
      const user = await userModel.findByPk(user_id);

      // Check if the user exists
      return user ? user.user_name : "Unknown User";
    } catch (error) {
      // Log error information with a timestamp
      console.error(
        `Error fetching user by ID at ${new Date().toLocaleString()}:`,
        error
      );

      // If an error occurs, return "Unknown User"
      return "Unknown User";
    }
  },
};
