// Initialize a timer to track user activity
let userActivityTimer;

// Define the inactivity timeout (30000 = 5 minutes in milliseconds)
const inactivityTimeout = 300000;

// Reset the user inactivity timer
function resetUserInactivityTimer() {
  // Clear any existing timer
  clearTimeout(userActivityTimer);

  // Set a new timer to prompt reauthentication after the inactivity timeout
  userActivityTimer = setTimeout(() => {
    promptReauthentication(); // Prompt the user to log in again
  }, inactivityTimeout);
}

// Prompt reauthentication when the session times out
async function promptReauthentication() {
  // Redirect to the login page and handle errors if they occur
  try {
    // Display an alert message to the user
    alert("Session Timeout: Please login again.");
    await fetch(`/api/user/logout`, {
      method: "DELETE",
    });

    // Redirect to the login page
    window.location.replace("/login");
  } catch (error) {
    // Log any errors that may occur during redirection
    console.error(error);
  }
}

// Initialize user activity tracking by setting the initial timer
resetUserInactivityTimer();

// Attach event listeners to reset the activity timer on user interaction
window.addEventListener("mousemove", resetUserInactivityTimer);
window.addEventListener("keydown", resetUserInactivityTimer);
