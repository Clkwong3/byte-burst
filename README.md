# Byte-Burst

## Overview

Byte Burst is a dynamic online platform designed to empower individuals with a passion for coding and technology. It offers a vibrant community where users, from beginners to seasoned developers, can come together to explore, share, and discuss all things related to coding and technology.

**Key Features:**

- **User Registration:** Easy registration process for new users to join the community.
- **User Dashboard:** Personalized dashboards for managing and showcasing coding projects.
- **Post Creation:** Effortlessly create, edit, and delete posts to share tech discoveries.
- **Interactive Comments:** Engage with the community by leaving comments on coding projects.
- **Logout Functionality:** Simple logout process to end user sessions.

Byte Burst is not just a platform; it's a space where tech enthusiasts can connect, collaborate, and foster their love for coding and technology. It encourages knowledge sharing, creativity, and community building within the coding world. Whether you're looking to share your coding insights or dive into tech discussions, Byte Burst is your digital canvas to make your coding and tech ideas burst into life.

## Table of Contents

- [Description](#description)
- [Tools](#tools)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Links](#links)
- [Credits](#credits)
- [Contributing](#contributing)
- [Report Issue](#report-issue)
- [License](#license)

## Description:

Byte Burst is a dynamic and vibrant online platform that ignites your passion for coding and technology. Whether you're a seasoned developer or just embarking on your coding journey, Byte Burst empowers you to share your coding insights, projects, and tech innovations with a community of like-minded enthusiasts.

With Byte Burst, you can effortlessly register and immerse yourself in a world of coding possibilities. Craft informative posts, spark discussions on the latest tech trends, and explore a universe of user-generated coding content. The platform welcomes you with open arms, whether you're an experienced coder or a newbie just stepping into the tech world.

Your personal dashboard is your gateway to your coding universe. Manage and showcase your coding projects, engage with your audience, and effortlessly create new posts to share your tech discoveries. Editing and deleting posts is a breeze, giving you complete control over your coding journey.

But the magic doesn't stop there. Byte Burst encourages interaction and community building within the coding and tech sphere. Leave comments on coding projects, dive into tech discussions, and experience the joy of connecting with people who share your technological interests.

Byte Burst is more than just a platform; it's your coding playground, your tech community, and your creative spark in the digital world. Join us and let your coding and tech ideas burst into life.

## Tools

Before beginning, make sure to have the following tools installed:

1. **Node.js and npm:** Download them from the [official Node.js website](https://nodejs.org/en/download).

2. **Insomnia:** Download and install Insomnia from their [official website](https://insomnia.rest/download).

[Table of Contents](#table-of-contents)

## Technology Stack

Here's a summary of the technologies, frameworks, and tools used in this project:

**Backend Technologies:**

1. **Node.js:** The runtime environment for the server-side JavaScript code.

2. **Express:** A web framework for building web applications and APIs in Node.js.

3. **Sequelize:** An Object-Relational Mapping (ORM) library for interacting with relational databases.

4. **MySQL:** A relational database management system.

5. **Express-Session:** Middleware for managing user sessions in the Express.js application.

6. **connect-session-sequelize:** A library for storing Express session data in a Sequelize-managed database.

7. **dotenv:** A module for loading environment variables from a .env file into Node.js applications.

8. **Express-Handlebars:** A templating engine for generating HTML templates.

9. **Nodemon (Optional):** A development tool that automatically restarts the Node.js application when changes are detected, facilitating development.

**Frontend Technologies:**

1. **HTML/CSS/JavaScript:** The fundamental technologies for building the frontend of web applications.

2. **Handlebars:** A templating engine for rendering dynamic web pages on the server-side.

**Development Tools:**

1. **npm:** The Node Package Manager for managing project dependencies and scripts.
   Database:

2. **MySQL Database:** A choice of database for storing data.

**Version Control and Collaboration:**

1. **Git:** A version control system for tracking changes in this project's code.

2. **GitHub:** A web-based platform for hosting, version control, and collaboration on code repositories.

**API Testing Tool:**

1. **Insomnia:** An API testing tool that allows the user to send HTTP requests and receive responses, making it easier to test your server's API endpoints during development.

**Deployment Platform:**

1. **Heroku:** A cloud platform for deploying and hosting web applications.

2. **GitHub:** GitHub is used in the deployment workflow to automate deployments or for continuous integration/continuous deployment (CI/CD) processes.

[Table of Contents](#table-of-contents)

## Installation

To set up and install this project, please follow these steps, including the prerequisites and configuration.

**Prerequisites:**

1. **Node.js and npm:** Make sure to have Node.js installed. It can be download it from the [official website](https://nodejs.org/en/download).

2. **MySQL Database:** Make sure to have MySQL installed and running on the system or have access to a MySQL database. You'll need the database connection details, including the database name, username, and password.

**Step-by-Step Installation:**

1. **Clone the Project:**

   - Open the terminal or command prompt.
   - Navigate to the place in the directory to clone the project.
   - Run the following command to clone the project repository:

     ```
     git clone git@github.com:Clkwong3/byte-burst.git
     ```

2. **Navigate to Project Directory:**

   - Change the working directory to the project folder using the cd command:

     ```
     cd byte-burst
     ```

3. **Install Dependencies:**

   - Run the following command to install the project dependencies listed in the package.json file:

     ```
     npm start
     ```

4. **Database Configuration:**

   - Create a .env file in this project's root directory to store environment variables.
   - Add the following details to the .env file:

     ```
     DB_NAME=database-name
     DB_USER=database-username
     DB_PASSWORD=database-password
     SESSION_SECRET=session-secret
     ```

5. **Running the Database Schema (schema.sql):**

   - In the MySQL command line or client, create a new database or ensure the database mentioned in the .env file exists.

   - Run the contents of the schema.sql file to set up the initial database structure.

6. **Starting the Application:**

   - In the terminal, run the following command to start the Node.js application:

     ```
     npm start
     ```

     This command will run in the server with a message like "Server is running on http://localhost:3001" indicating that the server is running.

7. **Testing the Application:**

   - Use Insomnia to test the API endpoints and make sure the application is functioning correctly.

[Table of Contents](#table-of-contents)

## Usage

Whether you're a new user looking to register and get started or an existing user who wants to navigate through the features, this guide will help you make the most of **Byte Burst**.

1. **User Registration:**

   - To register as a new user, follow these steps:
     1. Complete the registration form on the [register page](https://github.com/Clkwong3/byte-burst/blob/main/views/register.handlebars) .
     2. Fill in your username, email, and password.
     3. Click the ["Register"](https://github.com/Clkwong3/byte-burst/blob/main/public/js/register.js) button.

2. **User Login:**

   - To log in, follow these steps:
     1. Go to the [login page](https://github.com/Clkwong3/byte-burst/blob/main/views/login.handlebars).
     2. Enter your email and password.
     3. Click the ["Login"](https://github.com/Clkwong3/byte-burst/blob/main/public/js/login.js) button.

3. **User Dashboard**

   - Once logged in, users can access the [dashboard](https://github.com/Clkwong3/byte-burst/blob/main/views/dashboard.handlebars):
     1. **View User Posts:** The dashboard displays the user's posts, including links to view [individual posts](https://github.com/Clkwong3/byte-burst/blob/main/views/post.handlebars).
     2. **Create New Post:** To create a new post, click the [+ New Post](https://github.com/Clkwong3/byte-burst/blob/main/public/js/addPost.js) link on the dashboard to create a [new post](https://github.com/Clkwong3/byte-burst/blob/main/views/addNew.handlebars).

4. **View, Edit, and Delete Individual Posts**

   - **View Post:** To view an individual post, click on the post title in the dashboard.
   - **Edit Post:** To edit a post, follow these steps:
     1. Click the ["Edit"](https://github.com/Clkwong3/byte-burst/blob/main/public/js/editPost.js) button on an individual post.
     2. Modify the [post title and content](https://github.com/Clkwong3/byte-burst/blob/main/views/editPost.handlebars).
     3. Click the "Save" button to update the post.
   - **Delete a Post:** To delete a post, click the ["Delete"](https://github.com/Clkwong3/byte-burst/blob/main/public/js/postBtns.js) button on an individual post.

5. **Comment on Posts** - **Add a Comment:** To add a comment, click the ["Leave a Comment"](https://github.com/Clkwong3/byte-burst/blob/main/public/js/commentBtn.js) button on an individual post.
   Enter your comment and click "Submit."

6. **Log Out**
   - To log out of your account, follow these steps:
     1. While logged into your account, locate the "Logout" link in the [navigation menu](https://github.com/Clkwong3/byte-burst/blob/main/views/layouts/main.handlebars).
     2. Click the ["Logout"](https://github.com/Clkwong3/byte-burst/blob/main/public/js/logout.js) link.

[Table of Contents](#table-of-contents)

## Testing

Here's how to test this project using Insomnia:

1**Install Insomnia:** Download and install Insomnia from their [official website](https://insomnia.rest/download).

2. **Create a New Workspace:** Open Insomnia, create a new workspace, and organize all requests into different folders. This helps keep the testing organized.

3. **Create Requests:** Inside the workspace, create different requests for the API endpoints to test. Create requests for GET, POST, PUT, DELETE, and other HTTP methods.

4. **Set Request Details:** For each request, make sure to set the HTTP method, URL, headers, parameters, and request body as needed.

5. **Start the Server:** Before testing, make sure the server is up and running. Running the following command:

   ```
   npm start
   ```

   or

   ```
   node server.js
   ```

   to launch this application.

   Ensure that all necessary prerequisites, including database setup, are in place before starting the server.

6. **Seed Data (Optional):** Populate the database with initial test data by using the following command:

   ```
   npm run seed
   ```

7. **Send Requests:** Click the "Send" button to send the request to the server. Insomnia will display the server's response, including the status code and response body.

8. **Test Different Scenarios:** Test various scenarios, including valid and invalid inputs, to ensure the server responds correctly.

9. **Inspect Response:** Inspect the response to ensure it matches any expectations. This includes checking the response data, status codes, and any error messages.

10. **Save Requests:** Save these requests in the workspace to reuse them for future testing.

By following these steps, you can thoroughly test this project's API endpoints to ensure they work as expected.

[Table of Contents](#table-of-contents)

## Links

Here are some useful resources that can help you understand and work with the technologies used in this project:

- [Medium Article: A Guide into Using Handlebars with Your Express.js Application](https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65): This article provides a detailed guide on uasing Handlebars with Express.js, which was instrumental in implementing the project's view layer.

- [YUI Handlebars Documentation](https://yssl.org/lib/yui/docs/handlebars/index.html#template-syntax): This documentation is a valuable resource for understanding the Handlebars template syntax, which is used in this project for rendering views.

- [YouTube Playlist: Express.js Tutorials](https://www.youtube.com/playlist?list=PLtV5RF44Yj8S4RcpQehL-2XMuVsJXwNvK): This YouTube playlist contains a series of tutorials that cover how to build a website using handlebars from an HTML file.

Try out the project here:

- [Byte-Burst](https://frozen-tundra-27088-d0e9b54daed1.herokuapp.com/): You can access the deployed version of this project to see it in action.

- [ReadMe](https://clkwong3.github.io/byte-burst/): You can access the ReadMe file for this project on the browser.

[Table of Contents](#table-of-contents)

## Credits

This project was developed by [Clarice Kwong](https://github.com/Clkwong3).

## Contributing

If you'd like to contribute to the project with code or other contributions, we welcome your participation. Here's how you can get started:

1. **Fork the Repository:** Start by forking the project's repository to your GitHub account.

2. **Clone the Repository:** Clone your forked repository to your local development environment.

   ```
   git clone git@github.com:Clkwong3/byte-burst.git
   ```

3. **Create a New Branch:** Create a new branch for your contribution.

   ```
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes:** Make your desired changes or contributions.

5. **Test Your Changes:** Ensure that your changes do not introduce any new issues and pass all existing tests.

6. **Commit Your Changes:** Commit your changes with a clear and concise commit message.

   ```
   git commit -m "Add feature: your feature description"
   ```

7. **Push to Your Repository:** Push your changes to your forked repository.

   ```
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request:** Go to the project's [Pull Requests](https://github.com/Clkwong3/byte-burst/pulls) page, and click on "New Pull Request."

9. **Select the Base Branch:** Choose the appropriate base branch, typically the main branch of the project.

10. **Review and Submit:** Review your changes, provide a clear description of your contribution, and submit the pull request.

The project creator will review your pull request and provide feedback.

Thank you for your interest in contributing to the project!

[Table of Contents](#table-of-contents)

## Report Issue

If you encounter any issues, here's how you can get involved:

**Reporting Issues**

1. **GitHub Issues:** Visit the project's [GitHub Issues](https://github.com/Clkwong3/byte-burst/issues) page.

2. **Search for Existing Issues:** Before creating a new issue, please search for existing ones to check if your concern has already been addressed.

3. **Create a New Issue:** If your issue isn't already listed, click on the "New Issue" button.

4. **Issue Title:** Use a descriptive and concise title that summarizes the problem.

5. **Issue Description:** In the issue description, provide the following details:

   - A clear and detailed explanation of the issue.
   - Steps to reproduce the problem if applicable.
   - Information about your environment, such as your operating system and any relevant software versions.

6. **Screenshots or Error Messages: **If you have visual aids, such as screenshots or error messages, please attach them to the issue.

7. **Labeling:** If you're familiar with labels or the issue tracking system on GitHub, you can add labels that best describe the issue. If not, don't worry; we'll handle that.

8. **Submit the Issue:** Click "Submit new issue," and the project creator will review it. We'll get back to you as soon as possible.

[Table of Contents](#table-of-contents)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Clkwong3/byte-burst/blob/main/LICENSE) file for details.

[Top](#byte-burst)
