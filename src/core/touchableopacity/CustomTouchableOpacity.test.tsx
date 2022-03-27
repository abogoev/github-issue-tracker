import React from "react";
import CustomTouchableOpacity from "./CustomTouchableOpacity";
import { create } from "react-test-renderer";
import { Text, TouchableOpacity } from "react-native";
import { ACTIVE_OPACITY } from "../../utils/constants";

describe("CustomTouchableOpacity", () => {
  it("should render correctly", () => {
    const randomText = "Hello";
    const component = create(
      <CustomTouchableOpacity>
        <Text>{randomText}</Text>
      </CustomTouchableOpacity>
    );
    expect(
      component.root.findByType(TouchableOpacity).props.activeOpacity
    ).toBe(ACTIVE_OPACITY);
    expect(component.root.findByType(Text).props.children).toBe(randomText);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
