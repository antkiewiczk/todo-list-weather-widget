import React from "react";

import styles from "./TodoList.module.scss";
import store from "../../app/store";

import deleteTodo from "./delete-todo.js";
import { toggleModal } from "../todo-modal/todo-modal-slice.js";

const editTodo = (item) => {
  store.dispatch(
    toggleModal({
      type: "edit",
      id: item.uuid,
      description: item.description,
      title: item.title,
      priority: item.priority,
    })
  );
};

const handleDelete = (uuid) => {
  deleteTodo(uuid, store);
};

export default function TodoItem(props) {
  const { todoItem } = props;
  return (
    <div key={todoItem.uuid} className={styles.todoItem}>
      <p className={styles.title}>{todoItem.title}</p>
      <p className={styles.description}>{todoItem.description}</p>
      <button onClick={() => editTodo(todoItem)} className={styles.editButton}>
        EDIT
      </button>
      <button
        onClick={() => handleDelete(todoItem.uuid)}
        className={styles.deleteButton}
      >
        X
      </button>
    </div>
  );
}
