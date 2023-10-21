// Import the Sequelize connection
const sequelize = require("../config/connection");

// Import models for User, Post, and Comment
const { User, Post, Comment } = require("../models");

// Import JSON data
const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

// Seed the database with user, post, and comment data
const seedDatabase = async () => {
  try {
    // Synchronize the database, dropping any existing tables (force: true)
    await sequelize.sync({ force: true });

    // Insert user data from userData.json into the User table
    await User.bulkCreate(userData, {
      individualHooks: true, // Apply hooks for password hashing
      returning: true, // Return the created user records
    });

    // Insert post data from postData.json into the Post table
    await Post.bulkCreate(postData, {
      returning: true, // Return the created post records
    });

    // Create comments and associate them with users and posts
    for (const comment of commentData) {
      await Comment.create(comment);
    }

    console.log(" 🌱  Database seeding completed successfully!  🌱  ");
    return true; // Indicate success
  } catch (error) {
    console.error("Error during seeding:", error.message); // Provide a more meaningful error message
    throw error; // Rethrow the error to indicate a failure in the seeding process
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

// Call the seedDatabase function to start the seeding process
seedDatabase();
