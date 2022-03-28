import React from "react";
import CustomBox from "./CustomBox";
import { create } from "react-test-renderer";
import { Text } from "react-native";

describe("CustomBox", () => {
  it("should render correctly", () => {
    const randomText = "Hello";
    const component = create(
      <CustomBox>
        <Text>{randomText}</Text>
      </CustomBox>
    );

    component.root.findByType(Text).props.children.toBe(randomText);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
