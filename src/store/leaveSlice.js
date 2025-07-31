import { createSlice } from "@reduxjs/toolkit";

const leaveSlice = createSlice({
  name: "leave",
  initialState: {
    requests: [] // { id, userId, type, startDate, endDate, reason, status }
  },
  reducers: {
    addLeave: (state, action) => {
      state.requests.push({
        id: Date.now(), // simple id
        ...action.payload,
        status: "pending"
      });
    },
    updateLeaveStatus: (state, action) => {
      const { id, status } = action.payload;
      const req = state.requests.find(lr => lr.id === id);
      if (req) req.status = status;
    }
  }
});

export const { addLeave, updateLeaveStatus } = leaveSlice.actions;
export default leaveSlice.reducer;
