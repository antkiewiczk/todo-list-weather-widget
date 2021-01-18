import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "./list-todo-slice.js";
import TodoItem from "./TodoItem.js";
import store from "../../app/store";

import { toggleModal } from "../todo-modal/todo-modal-slice.js";

async function handleDisplayModal() {
  store.dispatch(toggleModal({ type: "add" }));
}

export default function TodoList() {
  const todoList = useSelector(selectTodos);
  return (
    <div>
      <h2>My todo list</h2>
      <button onClick={handleDisplayModal}>+ Add new item</button>
      {todoList.map((todo) => (
        <TodoItem key={todo.uuid} todoItem={todo} />
      ))}
    </div>
  );
}
