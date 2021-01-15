import { createSlice } from "@reduxjs/toolkit";

export const listTodoSlice = createSlice({
  name: "listTodo",
  initialState: {
    todos: [],
  },
  reducers: {
    update: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { update } = listTodoSlice.actions;

export const selectTodos = (state) => state.listTodo.todos;

export default listTodoSlice.reducer;
