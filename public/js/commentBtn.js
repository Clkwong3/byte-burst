// Find the "Leave a Comment" button
const commentBtn = document.querySelector(".comment-btn");

// Find the container for the comment form
const commentFormContainer = document.getElementById("comment-form-container");

// Add a click event listener to the button
commentBtn.addEventListener("click", function (e) {
  console.log("Comment Button clicked");
  // Toggle the visibility of the comment form container

  if (commentFormContainer.classList.contains("hidden")) {
    commentFormContainer.classList.remove("hidden");
    e.target.textContent = "Close Comment Form";
  } else {
    commentFormContainer.classList.add("hidden");
    e.target.textContent = "Leave a Comment";
  }
});

// Select the form and title elements from the new comment form
const commentForm = document.querySelector(".new-comment-form");

// Add a new comment
async function addComment(e) {
  e.preventDefault();

  // Get the comment content from the textarea
  const commentContent = document.getElementById("comment-text").value;

  // Get the post ID from the data attribute
  const postId = commentForm.dataset.postid;

  // Perform a fetch request to create a new comment
  try {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: commentContent,
        post_id: postId,
      }),
    });

    if (response.ok) {
      // Redirect to the post page after successfully creating a new comment
      window.location.replace(`/post/${postId}`);
    } else {
      // Handle the case where the server returns an error
      console.error("Failed to create the comment:", response.statusText);
    }
  } catch (error) {
    // Log and alert an error message if there's an issue creating the post
    console.error("Error creating a new comment:", error);
    alert("Failed to create a new comment. Please try again.");
  }
}

// Attach the 'addComment' function to the form's submit event
commentForm.addEventListener("submit", addComment);
