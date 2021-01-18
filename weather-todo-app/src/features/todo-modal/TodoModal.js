import React, { useEffect, useState } from "react";
import store from "../../app/store";
import { useSelector } from "react-redux";
import { selectModal } from "./todo-modal-slice.js";

import styles from "./TodoModal.module.scss";

import { toggleModal } from "../todo-modal/todo-modal-slice.js";

import addTodo from "../list-todo/add-todo.js";
import editTodo from "../list-todo/edit-todo.js";

const closeModal = () => {
  store.dispatch(toggleModal({ title: "", description: "", priority: 1 }));
};

const handleSubmit = (
  e,
  setValidationError,
  { type, id, title, description, priority }
) => {
  e.preventDefault();

  if (!title || priority <= 0 || priority > 100) {
    setValidationError(true);
    return;
  }

  if (type === "add") {
    addTodo({ title, description, priority });
  } else {
    editTodo({ id, title, description, priority });
  }
};

export default function TodoModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  const [isValidationError, setValidationError] = useState(false);

  const todoModal = useSelector(selectModal);

  useEffect(() => {
    setTitle(todoModal.title || "");
    setDescription(todoModal.description || "");
    setPriority(todoModal.priority || 1);
    setValidationError(false);
  }, [todoModal.visible]);

  useEffect(() => {
    if (!title || priority <= 0 || priority > 100) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
  }, [title, priority]);

  if (!todoModal.visible) {
    return <></>;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <h2>
          {todoModal.type === "add" ? "Add a new todo" : "Edit your todo"}
        </h2>
        <form>
          <div className={styles.inputWrapper}>
            <span className={styles.inputName}>Title:</span>{" "}
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.inputName}>Description:</span>{" "}
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.inputName}>Priority:</span>{" "}
            <input
              type="number"
              name="priority"
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
              min={0}
              max={100}
            />
          </div>
          <button
            type="submit"
            className={styles.submit}
            onClick={(e) =>
              handleSubmit(e, setValidationError, {
                type: todoModal.type,
                id: todoModal.id,
                title,
                description,
                priority,
              })
            }
          >
            {todoModal.type === "add" ? "Create" : "Edit"}
          </button>
        </form>

        {!!isValidationError && (
          <div className={styles.error}>
            Please make sure that title is not empty and priority is either
            bigger than 0 or less or equal 100
          </div>
        )}
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}
