import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLeave } from "../store/leaveSlice";
import './LeaveForm.css';

function LeaveForm() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    type: "",
    startDate: "",
    endDate: "",
    reason: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.type || !form.startDate || !form.endDate || !form.reason || !user) {
      setError("All fields are required.");
      return;
    }
    if (form.endDate < form.startDate) {
      setError("End date cannot be before start date.");
      return;
    }

    dispatch(addLeave({ ...form, userId: user.id }));
    setForm({ type: "", startDate: "", endDate: "", reason: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
      {success && <div style={{ color: "green", marginBottom: 10 }}>Leave request submitted!</div>}
      <select name="type" value={form.type} onChange={handleChange} required>
        <option value="">Leave Type</option>
        <option value="sick">Sick</option>
        <option value="casual">Casual</option>
        <option value="earned">Earned</option>
      </select>
      <input
        type="date"
        name="startDate"
        value={form.startDate}
        onChange={handleChange}
        required
        min={today}
      />
      <input
        type="date"
        name="endDate"
        value={form.endDate}
        onChange={handleChange}
        required
        min={form.startDate || today}
      />
      <input
        type="text"
        name="reason"
        value={form.reason}
        onChange={handleChange}
        placeholder="Reason"
        required
      />
      <button
        type="submit"
        disabled={
          !form.type ||
          !form.startDate ||
          !form.endDate ||
          !form.reason
        }
      >
        Apply Leave
      </button>
    </form>
  );
}

export default LeaveForm;
