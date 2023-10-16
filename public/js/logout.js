// Handle logout process
const logoutHandler = async () => {
  console.log("Logout handler is being executed");

  try {
    // Send DELETE Request to the server to logout
    const response = await fetch("/api/users/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    // Check if the logout was successful
    if (response.ok) {
      console.log("Logout successful");
      // Redirect to the login page after successful logout
      window.location.replace("/login");
    } else {
      console.log("Logout failed");
      // Show an alert to the user if logout fails
      alert("Logout failed. Please try again.");
    }
  } catch (error) {
    // Handle unexpected errors during the logout process
    console.error("Unhandled error in logout handler:", error);
    alert("An unexpected error occurred. Please try again.");
  }
};

// Attach the logout handler to the click event
document.querySelector(".logout-link").addEventListener("click", logoutHandler);
