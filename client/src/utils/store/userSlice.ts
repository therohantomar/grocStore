import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
