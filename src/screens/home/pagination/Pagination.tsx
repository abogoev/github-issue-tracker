import { StyleSheet, View, ViewProps } from "react-native";
import React, { VFC } from "react";
import PageItem from "./pagenumber/PageItem";

interface Props extends ViewProps {
  numbers: number[];
  activeNumber: number;
  onNext: () => void;
  onPrev: () => void;
  onChangeActiveNumber: (n: number) => void;
}

const Pagination: VFC<Props> = ({
  numbers,
  activeNumber,
  style,
  onNext,
  onPrev,
  onChangeActiveNumber,
  ...props
}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <PageItem text="Prev" onPress={onPrev} />
      {numbers.map((n, i) => (
        <PageItem
          key={i}
          text={n.toString()}
          isActive={n === activeNumber}
          onPress={() => onChangeActiveNumber(n)}
        />
      ))}
      <PageItem text="Next" onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Pagination;
