import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { login } from "../store/authSlice";

function Login() {
  const [selectedUser, setSelectedUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!selectedUser) return;
    const user = users.find(u => u.id === parseInt(selectedUser));
    dispatch(login(user));
    navigate(user.role === "manager" ? "/manager" : "/employee");
  };

  return (
    <div>
      <h2>Login</h2>
      <select value={selectedUser || ""} onChange={e => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name} ({user.role})
          </option>
        ))}
      </select>
      <button onClick={handleLogin} disabled={!selectedUser}>Login</button>
    </div>
  );
}

export default Login;
