import { editOne } from "../list-todo/list-todo-slice.js";

import { toggleModal } from "../todo-modal/todo-modal-slice.js";

import store from "../../app/store";

export default function editTodo(data) {
  fetch("/api/todo/edit", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => store.dispatch(editOne(result.data)))
    .then(() =>
      store.dispatch(toggleModal({ description: "", title: "", priority: 1 }))
    );
}
