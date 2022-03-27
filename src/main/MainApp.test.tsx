import React from "react";
import MainApp from "./MainApp";
import { create } from "react-test-renderer";
import Router from "../router/Router";

describe("MainApp", () => {
  it("should render correctly", () => {
    const component = create(<MainApp />);
    component.root.findByType(Router);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
