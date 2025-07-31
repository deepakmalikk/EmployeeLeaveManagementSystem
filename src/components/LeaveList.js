import React from "react";
import { useSelector } from "react-redux";

function LeaveList({ forManager }) {
  const { user } = useSelector(state => state.auth);
  const requests = useSelector(state => state.leave.requests);

  // For employees: show only their requests
  // For manager: show all requests
  const filtered = forManager ? requests : requests.filter(r => r.userId === user.id);

  return (
    <div>
      <h3>{forManager ? "All Leave Requests" : "My Leave Requests"}</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th><th>From</th><th>To</th><th>Reason</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(req => (
            <tr key={req.id}>
              <td>{req.type}</td>
              <td>{req.startDate}</td>
              <td>{req.endDate}</td>
              <td>{req.reason}</td>
              <td>{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveList;
