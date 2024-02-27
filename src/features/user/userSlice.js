// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      // Check if action.payload is not null before accessing its properties
      if (action.payload) {
        return {
          uid: action.payload.uid,
          email: action.payload.email,
        };
      } else {
        // If action.payload is null, return null to indicate no user is logged in
        return null;
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
