import React from "react";
import Router from "./Router";
import { create } from "react-test-renderer";

describe("App", () => {
  it("should render correctly", () => {
    const component = create(<Router />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
