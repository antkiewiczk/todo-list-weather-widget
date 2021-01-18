import { update } from "./list-todo-slice.js";
import { showError } from "../error/error-slice.js";

export default function getInitialTodos(store) {
  try {
    fetch("/api/todo/list")
      .then((res) => res.json())
      .then((result) => {
        if (result.code === 200) {
          store.dispatch(update(result.data));
        } else {
          store.dispatch(showError());
        }
      });
  } catch (e) {
    throw new Error(e, "Server error");
  }
}
