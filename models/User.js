// Import necessary modules
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// Create a User class that extends Sequelize's Model
class User extends Model {
  // Method to check if the provided password matches the stored hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initialize the User model with Sequelize
User.init(
  {
    // Define model attributes
    id: {
      type: DataTypes.INTEGER, // Data type is INTEGER, store whole numbers
      allowNull: false, // Must have a value, cannot be left empty
      primaryKey: true, // Primary key, a unique identifier for each record in the table
      autoIncrement: true, // Automatically incremented for each new record
    },
    user_name: {
      type: DataTypes.STRING, // Data type is STRING, store character text
      allowNull: false,
      unique: true, // No two users can have the same username
      validate: {
        maxlen: [25], // Max length of the user_name
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        minlen: [8], // Minimum length of the password
        isAlphanumeric: true, // Password should only contain letters and numbers
      },
    },
  },
  {
    // Define hooks to run functions before or after certain events
    hooks: {
      beforeCreate: async (newUserData) => {
        // Hash the password before creating a new user
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    // Configure Sequelize options
    sequelize, // Connection instance
    timestamps: true, // Include timestamps (createdAt, updatedAt) in the model
    freezeTableName: true, // Don't pluralize table names
    underscored: true, // Use underscores instead of camelCase for automatically added attributes
    modelName: "User", // Set the model name
  }
);

// Export the User model
module.exports = User;
