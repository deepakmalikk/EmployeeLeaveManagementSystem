import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import leaveReducer from './leaveSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    leave: leaveReducer,
  },
});

export default store;
