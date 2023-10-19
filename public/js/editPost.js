// Select the elements you need to work with in your editPost.handlebars
const editTitleInput = document.getElementById("edit-title");
const editContentTextarea = document.getElementById("edit-content");
const saveButton = document.querySelector(".save-btn");
const cancelButton = document.querySelector(".cancel-btn");

// Get the post ID from the data attribute in the HTML
const postId = document
  .querySelector(".individual-post")
  .getAttribute("data-post-id");

// Add an event listener to the save button to handle post updates
saveButton.addEventListener("click", async () => {
  // Get the updated title and content from the input fields
  const updatedTitle = editTitleInput.value;
  const updatedContent = editContentTextarea.value;

  try {
    // Send a PUT request to update the post
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title: updatedTitle, content: updatedContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Redirect to the updated post's page or another appropriate action
      window.location.href = `/post/${postId}`;
    } else {
      // Handle errors or display error messages
      const responseData = await response.json();
      console.error("Error updating post:", responseData.message);
      // You can display an error message to the user if needed
    }
  } catch (error) {
    console.error("Error updating post:", error);
    // Handle network errors or other unexpected issues
  }
});

// Add an event listener to the cancel button to navigate back to the post's page
cancelButton.addEventListener("click", () => {
  // Redirect to the post's page without making any changes
  window.location.href = `/post/${postId}`;
});
