import React from "react";
import logo from "./logo.svg";
import { useSelector } from "react-redux";
import ServiceAvailbility from "./features/service-availability/ServiceAvailability.js";
import "./App.scss";

// components
import TodoList from "./features/list-todo/TodoList";
import TodoModal from "./features/todo-modal/TodoModal";
import WeatherWidget from "./features/weather-widget/WeatherWidget";
import { selectError } from "./features/error/error-slice";

function App() {
  const isError = useSelector(selectError);
  console.log("isError", isError);
  return (
    <div className="App">
      {!isError ? (
        <>
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
        </>
      ) : (
        <div className="error">
          An unexpected server error occured! Please reload the page.
        </div>
      )}
    </div>
  );
}

export default App;
