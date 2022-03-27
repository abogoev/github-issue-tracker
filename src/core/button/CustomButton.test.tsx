import React from "react";
import CustomButton from "./CustomButton";
import { create } from "react-test-renderer";

describe("OpenClosedBadge", () => {
  it("should render correctly", () => {
    const component = create(<CustomButton title="Hello" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("onPress should be called", () => {
    const mockOnPress = jest.fn();
    const component = create(
      <CustomButton title="Test" onPress={mockOnPress} />
    );
    expect(mockOnPress).not.toBeCalled();

    component.root.props.onPress();
    expect(mockOnPress).toBeCalledTimes(1);
  });
});
