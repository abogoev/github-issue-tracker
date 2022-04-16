import React from "react";
import CustomTextInput from "./CustomTextInput";
import { create, act } from "react-test-renderer";
import { TextInput } from "react-native";

describe("CustomTextInput", () => {
  const label = "Owner";

  it("should render correctly", () => {
    const component = create(<CustomTextInput label={label} />);

    expect(component.toJSON()).toMatchSnapshot("without focus");

    act(() => {
      component.root.findByType(TextInput).props.onFocus();
    });

    expect(component.toJSON()).toMatchSnapshot("with focus");
  });

  it("should write input correctly", () => {
    const onChangeTextMock = jest.fn();
    const component = create(
      <CustomTextInput
        label={label}
        textInputProps={{ onChangeText: onChangeTextMock }}
      />
    );

    const input = "asd";
    component.root.findByType(TextInput).props.onChangeText(input);
    expect(onChangeTextMock).toBeCalledWith(input);
  });

  it("should call onBlur correctly", () => {
    const onBlurMock = jest.fn();
    const component = create(
      <CustomTextInput label={label} textInputProps={{ onBlur: onBlurMock }} />
    );

    expect(onBlurMock).not.toHaveBeenCalled();
    component.root.findByType(TextInput).props.onBlur();
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });
});
