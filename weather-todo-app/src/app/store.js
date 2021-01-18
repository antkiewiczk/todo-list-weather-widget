import { configureStore } from "@reduxjs/toolkit";
import serviceAvailabilityReducer from "../features/service-availability/service-availability-slice.js";
import listTodosReducer from "../features/list-todo/list-todo-slice.js";
import todoModalReducer from "../features/todo-modal/todo-modal-slice.js";
import errorReducer from "../features/error/error-slice.js";

export default configureStore({
  reducer: {
    serviceAvailability: serviceAvailabilityReducer,
    listTodo: listTodosReducer,
    todoModal: todoModalReducer,
    error: errorReducer,
  },
});
