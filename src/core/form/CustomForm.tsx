import React, { FC } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import theme from "../../theme/theme";

const CustomForm: FC<ViewProps> = ({ style, ...props }) => {
  return <View style={[styles.container, style]} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.palette.lightGrey,
    borderRadius: theme.borderRadius,
    borderColor: theme.palette.grey,
    borderWidth: 1,
  },
});

export default CustomForm;
