// Import models (User, Post)
const User = require("./User");
const Post = require("./Post");

// Define the associations between models

// A User can have many Posts
// If a User is deleted, all associated Posts will be deleted.
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Each Post belongs to a User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Export your models
module.exports = { User, Post };
