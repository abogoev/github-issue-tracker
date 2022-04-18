import React from "react";
import "react-native";
import Pagination from "./Pagination";
import { create } from "react-test-renderer";

describe("Pagination", () => {
  it("should render correctly", () => {
    const mockFunction = jest.fn();
    let numbers = [4, 5, 6];

    let component = create(
      <Pagination
        numbers={numbers}
        activeIndex={0}
        onPrev={mockFunction}
        onNext={mockFunction}
        onChangeActiveNumber={mockFunction}
      />
    );

    expect(component.root.findByProps({ isActive: true }).props.text).toBe(
      numbers[0].toString()
    );

    expect(component.toJSON()).toMatchSnapshot("with prev");

    numbers = [1, 2, 3];

    component = create(
      <Pagination
        numbers={numbers}
        activeIndex={0}
        onPrev={mockFunction}
        onNext={mockFunction}
        onChangeActiveNumber={mockFunction}
      />
    );

    expect(component.toJSON()).toMatchSnapshot("without prev");
  });

  it("should call the callbacks correctly", () => {
    const onPrevMock = jest.fn();
    const onNextMock = jest.fn();
    const onChangeActiveNumberMock = jest.fn();
    const numbers = [4, 5, 6];

    const component = create(
      <Pagination
        numbers={numbers}
        activeIndex={0}
        onPrev={onPrevMock}
        onNext={onNextMock}
        onChangeActiveNumber={onChangeActiveNumberMock}
      />
    );

    expect(onPrevMock).not.toHaveBeenCalled();
    expect(onNextMock).not.toHaveBeenCalled();
    expect(onChangeActiveNumberMock).not.toHaveBeenCalled();

    component.root.findByProps({ text: "Prev" }).props.onPress();

    expect(onPrevMock).toHaveBeenCalledTimes(1);

    component.root.findByProps({ text: "Next" }).props.onPress();

    expect(onNextMock).toHaveBeenCalledTimes(1);

    const index = 2;
    component.root
      .findByProps({ text: numbers[index].toString() })
      .props.onPress();

    expect(onChangeActiveNumberMock).toHaveBeenCalledWith(index);
  });
});
