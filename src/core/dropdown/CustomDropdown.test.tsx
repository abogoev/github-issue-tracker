import React from "react";
import CustomDropdown from "./CustomDropdown";
import { create } from "react-test-renderer";
import SelectDropdown from "react-native-select-dropdown";

describe("CustomDropdown", () => {
  it("should select correctly", () => {
    const data = ["one", "two"];
    const onSelectMock = jest.fn();
    const index = 1;
    const component = create(
      <CustomDropdown
        data={data}
        onSelect={onSelectMock}
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
      />
    );

    const selectComponent = component.root.findByType(SelectDropdown);
    component.root
      .findByType(SelectDropdown)
      .props.onSelect(selectComponent.props.data[index], index);

    expect(onSelectMock).toBeCalledTimes(1);
    expect(onSelectMock).toBeCalledWith(data[index], index);
  });
});
