import React from "react";
import App from "./App";
import { create } from "react-test-renderer";

describe("App", () => {
  it("should render correctly", () => {
    const component = create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
