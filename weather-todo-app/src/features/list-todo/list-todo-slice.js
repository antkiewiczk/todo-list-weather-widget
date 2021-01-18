import { createSlice } from "@reduxjs/toolkit";

export const listTodoSlice = createSlice({
  name: "listTodo",
  initialState: {
    todos: [],
  },
  reducers: {
    update: (state, action) => {
      state.todos = action.payload;
    },
    deleteOne: (state, action) => {
      console.log("action.payload", action.payload);
      state.todos = state.todos.filter((todo) => todo.uuid !== action.payload);
    },
    addOne: (state, action) => {
      console.log("action.payload", action.payload);
      state.todos.push(action.payload);
    },
    editOne: (state, action) => {
      console.log("action.payload", action.payload);

      const updated = state.todos.map((item) => {
        if (item.uuid !== action.payload.uuid) {
          return item;
        }
        return {
          ...item,
          ...action.payload,
        };
      });

      state.todos = updated;
    },
  },
});

export const { update, deleteOne, addOne, editOne } = listTodoSlice.actions;

export const selectTodos = (state) => state.listTodo.todos;

export default listTodoSlice.reducer;
