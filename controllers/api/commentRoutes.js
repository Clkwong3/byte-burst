// Import necessary modules and dependencies
const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to get all comments for a specific post
router.get("/:postId", withAuth, async (req, res) => {
  try {
    // Extract the post ID from the URL parameter
    const postId = req.params.postId;

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

    // If the post has no comments, you can handle this accordingly
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

// Export the router
module.exports = router;
