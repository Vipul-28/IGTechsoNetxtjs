# Project Name

This project is a web application built with Next.js, MongoDB, and Node.js. It provides user authentication functionalities (login and register) and a dashboard feature.

## Project Structure

The project structure is organized as follows:

- **/app**
  - **/api**: Backend API functions.
  - **/login**: Login page.
  - **/register**: Registration page.
  - **/root**: Dashboard and home page.
- **/component**: Reusable UI components.
  - **userCard**: Component to display user information.
  - **sidenav**: Side navigation component.
  - **login**: Login component.
  - **register**: Register component.
- **/model**: Defines the user schema.
- **/utils**: Utility functions.
  - **db.js**: Database connectivity functions.
  - **data.js**: Dummy data for dashboard.
  - **sessionProvider.js**: Manages user login/logout sessions.
- **/__test__**: Contains tests.
  - Testing with Jest.

## Functionality

The application provides the following functionalities:

- **/login**: Endpoint to login users.
  - Accessible via `/login`.
- **/register**: Endpoint to register users.
  - Accessible via `/register`.
- **/dashboard**: Endpoint for the dashboard.
  - Accessible only after successful login.
  - Logout required to access `/login` again.

## Setup Instructions

1. **Database Setup**:
   - Create a MongoDB database named `nextjs14` using MongoDB Compass or the MongoDB shell.

2. **Project Setup**:
   - Clone the repository.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Testing**:
   - Run tests using Jest:
     ```bash
     npm test
     ```

4. **Usage**:
   - Navigate to `/login` to log in.
   - Navigate to `/register` to register.
   - Once logged in, access `/dashboard` for the dashboard feature.
   - Logout to return to `/login`.

## Notes

- Make sure MongoDB is running and accessible before starting the application.
- Ensure proper environment variables are set for database connectivity (`MONGODB_URI`, etc.).

## Contributors

- List contributors here if applicable.

## License

- Specify the project's license if applicable.
