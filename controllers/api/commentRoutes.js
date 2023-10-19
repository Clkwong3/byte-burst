// Import necessary modules and dependencies
const router = require("express").Router();
const { User,  Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Retrieve all comments for a specific post
// http://localhost:3001/comment/:id
router.get("/:id", withAuth, async (req, res) => {
  try {
    // Extract the post ID from the URL parameter
    const postId = req.params.id;

    // Find the post by its ID along with associated comments and user information
    const postComments = await Comment.findAll({
      where: { post_id: postId },
      include: [
        {
          model: User,
          attributes: ["username"], // Include only the username from the User model
        },
      ],
    });

    // If the post has no comments, handle this accordingly
    if (!postComments || postComments.length === 0) {
      return res
        .status(404)
        .json({ message: "No comments found for this post." });
    }

    // Send the comments as JSON
    res.status(200).json(postComments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create a new comment (Private Route, requires authentication)
// http://localhost:3001/api/comment/
router.post("/", withAuth, async (req, res) => {
  try {
    // Extract data from the request body
    const { contents, post_id } = req.body;

    // Validate that contents are not empty or contain only whitespace
    if (!contents || contents.trim() === "") {
      return res
        .status(400)
        .json({ message: "Comment contents cannot be empty." });
    }

    // Extract user information if the user is logged in
    const userId = req.session.user_id;
    const username = userId ? (await User.findByPk(userId)).username : null;

    // Create a new comment in the database
    const createdComment = await Comment.create({
      contents,
      post_id,
      user_id: userId,
    });

    // Include the username in the response if the user is logged in
    res.status(200).json({
      ...createdComment.toJSON(),
      username: username || "Anonymous",
    });
  } catch (error) {
    console.error(error);

    // Send an error response with a 500 status and message
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Export the router
module.exports = router;
