Leave Management System (Frontend - React)
A simple Leave Management System frontend built using React.js, Redux Toolkit, and React Router.
This demo app allows employees to apply for leave and view leave statuses, while managers can review, approve, or reject leave requests.

Features
Login via a dropdown selecting a user (employee or manager — no real authentication).

Employee View:

Apply for leave with type, start/end dates, and reason.

View their submitted leave requests and current status.

Manager View:

View all leave requests from all employees.

Approve or reject pending leave requests.

Navigation handled by React Router.

State management with Redux Toolkit.

Form validation to prevent invalid submissions.

Responsive layout with clean UI.

Project Structure
text
/src
  /components      # UI components: NavBar, LeaveForm, LeaveList
  /pages           # Main pages: Login, EmployeeDashboard, ManagerDashboard
  /store           # Redux slices and store setup
  /data            # Hardcoded user data for demo login
  App.js           # Main app, routes, and NavBar integration
  index.js         # Entry point, Redux Provider wrapping
How to Run Locally
1. Clone the repository or download the ZIP
bash
git clone https://github.com/your-username/leave-management-system.git
cd leave-management-system
(Replace the URL with your repository link if needed)

2. Install dependencies
Using npm:

bash
npm install
Or using yarn:

bash
yarn
3. Start the app
bash
npm start
or

bash
yarn start
This command will launch the React development server and open the app in your browser at http://localhost:3000.

Usage Guide
Login
Select a user from the dropdown on the login screen.

Employees will be redirected to their dashboard.

Managers will go to the management dashboard.

Employee Dashboard
Use the form to apply for leave (all fields required).

View your leave requests listed below with the current approval status.

Logout using the button in the top navigation bar.

Manager Dashboard
See all leave requests from employees.

Approve or reject pending requests using the provided buttons.

Logout using the top navigation button.

Important Notes
This app uses mock authentication and in-memory state. All data resets on page refresh.

No backend integration is included; it’s designed for frontend assessment and demonstration.

Easily extended to include API calls for real-world use.

Responsibilities are separated clearly for maintainability and scalable UI.

Technologies Used
React.js (with hooks)

Redux Toolkit for state management

React Router for navigation

CSS for styling components

Future Improvements
Integrate with backend for persistent data and real authentication.

Add notifications and better UI feedback.

Enhance form validations and user experience.

Implement localStorage or IndexedDB to persist data across page reloads.

License
This project is for educational purposes and demo only.
