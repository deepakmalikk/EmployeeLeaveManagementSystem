# Leave Management System (Frontend - React)

A simple Leave Management System frontend built using **React.js**, **Redux Toolkit**, and **React Router**.

This demo app allows employees to apply for leave and view leave statuses, while managers can review, approve, or reject leave requests.

---

## Features

- **Mock login** via a dropdown selecting a user (employee or manager — no real authentication)
- **Employee View:**
  - Apply for leave with type, start/end dates, and reason
  - View submitted leave requests and approval status
- **Manager View:**
  - View all leave requests from employees
  - Approve or reject pending leave requests
- **Navigation** handled by React Router
- **State management** with Redux Toolkit
- **Form validation** to prevent invalid submissions
- **Responsive layout** with a clean UI

---

## 🗂️ Project Structure

```
/src
/components # UI components: NavBar, LeaveForm, LeaveList
/pages # Main pages: Login, EmployeeDashboard, ManagerDashboard
/store # Redux slices and store setup
/data # Hardcoded user data for demo login
App.js # Main app, routes, and NavBar integration
index.js # Entry point, Redux Provider wrapping
```

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/deepakmalikk/EmployeeLeaveManagementSystem.git
cd EmployeeLeaveManagementSystem
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npm start
```

- The app will run at http://localhost:3000.

## 📘 Usage Guide

### 🔐 Login

- Select a user (Employee or Manager) from the dropdown on the login screen.
- Employees are redirected to their dashboard.
- Managers are taken to the management dashboard.

### 👩‍💼 Employee Dashboard

- Fill out the form to apply for leave (all fields required).
- View submitted leave requests and their current status.
- Logout using the button in the top navigation bar.

### 🧑‍💼 Manager Dashboard

- View all leave requests from employees.
- Approve or reject pending requests using the provided buttons.
- Logout using the button in the top navigation bar.

## ⚠️ Important Notes

- This app uses **mock authentication** with hardcoded users.
- All state is **in-memory** — data will reset on page refresh.
- There is **no backend integration** — the application is meant for frontend assessment and demonstration only.
- Designed to be **easily extendable** with API calls and persistent data storage.
- Code is structured with clear separation of concerns to support **maintainability and scalability**.

## 🛠️ Technologies Used

- **React.js** – Frontend library for building user interfaces with components and hooks.
- **Redux Toolkit** – Simplified and efficient state management solution for React.
- **React Router** – Client-side routing to navigate between login, dashboards, and views.
- **CSS** – Used for styling and creating a responsive layout.

## 🔮 Future Improvements

- Integrate with a backend to enable:
  - Real user authentication
  - Persistent storage of leave requests and user data
- Add notification system (e.g., toast alerts) for feedback on actions
- Enhance form validation with better UX and error handling
- Implement data persistence using:
  - `localStorage`
  - `IndexedDB`
- Add role-based access control and user profile pages
- Improve UI with a modern component library (e.g., Material UI or Tailwind CSS)

## 📄 License

This project is intended for **educational and demonstration purposes only**.

Feel free to use, modify, or extend it for learning, assessments, or as a foundation for real-world applications.  
No warranties or guarantees are provided.
