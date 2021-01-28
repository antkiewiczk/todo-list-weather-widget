import { update } from "./list-todo-slice.js";
import { showError } from "../error/error-slice.js";

export default function getInitialTodos(store) {
  fetch("/api/todo/list")
    .then((res) => res.json())
    .catch((e) => new Error(e, "Server error"))
    .then((result) => {
      if (result.code === 200) {
        store.dispatch(update(result.data));
      } else {
        store.dispatch(showError());
      }
    });
}
