import React from "react";
import PageItem, { Props } from "./PageItem";
import { create } from "react-test-renderer";

describe("PageItem", () => {
  it("should render correctly", () => {
    const props: Props = { text: "1" };
    let component = create(<PageItem {...props} />);

    expect(component.toJSON()).toMatchSnapshot("when page is not active");

    props.isActive = true;
    component = create(<PageItem {...props} />);

    expect(component.toJSON()).toMatchSnapshot("when page is active");
  });
});
