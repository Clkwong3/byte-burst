// Import models (User, Post, Comment)
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Define the associations between models

// A User can have many Posts
// If a User is deleted, all associated Posts will be deleted.
User.hasMany(Post, {
  foreignKey: "user_id", // This is the foreign key in the Post model that connects to the User model
  onDelete: "CASCADE", // CASCADE means if a User is deleted, all associated Posts will be deleted
});

// Each Post belongs to a User
// This establishes a "belongs to" relationship, where each Post is associated with a single User
Post.belongsTo(User, {
  foreignKey: "user_id", // This foreign key in the Post model links to the User model
});

// A User can have many Comments
// If a User is deleted, all associated Comments will be deleted.
User.hasMany(Comment, {
  foreignKey: "user_id", // This is the foreign key in the Comment model that connects to the User model
  onDelete: "CASCADE", // CASCADE means if a User is deleted, all associated Comments will be deleted
});

// Each Comment belongs to a User
// This establishes a "belongs to" relationship, where each Comment is associated with a single User
Comment.belongsTo(User, {
  foreignKey: "user_id", // This foreign key in the Comment model links to the User model
});

// A Post can have many Comments
// If a Post is deleted, all associated Comments will be deleted.
Post.hasMany(Comment, {
  foreignKey: "post_id", // This is the foreign key in the Comment model that connects to the Post model
  onDelete: "CASCADE", // CASCADE means if a Post is deleted, all associated Comments will be deleted
});

// Each Comment belongs to a Post
// This establishes a "belongs to" relationship, where each Comment is associated with a single Post
Comment.belongsTo(Post, {
  foreignKey: "post_id", // This foreign key in the Comment model links to the Post model
});

// Export your models
module.exports = { User, Post, Comment };
