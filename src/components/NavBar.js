import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!user) return null;

  return (
    <nav>
      <span>{user.name} ({user.role})</span>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default NavBar;
