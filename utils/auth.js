// Middleware function with access to the request and response objects
// The purpose of this middleware is to check if a user is logged in.
const withAuth = (req, res, next) => {
  // Check the session object 'logged_in'.
  if (!req.session.logged_in) {
    // If the user is not logged in, it redirects to the login page.
    return res.redirect("/login");
  }

  // If the user is logged in, proceed to the next middleware or route.
  next();
};

// Export the withAuth middleware.
module.exports = withAuth;
