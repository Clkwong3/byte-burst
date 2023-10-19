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
