import { editOne } from "../list-todo/list-todo-slice.js";
import { toggleModal } from "../todo-modal/todo-modal-slice.js";
import { showError } from "../error/error-slice.js";

import store from "../../app/store";

export default function editTodo(data) {
  try {
    fetch("/api/todo/edit", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.code === 200) {
          store.dispatch(editOne(result.data));
        } else {
          store.dispatch(showError());
        }
      })
      .then(() =>
        store.dispatch(toggleModal({ description: "", title: "", priority: 1 }))
      );
  } catch (e) {
    throw new Error(e, 'Server error');
  }
}
