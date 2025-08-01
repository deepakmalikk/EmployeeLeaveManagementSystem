import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LeaveForm from "../components/LeaveForm";
import LeaveList from "../components/LeaveList";
import './Dashboard.css';

function EmployeeDashboard() {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  // AUTH GUARD! Redirect to login if user logs out/unmounts.
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="dashboard-container">
      <h2>Employee Dashboard</h2>
      <LeaveForm />
      <LeaveList forManager={false} />
    </div>
  );
}

export default EmployeeDashboard;
