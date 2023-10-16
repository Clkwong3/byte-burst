// Handle login form submission
const loginFormHandler = async (event) => {
  console.log("Login form handler is being executed.");
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve user input from the login form
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // Basic client-side validation
  if (!email || !password) {
    alert("Please fill in all fields.");
    return; // Exit the function if validation fails
  } else {
    // Send POST Request to the server for login
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // Check if the login was successfull
    if (response.ok) {
      console.log(response);
      window.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

// Attach the login form handler to the form's submit event
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
