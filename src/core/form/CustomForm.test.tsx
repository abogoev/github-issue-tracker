import React from "react";
import CustomForm from "./CustomForm";
import { create } from "react-test-renderer";
import { Text } from "react-native";

describe("OpenClosedBadge", () => {
  it("should render correctly", () => {
    const randomText = "Hello";
    const component = create(
      <CustomForm>
        <Text>{randomText}</Text>
      </CustomForm>
    );

    component.root.findByType(Text).props.children.toBe(randomText);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
