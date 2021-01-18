import { addOne } from "./list-todo-slice.js";

import { toggleModal } from "../todo-modal/todo-modal-slice.js";

import store from "../../app/store";

export default function addTodo(data) {
  fetch("/api/todo/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => store.dispatch(addOne(result.data)))
    .then(() =>
      store.dispatch(toggleModal({ description: "", title: "", priority: 1 }))
    );
}
