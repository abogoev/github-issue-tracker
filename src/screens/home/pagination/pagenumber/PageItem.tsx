import React, { VFC } from "react";
import { StyleSheet, Text, TouchableOpacityProps } from "react-native";
import theme from "../../../../theme/theme";
import CustomTouchableOpacity from "../../../../core/touchableopacity/CustomTouchableOpacity";

export interface Props extends TouchableOpacityProps {
  text: string;
  isActive?: boolean;
}

const PageItem: VFC<Props> = ({ text, isActive, style, ...props }) => {
  return (
    <CustomTouchableOpacity
      accessibilityRole="button"
      style={[styles(isActive).container, style]}
      {...props}
    >
      <Text style={styles(isActive).text}>{text}</Text>
    </CustomTouchableOpacity>
  );
};

const styles = (isActive?: boolean) =>
  StyleSheet.create({
    container: {
      alignSelf: "flex-start",
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: theme.borderRadius,
      backgroundColor: isActive
        ? theme.palette.blue
        : theme.palette.transparent,
      borderColor: isActive ? theme.palette.transparent : theme.palette.neutral,
      borderWidth: 1,
    },
    text: {
      ...theme.typography.regularTextBold,
      color: isActive ? theme.palette.white : theme.palette.veryDarkGrey,
    },
  });

export default PageItem;
