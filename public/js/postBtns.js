// Selecte the buttons and elements needed for functionality
const editBtn = document.querySelector(".edit-post-btn");
const deleteBtn = document.querySelector(".delete-post-btn");

// Function to handle editing a post
function editPost() {
  console.log("Redirect to edit post page.")
  // Get the post ID from the dataset
  const postId = document.querySelector(".individual-post").dataset.postId;

  // Redirect to the edit post page
  window.location.replace(`/post/edit/${postId}`);
}

// Function to handle deleting a post
async function deletePost() {
  const postId = document.querySelector(".individual-post").dataset.postId;

  try {
    // Send a DELETE request to delete the post
    const response = await fetch(`/post/${postId}`, {
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
editBtn.addEventListener("click", editPost);
deleteBtn.addEventListener("click", deletePost);
