import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./App.js";

test("renders header and content", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(queryByTestId("header")).toBeInTheDocument();
  expect(queryByTestId("content")).toBeInTheDocument();
});
