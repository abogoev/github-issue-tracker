import React from "react";
import * as RN from "react-native";
import CustomBox from "./CustomBox";
import { create } from "react-test-renderer";

describe("CustomBox", () => {
  it("should render correctly", () => {
    const randomText = "Hello";
    const component = create(
      <CustomBox>
        <RN.Text>{randomText}</RN.Text>
      </CustomBox>
    );

    expect(component.root.findByType(RN.Text).props.children).toBe(randomText);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
