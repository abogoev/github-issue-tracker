import React from "react";
import "react-native";
import CustomForm from "./CustomForm";
import { act, create, ReactTestRenderer } from "react-test-renderer";
import CustomTextInput from "../../../core/textinput/CustomTextInput";
import CustomDropdown from "../../../core/dropdown/CustomDropdown";
import CustomButton from "../../../core/button/CustomButton";

describe("CustomForm", () => {
  it("should render correctly", async () => {
    const onSubmitMock = jest.fn();

    let component: ReactTestRenderer | undefined;
    await act(async () => {
      component = await create(<CustomForm onSubmit={onSubmitMock} />);
    });

    console.log(component?.root.props);

    await act(async () => {
      await component?.root
        .findAllByType(CustomTextInput)[0]
        .props.textInputProps.onChangeText("hello");
      await component?.root
        .findAllByType(CustomTextInput)[1]
        .props.textInputProps.onChangeText("world");
      await component?.root.findByType(CustomDropdown).props.onSelect("all");
      await component?.root.findByType(CustomButton).props.onPress();
    });

    expect(onSubmitMock).toHaveBeenCalledWith({
      owner: "hello",
      repo: "world",
      state: "all",
    });
  });
});
