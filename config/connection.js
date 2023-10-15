// Import the Sequelize library and load environment variable
const Sequelize = require("sequelize");
require("dotenv").config();

// Create a connection to the database
// JAWSDB is for Heroku and localhost is for local development
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME, // Database name
      process.env.DB_USER, // Database username
      process.env.DB_PASSWORD, // Database password
      {
        host: "localhost", // Local development host
        dialect: "mysql", // Database type
        port: 3306, // Port number
      }
    );

// Export the configured Sequelize connection
module.exports = sequelize;
