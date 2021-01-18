import { createSlice } from "@reduxjs/toolkit";

export const todoModalSlice = createSlice({
  name: "displayModal",
  initialState: {
    visible: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      console.log("action.payload", action.payload);
      return { ...state, ...action.payload, visible: !state.visible };
    },
  },
});

export const { toggleModal } = todoModalSlice.actions;

export const selectModal = (state) => state.todoModal;

export default todoModalSlice.reducer;
