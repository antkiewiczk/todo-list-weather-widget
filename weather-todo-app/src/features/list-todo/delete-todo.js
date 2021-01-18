import { deleteOne } from "./list-todo-slice.js";

export default function deleteTodo(uuid, store) {
  fetch(`/api/todo/delete/${uuid}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((result) => {
      store.dispatch(deleteOne(result.data));
    });
}
