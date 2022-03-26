import React from "react";
import CustomTouchableOpacity from "./CustomTouchableOpacity";
import { create } from "react-test-renderer";
import { TouchableOpacity } from "react-native";
import { ACTIVE_OPACITY } from "../../utils/constants";

describe("CustomTouchableOpacity", () => {
  it("should render correctly", () => {
    const component = create(<CustomTouchableOpacity />);
    expect(
      component.root.findByType(TouchableOpacity).props.activeOpacity
    ).toBe(ACTIVE_OPACITY);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
