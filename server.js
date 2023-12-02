// Import necessary modules
const express = require("express"); // Express manages the overall flow
const session = require("express-session"); // Sessions remember things
const exphbs = require("express-handlebars"); // Handlebars makes the site look good
const path = require("path");
const routes = require("./controllers/index");
const helpers = require("./utils/helpers");
require("dotenv").config();

// Import Sequelize and setup the connection
const sequelize = require("./config/connection"); // Sequelize talks to the database.
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Create Express application
const app = express();

// Setup the port to the .env variable PORT or 3001
const PORT = process.env.PORT || 3001; // Decide where the app will run: .env PORT or 3001

// Create an instance of Handlebars with custom helpers
const hbs = exphbs.create({ helpers });

// Setup Handlebars as the template engine
app.engine("handlebars", hbs.engine); // A blueprint for web pages that can be filled with content
app.set("view engine", "handlebars");

// Configure the session
const sess = {
  secret: process.env.SESSION_SECRET, //  Secret key for the session
  cookie: {
    maxAge: 3600000, // Session duration in milliseconds (1 hr)
    httpOnly: true, // Restrict cookie access to HTTP
    secure: false, // Allow cookies from non-HTTP connections
    sameSite: "strict", // Same-site policy
  },
  resave: false, // Don't save the session if not modified
  saveUninitialized: true, // Save a new session
  store: new SequelizeStore({
    db: sequelize, // Store sessions in the Sequelize database
  }),
};

// Use sessions in the application
app.use(session(sess));

// Parse JSON and URL-encoded data (common data formats)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// The application will use the defined routes (CRUD)
app.use(routes);

// Sync up Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
