// Importing the user model module
const userModel = require("../models/User");

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
  // Format a date as MM/DD/YYYY
  format_date: (date) => {
    try {
      // Check if the date is undefined or not a valid date object
      return !date || !(date instanceof Date) || isNaN(date.getTime())
        ? "Invalid Date"
        : date.toLocaleDateString();
    } catch (error) {
      // Log error information with a timestamp
      console.error(
        `Error formatting date at ${new Date().toLocaleString()}:`,
        error
      );

      // If an error occurs, return "Invalid Date"
      return "Invalid Date";
    }
  },
  // Get the first sentence from a given content
  getFirstSentence: (content) => {
    // Define an array of punctuation marks
    const punctuationMarks = [".", "!", "?"];

    // Initialize an empty string to store the first sentence
    let firstSentence = "";

    // Iterate through each character in the content
    [...content].some((char) => {
      // Append the current character to the first sentence
      firstSentence += char;

      // Check if the current character is one of the punctuation marks
      if (punctuationMarks.includes(char)) {
        // If yes, break out of the loop
        return true;
      }

      // Continue iterating through characters
      return false;
    });

    // Remove leading/trailing spaces and ensure the first sentence ends with a punctuation mark
    return (
      firstSentence.trim() +
      (punctuationMarks.includes(firstSentence[firstSentence.length - 1])
        ? ""
        : ".")
    );
  },
};

// Catch unhandled promise rejections globally in app
process.on("unhandledRejection", (reason, promise) => {
  // Log information about the unhandled rejection
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
