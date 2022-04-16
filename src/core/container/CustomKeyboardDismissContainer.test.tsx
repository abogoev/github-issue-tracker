import React from "react";
import * as RN from "react-native";
import CustomKeyboardDismissContainer from "./CustomKeyboardDismissContainer";
import { create } from "react-test-renderer";

describe("CustomBox", () => {
  it("should render correctly", () => {
    const randomText = "Hello";
    const component = create(
      <CustomKeyboardDismissContainer>
        <RN.Text>{randomText}</RN.Text>
      </CustomKeyboardDismissContainer>
    );

    expect(component.root.findByType(RN.Text).props.children).toBe(randomText);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
