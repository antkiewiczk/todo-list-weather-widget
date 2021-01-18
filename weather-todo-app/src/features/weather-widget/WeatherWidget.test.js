import React from "react";
import { render } from "@testing-library/react";

import WeatherWidget from "./WeatherWidget";

describe("should render <WeatherWidget />", () => {
  it("renders widget", () => {
    const { queryByTestId } = render(<WeatherWidget />);
    expect(queryByTestId("weatherWidget")).not.toEqual(null);
  });
});
