import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "./list-todo-slice.js";
import TodoItem from "./TodoItem.js";
import store from "../../app/store";

import styles from "./TodoList.module.scss";

import { toggleModal } from "../todo-modal/todo-modal-slice.js";

async function handleDisplayModal() {
  store.dispatch(toggleModal({ type: "add" }));
}

export default function TodoList() {
  const [searchString, setSearchString] = useState("");
  const [sortValue, setSortValue] = useState("");
  let todoList = useSelector(selectTodos);

  // search functionality
  if (searchString.length) {
    console.log("searchString", searchString);
    todoList = todoList.filter(
      (el) =>
        el.title.includes(searchString) ||
        (el.description && el.description.includes(searchString))
    );
  }

  // sort functionality
  if (sortValue.length) {
    if (sortValue === "dateDesc") {
      todoList = [...todoList].sort((a, b) =>
        new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
      );
    }

    if (sortValue === "dateAsc") {
      todoList = [...todoList].sort((a, b) =>
        new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
      );
    }

    if (sortValue === "priorityDesc") {
      todoList = [...todoList].sort((a, b) =>
        a.priority < b.priority ? 1 : -1
      );
    }

    if (sortValue === "priorityAsc") {
      todoList = [...todoList].sort((a, b) =>
        a.priority > b.priority ? 1 : -1
      );
    }
  }

  return (
    <div className={styles.listWrapper}>
      <h2>My todo list</h2>
      <div className={styles.listHeader}>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="search.."
        />
        <div>
          <label htmlFor="sort">Sort by:</label>{" "}
          <select
            id="sort"
            name="sort"
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="dateAsc">Date ascending</option>
            <option value="dateDesc">Date descending</option>
            <option value="priorityAsc">Priority ascending</option>
            <option value="priorityDesc">Priority descending</option>
          </select>
          <button onClick={handleDisplayModal} className={styles.addTodoButton}>
            + Add new item
          </button>
        </div>
      </div>

      {todoList.map((todo) => (
        <TodoItem key={todo.uuid} todoItem={todo} />
      ))}

      {!todoList.length && (
        <div className={styles.emptyMessage}>
          <span>
            Your list is empty. <br />
            <br />
            Please add a new todo idem by clicking the button above.
          </span>
        </div>
      )}
    </div>
  );
}
