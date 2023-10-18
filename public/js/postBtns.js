// Selecting the buttons and elements needed for functionality
const deleteBtn = document.querySelector(".delete-post-btn");

// Function to handle deleting a post
async function deletePost() {
  const postId = document.querySelector(".individual-post").dataset.postId;

  try {
    // Send a DELETE request to delete the post
    const response = await fetch(`/api/post/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Log and redirect to the dashboard on successful deletion
      console.log(`Post with ID ${postId} deleted!`);
      window.location.replace("/dashboard");
    } else {
      console.error("Failed to delete post.");
    }
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

// Attach event listeners to buttons
deleteBtn.addEventListener("click", deletePost);
