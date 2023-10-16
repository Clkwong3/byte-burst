// Handle registration form submission
const registerFormHandler = async (event) => {
  console.log("Register form handler is being executed.");
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve user input values from the registration form
  const user_name = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  // Check if all required fields are filled
  if (user_name && email && password) {
    // If all fields are filled, send a POST request to the server
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // Check if the registration was successful
    if (response.ok) {
      console.log(response);
      window.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  } else {
    console.error("Unexpected error in registration form submission.");
    alert("Missing information. Please fill in all fields.");
  }
};

// Attach the registration form handler to the form's submit event
document
  .querySelector("#register-form")
  .addEventListener("submit", registerFormHandler);
