// Select the form and title elements from the new post form
const postForm = document.querySelector(".new-post-form");

// Add a new post
async function addPost(e) {
  e.preventDefault(); // Prevent the default form submission behavior
  try {
    // Retrieve values from the form inputs
    const title = document.querySelector("#post-title").value;
    const content = document.querySelector("#post-content").value; // Retrieve content from textarea

    // Make a POST request to create a new post
    const response = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Convert form data to JSON and send it in the request body
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });

    // Check if the POST request was successful
    if (response.ok) {
      // Redirect to the dashboard page after successfully creating a new post
      window.location.replace("/dashboard");
    } else {
      // Handle the case where the server returns an error
      console.error("Failed to create the post:", response.statusText);
    }
  } catch (error) {
    // Log and alert an error message if there's an issue creating the post
    console.error("Error creating new post:", error);
    alert("Failed to create a new post. Please try again.");
  }
}

// Attach the 'addPost' function to the form's submit event
postForm.addEventListener("submit", addPost);
