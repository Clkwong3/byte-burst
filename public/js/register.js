// Handle registration form submission
const registerFormHandler = async (event) => {
  console.log("Register form handler is being executed.");
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve user input values from the registration form
  const user_name = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // Check if all required fields are filled
  if (!user_name || !email || !password) {
    alert("Please fill in all fields.");
    return; // Exit the function if validation fails
  }

  // Use try-catch block to catch network/server-side errors
  try {
    // Send POST Request to the server for registration
    const response = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // Check if the registration was successful
    if (response.ok) {
      // Redirect to the dashboard
      window.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
};

// Attach the registration form handler to the form's submit event
document
  .querySelector("#register-form")
  .addEventListener("submit", registerFormHandler);
