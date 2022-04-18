import { StyleSheet, View, ViewProps } from "react-native";
import React, { VFC } from "react";
import PageItem from "./pagenumber/PageItem";

interface Props extends ViewProps {
  numbers: number[];
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onChangeActiveNumber: (i: number) => void;
}

const Pagination: VFC<Props> = ({
  numbers,
  activeIndex,
  style,
  onNext,
  onPrev,
  onChangeActiveNumber: onChangeActiveIndex,
  ...props
}) => {
  return numbers.length > 0 ? (
    <View style={[styles.container, style]} {...props}>
      {numbers[0] !== 1 && <PageItem text="Prev" onPress={onPrev} />}
      {numbers.map((n, i) => (
        <PageItem
          key={i}
          text={n.toString()}
          isActive={i === activeIndex}
          onPress={() => onChangeActiveIndex(i)}
        />
      ))}
      <PageItem text="Next" onPress={onNext} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Pagination;
