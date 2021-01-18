import { update } from "./list-todo-slice.js";

export default function getInitialTodos(store) {
  fetch("/api/todo/list")
    .then((res) => res.json())
    .then((result) => {
      store.dispatch(update(result.data));
    });
}
