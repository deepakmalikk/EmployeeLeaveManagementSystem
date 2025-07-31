import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLeave } from "../store/leaveSlice";

function LeaveForm() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [form, setForm] = useState({
    type: "",
    startDate: "",
    endDate: "",
    reason: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.type || !form.startDate || !form.endDate || !form.reason) return;
    dispatch(addLeave({ ...form, userId: user.id }));
    setForm({ type: "", startDate: "", endDate: "", reason: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="type" value={form.type} onChange={handleChange} required>
        <option value="">Leave Type</option>
        <option value="sick">Sick</option>
        <option value="casual">Casual</option>
        <option value="earned">Earned</option>
      </select>
      <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
      <input type="text" name="reason" value={form.reason} onChange={handleChange} placeholder="Reason" required />
      <button type="submit">Apply Leave</button>
    </form>
  );
}

export default LeaveForm;
