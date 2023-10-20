// Middleware function with access to the request and response objects
// The purpose of this middleware is to check if a user is logged in.
const withAuth = (req, res, next) => {
  // Check if the user is not logged in.
  if (!req.session.logged_in) {
    // If the user is not logged in, return a 302 status code (Found) and end the response.
    return res.status(302).end();
  }

  // If the user is logged in, proceed to the next middleware or route.
  next();
};

// Export the withAuth middleware.
module.exports = withAuth;
