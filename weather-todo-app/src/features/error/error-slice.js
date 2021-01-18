import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    error: false,
  },
  reducers: {
    showError: (state) => {
      state.error = true;
    },
  },
});

export const { showError } = errorSlice.actions;

export const selectError = (state) => state.error.error;

export default errorSlice.reducer;
