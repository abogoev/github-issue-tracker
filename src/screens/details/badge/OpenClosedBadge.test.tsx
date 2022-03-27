import React from "react";
import OpenClosedBadge from "./OpenClosedBadge";
import { create } from "react-test-renderer";

describe("OpenClosedBadge", () => {
  it("should render correctly", () => {
    let component = create(<OpenClosedBadge />);
    expect(component.toJSON()).toMatchSnapshot("for an Open issue");
    component = create(<OpenClosedBadge isClosed />);
    expect(component.toJSON()).toMatchSnapshot("for a Closed issue");
  });
});
