// Import modules and dependencies
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Define the Comment model using Sequelize
class Comment extends Model {}

// Initialize the Comment model with its attributes and options
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 350], // Allows comments between 1 and 350 characters
        notEmpty: true, // Ensure that the comment text is not empty
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user", // References the "user" model
        key: "id", // References the "id" column in the "user" model
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post", // References the "post" model
        key: "id", // References the "id" column in the "post" model
      },
    },
  },
  {
    sequelize, // Use the configured Sequelize instance for this model
    timestamps: true, // Include createdAt and updatedAt timestamps
    freezeTableName: true, // Prevent Sequelize from changing the table name
    underscored: true, // Use underscores in table column names for consistency
    modelName: "comment", // Model name in singular form
  }
);

module.exports = Comment;
