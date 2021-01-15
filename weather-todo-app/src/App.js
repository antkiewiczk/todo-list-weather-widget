import React from "react";
import logo from "./logo.svg";
import ServiceAvailbility from "./features/service-availability/ServiceAvailability.js";
import "./App.css";

// functions
import addTodo from "./features/add-todo/add-todo.js";

async function handleAddTodo() {
  addTodo();
}

function App(props) {
  console.log("props", props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ServiceAvailbility />
      </header>
      <div className="App-content">
        <button onClick={handleAddTodo}>yo</button>
      </div>
    </div>
  );
}

export default App;
