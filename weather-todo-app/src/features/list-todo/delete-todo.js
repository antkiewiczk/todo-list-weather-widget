import { deleteOne } from "./list-todo-slice.js";
import { showError } from "../error/error-slice.js";

export default function deleteTodo(uuid, store) {
  fetch(`/api/todo/delete/${uuid}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((e) => new Error(e, "Server error"))
    .then((result) => {
      if (result.code === 200) {
        store.dispatch(deleteOne(result.data));
      } else {
        store.dispatch(showError());
      }
    });
}
