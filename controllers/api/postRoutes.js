// Import necessary modules
const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../../models"); // Import the User, Post, and Comment models
const withAuth = require("../../utils/auth");

// Retrieve a single post by id along with comments
// http://localhost:3001/post/:id
router.get("/:id", async (req, res) => {
  try {
    // Retrieve the post with the specified ID along with its associated user and comments
    const post = await Post.findByPk(req.params.id, {
      include: [
        // Include the User model to get details about the post creator
        {
          model: User,
          attributes: { exclude: ["password"] }, // Exclude password field from user attributes
        },
        // Include the Comment model to get all comments for 1 post
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["user_name"],
          },
        },
      ],
    });

    // If the post with the specified ID is not found, render an error page
    if (!post) {
      return res.status(404).render("error", {
        message: "Post not found",
        logged_in: req.session.logged_in, // Pass the logged_in status to the view
      });
    }

    // Convert Sequelize instance to a plain JavaScript object for easier handling
    const plainPost = post.get({ plain: true });

    // Render the "post" view with post details, login status, and ownership status
    res.render("post", {
      post: plainPost,
      logged_in: req.session.logged_in, // Pass the logged_in status to the view
      isOwner: req.session.user_id === post.user_id, // Check if the logged-in user is the owner of the post
    });
  } catch (error) {
    // Handle Errors: Log errors for debugging
    console.error("Error in post get route:", error);

    // Send an error response with a 500 status and message
    res.status(500).render("error", {
      message: "Something went wrong. Please try again later.",
      logged_in: req.session.logged_in, // Pass the logged_in status to the view
    });
  }
});

// Render the form to edit a post
// http://localhost:3001/post/edit/:id
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    // Retrieve the post with the specified ID
    const post = await Post.findByPk(req.params.id);

    // If the post with the specified ID is not found or the user is not the owner, render an error page
    if (!post || post.user_id !== req.session.user_id) {
      return res.status(404).render("error", {
        message: "Post not found or you do not have permission to edit",
        logged_in: req.session.logged_in, // Pass the logged_in status to the view
      });
    }

    // Convert Sequelize instance to a plain JavaScript object for easier handling
    const plainPost = post.get({ plain: true });

    // Render the "edit-post" view with post details
    res.render("editPost", {
      post: plainPost,
      logged_in: req.session.logged_in, // Pass the logged_in status to the view
    });
  } catch (error) {
    // Handle Errors: Log errors for debugging
    console.error("Error in edit post get route:", error);

    // Send an error response with a 500 status and message
    res.status(500).render("error", {
      message: "Something went wrong. Please try again later.",
      logged_in: req.session.logged_in, // Pass the logged_in status to the view
    });
  }
});

// Create a new post (Private Route, requires authentication)
// http://localhost:3001/api/post
router.post("/", withAuth, async (req, res) => {
  try {
    // Extract data from the request body
    const { title, content } = req.body;

    // Create a new post in the database
    const newPost = await Post.create({
      title,
      content,
      user_id: req.session.user_id,
    });

    // Send a success response with the newly created post
    res.status(201).json(newPost);
  } catch (error) {
    // Handle Errors: Log errors for debugging
    console.error("Error in add post route:", error);

    // Send an error response with a 500 status and message
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update a post (Private Route, requires authentication)
// http://localhost:3001/api/post/:id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const postId = req.params.id;

    // Fetch the existing post
    const existingPost = await Post.findByPk(postId);

    // Check if the post exists and if the logged-in user is the owner
    if (!existingPost || existingPost.user_id !== req.session.user_id) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Extract data from the request body (you may customize this based on your form)
    const { title, content } = req.body;

    // Update the post with the new data
    await existingPost.update({
      title,
      content,
    });

    // Send a success response with the updated post
    res.status(200).json(existingPost);
  } catch (error) {
    console.error("Error in edit post route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete a post (Private Route, requires authentication)
// http://localhost:3001/api/post/:id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postId = req.params.id;

    // Fetch the existing post
    const existingPost = await Post.findByPk(postId);

    // Check if the post exists and if the logged-in user is the owner
    if (!existingPost || existingPost.user_id !== req.session.user_id) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Delete the post
    await existingPost.destroy();

    res.status(204).end();
  } catch (error) {
    console.error("Error in delete post route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Export the router
module.exports = router;
