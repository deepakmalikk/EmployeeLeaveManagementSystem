import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLeaveStatus } from "../store/leaveSlice";
import { users } from "../data/users";
import { useNavigate } from "react-router-dom";

function ManagerDashboard() {
  const user = useSelector(state => state.auth.user);
  const requests = useSelector(state => state.leave.requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(req => (
            <tr key={req.id}>
              <td>{users.find(u => u.id === req.userId)?.name}</td>
              <td>{req.type}</td>
              <td>{req.startDate}</td>
              <td>{req.endDate}</td>
              <td>{req.reason}</td>
              <td>{req.status}</td>
              <td>
                {req.status === "pending" && (
                  <>
                    <button onClick={() => dispatch(updateLeaveStatus({ id: req.id, status: "approved" }))}>Approve</button>
                    <button onClick={() => dispatch(updateLeaveStatus({ id: req.id, status: "rejected" }))}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerDashboard;
