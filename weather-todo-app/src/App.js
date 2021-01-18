import React from "react";
import logo from "./logo.svg";
import ServiceAvailbility from "./features/service-availability/ServiceAvailability.js";
import "./App.scss";

// components
import TodoList from "./features/list-todo/TodoList";
import TodoModal from "./features/todo-modal/TodoModal";
import WeatherWidget from "./features/weather-widget/WeatherWidget";

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        <img src={logo} className="App-logo" alt="logo" />
        <ServiceAvailbility />
      </header>
      <div className="App-content" data-testid="content">
        <div className="weather-wrapper">
          <WeatherWidget />
        </div>
        <div className="todo-wrapper">
          <TodoList />
        </div>
      </div>
      <TodoModal />
    </div>
  );
}

export default App;
