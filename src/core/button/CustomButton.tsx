import React, { VFC } from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../theme/theme";
import CustomTouchableOpacity, {
  CustomTouchableOpacityProps,
} from "../touchableopacity/CustomTouchableOpacity";

interface Props extends Omit<CustomTouchableOpacityProps, "children"> {
  title: string;
}

const CustomButton: VFC<Props> = ({ style, title, ...props }) => {
  return (
    <CustomTouchableOpacity style={[styles.container, style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </CustomTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: theme.palette.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.borderRadius,
  },
  text: {
    ...theme.typography.regularTextBold,
    color: theme.palette.white,
  },
});

export default CustomButton;
