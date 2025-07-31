import React from "react";
import LeaveForm from "../components/LeaveForm";
import LeaveList from "../components/LeaveList";

function EmployeeDashboard() {
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <LeaveForm />
      <LeaveList forManager={false} />
    </div>
  );
}

export default EmployeeDashboard;
