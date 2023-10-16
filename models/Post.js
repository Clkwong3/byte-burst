// Import necessary modules
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    // Primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Title of the post
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // Ensure that the title is not empty
        len: [1, 255], // Allow titles between 1 and 255 characters
      },
    },
    // Content of the post
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true, // Ensure that the content is not empty
      },
    },
    // Foreign key linking to the User model
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  // Options Object as the second argument
  {
    sequelize, // Use the configured Sequelize instance for this model
    timestamps: true, // Include createdAt and updatedAt timestamps
    freezeTableName: true, // Prevent Sequelize from changing the table name
    underscored: true, // Use underscores in table column names for consistency
    modelName: "Post", // Model name in singular form
  }
);

// Export the Post model
module.exports = Post;
